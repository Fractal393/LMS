"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRefCallbackWithErrorHandling = exports.useClickListener = exports.useInstanceVariable = exports.useStaticValue = exports.useDebounce = void 0;
var react_1 = require("react");
var logger_1 = require("./logger");
exports.useDebounce = function (value, delay) {
    var _a = react_1.useState(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    react_1.useEffect(function () {
        var handler = setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return [debouncedValue, setDebouncedValue];
};
var UNINITIALIZED_SENTINEL = {};
exports.useStaticValue = function (factory) {
    var valueRef = react_1.useRef(UNINITIALIZED_SENTINEL);
    if (valueRef.current === UNINITIALIZED_SENTINEL)
        valueRef.current = factory();
    return valueRef.current;
};
exports.useInstanceVariable = function (value) {
    var ref = react_1.useRef(value);
    react_1.useEffect(function () {
        ref.current = value;
    }, [ref, value]);
    return ref;
};
exports.useClickListener = function (params) {
    var onClick = params.onClick, onInsideClick = params.onInsideClick, onOutsideClick = params.onOutsideClick;
    var triggerComponentRef = react_1.useRef(null);
    var clickListener = react_1.useCallback(function (event) {
        var anyTarget = event.target;
        if (!triggerComponentRef.current ||
            triggerComponentRef.current.contains(anyTarget)) {
            // Click originated from inside.
            if (onInsideClick)
                onInsideClick(event);
        }
        else {
            // Click originated from outside inside.
            var targetIsAButton = anyTarget &&
                typeof anyTarget.tagName === 'string' &&
                anyTarget.tagName.toLowerCase() === 'button';
            if (onOutsideClick)
                onOutsideClick(event, targetIsAButton);
        }
        if (onClick)
            onClick(event);
    }, [onClick, onInsideClick, onOutsideClick, triggerComponentRef]);
    react_1.useEffect(function () {
        document.addEventListener('mousedown', clickListener, false);
        return function () {
            document.removeEventListener('mousedown', clickListener, false);
        };
    }, [clickListener]);
    return triggerComponentRef;
};
exports.useRefCallbackWithErrorHandling = function (callbackFunc, displayName) {
    var callbackFuncRef = exports.useInstanceVariable(callbackFunc);
    return react_1.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            callbackFuncRef.current.apply(callbackFuncRef, args);
        }
        catch (error) {
            logger_1.Logger.error("An error occurred inside " + displayName + ":", error);
        }
    }, [callbackFuncRef, displayName]);
};
//# sourceMappingURL=hooks-helpers.js.map
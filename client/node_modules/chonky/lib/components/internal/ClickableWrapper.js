"use strict";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickableWrapper = void 0;
var react_1 = __importDefault(require("react"));
var ClickableWrapper_hooks_1 = require("./ClickableWrapper-hooks");
exports.ClickableWrapper = function (props) {
    var children = props.children, WrapperTag = props.wrapperTag, passthroughProps = props.passthroughProps, onSingleClick = props.onSingleClick, onDoubleClick = props.onDoubleClick, onKeyboardClick = props.onKeyboardClick;
    var handleClick = ClickableWrapper_hooks_1.useClickHandler(onSingleClick, onDoubleClick);
    var handleKeyDown = ClickableWrapper_hooks_1.useKeyDownHandler(onKeyboardClick);
    var compProps = {};
    if (onSingleClick || onDoubleClick || onKeyboardClick) {
        compProps.onClick = handleClick;
        compProps.onKeyDown = handleKeyDown;
        compProps.tabIndex = 0;
    }
    var mergedProps = __assign(__assign({}, compProps), passthroughProps);
    return react_1.default.createElement(WrapperTag, __assign({}, mergedProps), children);
};
//# sourceMappingURL=ClickableWrapper.js.map
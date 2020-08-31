"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFileClickHandlers = void 0;
var react_1 = require("react");
var recoil_1 = require("recoil");
var special_actions_recoil_1 = require("../../recoil/special-actions.recoil");
var special_actions_types_1 = require("../../types/special-actions.types");
exports.useFileClickHandlers = function (file, displayIndex) {
    var dispatchSpecialAction = recoil_1.useRecoilValue(special_actions_recoil_1.dispatchSpecialActionState);
    // Prepare base handlers
    var onMouseClick = react_1.useCallback(function (event, clickType) {
        if (!file)
            return;
        dispatchSpecialAction({
            actionId: special_actions_types_1.SpecialAction.MouseClickFile,
            clickType: clickType,
            file: file,
            fileDisplayIndex: displayIndex,
            altKey: event.altKey,
            ctrlKey: event.ctrlKey,
            shiftKey: event.shiftKey,
        });
    }, [file, displayIndex, dispatchSpecialAction]);
    var onKeyboardClick = react_1.useCallback(function (event) {
        if (!file)
            return;
        dispatchSpecialAction({
            actionId: special_actions_types_1.SpecialAction.KeyboardClickFile,
            file: file,
            fileDisplayIndex: displayIndex,
            enterKey: event.enterKey,
            spaceKey: event.spaceKey,
            altKey: event.altKey,
            ctrlKey: event.ctrlKey,
            shiftKey: event.shiftKey,
        });
    }, [file, displayIndex, dispatchSpecialAction]);
    // Prepare single/double click handlers
    var onSingleClick = react_1.useCallback(function (event) { return onMouseClick(event, 'single'); }, [onMouseClick]);
    var onDoubleClick = react_1.useCallback(function (event) { return onMouseClick(event, 'double'); }, [onMouseClick]);
    return {
        onSingleClick: onSingleClick,
        onDoubleClick: onDoubleClick,
        onKeyboardClick: onKeyboardClick,
    };
};
//# sourceMappingURL=ClickableFileEntry-hooks.js.map
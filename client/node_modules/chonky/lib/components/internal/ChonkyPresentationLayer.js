"use strict";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChonkyPresentationLayer = void 0;
var react_1 = __importStar(require("react"));
var recoil_1 = require("recoil");
var drag_and_drop_recoil_1 = require("../../recoil/drag-and-drop.recoil");
var file_actions_recoil_1 = require("../../recoil/file-actions.recoil");
var selection_recoil_1 = require("../../recoil/selection.recoil");
var hooks_helpers_1 = require("../../util/hooks-helpers");
var DnDFileListDragLayer_1 = require("../file-entry/DnDFileListDragLayer");
var ErrorMessage_1 = require("./ErrorMessage");
var HotkeyListener_1 = require("./HotkeyListener");
exports.ChonkyPresentationLayer = function (props) {
    var validationErrors = props.validationErrors, children = props.children;
    var fileActions = recoil_1.useRecoilValue(file_actions_recoil_1.fileActionsState);
    var selectionModifiers = recoil_1.useRecoilValue(selection_recoil_1.selectionModifiersState);
    var enableDragAndDrop = recoil_1.useRecoilValue(drag_and_drop_recoil_1.enableDragAndDropState);
    // Deal with clicks outside of Chonky
    var chonkyRootRef = hooks_helpers_1.useClickListener({
        // We only clear out the selection on outside click if the click target was
        // not a button. We don't want to clear out the selection when a button is
        // clicked because Chonky users might want to trigger some
        // selection-related action on that button click.
        onOutsideClick: function (event, targetIsAButton) {
            return targetIsAButton ? null : selectionModifiers.clearSelection();
        },
    });
    // Generate necessary components
    var hotkeyListenerComponents = react_1.useMemo(function () {
        return fileActions.map(function (action) { return (react_1.default.createElement(HotkeyListener_1.HotkeyListener, { key: "file-action-listener-" + action.id, fileActionId: action.id })); });
    }, [fileActions]);
    var validationErrorComponents = react_1.useMemo(function () {
        return validationErrors.map(function (data, index) { return (react_1.default.createElement(ErrorMessage_1.ErrorMessage, { key: "error-message-" + index, message: data.message, bullets: data.bullets })); });
    }, [validationErrors]);
    return (react_1.default.createElement("div", { ref: chonkyRootRef, className: "chonky-root chonky-no-select" },
        enableDragAndDrop && react_1.default.createElement(DnDFileListDragLayer_1.DnDFileListDragLayer, null),
        hotkeyListenerComponents,
        validationErrorComponents,
        children ? children : null));
};
//# sourceMappingURL=ChonkyPresentationLayer.js.map
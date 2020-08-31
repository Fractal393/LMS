"use strict";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartDropdownButton = exports.DropdownButton = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var recoil_1 = require("recoil");
var file_actions_recoil_1 = require("../../recoil/file-actions.recoil");
var icons_types_1 = require("../../types/icons.types");
var file_actions_1 = require("../../util/file-actions");
var ChonkyIcon_1 = require("./ChonkyIcon");
exports.DropdownButton = react_1.default.memo(function (props) {
    var text = props.text, tooltip = props.tooltip, active = props.active, icon = props.icon, onClick = props.onClick, disabled = props.disabled;
    var className = classnames_1.default({
        'chonky-toolbar-dropdown-button': true,
        'chonky-active': !!active,
    });
    return (react_1.default.createElement("button", { type: "button", className: className, onClick: onClick, title: tooltip ? tooltip : text, disabled: !onClick || disabled },
        react_1.default.createElement("div", { className: "chonky-toolbar-dropdown-button-icon" },
            react_1.default.createElement(ChonkyIcon_1.ChonkyIconFA, { icon: icon ? icon : icons_types_1.ChonkyIconName.circle, fixedWidth: true })),
        react_1.default.createElement("div", { className: "chonky-toolbar-dropdown-button-text" }, text)));
});
exports.SmartDropdownButton = function (props) {
    var fileActionId = props.fileActionId;
    var action = recoil_1.useRecoilValue(file_actions_recoil_1.fileActionDataState(fileActionId));
    var triggerAction = file_actions_1.useFileActionTrigger(fileActionId);
    var _a = file_actions_1.useFileActionProps(fileActionId), icon = _a.icon, active = _a.active, disabled = _a.disabled;
    if (!action)
        return null;
    var button = action.toolbarButton;
    if (!button)
        return null;
    return (react_1.default.createElement(exports.DropdownButton, { text: button.name, tooltip: button.tooltip, icon: icon, onClick: triggerAction, active: active, disabled: disabled }));
};
//# sourceMappingURL=DropdownButton.js.map
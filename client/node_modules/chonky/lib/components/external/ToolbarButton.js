"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartToolbarButton = exports.ToolbarButton = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var recoil_1 = require("recoil");
var file_actions_recoil_1 = require("../../recoil/file-actions.recoil");
var icons_types_1 = require("../../types/icons.types");
var file_actions_1 = require("../../util/file-actions");
var ChonkyIcon_1 = require("./ChonkyIcon");
exports.ToolbarButton = react_1.default.memo(function (props) {
    var text = props.text, tooltip = props.tooltip, active = props.active, icon = props.icon, iconOnly = props.iconOnly, iconOnRight = props.iconOnRight, onClick = props.onClick, disabled = props.disabled;
    var iconComponent = icon || iconOnly ? (react_1.default.createElement("div", { className: "chonky-toolbar-button-icon" },
        react_1.default.createElement(ChonkyIcon_1.ChonkyIconFA, { icon: icon ? icon : icons_types_1.ChonkyIconName.fallbackIcon, fixedWidth: true }))) : null;
    var className = classnames_1.default({
        'chonky-toolbar-button': true,
        'chonky-active': !!active,
    });
    return (react_1.default.createElement("button", { type: "button", className: className, onClick: onClick, title: tooltip ? tooltip : text, disabled: !onClick || disabled },
        !iconOnRight && iconComponent,
        text && !iconOnly && (react_1.default.createElement("div", { className: "chonky-toolbar-button-text" }, text)),
        iconOnRight && iconComponent));
});
exports.SmartToolbarButton = react_1.default.memo(function (props) {
    var fileActionId = props.fileActionId;
    var action = recoil_1.useRecoilValue(file_actions_recoil_1.fileActionDataState(fileActionId));
    var triggerAction = file_actions_1.useFileActionTrigger(fileActionId);
    var _a = file_actions_1.useFileActionProps(fileActionId), icon = _a.icon, active = _a.active, disabled = _a.disabled;
    if (!action)
        return null;
    var button = action.toolbarButton;
    if (!button)
        return null;
    return (react_1.default.createElement(exports.ToolbarButton, { text: button.name, tooltip: button.tooltip, icon: icon, iconOnly: button.iconOnly, active: active, onClick: triggerAction, disabled: disabled }));
});
//# sourceMappingURL=ToolbarButton.js.map
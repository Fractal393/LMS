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
exports.Dropdown = void 0;
var react_1 = __importStar(require("react"));
var icons_types_1 = require("../../types/icons.types");
var hooks_helpers_1 = require("../../util/hooks-helpers");
var DropdownButton_1 = require("./DropdownButton");
var ToolbarButton_1 = require("./ToolbarButton");
exports.Dropdown = react_1.default.memo(function (props) {
    var group = props.group;
    var _a = react_1.useState(false), showDropdown = _a[0], setShowDropdown = _a[1];
    var hideDropdown = react_1.useCallback(function () { return setShowDropdown(false); }, [setShowDropdown]);
    var dropdownRef = hooks_helpers_1.useClickListener({
        onOutsideClick: hideDropdown,
    });
    var triggerClick = react_1.useCallback(function () {
        setShowDropdown(true);
    }, [setShowDropdown]);
    return (react_1.default.createElement("div", { ref: dropdownRef, className: "chonky-toolbar-dropdown" },
        react_1.default.createElement(ToolbarButton_1.ToolbarButton, { text: group.name, active: showDropdown, icon: icons_types_1.ChonkyIconName.dropdown, iconOnRight: true, onClick: triggerClick }),
        showDropdown && (react_1.default.createElement("div", { className: "chonky-toolbar-dropdown-content" }, group.fileActionIds.map(function (actionId) { return (react_1.default.createElement(DropdownButton_1.SmartDropdownButton, { key: "action-button-" + actionId, fileActionId: actionId })); })))));
});
//# sourceMappingURL=Dropdown.js.map
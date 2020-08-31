"use strict";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2019
 * @license MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolbarButtonGroup = void 0;
var react_1 = __importDefault(require("react"));
var Dropdown_1 = require("./Dropdown");
var ToolbarButton_1 = require("./ToolbarButton");
exports.ToolbarButtonGroup = react_1.default.memo(function (props) {
    var group = props.group;
    var groupContents;
    if (group.dropdown) {
        groupContents = react_1.default.createElement(Dropdown_1.Dropdown, { group: group });
    }
    else {
        groupContents = group.fileActionIds.map(function (actionId) { return (react_1.default.createElement(ToolbarButton_1.SmartToolbarButton, { key: "action-button-" + actionId, fileActionId: actionId })); });
    }
    return react_1.default.createElement("div", { className: "chonky-toolbar-button-group" }, groupContents);
});
//# sourceMappingURL=ToolbarButtonGroup.js.map
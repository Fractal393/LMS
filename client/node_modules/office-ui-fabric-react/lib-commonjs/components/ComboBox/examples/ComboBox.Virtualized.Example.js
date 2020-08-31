"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var comboBoxOption = Array.from({ length: 1000 }).map(function (x, i) { return ({
    key: "" + i,
    text: "Option " + i,
}); });
var comboBoxStyles = { root: { maxWidth: '300px' } };
exports.ComboBoxVirtualizedExample = function () { return (React.createElement(office_ui_fabric_react_1.Fabric, { className: "ms-ComboBoxExample" },
    React.createElement(office_ui_fabric_react_1.VirtualizedComboBox, { styles: comboBoxStyles, defaultSelectedKey: "547", label: "Scaled/virtualized example with 1000 items", allowFreeform: true, autoComplete: "on", options: comboBoxOption, dropdownMaxWidth: 200, useComboBoxAsMenuWidth: true }))); };
//# sourceMappingURL=ComboBox.Virtualized.Example.js.map
import * as React from 'react';
import { VirtualizedComboBox, Fabric } from 'office-ui-fabric-react';
var comboBoxOption = Array.from({ length: 1000 }).map(function (x, i) { return ({
    key: "" + i,
    text: "Option " + i,
}); });
var comboBoxStyles = { root: { maxWidth: '300px' } };
export var ComboBoxVirtualizedExample = function () { return (React.createElement(Fabric, { className: "ms-ComboBoxExample" },
    React.createElement(VirtualizedComboBox, { styles: comboBoxStyles, defaultSelectedKey: "547", label: "Scaled/virtualized example with 1000 items", allowFreeform: true, autoComplete: "on", options: comboBoxOption, dropdownMaxWidth: 200, useComboBoxAsMenuWidth: true }))); };
//# sourceMappingURL=ComboBox.Virtualized.Example.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var index_1 = require("office-ui-fabric-react/lib-commonjs/index");
var comboBoxBasicOptions = [
    { key: 'Header1', text: 'First heading', itemType: index_1.SelectableOptionMenuItemType.Header },
    { key: 'A', text: 'Option A' },
    { key: 'B', text: 'Option B' },
    { key: 'C', text: 'Option C' },
    { key: 'D', text: 'Option D' },
    { key: 'divider', text: '-', itemType: index_1.SelectableOptionMenuItemType.Divider },
    { key: 'Header2', text: 'Second heading', itemType: index_1.SelectableOptionMenuItemType.Header },
    { key: 'E', text: 'Option E' },
    { key: 'F', text: 'Option F', disabled: true },
    { key: 'G', text: 'Option G' },
    { key: 'H', text: 'Option H' },
    { key: 'I', text: 'Option I' },
    { key: 'J', text: 'Option J' },
];
var comboBoxMultiStyle = { maxWidth: 300, display: 'block', marginTop: '10px' };
exports.ComboBoxBasicExample = function () {
    var comboBoxRef = React.useRef(null);
    var onOpenClick = React.useCallback(function () { var _a; return (_a = comboBoxRef.current) === null || _a === void 0 ? void 0 : _a.focus(true); }, []);
    return (React.createElement("div", null,
        React.createElement(index_1.ComboBox, { componentRef: comboBoxRef, defaultSelectedKey: "C", label: "Basic ComboBox", allowFreeform: true, autoComplete: "on", options: comboBoxBasicOptions }),
        React.createElement(index_1.PrimaryButton, { text: "Open ComboBox", style: comboBoxMultiStyle, onClick: onOpenClick })));
};
//# sourceMappingURL=ComboBox.Basic.Example.js.map
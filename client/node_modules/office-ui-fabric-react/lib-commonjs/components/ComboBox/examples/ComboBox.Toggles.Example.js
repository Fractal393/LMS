"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var index_1 = require("office-ui-fabric-react/lib-commonjs/index");
var react_hooks_1 = require("@uifabric/react-hooks");
var INITIAL_OPTIONS = [
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
var wrapperClassName = index_1.mergeStyles({
    display: 'flex',
    selectors: {
        '& > *': { marginRight: '20px' },
        '& .ms-ComboBox': { maxWidth: '300px' },
    },
});
exports.ComboBoxTogglesExample = function () {
    var _a = react_hooks_1.useBoolean(false), autoComplete = _a[0], ToggleAutoComplete = _a[1].toggle;
    var _b = react_hooks_1.useBoolean(true), allowFreeform = _b[0], ToggleAllowFreeform = _b[1].toggle;
    return (React.createElement(index_1.Fabric, { className: wrapperClassName },
        React.createElement(index_1.ComboBox, { label: "ComboBox with toggleable freeform/auto-complete", key: '' + autoComplete + allowFreeform, allowFreeform: allowFreeform, autoComplete: autoComplete ? 'on' : 'off', options: INITIAL_OPTIONS }),
        React.createElement(index_1.Toggle, { label: "Allow freeform", checked: allowFreeform, onChange: ToggleAllowFreeform }),
        React.createElement(index_1.Toggle, { label: "Auto-complete", checked: autoComplete, onChange: ToggleAutoComplete })));
};
//# sourceMappingURL=ComboBox.Toggles.Example.js.map
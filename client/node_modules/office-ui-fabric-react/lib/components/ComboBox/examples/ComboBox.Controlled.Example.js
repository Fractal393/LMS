import * as React from 'react';
import { ComboBox, SelectableOptionMenuItemType } from 'office-ui-fabric-react/lib/index';
var items = [
    { key: 'Header1', text: 'First heading', itemType: SelectableOptionMenuItemType.Header },
    { key: 'A', text: 'Option A' },
    { key: 'B', text: 'Option B' },
    { key: 'C', text: 'Option C' },
    { key: 'D', text: 'Option D' },
    { key: 'divider', text: '-', itemType: SelectableOptionMenuItemType.Divider },
    { key: 'Header2', text: 'Second heading', itemType: SelectableOptionMenuItemType.Header },
    { key: 'E', text: 'Option E' },
    { key: 'F', text: 'Option F', disabled: true },
    { key: 'G', text: 'Option G' },
    { key: 'H', text: 'Option H' },
    { key: 'I', text: 'Option I' },
    { key: 'J', text: 'Option J' },
];
var comboBoxStyle = { maxWidth: 300 };
export var ComboBoxControlledExample = function () {
    var _a = React.useState('C'), selectedKey = _a[0], setSelectedKey = _a[1];
    var onChange = React.useCallback(function (ev, option) {
        var _a;
        setSelectedKey((_a = option) === null || _a === void 0 ? void 0 : _a.key);
    }, [setSelectedKey]);
    return (React.createElement(ComboBox, { style: comboBoxStyle, selectedKey: selectedKey, label: "Controlled single-select ComboBox (allowFreeform: T)", allowFreeform: true, autoComplete: "on", options: items, onChange: onChange }));
};
//# sourceMappingURL=ComboBox.Controlled.Example.js.map
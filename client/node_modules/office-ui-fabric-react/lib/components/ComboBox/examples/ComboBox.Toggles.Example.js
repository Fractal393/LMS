import * as React from 'react';
import { ComboBox, Fabric, mergeStyles, SelectableOptionMenuItemType, Toggle, } from 'office-ui-fabric-react/lib/index';
import { useBoolean } from '@uifabric/react-hooks';
var INITIAL_OPTIONS = [
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
var wrapperClassName = mergeStyles({
    display: 'flex',
    selectors: {
        '& > *': { marginRight: '20px' },
        '& .ms-ComboBox': { maxWidth: '300px' },
    },
});
export var ComboBoxTogglesExample = function () {
    var _a = useBoolean(false), autoComplete = _a[0], ToggleAutoComplete = _a[1].toggle;
    var _b = useBoolean(true), allowFreeform = _b[0], ToggleAllowFreeform = _b[1].toggle;
    return (React.createElement(Fabric, { className: wrapperClassName },
        React.createElement(ComboBox, { label: "ComboBox with toggleable freeform/auto-complete", key: '' + autoComplete + allowFreeform, allowFreeform: allowFreeform, autoComplete: autoComplete ? 'on' : 'off', options: INITIAL_OPTIONS }),
        React.createElement(Toggle, { label: "Allow freeform", checked: allowFreeform, onChange: ToggleAllowFreeform }),
        React.createElement(Toggle, { label: "Auto-complete", checked: autoComplete, onChange: ToggleAutoComplete })));
};
//# sourceMappingURL=ComboBox.Toggles.Example.js.map
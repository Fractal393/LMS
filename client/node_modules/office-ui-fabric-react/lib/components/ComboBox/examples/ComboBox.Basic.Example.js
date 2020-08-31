import * as React from 'react';
import { ComboBox, PrimaryButton, SelectableOptionMenuItemType, } from 'office-ui-fabric-react/lib/index';
var comboBoxBasicOptions = [
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
var comboBoxMultiStyle = { maxWidth: 300, display: 'block', marginTop: '10px' };
export var ComboBoxBasicExample = function () {
    var comboBoxRef = React.useRef(null);
    var onOpenClick = React.useCallback(function () { var _a; return (_a = comboBoxRef.current) === null || _a === void 0 ? void 0 : _a.focus(true); }, []);
    return (React.createElement("div", null,
        React.createElement(ComboBox, { componentRef: comboBoxRef, defaultSelectedKey: "C", label: "Basic ComboBox", allowFreeform: true, autoComplete: "on", options: comboBoxBasicOptions }),
        React.createElement(PrimaryButton, { text: "Open ComboBox", style: comboBoxMultiStyle, onClick: onOpenClick })));
};
//# sourceMappingURL=ComboBox.Basic.Example.js.map
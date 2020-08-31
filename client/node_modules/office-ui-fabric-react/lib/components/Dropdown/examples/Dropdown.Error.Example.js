import * as React from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { useBoolean } from '@uifabric/react-hooks';
var dropdownStyles = { dropdown: { width: 300 }, root: { height: 100 } };
var stackTokens = { childrenGap: 30 };
var DropdownErrorExampleOptions = [
    { key: 'A', text: 'Option a' },
    { key: 'B', text: 'Option b' },
    { key: 'C', text: 'Option c' },
    { key: 'D', text: 'Option d' },
    { key: 'E', text: 'Option e' },
];
export var DropdownErrorExample = function () {
    var _a = useBoolean(false), showError = _a[0], toggleShowError = _a[1].toggle;
    return (React.createElement(Stack, { horizontal: true, tokens: stackTokens, verticalAlign: "start" },
        React.createElement(Toggle, { label: "Show error message", onText: "Yes", offText: "No", checked: showError, onChange: toggleShowError }),
        React.createElement(Dropdown, { placeholder: "Select an option", label: "Dropdown with error message", options: DropdownErrorExampleOptions, errorMessage: showError ? 'This dropdown has an error' : undefined, styles: dropdownStyles })));
};
//# sourceMappingURL=Dropdown.Error.Example.js.map
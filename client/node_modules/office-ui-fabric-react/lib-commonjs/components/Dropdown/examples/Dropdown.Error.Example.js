"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Dropdown_1 = require("office-ui-fabric-react/lib-commonjs/Dropdown");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var Toggle_1 = require("office-ui-fabric-react/lib-commonjs/Toggle");
var react_hooks_1 = require("@uifabric/react-hooks");
var dropdownStyles = { dropdown: { width: 300 }, root: { height: 100 } };
var stackTokens = { childrenGap: 30 };
var DropdownErrorExampleOptions = [
    { key: 'A', text: 'Option a' },
    { key: 'B', text: 'Option b' },
    { key: 'C', text: 'Option c' },
    { key: 'D', text: 'Option d' },
    { key: 'E', text: 'Option e' },
];
exports.DropdownErrorExample = function () {
    var _a = react_hooks_1.useBoolean(false), showError = _a[0], toggleShowError = _a[1].toggle;
    return (React.createElement(Stack_1.Stack, { horizontal: true, tokens: stackTokens, verticalAlign: "start" },
        React.createElement(Toggle_1.Toggle, { label: "Show error message", onText: "Yes", offText: "No", checked: showError, onChange: toggleShowError }),
        React.createElement(Dropdown_1.Dropdown, { placeholder: "Select an option", label: "Dropdown with error message", options: DropdownErrorExampleOptions, errorMessage: showError ? 'This dropdown has an error' : undefined, styles: dropdownStyles })));
};
//# sourceMappingURL=Dropdown.Error.Example.js.map
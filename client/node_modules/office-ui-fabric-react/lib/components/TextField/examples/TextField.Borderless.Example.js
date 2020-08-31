import { __assign } from "tslib";
import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
var stackTokens = { childrenGap: 50 };
var stackStyles = { root: { width: 650 } };
var columnProps = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
};
export var TextFieldBorderlessExample = function () {
    return (React.createElement(Stack, { horizontal: true, tokens: stackTokens, styles: stackStyles },
        React.createElement(Stack, __assign({}, columnProps),
            React.createElement(TextField, { label: "Standard:", underlined: true }),
            React.createElement(TextField, { label: "Disabled:", underlined: true, disabled: true, defaultValue: "I am disabled" }),
            React.createElement(TextField, { label: "Required:", underlined: true, required: true, placeholder: "Enter text here" })),
        React.createElement(Stack, __assign({}, columnProps),
            React.createElement(TextField, { label: "Borderless single-line TextField", borderless: true, placeholder: "No borders here, folks." }),
            React.createElement(TextField, { label: "Borderless multi-line TextField", borderless: true, multiline: true, placeholder: "No borders here, folks." }))));
};
//# sourceMappingURL=TextField.Borderless.Example.js.map
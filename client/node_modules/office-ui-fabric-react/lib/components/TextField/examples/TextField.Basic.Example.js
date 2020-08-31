import { __assign } from "tslib";
import * as React from 'react';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
var stackTokens = { childrenGap: 50 };
var iconProps = { iconName: 'Calendar' };
var stackStyles = { root: { width: 650 } };
var columnProps = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
};
export var TextFieldBasicExample = function () {
    return (React.createElement(Stack, { horizontal: true, tokens: stackTokens, styles: stackStyles },
        React.createElement(Stack, __assign({}, columnProps),
            React.createElement(TextField, { label: "Standard" }),
            React.createElement(TextField, { label: "Disabled", disabled: true, defaultValue: "I am disabled" }),
            React.createElement(TextField, { label: "Read-only", readOnly: true, defaultValue: "I am read-only" }),
            React.createElement(TextField, { label: "Required ", required: true }),
            React.createElement(TextField, { ariaLabel: "Required without visible label", required: true }),
            React.createElement(TextField, { label: "With error message", errorMessage: "Error message" })),
        React.createElement(Stack, __assign({}, columnProps),
            React.createElement(MaskedTextField, { label: "With input mask", mask: "m\\ask: (999) 999 - 9999" }),
            React.createElement(TextField, { label: "With an icon", iconProps: iconProps }),
            React.createElement(TextField, { label: "With placeholder", placeholder: "Please enter text here" }),
            React.createElement(TextField, { label: "Disabled with placeholder", disabled: true, placeholder: "I am disabled" }))));
};
//# sourceMappingURL=TextField.Basic.Example.js.map
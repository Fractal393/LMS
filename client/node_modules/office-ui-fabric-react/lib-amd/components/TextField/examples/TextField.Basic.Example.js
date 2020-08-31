define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/TextField", "office-ui-fabric-react/lib/Stack"], function (require, exports, tslib_1, React, TextField_1, Stack_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stackTokens = { childrenGap: 50 };
    var iconProps = { iconName: 'Calendar' };
    var stackStyles = { root: { width: 650 } };
    var columnProps = {
        tokens: { childrenGap: 15 },
        styles: { root: { width: 300 } },
    };
    exports.TextFieldBasicExample = function () {
        return (React.createElement(Stack_1.Stack, { horizontal: true, tokens: stackTokens, styles: stackStyles },
            React.createElement(Stack_1.Stack, tslib_1.__assign({}, columnProps),
                React.createElement(TextField_1.TextField, { label: "Standard" }),
                React.createElement(TextField_1.TextField, { label: "Disabled", disabled: true, defaultValue: "I am disabled" }),
                React.createElement(TextField_1.TextField, { label: "Read-only", readOnly: true, defaultValue: "I am read-only" }),
                React.createElement(TextField_1.TextField, { label: "Required ", required: true }),
                React.createElement(TextField_1.TextField, { ariaLabel: "Required without visible label", required: true }),
                React.createElement(TextField_1.TextField, { label: "With error message", errorMessage: "Error message" })),
            React.createElement(Stack_1.Stack, tslib_1.__assign({}, columnProps),
                React.createElement(TextField_1.MaskedTextField, { label: "With input mask", mask: "m\\ask: (999) 999 - 9999" }),
                React.createElement(TextField_1.TextField, { label: "With an icon", iconProps: iconProps }),
                React.createElement(TextField_1.TextField, { label: "With placeholder", placeholder: "Please enter text here" }),
                React.createElement(TextField_1.TextField, { label: "Disabled with placeholder", disabled: true, placeholder: "I am disabled" }))));
    };
});
//# sourceMappingURL=TextField.Basic.Example.js.map
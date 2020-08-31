import { __assign } from "tslib";
import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
var stackStyles = { root: { width: 650 } };
var stackTokens = { childrenGap: 50 };
export var TextFieldPrefixAndSuffixExample = function () {
    var columnProps = {
        tokens: { childrenGap: 15 },
        styles: { root: { width: 300 } },
    };
    return (React.createElement(Stack, { horizontal: true, tokens: stackTokens, styles: stackStyles },
        React.createElement(Stack, __assign({}, columnProps),
            React.createElement(TextField // prettier-ignore
            , { label: "With prefix", prefix: "https://", ariaLabel: "Example text field with https:// prefix" }),
            React.createElement(TextField // prettier-ignore
            , { label: "Disabled with prefix", prefix: "https://", disabled: true, ariaLabel: "Example text field with https:// prefix" })),
        React.createElement(Stack, __assign({}, columnProps),
            React.createElement(TextField // prettier-ignore
            , { label: "With suffix", suffix: ".com", ariaLabel: "Example text field with .com suffix" }),
            React.createElement(TextField, { label: "With prefix and suffix", prefix: "https://", suffix: ".com", ariaLabel: "Example text field with https:// prefix and .com suffix" }))));
};
//# sourceMappingURL=TextField.PrefixAndSuffix.Example.js.map
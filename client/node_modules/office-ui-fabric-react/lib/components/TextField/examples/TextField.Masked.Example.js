import * as React from 'react';
import { MaskedTextField, Stack } from 'office-ui-fabric-react';
var maskFormat = {
    '*': /[a-zA-Z0-9_]/,
};
var stackTokens = { maxWidth: 300 };
export var TextFieldMaskedExample = function () {
    return (React.createElement(Stack, { tokens: stackTokens },
        React.createElement("p", null, "The mask has been modified here to allow \"_\""),
        React.createElement(MaskedTextField, { label: "With input mask", mask: "m\\ask: ****", maskFormat: maskFormat, maskChar: "?" })));
};
//# sourceMappingURL=TextField.Masked.Example.js.map
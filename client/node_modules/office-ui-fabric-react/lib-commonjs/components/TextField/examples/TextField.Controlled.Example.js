"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var TextField_1 = require("office-ui-fabric-react/lib-commonjs/TextField");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var react_hooks_1 = require("@uifabric/react-hooks");
var textFieldStyles = { fieldGroup: { width: 300 } };
var narrowTextFieldStyles = { fieldGroup: { width: 100 } };
var stackTokens = { childrenGap: 15 };
exports.TextFieldControlledExample = function () {
    var _a = React.useState(''), firstTextFieldValue = _a[0], setFirstTextFieldValue = _a[1];
    var _b = React.useState(''), secondTextFieldValue = _b[0], setSecondTextFieldValue = _b[1];
    var onChangeFirstTextFieldValue = react_hooks_1.useConstCallback(function (event, newValue) {
        setFirstTextFieldValue(newValue || '');
    });
    var onChangeSecondTextFieldValue = react_hooks_1.useConstCallback(function (event, newValue) {
        if (!newValue || newValue.length <= 5) {
            setSecondTextFieldValue(newValue || '');
        }
    });
    return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
        React.createElement(TextField_1.TextField, { label: "Basic controlled TextField", value: firstTextFieldValue, onChange: onChangeFirstTextFieldValue, styles: textFieldStyles }),
        React.createElement(TextField_1.TextField, { label: "Controlled TextField limiting length of value to 5", value: secondTextFieldValue, onChange: onChangeSecondTextFieldValue, styles: narrowTextFieldStyles })));
};
//# sourceMappingURL=TextField.Controlled.Example.js.map
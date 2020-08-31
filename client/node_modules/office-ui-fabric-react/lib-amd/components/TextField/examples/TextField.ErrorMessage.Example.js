define(["require", "exports", "react", "office-ui-fabric-react/lib/TextField", "office-ui-fabric-react/lib/Stack", "office-ui-fabric-react/lib/Toggle", "@uifabric/react-hooks"], function (require, exports, React, TextField_1, Stack_1, Toggle_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stackTokens = {
        childrenGap: 20,
        maxWidth: 350,
    };
    var getErrorMessage = function (value) {
        return value.length < 3 ? '' : "Input value length must be less than 3. Actual length is " + value.length + ".";
    };
    var getErrorMessagePromise = function (value) {
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(getErrorMessage(value)); }, 5000);
        });
    };
    exports.TextFieldErrorMessageExample = function () {
        var _a = react_hooks_1.useBoolean(false), showFields = _a[0], toggleShowFields = _a[1].toggle;
        return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
            React.createElement(Toggle_1.Toggle, { label: "Show text fields", inlineLabel: true, checked: showFields, onChange: toggleShowFields }),
            showFields && (React.createElement(React.Fragment, null,
                React.createElement("strong", null, "Hint: the input length must be less than 3."),
                React.createElement(TextField_1.TextField, { label: "String-based validation", onGetErrorMessage: getErrorMessage }),
                React.createElement(TextField_1.TextField, { label: "Promise-based validation", onGetErrorMessage: getErrorMessagePromise }),
                React.createElement(TextField_1.TextField, { label: "String-based validation on render", defaultValue: "Shows an error message on render", onGetErrorMessage: getErrorMessage }),
                React.createElement(TextField_1.TextField, { label: "String-based validation only on change", defaultValue: "Validates only on input change, not on render", onGetErrorMessage: getErrorMessage, validateOnLoad: false }),
                React.createElement(TextField_1.TextField, { label: "Promise-based validation", defaultValue: "Shows an error message 5 seconds after render", onGetErrorMessage: getErrorMessagePromise }),
                React.createElement(TextField_1.TextField, { label: "Both description and error message", defaultValue: "Shows description and error message on render", description: "Field description", onGetErrorMessage: getErrorMessage }),
                React.createElement(TextField_1.TextField, { label: "Deferred string-based validation", placeholder: "Validates after user stops typing for 2 seconds", onGetErrorMessage: getErrorMessage, deferredValidationTime: 2000 }),
                React.createElement(TextField_1.TextField, { label: "Validates only on focus and blur", placeholder: "Validates only on input focus and blur", onGetErrorMessage: getErrorMessage, validateOnFocusIn: true, validateOnFocusOut: true }),
                React.createElement(TextField_1.TextField, { label: "Validates only on blur", placeholder: "Validates only on input blur", onGetErrorMessage: getErrorMessage, validateOnFocusOut: true }),
                React.createElement(TextField_1.TextField, { label: "Underlined field:", defaultValue: "This value is too long", underlined: true, onGetErrorMessage: getErrorMessage }),
                React.createElement(TextField_1.TextField, { label: "Uses the errorMessage property to set an error state", placeholder: "This field always has an error", errorMessage: "This is a statically set error message" })))));
    };
});
//# sourceMappingURL=TextField.ErrorMessage.Example.js.map
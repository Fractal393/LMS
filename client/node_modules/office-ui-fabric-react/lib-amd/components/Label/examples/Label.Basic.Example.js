define(["require", "exports", "react", "office-ui-fabric-react/lib/Label", "office-ui-fabric-react/lib/TextField", "@uifabric/react-hooks"], function (require, exports, React, Label_1, TextField_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LabelBasicExample = function () {
        var textFieldId = react_hooks_1.useId('anInput');
        return (React.createElement("div", null,
            React.createElement(Label_1.Label, null, "I'm a Label"),
            React.createElement(Label_1.Label, { disabled: true }, "I'm a disabled Label"),
            React.createElement(Label_1.Label, { required: true }, "I'm a required Label"),
            React.createElement(Label_1.Label, { htmlFor: textFieldId }, "A Label for An Input"),
            React.createElement(TextField_1.TextField, { id: textFieldId })));
    };
});
//# sourceMappingURL=Label.Basic.Example.js.map
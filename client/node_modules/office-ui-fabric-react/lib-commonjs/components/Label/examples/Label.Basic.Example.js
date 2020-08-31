"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Label_1 = require("office-ui-fabric-react/lib-commonjs/Label");
var TextField_1 = require("office-ui-fabric-react/lib-commonjs/TextField");
var react_hooks_1 = require("@uifabric/react-hooks");
exports.LabelBasicExample = function () {
    var textFieldId = react_hooks_1.useId('anInput');
    return (React.createElement("div", null,
        React.createElement(Label_1.Label, null, "I'm a Label"),
        React.createElement(Label_1.Label, { disabled: true }, "I'm a disabled Label"),
        React.createElement(Label_1.Label, { required: true }, "I'm a required Label"),
        React.createElement(Label_1.Label, { htmlFor: textFieldId }, "A Label for An Input"),
        React.createElement(TextField_1.TextField, { id: textFieldId })));
};
//# sourceMappingURL=Label.Basic.Example.js.map
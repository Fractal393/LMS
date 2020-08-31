"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ChoiceGroup_1 = require("office-ui-fabric-react/lib-commonjs/ChoiceGroup");
var options = [
    { key: 'A', text: 'Option A' },
    { key: 'B', text: 'Option B' },
    { key: 'C', text: 'Option C', disabled: true },
    { key: 'D', text: 'Option D' },
];
exports.ChoiceGroupBasicExample = function () {
    return React.createElement(ChoiceGroup_1.ChoiceGroup, { defaultSelectedKey: "B", options: options, onChange: _onChange, label: "Pick one", required: true });
};
function _onChange(ev, option) {
    console.dir(option);
}
//# sourceMappingURL=ChoiceGroup.Basic.Example.js.map
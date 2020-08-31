import * as React from 'react';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
var options = [
    { key: 'A', text: 'Option A' },
    { key: 'B', text: 'Option B' },
    { key: 'C', text: 'Option C', disabled: true },
    { key: 'D', text: 'Option D' },
];
export var ChoiceGroupBasicExample = function () {
    return React.createElement(ChoiceGroup, { defaultSelectedKey: "B", options: options, onChange: _onChange, label: "Pick one", required: true });
};
function _onChange(ev, option) {
    console.dir(option);
}
//# sourceMappingURL=ChoiceGroup.Basic.Example.js.map
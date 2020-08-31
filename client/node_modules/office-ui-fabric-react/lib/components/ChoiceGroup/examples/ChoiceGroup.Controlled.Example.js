import * as React from 'react';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
var options = [
    { key: 'A', text: 'Option A' },
    { key: 'B', text: 'Option B' },
    { key: 'C', text: 'Option C', disabled: true },
    { key: 'D', text: 'Option D' },
];
export var ChoiceGroupControlledExample = function () {
    var _a = React.useState('B'), selectedKey = _a[0], setSelectedKey = _a[1];
    var onChange = React.useCallback(function (ev, option) {
        setSelectedKey(option.key);
    }, []);
    return React.createElement(ChoiceGroup, { selectedKey: selectedKey, options: options, onChange: onChange, label: "Pick one" });
};
//# sourceMappingURL=ChoiceGroup.Controlled.Example.js.map
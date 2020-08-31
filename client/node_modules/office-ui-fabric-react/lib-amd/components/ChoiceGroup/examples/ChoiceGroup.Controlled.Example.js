define(["require", "exports", "react", "office-ui-fabric-react/lib/ChoiceGroup"], function (require, exports, React, ChoiceGroup_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var options = [
        { key: 'A', text: 'Option A' },
        { key: 'B', text: 'Option B' },
        { key: 'C', text: 'Option C', disabled: true },
        { key: 'D', text: 'Option D' },
    ];
    exports.ChoiceGroupControlledExample = function () {
        var _a = React.useState('B'), selectedKey = _a[0], setSelectedKey = _a[1];
        var onChange = React.useCallback(function (ev, option) {
            setSelectedKey(option.key);
        }, []);
        return React.createElement(ChoiceGroup_1.ChoiceGroup, { selectedKey: selectedKey, options: options, onChange: onChange, label: "Pick one" });
    };
});
//# sourceMappingURL=ChoiceGroup.Controlled.Example.js.map
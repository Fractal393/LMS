define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/index"], function (require, exports, tslib_1, React, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var items = [
        { key: 'Header1', text: 'First heading', itemType: index_1.SelectableOptionMenuItemType.Header },
        { key: 'A', text: 'Option A' },
        { key: 'B', text: 'Option B' },
        { key: 'C', text: 'Option C' },
        { key: 'D', text: 'Option D' },
        { key: 'divider', text: '-', itemType: index_1.SelectableOptionMenuItemType.Divider },
        { key: 'Header2', text: 'Second heading', itemType: index_1.SelectableOptionMenuItemType.Header },
        { key: 'E', text: 'Option E' },
        { key: 'F', text: 'Option F', disabled: true },
        { key: 'G', text: 'Option G' },
        { key: 'H', text: 'Option H' },
        { key: 'I', text: 'Option I' },
        { key: 'J', text: 'Option J' },
    ];
    var comboBoxMultiStyle = { maxWidth: 300 };
    exports.ComoBoxControlledMultiExample = function () {
        var _a = React.useState(['C', 'D']), selectedKeys = _a[0], setSelectedKeys = _a[1];
        var onChange = React.useCallback(function (ev, option) {
            var _a;
            setSelectedKeys(((_a = option) === null || _a === void 0 ? void 0 : _a.selected) ? tslib_1.__spreadArrays(selectedKeys, [option.key]) : selectedKeys.filter(function (key) { var _a; return key !== ((_a = option) === null || _a === void 0 ? void 0 : _a.key); }));
        }, [selectedKeys]);
        return (React.createElement(index_1.ComboBox, { multiSelect: true, style: comboBoxMultiStyle, selectedKey: selectedKeys, label: "Controlled multi-select ComboBox (allowFreeform: T)", allowFreeform: true, autoComplete: "on", options: items, onChange: onChange }));
    };
});
//# sourceMappingURL=ComboBox.ControlledMulti.Example.js.map
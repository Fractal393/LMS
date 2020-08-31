define(["require", "exports", "react", "office-ui-fabric-react/lib/Pivot", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Label", "@uifabric/react-hooks"], function (require, exports, React, Pivot_1, Button_1, Label_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PivotRemoveExample = function () {
        var _a = react_hooks_1.useBoolean(true), showFirstItem = _a[0], toggleShowFirstItem = _a[1].toggle;
        return (React.createElement("div", null,
            React.createElement(Pivot_1.Pivot, { "aria-label": "Remove Pivot Example", linkSize: Pivot_1.PivotLinkSize.large, linkFormat: Pivot_1.PivotLinkFormat.tabs },
                showFirstItem && (React.createElement(Pivot_1.PivotItem, { headerText: "Foo", itemKey: "Foo", key: "Foo" },
                    React.createElement(Label_1.Label, null, "Click the button below to show/hide this pivot item."),
                    React.createElement(Label_1.Label, null, "The selected item will not change when the number of pivot items changes."),
                    React.createElement(Label_1.Label, null, "If the selected item was removed, the new first item will be selected."))),
                React.createElement(Pivot_1.PivotItem, { headerText: "Bar", itemKey: "Bar", key: "Bar" },
                    React.createElement(Label_1.Label, null, "Pivot #2")),
                React.createElement(Pivot_1.PivotItem, { headerText: "Bas", itemKey: "Bas", key: "Bas" },
                    React.createElement(Label_1.Label, null, "Pivot #3")),
                React.createElement(Pivot_1.PivotItem, { headerText: "Biz", itemKey: "Biz", key: "Biz" },
                    React.createElement(Label_1.Label, null, "Pivot #4"))),
            React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { "aria-live": "polite", onClick: toggleShowFirstItem, text: (showFirstItem ? 'Hide' : 'Show') + " First Pivot Item" }))));
    };
});
//# sourceMappingURL=Pivot.Remove.Example.js.map
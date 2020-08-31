define(["require", "exports", "react", "office-ui-fabric-react/lib/Label", "office-ui-fabric-react/lib/Pivot"], function (require, exports, React, Label_1, Pivot_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PivotTabsExample = function () { return (React.createElement("div", null,
        React.createElement(Pivot_1.Pivot, { "aria-label": "Links of Tab Style Pivot Example", linkFormat: Pivot_1.PivotLinkFormat.tabs },
            React.createElement(Pivot_1.PivotItem, { headerText: "Foo" },
                React.createElement(Label_1.Label, null, "Pivot #1")),
            React.createElement(Pivot_1.PivotItem, { headerText: "Bar" },
                React.createElement(Label_1.Label, null, "Pivot #2")),
            React.createElement(Pivot_1.PivotItem, { headerText: "Bas" },
                React.createElement(Label_1.Label, null, "Pivot #3")),
            React.createElement(Pivot_1.PivotItem, { headerText: "Biz" },
                React.createElement(Label_1.Label, null, "Pivot #4"))))); };
});
//# sourceMappingURL=Pivot.Tabs.Example.js.map
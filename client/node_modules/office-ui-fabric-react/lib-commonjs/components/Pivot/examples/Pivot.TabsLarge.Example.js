"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Pivot_1 = require("office-ui-fabric-react/lib-commonjs/Pivot");
var Label_1 = require("office-ui-fabric-react/lib-commonjs/Label");
exports.PivotTabsLargeExample = function () { return (React.createElement("div", null,
    React.createElement(Pivot_1.Pivot, { "aria-label": "Links of Large Tabs Pivot Example", linkFormat: Pivot_1.PivotLinkFormat.tabs, linkSize: Pivot_1.PivotLinkSize.large },
        React.createElement(Pivot_1.PivotItem, { headerText: "Foo" },
            React.createElement(Label_1.Label, null, "Pivot #1")),
        React.createElement(Pivot_1.PivotItem, { headerText: "Bar" },
            React.createElement(Label_1.Label, null, "Pivot #2")),
        React.createElement(Pivot_1.PivotItem, { headerText: "Bas" },
            React.createElement(Label_1.Label, null, "Pivot #3")),
        React.createElement(Pivot_1.PivotItem, { headerText: "Biz" },
            React.createElement(Label_1.Label, null, "Pivot #4"))))); };
//# sourceMappingURL=Pivot.TabsLarge.Example.js.map
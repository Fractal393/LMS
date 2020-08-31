"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Label_1 = require("office-ui-fabric-react/lib-commonjs/Label");
var Pivot_1 = require("office-ui-fabric-react/lib-commonjs/Pivot");
exports.PivotLargeExample = function () { return (React.createElement("div", null,
    React.createElement(Pivot_1.Pivot, { "aria-label": "Large Link Size Pivot Example", linkSize: Pivot_1.PivotLinkSize.large },
        React.createElement(Pivot_1.PivotItem, { headerText: "My Files" },
            React.createElement(Label_1.Label, null, "Pivot #1")),
        React.createElement(Pivot_1.PivotItem, { headerText: "Recent" },
            React.createElement(Label_1.Label, null, "Pivot #2")),
        React.createElement(Pivot_1.PivotItem, { headerText: "Shared with me" },
            React.createElement(Label_1.Label, null, "Pivot #3"))))); };
//# sourceMappingURL=Pivot.Large.Example.js.map
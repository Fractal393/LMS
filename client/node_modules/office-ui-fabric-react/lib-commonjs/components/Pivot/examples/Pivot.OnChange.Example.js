"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Pivot_1 = require("office-ui-fabric-react/lib-commonjs/Pivot");
var Label_1 = require("office-ui-fabric-react/lib-commonjs/Label");
exports.PivotOnChangeExample = function () {
    var _a;
    var _b = React.useState(undefined), lastHeader = _b[0], setLastHeader = _b[1];
    return (React.createElement("div", null,
        React.createElement(Label_1.Label, null,
            "Last onLinkClick from: ", (_a = lastHeader) === null || _a === void 0 ? void 0 :
            _a.props.headerText),
        React.createElement(Pivot_1.Pivot, { "aria-label": "OnChange Pivot Example", linkSize: Pivot_1.PivotLinkSize.large, linkFormat: Pivot_1.PivotLinkFormat.tabs, onLinkClick: setLastHeader },
            React.createElement(Pivot_1.PivotItem, { headerText: "Foo" },
                React.createElement(Label_1.Label, null, "Pivot #1")),
            React.createElement(Pivot_1.PivotItem, { headerText: "Bar" },
                React.createElement(Label_1.Label, null, "Pivot #2")),
            React.createElement(Pivot_1.PivotItem, { headerText: "Bas" },
                React.createElement(Label_1.Label, null, "Pivot #3")),
            React.createElement(Pivot_1.PivotItem, { headerText: "Biz" },
                React.createElement(Label_1.Label, null, "Pivot #4")))));
};
//# sourceMappingURL=Pivot.OnChange.Example.js.map
import * as React from 'react';
import { Pivot, PivotItem, PivotLinkFormat, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';
import { Label } from 'office-ui-fabric-react/lib/Label';
export var PivotOnChangeExample = function () {
    var _a;
    var _b = React.useState(undefined), lastHeader = _b[0], setLastHeader = _b[1];
    return (React.createElement("div", null,
        React.createElement(Label, null,
            "Last onLinkClick from: ", (_a = lastHeader) === null || _a === void 0 ? void 0 :
            _a.props.headerText),
        React.createElement(Pivot, { "aria-label": "OnChange Pivot Example", linkSize: PivotLinkSize.large, linkFormat: PivotLinkFormat.tabs, onLinkClick: setLastHeader },
            React.createElement(PivotItem, { headerText: "Foo" },
                React.createElement(Label, null, "Pivot #1")),
            React.createElement(PivotItem, { headerText: "Bar" },
                React.createElement(Label, null, "Pivot #2")),
            React.createElement(PivotItem, { headerText: "Bas" },
                React.createElement(Label, null, "Pivot #3")),
            React.createElement(PivotItem, { headerText: "Biz" },
                React.createElement(Label, null, "Pivot #4")))));
};
//# sourceMappingURL=Pivot.OnChange.Example.js.map
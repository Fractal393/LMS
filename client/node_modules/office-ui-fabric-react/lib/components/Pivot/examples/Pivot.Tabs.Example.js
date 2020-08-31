import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
export var PivotTabsExample = function () { return (React.createElement("div", null,
    React.createElement(Pivot, { "aria-label": "Links of Tab Style Pivot Example", linkFormat: PivotLinkFormat.tabs },
        React.createElement(PivotItem, { headerText: "Foo" },
            React.createElement(Label, null, "Pivot #1")),
        React.createElement(PivotItem, { headerText: "Bar" },
            React.createElement(Label, null, "Pivot #2")),
        React.createElement(PivotItem, { headerText: "Bas" },
            React.createElement(Label, null, "Pivot #3")),
        React.createElement(PivotItem, { headerText: "Biz" },
            React.createElement(Label, null, "Pivot #4"))))); };
//# sourceMappingURL=Pivot.Tabs.Example.js.map
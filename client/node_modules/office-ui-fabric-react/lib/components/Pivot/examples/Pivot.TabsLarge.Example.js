import * as React from 'react';
import { Pivot, PivotItem, PivotLinkFormat, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';
import { Label } from 'office-ui-fabric-react/lib/Label';
export var PivotTabsLargeExample = function () { return (React.createElement("div", null,
    React.createElement(Pivot, { "aria-label": "Links of Large Tabs Pivot Example", linkFormat: PivotLinkFormat.tabs, linkSize: PivotLinkSize.large },
        React.createElement(PivotItem, { headerText: "Foo" },
            React.createElement(Label, null, "Pivot #1")),
        React.createElement(PivotItem, { headerText: "Bar" },
            React.createElement(Label, null, "Pivot #2")),
        React.createElement(PivotItem, { headerText: "Bas" },
            React.createElement(Label, null, "Pivot #3")),
        React.createElement(PivotItem, { headerText: "Biz" },
            React.createElement(Label, null, "Pivot #4"))))); };
//# sourceMappingURL=Pivot.TabsLarge.Example.js.map
import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';
export var PivotLargeExample = function () { return (React.createElement("div", null,
    React.createElement(Pivot, { "aria-label": "Large Link Size Pivot Example", linkSize: PivotLinkSize.large },
        React.createElement(PivotItem, { headerText: "My Files" },
            React.createElement(Label, null, "Pivot #1")),
        React.createElement(PivotItem, { headerText: "Recent" },
            React.createElement(Label, null, "Pivot #2")),
        React.createElement(PivotItem, { headerText: "Shared with me" },
            React.createElement(Label, null, "Pivot #3"))))); };
//# sourceMappingURL=Pivot.Large.Example.js.map
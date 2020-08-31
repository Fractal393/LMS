import * as React from 'react';
import { Pivot, PivotItem, PivotLinkFormat, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { useBoolean } from '@uifabric/react-hooks';
export var PivotRemoveExample = function () {
    var _a = useBoolean(true), showFirstItem = _a[0], toggleShowFirstItem = _a[1].toggle;
    return (React.createElement("div", null,
        React.createElement(Pivot, { "aria-label": "Remove Pivot Example", linkSize: PivotLinkSize.large, linkFormat: PivotLinkFormat.tabs },
            showFirstItem && (React.createElement(PivotItem, { headerText: "Foo", itemKey: "Foo", key: "Foo" },
                React.createElement(Label, null, "Click the button below to show/hide this pivot item."),
                React.createElement(Label, null, "The selected item will not change when the number of pivot items changes."),
                React.createElement(Label, null, "If the selected item was removed, the new first item will be selected."))),
            React.createElement(PivotItem, { headerText: "Bar", itemKey: "Bar", key: "Bar" },
                React.createElement(Label, null, "Pivot #2")),
            React.createElement(PivotItem, { headerText: "Bas", itemKey: "Bas", key: "Bas" },
                React.createElement(Label, null, "Pivot #3")),
            React.createElement(PivotItem, { headerText: "Biz", itemKey: "Biz", key: "Biz" },
                React.createElement(Label, null, "Pivot #4"))),
        React.createElement("div", null,
            React.createElement(DefaultButton, { "aria-live": "polite", onClick: toggleShowFirstItem, text: (showFirstItem ? 'Hide' : 'Show') + " First Pivot Item" }))));
};
//# sourceMappingURL=Pivot.Remove.Example.js.map
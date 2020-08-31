import * as React from 'react';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { useBoolean } from '@uifabric/react-hooks';
var ExpensiveToMount = function () {
    var _a = React.useState(false), mounted = _a[0], setMounted = _a[1];
    React.useEffect(function () {
        setTimeout(function () {
            setMounted(true);
        }, 3000);
    }, []);
    return React.createElement("div", null, mounted ? 'Rendered' : 'Mounting...');
};
export var PivotRenderActiveOnlyExample = function () {
    var _a = useBoolean(false), alwaysRender = _a[0], toggleActiveOnly = _a[1].toggle;
    return (React.createElement("div", null,
        React.createElement(Toggle, { label: "Always render children", inlineLabel: true, checked: alwaysRender, onChange: toggleActiveOnly }),
        React.createElement(Pivot, { "aria-label": "Separately Rendered Content Pivot Example" },
            React.createElement(PivotItem, { headerText: "Expensive component #1", alwaysRender: alwaysRender },
                React.createElement(ExpensiveToMount, null),
                "Component #1"),
            React.createElement(PivotItem, { headerText: "Expensive component #2", alwaysRender: alwaysRender },
                React.createElement(ExpensiveToMount, null),
                "Component #2"))));
};
//# sourceMappingURL=Pivot.AlwaysRender.Example.js.map
define(["require", "exports", "react", "office-ui-fabric-react/lib/Pivot", "office-ui-fabric-react/lib/Toggle", "@uifabric/react-hooks"], function (require, exports, React, Pivot_1, Toggle_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExpensiveToMount = function () {
        var _a = React.useState(false), mounted = _a[0], setMounted = _a[1];
        React.useEffect(function () {
            setTimeout(function () {
                setMounted(true);
            }, 3000);
        }, []);
        return React.createElement("div", null, mounted ? 'Rendered' : 'Mounting...');
    };
    exports.PivotRenderActiveOnlyExample = function () {
        var _a = react_hooks_1.useBoolean(false), alwaysRender = _a[0], toggleActiveOnly = _a[1].toggle;
        return (React.createElement("div", null,
            React.createElement(Toggle_1.Toggle, { label: "Always render children", inlineLabel: true, checked: alwaysRender, onChange: toggleActiveOnly }),
            React.createElement(Pivot_1.Pivot, { "aria-label": "Separately Rendered Content Pivot Example" },
                React.createElement(Pivot_1.PivotItem, { headerText: "Expensive component #1", alwaysRender: alwaysRender },
                    React.createElement(ExpensiveToMount, null),
                    "Component #1"),
                React.createElement(Pivot_1.PivotItem, { headerText: "Expensive component #2", alwaysRender: alwaysRender },
                    React.createElement(ExpensiveToMount, null),
                    "Component #2"))));
    };
});
//# sourceMappingURL=Pivot.AlwaysRender.Example.js.map
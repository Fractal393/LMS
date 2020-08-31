define(["require", "exports", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Tooltip", "@uifabric/react-hooks"], function (require, exports, React, Button_1, Tooltip_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tooltipProps = {
        onRenderContent: function () { return (React.createElement("ul", { style: { margin: 10, padding: 0 } },
            React.createElement("li", null, "1. One"),
            React.createElement("li", null, "2. Two"))); },
    };
    var hostStyles = { root: { display: 'inline-block' } };
    exports.TooltipCustomExample = function () {
        // Use useId() to ensure that the ID is unique on the page.
        // (It's also okay to use a plain string and manually ensure uniqueness.)
        var tooltipId = react_hooks_1.useId('tooltip');
        return (React.createElement(Tooltip_1.TooltipHost, { tooltipProps: tooltipProps, delay: Tooltip_1.TooltipDelay.zero, id: tooltipId, directionalHint: Tooltip_1.DirectionalHint.bottomCenter, styles: hostStyles },
            React.createElement(Button_1.DefaultButton, { "aria-describedby": tooltipId, text: "Hover over me" })));
    };
});
//# sourceMappingURL=Tooltip.Custom.Example.js.map
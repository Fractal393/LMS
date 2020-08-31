define(["require", "exports", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Tooltip", "@uifabric/react-hooks"], function (require, exports, React, Button_1, Tooltip_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var styles = { root: { display: 'inline-block' } };
    var calloutProps = { gapSpace: 0 };
    exports.TooltipInteractiveExample = function () {
        // Use useId() to ensure that the ID is unique on the page.
        // (It's also okay to use a plain string and manually ensure uniqueness.)
        var tooltipId = react_hooks_1.useId('tooltip');
        return (React.createElement("div", null,
            React.createElement(Tooltip_1.TooltipHost, { content: "This is the tooltip", 
                // Give the user more time to interact with the tooltip before it closes
                closeDelay: 500, id: tooltipId, calloutProps: calloutProps, styles: styles },
                React.createElement(Button_1.DefaultButton, { "aria-describedby": tooltipId }, "Interact with my tooltip"))));
    };
});
//# sourceMappingURL=Tooltip.Interactive.Example.js.map
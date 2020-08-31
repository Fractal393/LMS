"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var Tooltip_1 = require("office-ui-fabric-react/lib-commonjs/Tooltip");
var react_hooks_1 = require("@uifabric/react-hooks");
var rootStyles = { minHeight: 50 };
var buttonStyles = {
    root: { position: 'absolute', left: 200 },
};
exports.TooltipAbsolutePositionExample = function () {
    // Use useId() to ensure that the ID is unique on the page.
    // (It's also okay to use a plain string and manually ensure uniqueness.)
    var tooltipId = react_hooks_1.useId('tooltip');
    var buttonId = react_hooks_1.useId('targetButton');
    var calloutProps = react_hooks_1.useConst({
        gapSpace: 0,
        // If the tooltip should point to an absolutely-positioned element,
        // you must manually specify the callout target.
        target: "#" + buttonId,
    });
    return (React.createElement("div", { style: rootStyles },
        React.createElement(Tooltip_1.TooltipHost, { content: "This is the tooltip", id: tooltipId, calloutProps: calloutProps },
            React.createElement(Button_1.DefaultButton
            // Button is absolutely positioned (see above)
            , { 
                // Button is absolutely positioned (see above)
                styles: buttonStyles, id: buttonId, "aria-describedby": tooltipId }, "Hover over me"))));
};
//# sourceMappingURL=Tooltip.AbsolutePosition.Example.js.map
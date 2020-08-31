"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var Tooltip_1 = require("office-ui-fabric-react/lib-commonjs/Tooltip");
var react_hooks_1 = require("@uifabric/react-hooks");
var calloutProps = { gapSpace: 0 };
// The TooltipHost root uses display: inline by default.
// If that's causing sizing issues or tooltip positioning issues, try overriding to inline-block.
var hostStyles = { root: { display: 'inline-block' } };
exports.TooltipBasicExample = function () {
    // Use useId() to ensure that the ID is unique on the page.
    // (It's also okay to use a plain string and manually ensure uniqueness.)
    var tooltipId = react_hooks_1.useId('tooltip');
    return (React.createElement("div", null,
        React.createElement(Tooltip_1.TooltipHost, { content: "This is the tooltip content", 
            // This id is used on the tooltip itself, not the host
            // (so an element with this id only exists when the tooltip is shown)
            id: tooltipId, calloutProps: calloutProps, styles: hostStyles },
            React.createElement(Button_1.DefaultButton, { "aria-describedby": tooltipId }, "Hover over me"))));
};
//# sourceMappingURL=Tooltip.Basic.Example.js.map
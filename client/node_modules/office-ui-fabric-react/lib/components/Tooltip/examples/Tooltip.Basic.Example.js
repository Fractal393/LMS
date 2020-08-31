import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import { useId } from '@uifabric/react-hooks';
var calloutProps = { gapSpace: 0 };
// The TooltipHost root uses display: inline by default.
// If that's causing sizing issues or tooltip positioning issues, try overriding to inline-block.
var hostStyles = { root: { display: 'inline-block' } };
export var TooltipBasicExample = function () {
    // Use useId() to ensure that the ID is unique on the page.
    // (It's also okay to use a plain string and manually ensure uniqueness.)
    var tooltipId = useId('tooltip');
    return (React.createElement("div", null,
        React.createElement(TooltipHost, { content: "This is the tooltip content", 
            // This id is used on the tooltip itself, not the host
            // (so an element with this id only exists when the tooltip is shown)
            id: tooltipId, calloutProps: calloutProps, styles: hostStyles },
            React.createElement(DefaultButton, { "aria-describedby": tooltipId }, "Hover over me"))));
};
//# sourceMappingURL=Tooltip.Basic.Example.js.map
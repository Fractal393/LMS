import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import { useId, useConst } from '@uifabric/react-hooks';
var rootStyles = { minHeight: 50 };
var buttonStyles = {
    root: { position: 'absolute', left: 200 },
};
export var TooltipAbsolutePositionExample = function () {
    // Use useId() to ensure that the ID is unique on the page.
    // (It's also okay to use a plain string and manually ensure uniqueness.)
    var tooltipId = useId('tooltip');
    var buttonId = useId('targetButton');
    var calloutProps = useConst({
        gapSpace: 0,
        // If the tooltip should point to an absolutely-positioned element,
        // you must manually specify the callout target.
        target: "#" + buttonId,
    });
    return (React.createElement("div", { style: rootStyles },
        React.createElement(TooltipHost, { content: "This is the tooltip", id: tooltipId, calloutProps: calloutProps },
            React.createElement(DefaultButton
            // Button is absolutely positioned (see above)
            , { 
                // Button is absolutely positioned (see above)
                styles: buttonStyles, id: buttonId, "aria-describedby": tooltipId }, "Hover over me"))));
};
//# sourceMappingURL=Tooltip.AbsolutePosition.Example.js.map
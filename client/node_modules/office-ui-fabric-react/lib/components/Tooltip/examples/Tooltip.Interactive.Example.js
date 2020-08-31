import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import { useId } from '@uifabric/react-hooks';
var styles = { root: { display: 'inline-block' } };
var calloutProps = { gapSpace: 0 };
export var TooltipInteractiveExample = function () {
    // Use useId() to ensure that the ID is unique on the page.
    // (It's also okay to use a plain string and manually ensure uniqueness.)
    var tooltipId = useId('tooltip');
    return (React.createElement("div", null,
        React.createElement(TooltipHost, { content: "This is the tooltip", 
            // Give the user more time to interact with the tooltip before it closes
            closeDelay: 500, id: tooltipId, calloutProps: calloutProps, styles: styles },
            React.createElement(DefaultButton, { "aria-describedby": tooltipId }, "Interact with my tooltip"))));
};
//# sourceMappingURL=Tooltip.Interactive.Example.js.map
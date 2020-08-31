import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost, TooltipDelay, DirectionalHint, } from 'office-ui-fabric-react/lib/Tooltip';
import { useId } from '@uifabric/react-hooks';
var tooltipProps = {
    onRenderContent: function () { return (React.createElement("ul", { style: { margin: 10, padding: 0 } },
        React.createElement("li", null, "1. One"),
        React.createElement("li", null, "2. Two"))); },
};
var hostStyles = { root: { display: 'inline-block' } };
export var TooltipCustomExample = function () {
    // Use useId() to ensure that the ID is unique on the page.
    // (It's also okay to use a plain string and manually ensure uniqueness.)
    var tooltipId = useId('tooltip');
    return (React.createElement(TooltipHost, { tooltipProps: tooltipProps, delay: TooltipDelay.zero, id: tooltipId, directionalHint: DirectionalHint.bottomCenter, styles: hostStyles },
        React.createElement(DefaultButton, { "aria-describedby": tooltipId, text: "Hover over me" })));
};
//# sourceMappingURL=Tooltip.Custom.Example.js.map
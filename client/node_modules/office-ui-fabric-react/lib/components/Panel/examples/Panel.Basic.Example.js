import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { useConstCallback } from '@uifabric/react-hooks';
export var PanelBasicExample = function () {
    var _a = React.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var openPanel = useConstCallback(function () { return setIsOpen(true); });
    var dismissPanel = useConstCallback(function () { return setIsOpen(false); });
    return (React.createElement("div", null,
        React.createElement(DefaultButton, { text: "Open panel", onClick: openPanel }),
        React.createElement(Panel, { headerText: "Sample panel", isOpen: isOpen, onDismiss: dismissPanel, 
            // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
            closeButtonAriaLabel: "Close" },
            React.createElement("p", null, "Content goes here."))));
};
//# sourceMappingURL=Panel.Basic.Example.js.map
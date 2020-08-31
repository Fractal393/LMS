import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { useConstCallback } from '@uifabric/react-hooks';
var explanation = "This panel is non-modal: even when it's open, it allows interacting with content outside the panel.";
export var PanelNonModalExample = function () {
    var _a = React.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var openPanel = useConstCallback(function () { return setIsOpen(true); });
    var dismissPanel = useConstCallback(function () { return setIsOpen(false); });
    return (React.createElement("div", null,
        explanation,
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(DefaultButton, { text: "Open panel", onClick: openPanel }),
        React.createElement(Panel, { headerText: "Non-modal panel", 
            // this prop makes the panel non-modal
            isBlocking: false, isOpen: isOpen, onDismiss: dismissPanel, closeButtonAriaLabel: "Close" },
            React.createElement("p", null, explanation))));
};
//# sourceMappingURL=Panel.NonModal.Example.js.map
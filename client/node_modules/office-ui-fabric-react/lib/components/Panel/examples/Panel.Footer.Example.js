import * as React from 'react';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { useConstCallback } from '@uifabric/react-hooks';
var buttonStyles = { root: { marginRight: 8 } };
export var PanelFooterExample = function () {
    var _a = React.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var openPanel = useConstCallback(function () { return setIsOpen(true); });
    var dismissPanel = useConstCallback(function () { return setIsOpen(false); });
    // This panel doesn't actually save anything; the buttons are just an example of what
    // someone might want to render in a panel footer.
    var onRenderFooterContent = useConstCallback(function () { return (React.createElement("div", null,
        React.createElement(PrimaryButton, { onClick: dismissPanel, styles: buttonStyles }, "Save"),
        React.createElement(DefaultButton, { onClick: dismissPanel }, "Cancel"))); });
    return (React.createElement("div", null,
        React.createElement(DefaultButton, { text: "Open panel", onClick: openPanel }),
        React.createElement(Panel, { isOpen: isOpen, onDismiss: dismissPanel, headerText: "Panel with footer at bottom", closeButtonAriaLabel: "Close", onRenderFooterContent: onRenderFooterContent, 
            // Stretch panel content to fill the available height so the footer is positioned
            // at the bottom of the page
            isFooterAtBottom: true },
            React.createElement("p", null, "Content goes here."))));
};
//# sourceMappingURL=Panel.Footer.Example.js.map
import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { useConstCallback } from '@uifabric/react-hooks';
var contentExplanation = 'Try typing something in this text field, closing the panel, and re-opening the panel. ' +
    " The text field's contents should still be here when the panel re-opens.";
export var PanelHiddenOnDismissExample = function () {
    var _a = React.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var openPanel = useConstCallback(function () { return setIsOpen(true); });
    var dismissPanel = useConstCallback(function () { return setIsOpen(false); });
    return (React.createElement("div", null,
        "When dismissed, this panel will be hidden instead of destroyed. This is useful for cases in which the panel contains state which must be preserved across times that the panel is opened. ",
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(DefaultButton, { text: "Open panel", onClick: openPanel }),
        React.createElement(Panel, { isOpen: isOpen, closeButtonAriaLabel: "Close", isHiddenOnDismiss: true, headerText: "Panel - Hidden on dismiss", onDismiss: dismissPanel },
            React.createElement("div", null,
                contentExplanation,
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(TextField, { ariaLabel: contentExplanation })))));
};
//# sourceMappingURL=Panel.HiddenOnDismiss.Example.js.map
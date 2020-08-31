import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { useConstCallback } from '@uifabric/react-hooks';
export var PanelControlledExample = function () {
    var _a = React.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var openPanel = useConstCallback(function () { return setIsOpen(true); });
    var dismissPanel = useConstCallback(function () { return setIsOpen(false); });
    return (React.createElement("div", null,
        "This panel can only be closed by clicking a button inside the panel content. (Don't use this behavior unless absolutely necessary.)",
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(DefaultButton, { text: "Open panel", onClick: openPanel }),
        React.createElement(Panel
        // To entirely disable the default dismiss behavior:
        // 1. Don't provide an onDismiss prop
        , { 
            // To entirely disable the default dismiss behavior:
            // 1. Don't provide an onDismiss prop
            isOpen: isOpen, hasCloseButton: false, headerText: "Controlled panel" },
            React.createElement("p", null, "This panel can only be closed by clicking the button below."),
            React.createElement(DefaultButton, { onClick: dismissPanel, text: "Close panel" }))));
};
//# sourceMappingURL=Panel.Controlled.Example.js.map
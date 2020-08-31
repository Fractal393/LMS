import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { useConstCallback } from '@uifabric/react-hooks';
var explanation = 'This panel uses "light dismiss" behavior: it can be closed by clicking or tapping ' +
    'the area outside the panel (or using the close button as usual).';
export var PanelLightDismissExample = function () {
    var _a = React.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var openPanel = useConstCallback(function () { return setIsOpen(true); });
    var dismissPanel = useConstCallback(function () { return setIsOpen(false); });
    return (React.createElement("div", null,
        explanation,
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(DefaultButton, { text: "Open panel", onClick: openPanel }),
        React.createElement(Panel, { isLightDismiss: true, isOpen: isOpen, onDismiss: dismissPanel, closeButtonAriaLabel: "Close", headerText: "Light dismiss panel" },
            React.createElement("p", null, explanation))));
};
//# sourceMappingURL=Panel.LightDismiss.Example.js.map
import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { useConstCallback } from '@uifabric/react-hooks';
var explanation = 'This panel has custom content in the navigation region (the part at the top which normally ' +
    'contains the close button). If the custom content replaces the close button, be sure to provide ' +
    'some other obvious way for users to close the panel.';
var searchboxStyles = { root: { margin: '5px', height: 'auto', width: '100%' } };
export var PanelNavigationExample = function () {
    var _a = React.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var openPanel = useConstCallback(function () { return setIsOpen(true); });
    var dismissPanel = useConstCallback(function () { return setIsOpen(false); });
    var onRenderNavigationContent = useConstCallback(function (props, defaultRender) { return (React.createElement(React.Fragment, null,
        React.createElement(SearchBox, { placeholder: "Search here...", styles: searchboxStyles, ariaLabel: "Sample search box. Does not actually search anything." }),
        // If you don't use defaultRender, be sure to provide some other way to close the panel.
        defaultRender(props))); });
    return (React.createElement("div", null,
        explanation,
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(DefaultButton, { text: "Open panel", onClick: openPanel }),
        React.createElement(Panel, { headerText: "Panel with custom navigation content", onRenderNavigationContent: onRenderNavigationContent, isOpen: isOpen, onDismiss: dismissPanel, closeButtonAriaLabel: "Close" },
            React.createElement("div", null,
                React.createElement("p", null, explanation)))));
};
//# sourceMappingURL=Panel.Navigation.Example.js.map
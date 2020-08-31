"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var Panel_1 = require("office-ui-fabric-react/lib-commonjs/Panel");
var react_hooks_1 = require("@uifabric/react-hooks");
exports.PanelBasicExample = function () {
    var _a = React.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var openPanel = react_hooks_1.useConstCallback(function () { return setIsOpen(true); });
    var dismissPanel = react_hooks_1.useConstCallback(function () { return setIsOpen(false); });
    return (React.createElement("div", null,
        React.createElement(Button_1.DefaultButton, { text: "Open panel", onClick: openPanel }),
        React.createElement(Panel_1.Panel, { headerText: "Sample panel", isOpen: isOpen, onDismiss: dismissPanel, 
            // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
            closeButtonAriaLabel: "Close" },
            React.createElement("p", null, "Content goes here."))));
};
//# sourceMappingURL=Panel.Basic.Example.js.map
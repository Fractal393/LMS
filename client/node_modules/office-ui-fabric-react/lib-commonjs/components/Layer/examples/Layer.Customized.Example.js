"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Toggle_1 = require("office-ui-fabric-react/lib-commonjs/Toggle");
var Layer_1 = require("office-ui-fabric-react/lib-commonjs/Layer");
var Panel_1 = require("office-ui-fabric-react/lib-commonjs/Panel");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var Utilities_1 = require("office-ui-fabric-react/lib-commonjs/Utilities");
var react_hooks_1 = require("@uifabric/react-hooks");
exports.LayerCustomizedExample = function () {
    var _a = react_hooks_1.useBoolean(false), isPanelOpen = _a[0], _b = _a[1], showPanel = _b.setTrue, dismissPanel = _b.setFalse;
    var _c = react_hooks_1.useBoolean(false), trapPanel = _c[0], toggleTrapPanel = _c[1].toggle;
    // Use useId() to ensure that the ID is unique on the page.
    // (It's also okay to use a plain string and manually ensure uniqueness.)
    var layerHostId = react_hooks_1.useId('layerHost');
    var scopedSettings = useLayerSettings(trapPanel, layerHostId);
    return (React.createElement("div", null,
        React.createElement("p", null,
            "A ",
            React.createElement("code", null, "Panel"),
            " is rendered, trapped in a specified container. Use ",
            React.createElement("b", null, "Show panel"),
            " to show/hide the panel (or select the X to dismiss it). Use ",
            React.createElement("b", null, "Trap panel"),
            " to release the panel from its bounds."),
        React.createElement(Toggle_1.Toggle, { label: "Show panel", inlineLabel: true, checked: isPanelOpen, onChange: isPanelOpen ? dismissPanel : showPanel }),
        React.createElement(Toggle_1.Toggle, { label: "Trap panel", inlineLabel: true, checked: trapPanel, onChange: toggleTrapPanel }),
        React.createElement(Utilities_1.Customizer, { scopedSettings: scopedSettings }, isPanelOpen && (React.createElement(Panel_1.Panel, { isOpen: true, hasCloseButton: true, headerText: "Sample panel", focusTrapZoneProps: focusTrapZoneProps, onDismiss: dismissPanel },
            "This panel ",
            trapPanel ? 'is' : 'is not',
            " trapped."))),
        React.createElement(Layer_1.LayerHost, { id: layerHostId, className: layerHostClass })));
};
var layerHostClass = Styling_1.mergeStyles({
    position: 'relative',
    height: 400,
    overflow: 'hidden',
    border: '1px solid #ccc',
});
var focusTrapZoneProps = {
    isClickableOutsideFocusTrap: true,
    forceFocusInsideTrap: false,
};
function useLayerSettings(trapPanel, layerHostId) {
    return React.useMemo(function () {
        if (trapPanel) {
            var layerProps = { hostId: layerHostId };
            return { Layer: layerProps };
        }
        return {};
    }, [trapPanel, layerHostId]);
}
//# sourceMappingURL=Layer.Customized.Example.js.map
import * as React from 'react';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { LayerHost } from 'office-ui-fabric-react/lib/Layer';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { Customizer } from 'office-ui-fabric-react/lib/Utilities';
import { useId, useBoolean } from '@uifabric/react-hooks';
export var LayerCustomizedExample = function () {
    var _a = useBoolean(false), isPanelOpen = _a[0], _b = _a[1], showPanel = _b.setTrue, dismissPanel = _b.setFalse;
    var _c = useBoolean(false), trapPanel = _c[0], toggleTrapPanel = _c[1].toggle;
    // Use useId() to ensure that the ID is unique on the page.
    // (It's also okay to use a plain string and manually ensure uniqueness.)
    var layerHostId = useId('layerHost');
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
        React.createElement(Toggle, { label: "Show panel", inlineLabel: true, checked: isPanelOpen, onChange: isPanelOpen ? dismissPanel : showPanel }),
        React.createElement(Toggle, { label: "Trap panel", inlineLabel: true, checked: trapPanel, onChange: toggleTrapPanel }),
        React.createElement(Customizer, { scopedSettings: scopedSettings }, isPanelOpen && (React.createElement(Panel, { isOpen: true, hasCloseButton: true, headerText: "Sample panel", focusTrapZoneProps: focusTrapZoneProps, onDismiss: dismissPanel },
            "This panel ",
            trapPanel ? 'is' : 'is not',
            " trapped."))),
        React.createElement(LayerHost, { id: layerHostId, className: layerHostClass })));
};
var layerHostClass = mergeStyles({
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
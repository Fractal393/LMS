import * as React from 'react';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogFooter, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { useBoolean } from '@uifabric/react-hooks';
export var LayerNestedLayersExample = function () {
    var _a = useBoolean(false), isDialogOpen = _a[0], _b = _a[1], showDialog = _b.setTrue, hideDialog = _b.setFalse;
    var _c = useBoolean(false), isPanelOpen = _c[0], _d = _c[1], showPanel = _d.setTrue, dismissPanel = _d.setFalse;
    return (React.createElement("div", null,
        React.createElement(DefaultButton, { secondaryText: "Opens the Sample Panel", onClick: showPanel, text: "Open Panel" }),
        React.createElement(Panel, { isOpen: isPanelOpen, type: PanelType.smallFixedFar, onDismiss: dismissPanel, headerText: "This panel makes use of Layer and FocusTrapZone. Focus should be trapped in the panel.", closeButtonAriaLabel: "Close" },
            React.createElement(DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: showDialog, text: "Open Dialog" }),
            React.createElement(Dialog, { hidden: !isDialogOpen, onDismiss: hideDialog, isBlocking: true, dialogContentProps: dialogContentProps, modalProps: modalProps },
                React.createElement(DialogFooter, null,
                    React.createElement(PrimaryButton, { onClick: hideDialog, text: "OK" }),
                    React.createElement(DefaultButton, { onClick: hideDialog, text: "Cancel" }))))));
};
var dialogContentProps = {
    type: DialogType.normal,
    title: 'This dialog uses Modal, which also makes use of Layer and FocusTrapZone. Focus should be trapped in the dialog.',
    subText: "Focus will move back to the panel if you press 'OK' or 'Cancel'.",
};
var modalProps = {
    isBlocking: false,
    styles: { main: { maxWidth: 450 } },
};
//# sourceMappingURL=Layer.NestedLayers.Example.js.map
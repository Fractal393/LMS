import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { useBoolean } from '@uifabric/react-hooks';
var dialogContentProps = {
    type: DialogType.normal,
    title: 'This dialog also makes use of FocusTrapZone. Focus should be trapped in the dialog.',
    subText: "Focus will move back to the panel if you press 'OK' or 'Cancel'.",
};
var modelProps = {
    titleAriaId: 'myLabelId',
    subtitleAriaId: 'mySubTextId',
    isBlocking: false,
    styles: { main: { maxWidth: 450 } },
};
export var FocusTrapZoneDialogInPanelExample = function () {
    var _a = useBoolean(false), showPanel = _a[0], toggleShowPanel = _a[1].toggle;
    var _b = useBoolean(true), hideDialog = _b[0], toggleHideDialog = _b[1].toggle;
    return (React.createElement("div", null,
        React.createElement(DefaultButton, { text: "Open Panel", secondaryText: "Opens the Sample Panel", onClick: toggleShowPanel }),
        React.createElement(Panel, { isOpen: showPanel, type: PanelType.smallFixedFar, onDismiss: toggleShowPanel, headerText: "This panel makes use of FocusTrapZone. Focus should be trapped in the panel.", closeButtonAriaLabel: "Close" },
            React.createElement(DefaultButton, { text: "Open Dialog", secondaryText: "Opens the Sample Dialog", onClick: toggleHideDialog }),
            React.createElement(Dialog, { hidden: hideDialog, onDismiss: toggleHideDialog, isBlocking: true, dialogContentProps: dialogContentProps, modalProps: modelProps },
                React.createElement(DialogFooter, null,
                    React.createElement(PrimaryButton, { onClick: toggleHideDialog, text: "OK" }),
                    React.createElement(DefaultButton, { onClick: toggleHideDialog, text: "Cancel" }))))));
};
//# sourceMappingURL=FocusTrapZone.DialogInPanel.Example.js.map
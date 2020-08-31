import * as React from 'react';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogFooter, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { useConstCallback } from '@uifabric/react-hooks';
var explanation = 'If this panel is closed using light dismiss (clicking outside the panel), a confirmation dialog will appear.';
var dialogContentProps = {
    type: DialogType.normal,
    title: 'Are you sure you want to close the panel?',
};
var dialogModalProps = {
    isBlocking: true,
    styles: { main: { maxWidth: 450 } },
};
export var PanelLightDismissCustomExample = function () {
    var _a = React.useState(false), isPanelOpen = _a[0], setIsPanelOpen = _a[1];
    var _b = React.useState(false), isDialogVisible = _b[0], setIsDialogVisible = _b[1];
    var openPanel = useConstCallback(function () { return setIsPanelOpen(true); });
    var dismissPanel = useConstCallback(function () { return setIsPanelOpen(false); });
    var showDialog = useConstCallback(function () { return setIsDialogVisible(true); });
    var hideDialog = useConstCallback(function (ev) {
        ev.preventDefault();
        setIsDialogVisible(false);
    });
    var hideDialogAndPanel = useConstCallback(function () {
        setIsPanelOpen(false);
        setIsDialogVisible(false);
    });
    return (React.createElement("div", null,
        explanation,
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(DefaultButton, { text: "Open panel", onClick: openPanel }),
        React.createElement(Panel, { isOpen: isPanelOpen, isLightDismiss: true, 
            // Use this prop to do special handling *only* for light dismiss.
            // If you provide this, the normal onDismiss won't be called for light dismiss.
            onLightDismissClick: showDialog, onDismiss: dismissPanel, headerText: "Panel with custom light dismiss behavior", closeButtonAriaLabel: "Close" },
            React.createElement("p", null, explanation)),
        React.createElement(Dialog, { hidden: !isDialogVisible, onDismiss: hideDialog, dialogContentProps: dialogContentProps, modalProps: dialogModalProps },
            React.createElement(DialogFooter, null,
                React.createElement(PrimaryButton, { onClick: hideDialogAndPanel, text: "Yes" }),
                React.createElement(DefaultButton, { onClick: hideDialog, text: "No" })))));
};
//# sourceMappingURL=Panel.LightDismissCustom.Example.js.map
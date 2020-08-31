define(["require", "exports", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Dialog", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Panel", "@uifabric/react-hooks"], function (require, exports, React, Button_1, Dialog_1, Button_2, Panel_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dialogContentProps = {
        type: Dialog_1.DialogType.normal,
        title: 'This dialog also makes use of FocusTrapZone. Focus should be trapped in the dialog.',
        subText: "Focus will move back to the panel if you press 'OK' or 'Cancel'.",
    };
    var modelProps = {
        titleAriaId: 'myLabelId',
        subtitleAriaId: 'mySubTextId',
        isBlocking: false,
        styles: { main: { maxWidth: 450 } },
    };
    exports.FocusTrapZoneDialogInPanelExample = function () {
        var _a = react_hooks_1.useBoolean(false), showPanel = _a[0], toggleShowPanel = _a[1].toggle;
        var _b = react_hooks_1.useBoolean(true), hideDialog = _b[0], toggleHideDialog = _b[1].toggle;
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { text: "Open Panel", secondaryText: "Opens the Sample Panel", onClick: toggleShowPanel }),
            React.createElement(Panel_1.Panel, { isOpen: showPanel, type: Panel_1.PanelType.smallFixedFar, onDismiss: toggleShowPanel, headerText: "This panel makes use of FocusTrapZone. Focus should be trapped in the panel.", closeButtonAriaLabel: "Close" },
                React.createElement(Button_1.DefaultButton, { text: "Open Dialog", secondaryText: "Opens the Sample Dialog", onClick: toggleHideDialog }),
                React.createElement(Dialog_1.Dialog, { hidden: hideDialog, onDismiss: toggleHideDialog, isBlocking: true, dialogContentProps: dialogContentProps, modalProps: modelProps },
                    React.createElement(Dialog_1.DialogFooter, null,
                        React.createElement(Button_2.PrimaryButton, { onClick: toggleHideDialog, text: "OK" }),
                        React.createElement(Button_1.DefaultButton, { onClick: toggleHideDialog, text: "Cancel" }))))));
    };
});
//# sourceMappingURL=FocusTrapZone.DialogInPanel.Example.js.map
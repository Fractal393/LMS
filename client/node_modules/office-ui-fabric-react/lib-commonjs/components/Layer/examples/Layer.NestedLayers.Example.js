"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var Dialog_1 = require("office-ui-fabric-react/lib-commonjs/Dialog");
var Panel_1 = require("office-ui-fabric-react/lib-commonjs/Panel");
var react_hooks_1 = require("@uifabric/react-hooks");
exports.LayerNestedLayersExample = function () {
    var _a = react_hooks_1.useBoolean(false), isDialogOpen = _a[0], _b = _a[1], showDialog = _b.setTrue, hideDialog = _b.setFalse;
    var _c = react_hooks_1.useBoolean(false), isPanelOpen = _c[0], _d = _c[1], showPanel = _d.setTrue, dismissPanel = _d.setFalse;
    return (React.createElement("div", null,
        React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Panel", onClick: showPanel, text: "Open Panel" }),
        React.createElement(Panel_1.Panel, { isOpen: isPanelOpen, type: Panel_1.PanelType.smallFixedFar, onDismiss: dismissPanel, headerText: "This panel makes use of Layer and FocusTrapZone. Focus should be trapped in the panel.", closeButtonAriaLabel: "Close" },
            React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: showDialog, text: "Open Dialog" }),
            React.createElement(Dialog_1.Dialog, { hidden: !isDialogOpen, onDismiss: hideDialog, isBlocking: true, dialogContentProps: dialogContentProps, modalProps: modalProps },
                React.createElement(Dialog_1.DialogFooter, null,
                    React.createElement(Button_1.PrimaryButton, { onClick: hideDialog, text: "OK" }),
                    React.createElement(Button_1.DefaultButton, { onClick: hideDialog, text: "Cancel" }))))));
};
var dialogContentProps = {
    type: Dialog_1.DialogType.normal,
    title: 'This dialog uses Modal, which also makes use of Layer and FocusTrapZone. Focus should be trapped in the dialog.',
    subText: "Focus will move back to the panel if you press 'OK' or 'Cancel'.",
};
var modalProps = {
    isBlocking: false,
    styles: { main: { maxWidth: 450 } },
};
//# sourceMappingURL=Layer.NestedLayers.Example.js.map
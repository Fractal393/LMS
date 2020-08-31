define(["require", "exports", "react", "office-ui-fabric-react/lib/Dialog", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Toggle", "office-ui-fabric-react/lib/ContextualMenu", "@uifabric/react-hooks"], function (require, exports, React, Dialog_1, Button_1, Toggle_1, ContextualMenu_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var modalPropsStyles = { main: { maxWidth: 450 } };
    var dragOptions = {
        moveMenuItemText: 'Move',
        closeMenuItemText: 'Close',
        menu: ContextualMenu_1.ContextualMenu,
    };
    var dialogContentProps = {
        type: Dialog_1.DialogType.normal,
        title: 'Missing Subject',
        subText: 'Do you want to send this message without a subject?',
    };
    exports.DialogModelessExample = function () {
        var _a = react_hooks_1.useBoolean(true), hideDialog = _a[0], toggleHideDialog = _a[1].toggle;
        var _b = react_hooks_1.useBoolean(false), isDraggable = _b[0], toggleIsDraggable = _b[1].toggle;
        var modalProps = React.useMemo(function () { return ({
            styles: modalPropsStyles,
            isModeless: true,
            dragOptions: isDraggable ? dragOptions : undefined,
        }); }, [isDraggable]);
        return (React.createElement(React.Fragment, null,
            React.createElement("input", { type: "text", placeholder: "Focus Me While Open" }),
            React.createElement("div", null,
                React.createElement(Toggle_1.Toggle, { label: "Is draggable", onChange: toggleIsDraggable, checked: isDraggable, disabled: !hideDialog }),
                React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: toggleHideDialog, text: "Open Dialog" }),
                React.createElement(Button_1.DefaultButton, { secondaryText: "Closes the Sample Dialog", onClick: toggleHideDialog, text: "Close Dialog" })),
            React.createElement(Dialog_1.Dialog, { hidden: hideDialog, onDismiss: toggleHideDialog, dialogContentProps: dialogContentProps, modalProps: modalProps },
                React.createElement(Dialog_1.DialogFooter, null,
                    React.createElement(Button_1.PrimaryButton, { onClick: toggleHideDialog, text: "Send" }),
                    React.createElement(Button_1.DefaultButton, { onClick: toggleHideDialog, text: "Don't send" })))));
    };
});
//# sourceMappingURL=Dialog.Modeless.Example.js.map
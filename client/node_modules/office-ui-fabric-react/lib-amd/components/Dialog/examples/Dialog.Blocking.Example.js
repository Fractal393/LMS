define(["require", "exports", "react", "office-ui-fabric-react/lib/Dialog", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/ContextualMenu", "office-ui-fabric-react/lib/SpinButton", "office-ui-fabric-react/lib/Toggle", "office-ui-fabric-react/lib/index", "@uifabric/react-hooks"], function (require, exports, React, Dialog_1, Button_1, ContextualMenu_1, SpinButton_1, Toggle_1, index_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var options = [
        { key: 'Header1', text: 'First heading', itemType: index_1.SelectableOptionMenuItemType.Header },
        { key: 'A', text: 'Option A' },
        { key: 'B', text: 'Option B' },
        { key: 'C', text: 'Option C' },
        { key: 'D', text: 'Option D' },
        { key: 'divider', text: '-', itemType: index_1.SelectableOptionMenuItemType.Divider },
        { key: 'Header2', text: 'Second heading', itemType: index_1.SelectableOptionMenuItemType.Header },
        { key: 'E', text: 'Option E' },
        { key: 'F', text: 'Option F', disabled: true },
        { key: 'G', text: 'Option G' },
        { key: 'H', text: 'Option H' },
        { key: 'I', text: 'Option I' },
        { key: 'J', text: 'Option J' },
    ];
    var dragOptions = {
        moveMenuItemText: 'Move',
        closeMenuItemText: 'Close',
        menu: ContextualMenu_1.ContextualMenu,
    };
    var modalPropsStyles = { main: { maxWidth: 450 } };
    var iconProps = { iconName: 'IncreaseIndentLegacy' };
    var dialogContentProps = {
        type: Dialog_1.DialogType.normal,
        title: 'Missing Subject',
        subText: 'Do you want to send this message without a subject?',
    };
    var log = function (text) {
        return function () {
            console.log(text);
        };
    };
    exports.DialogBlockingExample = function () {
        var _a = react_hooks_1.useBoolean(true), hideDialog = _a[0], toggleHideDialog = _a[1].toggle;
        var _b = react_hooks_1.useBoolean(false), isDraggable = _b[0], toggleIsDraggable = _b[1].toggle;
        var modalProps = React.useMemo(function () { return ({
            isBlocking: true,
            styles: modalPropsStyles,
            dragOptions: isDraggable ? dragOptions : undefined,
        }); }, [isDraggable]);
        return (React.createElement(React.Fragment, null,
            React.createElement(Toggle_1.Toggle, { label: "Is draggable", onChange: toggleIsDraggable, checked: isDraggable }),
            React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: toggleHideDialog, text: "Open Dialog" }),
            React.createElement(Dialog_1.Dialog, { hidden: hideDialog, onDismiss: toggleHideDialog, dialogContentProps: dialogContentProps, modalProps: modalProps },
                React.createElement(SpinButton_1.SpinButton, { defaultValue: "0", label: 'Number of subjects to add:', min: 0, max: 100, step: 1, iconProps: iconProps, onFocus: log('onFocus called'), onBlur: log('onBlur called'), incrementButtonAriaLabel: 'Increase value by 1', decrementButtonAriaLabel: 'Decrease value by 1' }),
                React.createElement(index_1.ComboBox, { label: "Sample subject lines you could add instead", placeholder: "Select or type an option", allowFreeform: true, autoComplete: "on", options: options }),
                React.createElement(Dialog_1.DialogFooter, null,
                    React.createElement(Button_1.PrimaryButton, { onClick: toggleHideDialog, text: "Send" }),
                    React.createElement(Button_1.DefaultButton, { onClick: toggleHideDialog, text: "Don't send" })))));
    };
});
//# sourceMappingURL=Dialog.Blocking.Example.js.map
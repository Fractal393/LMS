import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ContextualMenu } from 'office-ui-fabric-react/lib/ContextualMenu';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { ComboBox, SelectableOptionMenuItemType } from 'office-ui-fabric-react/lib/index';
import { useBoolean } from '@uifabric/react-hooks';
var options = [
    { key: 'Header1', text: 'First heading', itemType: SelectableOptionMenuItemType.Header },
    { key: 'A', text: 'Option A' },
    { key: 'B', text: 'Option B' },
    { key: 'C', text: 'Option C' },
    { key: 'D', text: 'Option D' },
    { key: 'divider', text: '-', itemType: SelectableOptionMenuItemType.Divider },
    { key: 'Header2', text: 'Second heading', itemType: SelectableOptionMenuItemType.Header },
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
    menu: ContextualMenu,
};
var modalPropsStyles = { main: { maxWidth: 450 } };
var iconProps = { iconName: 'IncreaseIndentLegacy' };
var dialogContentProps = {
    type: DialogType.normal,
    title: 'Missing Subject',
    subText: 'Do you want to send this message without a subject?',
};
var log = function (text) {
    return function () {
        console.log(text);
    };
};
export var DialogBlockingExample = function () {
    var _a = useBoolean(true), hideDialog = _a[0], toggleHideDialog = _a[1].toggle;
    var _b = useBoolean(false), isDraggable = _b[0], toggleIsDraggable = _b[1].toggle;
    var modalProps = React.useMemo(function () { return ({
        isBlocking: true,
        styles: modalPropsStyles,
        dragOptions: isDraggable ? dragOptions : undefined,
    }); }, [isDraggable]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Toggle, { label: "Is draggable", onChange: toggleIsDraggable, checked: isDraggable }),
        React.createElement(DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: toggleHideDialog, text: "Open Dialog" }),
        React.createElement(Dialog, { hidden: hideDialog, onDismiss: toggleHideDialog, dialogContentProps: dialogContentProps, modalProps: modalProps },
            React.createElement(SpinButton, { defaultValue: "0", label: 'Number of subjects to add:', min: 0, max: 100, step: 1, iconProps: iconProps, onFocus: log('onFocus called'), onBlur: log('onBlur called'), incrementButtonAriaLabel: 'Increase value by 1', decrementButtonAriaLabel: 'Decrease value by 1' }),
            React.createElement(ComboBox, { label: "Sample subject lines you could add instead", placeholder: "Select or type an option", allowFreeform: true, autoComplete: "on", options: options }),
            React.createElement(DialogFooter, null,
                React.createElement(PrimaryButton, { onClick: toggleHideDialog, text: "Send" }),
                React.createElement(DefaultButton, { onClick: toggleHideDialog, text: "Don't send" })))));
};
//# sourceMappingURL=Dialog.Blocking.Example.js.map
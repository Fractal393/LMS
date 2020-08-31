import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { ContextualMenu } from 'office-ui-fabric-react/lib/ContextualMenu';
import { useBoolean } from '@uifabric/react-hooks';
var modalPropsStyles = { main: { maxWidth: 450 } };
var dragOptions = {
    moveMenuItemText: 'Move',
    closeMenuItemText: 'Close',
    menu: ContextualMenu,
};
var dialogContentProps = {
    type: DialogType.normal,
    title: 'Missing Subject',
    subText: 'Do you want to send this message without a subject?',
};
export var DialogModelessExample = function () {
    var _a = useBoolean(true), hideDialog = _a[0], toggleHideDialog = _a[1].toggle;
    var _b = useBoolean(false), isDraggable = _b[0], toggleIsDraggable = _b[1].toggle;
    var modalProps = React.useMemo(function () { return ({
        styles: modalPropsStyles,
        isModeless: true,
        dragOptions: isDraggable ? dragOptions : undefined,
    }); }, [isDraggable]);
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { type: "text", placeholder: "Focus Me While Open" }),
        React.createElement("div", null,
            React.createElement(Toggle, { label: "Is draggable", onChange: toggleIsDraggable, checked: isDraggable, disabled: !hideDialog }),
            React.createElement(DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: toggleHideDialog, text: "Open Dialog" }),
            React.createElement(DefaultButton, { secondaryText: "Closes the Sample Dialog", onClick: toggleHideDialog, text: "Close Dialog" })),
        React.createElement(Dialog, { hidden: hideDialog, onDismiss: toggleHideDialog, dialogContentProps: dialogContentProps, modalProps: modalProps },
            React.createElement(DialogFooter, null,
                React.createElement(PrimaryButton, { onClick: toggleHideDialog, text: "Send" }),
                React.createElement(DefaultButton, { onClick: toggleHideDialog, text: "Don't send" })))));
};
//# sourceMappingURL=Dialog.Modeless.Example.js.map
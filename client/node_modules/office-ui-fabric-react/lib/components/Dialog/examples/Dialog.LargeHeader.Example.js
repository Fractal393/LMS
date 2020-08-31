import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { useBoolean } from '@uifabric/react-hooks';
var options = [
    {
        key: 'A',
        text: 'Option A',
    },
    {
        key: 'B',
        text: 'Option B',
        checked: true,
    },
    {
        key: 'C',
        text: 'Option C',
        disabled: true,
    },
];
var modelProps = {
    isBlocking: false,
    styles: { main: { maxWidth: 450 } },
};
var dialogContentProps = {
    type: DialogType.largeHeader,
    title: 'All emails together',
    subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.',
};
export var DialogLargeHeaderExample = function () {
    var _a = useBoolean(true), hideDialog = _a[0], toggleHideDialog = _a[1].toggle;
    return (React.createElement(React.Fragment, null,
        React.createElement(DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: toggleHideDialog, text: "Open Dialog" }),
        React.createElement(Dialog, { hidden: hideDialog, onDismiss: toggleHideDialog, dialogContentProps: dialogContentProps, modalProps: modelProps },
            React.createElement(ChoiceGroup, { options: options }),
            React.createElement(DialogFooter, null,
                React.createElement(PrimaryButton, { onClick: toggleHideDialog, text: "Save" }),
                React.createElement(DefaultButton, { onClick: toggleHideDialog, text: "Cancel" })))));
};
//# sourceMappingURL=Dialog.LargeHeader.Example.js.map
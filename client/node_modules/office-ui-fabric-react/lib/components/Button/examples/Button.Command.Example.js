import * as React from 'react';
import { CommandButton } from 'office-ui-fabric-react';
var menuProps = {
    items: [
        {
            key: 'emailMessage',
            text: 'Email message',
            iconProps: { iconName: 'Mail' },
        },
        {
            key: 'calendarEvent',
            text: 'Calendar event',
            iconProps: { iconName: 'Calendar' },
        },
    ],
};
var addIcon = { iconName: 'Add' };
export var ButtonCommandExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    return (React.createElement(CommandButton, { iconProps: addIcon, text: "New item", menuProps: menuProps, disabled: disabled, checked: checked }));
};
//# sourceMappingURL=Button.Command.Example.js.map
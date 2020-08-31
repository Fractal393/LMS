import * as React from 'react';
import { IconButton, Stack, Link } from 'office-ui-fabric-react';
var emojiIcon = { iconName: 'Emoji2' };
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
    directionalHintFixed: true,
};
export var ButtonIconExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    return (React.createElement("div", null,
        React.createElement(Stack, { tokens: { childrenGap: 8 }, horizontal: true },
            React.createElement(IconButton, { iconProps: emojiIcon, title: "Emoji", ariaLabel: "Emoji", disabled: disabled, checked: checked }),
            React.createElement(IconButton, { menuProps: menuProps, iconProps: emojiIcon, title: "Emoji", ariaLabel: "Emoji", disabled: disabled, checked: checked })),
        React.createElement("p", null,
            "For a list of Icons, visit our",
            ' ',
            React.createElement(Link, { href: "https://developer.microsoft.com/en-us/fluentui#/styles/icons" }, "Icon documentation"),
            ".")));
};
//# sourceMappingURL=Button.Icon.Example.js.map
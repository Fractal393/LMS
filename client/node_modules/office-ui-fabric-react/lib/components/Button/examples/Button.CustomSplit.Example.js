var _a;
import * as React from 'react';
import { IconButton, HighContrastSelector, Label, } from 'office-ui-fabric-react';
var customSplitButtonStyles = {
    splitButtonMenuButton: { backgroundColor: 'white', width: 28, border: 'none' },
    splitButtonMenuIcon: { fontSize: '7px' },
    splitButtonDivider: { backgroundColor: '#c8c8c8', width: 1, right: 26, position: 'absolute', top: 4, bottom: 4 },
    splitButtonContainer: {
        selectors: (_a = {},
            _a[HighContrastSelector] = { border: 'none' },
            _a),
    },
};
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
export var ButtonSplitCustomExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    return (React.createElement("div", null,
        React.createElement(Label, null, "Split button with icon and custom styles"),
        React.createElement(IconButton, { split: true, iconProps: addIcon, splitButtonAriaLabel: "See 2 options", "aria-roledescription": "split button", styles: customSplitButtonStyles, menuProps: menuProps, ariaLabel: "New item", onClick: _alertClicked, disabled: disabled, checked: checked })));
};
function _alertClicked() {
    alert('Clicked');
}
//# sourceMappingURL=Button.CustomSplit.Example.js.map
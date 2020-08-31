"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var customSplitButtonStyles = {
    splitButtonMenuButton: { backgroundColor: 'white', width: 28, border: 'none' },
    splitButtonMenuIcon: { fontSize: '7px' },
    splitButtonDivider: { backgroundColor: '#c8c8c8', width: 1, right: 26, position: 'absolute', top: 4, bottom: 4 },
    splitButtonContainer: {
        selectors: (_a = {},
            _a[office_ui_fabric_react_1.HighContrastSelector] = { border: 'none' },
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
exports.ButtonSplitCustomExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    return (React.createElement("div", null,
        React.createElement(office_ui_fabric_react_1.Label, null, "Split button with icon and custom styles"),
        React.createElement(office_ui_fabric_react_1.IconButton, { split: true, iconProps: addIcon, splitButtonAriaLabel: "See 2 options", "aria-roledescription": "split button", styles: customSplitButtonStyles, menuProps: menuProps, ariaLabel: "New item", onClick: _alertClicked, disabled: disabled, checked: checked })));
};
function _alertClicked() {
    alert('Clicked');
}
//# sourceMappingURL=Button.CustomSplit.Example.js.map
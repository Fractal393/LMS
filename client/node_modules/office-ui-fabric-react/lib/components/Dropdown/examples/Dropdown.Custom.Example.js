import * as React from 'react';
import { Dropdown, DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
var exampleOptions = [
    { key: 'Header', text: 'Options', itemType: DropdownMenuItemType.Header },
    { key: 'A', text: 'Option a', data: { icon: 'Memo' } },
    { key: 'B', text: 'Option b', data: { icon: 'Print' } },
    { key: 'C', text: 'Option c', data: { icon: 'ShoppingCart' } },
    { key: 'D', text: 'Option d', data: { icon: 'Train' } },
    { key: 'E', text: 'Option e', data: { icon: 'Repair' } },
    { key: 'divider_2', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'Header2', text: 'More options', itemType: DropdownMenuItemType.Header },
    { key: 'F', text: 'Option f', data: { icon: 'Running' } },
    { key: 'G', text: 'Option g', data: { icon: 'EmojiNeutral' } },
    { key: 'H', text: 'Option h', data: { icon: 'ChatInviteFriend' } },
    { key: 'I', text: 'Option i', data: { icon: 'SecurityGroup' } },
    { key: 'J', text: 'Option j', data: { icon: 'AddGroup' } },
];
var stackTokens = { childrenGap: 20 };
var iconStyles = { marginRight: '8px' };
var onRenderLabel = function (props) {
    return (React.createElement(Stack, { horizontal: true, verticalAlign: "center" },
        React.createElement(Label, null, props.label),
        React.createElement(IconButton, { iconProps: { iconName: 'Info' }, title: "Info", ariaLabel: "Info", styles: { root: { marginBottom: -3 } } })));
};
var onRenderOption = function (option) {
    return (React.createElement("div", null,
        option.data && option.data.icon && (React.createElement(Icon, { style: iconStyles, iconName: option.data.icon, "aria-hidden": "true", title: option.data.icon })),
        React.createElement("span", null, option.text)));
};
var onRenderTitle = function (options) {
    var option = options[0];
    return (React.createElement("div", null,
        option.data && option.data.icon && (React.createElement(Icon, { style: iconStyles, iconName: option.data.icon, "aria-hidden": "true", title: option.data.icon })),
        React.createElement("span", null, option.text)));
};
var onRenderCaretDown = function () {
    return React.createElement(Icon, { iconName: "CirclePlus" });
};
var onRenderPlaceholder = function (props) {
    return (React.createElement("div", { className: "dropdownExample-placeholder" },
        React.createElement(Icon, { style: iconStyles, iconName: 'MessageFill', "aria-hidden": "true" }),
        React.createElement("span", null, props.placeholder)));
};
var dropdownStyles = { dropdown: { width: 300 } };
export var DropdownCustomExample = function () { return (React.createElement(Stack, { tokens: stackTokens },
    React.createElement(Dropdown, { placeholder: "Select an option", label: "Custom example", ariaLabel: "Custom dropdown example", onRenderPlaceholder: onRenderPlaceholder, onRenderTitle: onRenderTitle, onRenderOption: onRenderOption, onRenderCaretDown: onRenderCaretDown, styles: dropdownStyles, options: exampleOptions }),
    React.createElement(Dropdown, { placeholder: "Select an option", label: "Custom label", ariaLabel: "Custom dropdown label example", styles: dropdownStyles, options: exampleOptions, onRenderLabel: onRenderLabel }))); };
//# sourceMappingURL=Dropdown.Custom.Example.js.map
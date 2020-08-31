"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Dropdown_1 = require("office-ui-fabric-react/lib-commonjs/Dropdown");
var Icon_1 = require("office-ui-fabric-react/lib-commonjs/Icon");
var Label_1 = require("office-ui-fabric-react/lib-commonjs/Label");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var exampleOptions = [
    { key: 'Header', text: 'Options', itemType: Dropdown_1.DropdownMenuItemType.Header },
    { key: 'A', text: 'Option a', data: { icon: 'Memo' } },
    { key: 'B', text: 'Option b', data: { icon: 'Print' } },
    { key: 'C', text: 'Option c', data: { icon: 'ShoppingCart' } },
    { key: 'D', text: 'Option d', data: { icon: 'Train' } },
    { key: 'E', text: 'Option e', data: { icon: 'Repair' } },
    { key: 'divider_2', text: '-', itemType: Dropdown_1.DropdownMenuItemType.Divider },
    { key: 'Header2', text: 'More options', itemType: Dropdown_1.DropdownMenuItemType.Header },
    { key: 'F', text: 'Option f', data: { icon: 'Running' } },
    { key: 'G', text: 'Option g', data: { icon: 'EmojiNeutral' } },
    { key: 'H', text: 'Option h', data: { icon: 'ChatInviteFriend' } },
    { key: 'I', text: 'Option i', data: { icon: 'SecurityGroup' } },
    { key: 'J', text: 'Option j', data: { icon: 'AddGroup' } },
];
var stackTokens = { childrenGap: 20 };
var iconStyles = { marginRight: '8px' };
var onRenderLabel = function (props) {
    return (React.createElement(Stack_1.Stack, { horizontal: true, verticalAlign: "center" },
        React.createElement(Label_1.Label, null, props.label),
        React.createElement(Button_1.IconButton, { iconProps: { iconName: 'Info' }, title: "Info", ariaLabel: "Info", styles: { root: { marginBottom: -3 } } })));
};
var onRenderOption = function (option) {
    return (React.createElement("div", null,
        option.data && option.data.icon && (React.createElement(Icon_1.Icon, { style: iconStyles, iconName: option.data.icon, "aria-hidden": "true", title: option.data.icon })),
        React.createElement("span", null, option.text)));
};
var onRenderTitle = function (options) {
    var option = options[0];
    return (React.createElement("div", null,
        option.data && option.data.icon && (React.createElement(Icon_1.Icon, { style: iconStyles, iconName: option.data.icon, "aria-hidden": "true", title: option.data.icon })),
        React.createElement("span", null, option.text)));
};
var onRenderCaretDown = function () {
    return React.createElement(Icon_1.Icon, { iconName: "CirclePlus" });
};
var onRenderPlaceholder = function (props) {
    return (React.createElement("div", { className: "dropdownExample-placeholder" },
        React.createElement(Icon_1.Icon, { style: iconStyles, iconName: 'MessageFill', "aria-hidden": "true" }),
        React.createElement("span", null, props.placeholder)));
};
var dropdownStyles = { dropdown: { width: 300 } };
exports.DropdownCustomExample = function () { return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
    React.createElement(Dropdown_1.Dropdown, { placeholder: "Select an option", label: "Custom example", ariaLabel: "Custom dropdown example", onRenderPlaceholder: onRenderPlaceholder, onRenderTitle: onRenderTitle, onRenderOption: onRenderOption, onRenderCaretDown: onRenderCaretDown, styles: dropdownStyles, options: exampleOptions }),
    React.createElement(Dropdown_1.Dropdown, { placeholder: "Select an option", label: "Custom label", ariaLabel: "Custom dropdown label example", styles: dropdownStyles, options: exampleOptions, onRenderLabel: onRenderLabel }))); };
//# sourceMappingURL=Dropdown.Custom.Example.js.map
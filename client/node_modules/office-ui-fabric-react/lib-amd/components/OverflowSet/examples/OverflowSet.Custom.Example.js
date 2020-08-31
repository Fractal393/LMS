define(["require", "exports", "react", "office-ui-fabric-react"], function (require, exports, React, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var noOp = function () { return undefined; };
    var checkboxStyles = {
        root: {
            marginRight: 5,
        },
    };
    var onRenderItem = function (item) {
        if (item.onRender) {
            return item.onRender(item);
        }
        return (React.createElement(office_ui_fabric_react_1.CommandBarButton, { role: "menuitem", iconProps: { iconName: item.icon }, menuProps: item.subMenuProps, text: item.name }));
    };
    var onRenderOverflowButton = function (overflowItems) {
        var buttonStyles = {
            root: {
                minWidth: 0,
                padding: '0 4px',
                alignSelf: 'stretch',
                height: 'auto',
            },
        };
        return (React.createElement(office_ui_fabric_react_1.CommandBarButton, { ariaLabel: "More items", role: "menuitem", styles: buttonStyles, menuIconProps: { iconName: 'More' }, menuProps: { items: overflowItems } }));
    };
    exports.OverflowSetCustomExample = function () { return (React.createElement(office_ui_fabric_react_1.OverflowSet, { "aria-label": "Custom Example", role: "menubar", items: [
            {
                key: 'checkbox',
                onRender: function () {
                    return React.createElement(office_ui_fabric_react_1.Checkbox, { inputProps: { role: 'menuitemcheckbox' }, label: "A Checkbox", styles: checkboxStyles });
                },
            },
            {
                key: 'newItem',
                name: 'New',
                icon: 'Add',
                ariaLabel: 'New. Use left and right arrow keys to navigate',
                onClick: noOp,
                subMenuProps: {
                    items: [
                        {
                            key: 'emailMessage',
                            name: 'Email message',
                            icon: 'Mail',
                        },
                        {
                            key: 'calendarEvent',
                            name: 'Calendar event',
                            icon: 'Calendar',
                        },
                    ],
                },
            },
            {
                key: 'upload',
                name: 'Upload',
                icon: 'Upload',
                onClick: noOp,
            },
            {
                key: 'share',
                name: 'Share',
                icon: 'Share',
                onClick: noOp,
            },
        ], overflowItems: [
            {
                key: 'move',
                name: 'Move to...',
                icon: 'MoveToFolder',
                onClick: noOp,
            },
            {
                key: 'copy',
                name: 'Copy to...',
                icon: 'Copy',
                onClick: noOp,
            },
            {
                key: 'rename',
                name: 'Rename...',
                icon: 'Edit',
                onClick: noOp,
            },
            {
                key: 'disabled',
                name: 'Disabled...',
                icon: 'Cancel',
                disabled: true,
                onClick: noOp,
            },
        ], onRenderOverflowButton: onRenderOverflowButton, onRenderItem: onRenderItem })); };
});
//# sourceMappingURL=OverflowSet.Custom.Example.js.map
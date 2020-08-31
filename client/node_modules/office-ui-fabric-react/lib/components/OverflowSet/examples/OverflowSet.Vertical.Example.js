import * as React from 'react';
import { CommandBarButton } from 'office-ui-fabric-react/lib/Button';
import { OverflowSet } from 'office-ui-fabric-react/lib/OverflowSet';
var noOp = function () { return undefined; };
var onRenderItemStyles = {
    root: { padding: '10px' },
};
var onRenderOverflowButtonStyles = {
    root: { padding: '10px' },
    menuIcon: { fontSize: '16px' },
};
var onRenderItem = function (item) {
    return (React.createElement(CommandBarButton, { role: "menuitem", "aria-label": item.name, styles: onRenderItemStyles, iconProps: { iconName: item.icon }, onClick: item.onClick }));
};
var onRenderOverflowButton = function (overflowItems) {
    return (React.createElement(CommandBarButton, { role: "menuitem", title: "More items", styles: onRenderOverflowButtonStyles, menuIconProps: { iconName: 'More' }, menuProps: { items: overflowItems } }));
};
export var OverflowSetVerticalExample = function () { return (React.createElement(OverflowSet, { "aria-label": "Vertical Example", role: "menubar", vertical: true, items: [
        {
            key: 'item1',
            icon: 'Add',
            name: 'Link 1',
            ariaLabel: 'New. Use left and right arrow keys to navigate',
            onClick: noOp,
        },
        {
            key: 'item2',
            icon: 'Upload',
            name: 'Link 2',
            onClick: noOp,
        },
        {
            key: 'item3',
            icon: 'Share',
            name: 'Link 3',
            onClick: noOp,
        },
    ], overflowItems: [
        {
            key: 'item4',
            icon: 'Mail',
            name: 'Overflow Link 1',
            onClick: noOp,
        },
        {
            key: 'item5',
            icon: 'Calendar',
            name: 'Overflow Link 2',
            onClick: noOp,
        },
    ], onRenderOverflowButton: onRenderOverflowButton, onRenderItem: onRenderItem })); };
//# sourceMappingURL=OverflowSet.Vertical.Example.js.map
import * as React from 'react';
import { ContextualMenu, ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import { useConstCallback } from '@uifabric/react-hooks';
export var ContextualMenuBasicExample = function () {
    var linkRef = React.useRef(null);
    var _a = React.useState(false), showContextualMenu = _a[0], setShowContextualMenu = _a[1];
    var onShowContextualMenu = useConstCallback(function () { return setShowContextualMenu(true); });
    var onHideContextualMenu = useConstCallback(function () { return setShowContextualMenu(false); });
    return (React.createElement("div", null,
        "This example directly uses ContextualMenu to show how it can be attached to arbitrary elements. The remaining examples use ContextualMenu through Fluent UI Button components.",
        React.createElement("p", null,
            React.createElement("b", null,
                React.createElement("a", { ref: linkRef, onClick: onShowContextualMenu }, "Click for ContextualMenu"))),
        React.createElement(ContextualMenu, { items: menuItems, hidden: !showContextualMenu, target: linkRef, onItemClick: onHideContextualMenu, onDismiss: onHideContextualMenu })));
};
var menuItems = [
    {
        key: 'newItem',
        text: 'New',
        onClick: function () { return console.log('New clicked'); },
    },
    {
        key: 'divider_1',
        itemType: ContextualMenuItemType.Divider,
    },
    {
        key: 'rename',
        text: 'Rename',
        onClick: function () { return console.log('Rename clicked'); },
    },
    {
        key: 'edit',
        text: 'Edit',
        onClick: function () { return console.log('Edit clicked'); },
    },
    {
        key: 'properties',
        text: 'Properties',
        onClick: function () { return console.log('Properties clicked'); },
    },
    {
        key: 'linkNoTarget',
        text: 'Link same window',
        href: 'http://bing.com',
    },
    {
        key: 'linkWithTarget',
        text: 'Link new window',
        href: 'http://bing.com',
        target: '_blank',
    },
    {
        key: 'linkWithOnClick',
        name: 'Link click',
        href: 'http://bing.com',
        onClick: function (ev) {
            alert('Link clicked');
            ev.preventDefault();
        },
        target: '_blank',
    },
    {
        key: 'disabled',
        text: 'Disabled item',
        disabled: true,
        onClick: function () { return console.error('Disabled item should not be clickable.'); },
    },
];
//# sourceMappingURL=ContextualMenu.Basic.Example.js.map
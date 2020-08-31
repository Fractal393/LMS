define(["require", "exports", "react", "office-ui-fabric-react/lib/ContextualMenu", "@uifabric/react-hooks"], function (require, exports, React, ContextualMenu_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContextualMenuBasicExample = function () {
        var linkRef = React.useRef(null);
        var _a = React.useState(false), showContextualMenu = _a[0], setShowContextualMenu = _a[1];
        var onShowContextualMenu = react_hooks_1.useConstCallback(function () { return setShowContextualMenu(true); });
        var onHideContextualMenu = react_hooks_1.useConstCallback(function () { return setShowContextualMenu(false); });
        return (React.createElement("div", null,
            "This example directly uses ContextualMenu to show how it can be attached to arbitrary elements. The remaining examples use ContextualMenu through Fluent UI Button components.",
            React.createElement("p", null,
                React.createElement("b", null,
                    React.createElement("a", { ref: linkRef, onClick: onShowContextualMenu }, "Click for ContextualMenu"))),
            React.createElement(ContextualMenu_1.ContextualMenu, { items: menuItems, hidden: !showContextualMenu, target: linkRef, onItemClick: onHideContextualMenu, onDismiss: onHideContextualMenu })));
    };
    var menuItems = [
        {
            key: 'newItem',
            text: 'New',
            onClick: function () { return console.log('New clicked'); },
        },
        {
            key: 'divider_1',
            itemType: ContextualMenu_1.ContextualMenuItemType.Divider,
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
});
//# sourceMappingURL=ContextualMenu.Basic.Example.js.map
import * as React from 'react';
import { ContextualMenuItemType, } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
export var ContextualMenuPersistedExample = function () {
    return React.createElement(DefaultButton, { text: "Click for ContextualMenu", persistMenu: true, menuProps: menuProps });
};
var menuItems = [
    {
        key: 'newItem',
        subMenuProps: {
            items: [
                {
                    key: 'emailMessage',
                    text: 'Email message',
                    title: 'Create an email',
                },
                {
                    key: 'calendarEvent',
                    text: 'Calendar event',
                    title: 'Create a calendar event',
                },
            ],
        },
        href: 'https://bing.com',
        text: 'New',
        target: '_blank',
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
var menuProps = {
    shouldFocusOnMount: true,
    shouldFocusOnContainer: true,
    items: menuItems,
};
//# sourceMappingURL=ContextualMenu.Persisted.Example.js.map
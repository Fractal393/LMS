"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ContextualMenu_1 = require("office-ui-fabric-react/lib-commonjs/ContextualMenu");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
exports.ContextualMenuSectionExample = function () {
    return React.createElement(Button_1.DefaultButton, { text: "Click for ContextualMenu", menuProps: menuProps });
};
var menuItems = [
    {
        key: 'section1',
        itemType: ContextualMenu_1.ContextualMenuItemType.Section,
        sectionProps: {
            topDivider: true,
            bottomDivider: true,
            title: 'Actions',
            items: [
                {
                    key: 'newItem',
                    text: 'New',
                },
                {
                    key: 'deleteItem',
                    text: 'Delete',
                },
            ],
        },
    },
    {
        key: 'section2',
        itemType: ContextualMenu_1.ContextualMenuItemType.Section,
        sectionProps: {
            title: 'Social',
            items: [
                {
                    key: 'share',
                    text: 'Share',
                },
                {
                    key: 'print',
                    text: 'Print',
                },
                {
                    key: 'music',
                    text: 'Music',
                },
            ],
        },
    },
    {
        key: 'section3',
        itemType: ContextualMenu_1.ContextualMenuItemType.Section,
        sectionProps: {
            title: 'Navigation',
            items: [
                {
                    key: 'Bing',
                    text: 'Go to Bing',
                    href: 'http://www.bing.com',
                    target: '_blank',
                },
            ],
        },
    },
];
var menuProps = { items: menuItems };
//# sourceMappingURL=ContextualMenu.Section.Example.js.map
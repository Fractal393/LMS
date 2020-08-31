"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ContextualMenu_1 = require("office-ui-fabric-react/lib-commonjs/ContextualMenu");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
exports.ContextualMenuWithScrollBarExample = function () {
    return React.createElement(Button_1.DefaultButton, { text: "Click for ContextualMenu", menuProps: menuProps });
};
var menuItems = [
    {
        key: 'newItem',
        text: 'New',
    },
    {
        key: 'item 2',
        text: 'Item with a very long label text',
    },
    {
        key: 'edit',
        text: 'Edit',
    },
    {
        key: 'properties',
        text: 'Properties',
    },
    {
        key: 'disabled',
        text: 'Disabled item',
        disabled: true,
    },
];
var menuProps = {
    shouldFocusOnMount: true,
    directionalHint: ContextualMenu_1.DirectionalHint.bottomRightEdge,
    directionalHintFixed: true,
    items: menuItems,
    calloutProps: {
        calloutMaxHeight: 65,
    },
};
//# sourceMappingURL=ContextualMenu.ScrollBar.Example.js.map
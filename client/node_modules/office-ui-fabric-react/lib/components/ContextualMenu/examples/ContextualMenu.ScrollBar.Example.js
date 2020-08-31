import * as React from 'react';
import { DirectionalHint } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
export var ContextualMenuWithScrollBarExample = function () {
    return React.createElement(DefaultButton, { text: "Click for ContextualMenu", menuProps: menuProps });
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
    directionalHint: DirectionalHint.bottomRightEdge,
    directionalHintFixed: true,
    items: menuItems,
    calloutProps: {
        calloutMaxHeight: 65,
    },
};
//# sourceMappingURL=ContextualMenu.ScrollBar.Example.js.map
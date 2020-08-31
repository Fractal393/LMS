import * as React from 'react';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { OverflowSet } from 'office-ui-fabric-react/lib/OverflowSet';
var noOp = function () { return undefined; };
var onRenderItem = function (item) {
    return (React.createElement(Link, { role: "menuitem", styles: { root: { marginRight: 10 } }, onClick: item.onClick }, item.name));
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
    return (React.createElement(IconButton, { role: "menuitem", title: "More options", styles: buttonStyles, menuIconProps: { iconName: 'More' }, menuProps: { items: overflowItems } }));
};
export var OverflowSetBasicReversedExample = function () { return (React.createElement(OverflowSet, { "aria-label": "Basic Menu Example", role: "menubar", items: [
        {
            key: 'item3',
            name: 'Link 3',
            onClick: noOp,
        },
        {
            key: 'item2',
            name: 'Link 2',
            onClick: noOp,
        },
        {
            key: 'item1',
            name: 'Link 1',
            onClick: noOp,
        },
    ], overflowItems: [
        {
            key: 'item4',
            name: 'Overflow Link 1',
            onClick: noOp,
        },
        {
            key: 'item5',
            name: 'Overflow Link 2',
            onClick: noOp,
        },
    ], onRenderOverflowButton: onRenderOverflowButton, onRenderItem: onRenderItem, overflowSide: 'start' })); };
//# sourceMappingURL=OverflowSet.BasicReversed.Example.js.map
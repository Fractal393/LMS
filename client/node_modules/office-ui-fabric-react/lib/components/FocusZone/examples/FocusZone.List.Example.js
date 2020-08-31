import * as React from 'react';
import { KeyCodes, createArray, getRTLSafeKeyCode } from 'office-ui-fabric-react/lib/Utilities';
import { useConst } from '@uifabric/react-hooks';
import { TextField } from 'office-ui-fabric-react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { DetailsRow, Selection, SelectionMode, } from 'office-ui-fabric-react/lib/DetailsList';
var ITEMS = createArray(10, function (index) { return ({
    key: index.toString(),
    name: 'Item-' + index,
    url: 'http://placehold.it/100x' + (100 + index),
}); });
var COLUMNS = [
    {
        key: 'name',
        name: 'Name',
        fieldName: 'name',
        minWidth: 100,
    },
    {
        key: 'link',
        name: 'Link',
        fieldName: '',
        minWidth: 100,
        onRender: function (item) { return React.createElement(Link, { href: item.url }, item.url); },
    },
    {
        key: 'textfield',
        name: 'Link',
        fieldName: '',
        minWidth: 130,
        onRender: function (item) { return React.createElement(TextField, { readOnly: true, defaultValue: 'ReadOnly ' + item.name }); },
    },
    {
        key: 'textfield2',
        name: 'Link2',
        fieldName: '',
        minWidth: 130,
        onRender: function (item) { return React.createElement(TextField, { defaultValue: item.name }); },
    },
];
var detailsRowStyles = { root: { display: 'block', width: '100%' } };
export var FocusZoneListExample = function () {
    //  Initialize the selection when the component is first rendered (same instance will be reused)
    var selection = useConst(function () {
        var sel = new Selection();
        sel.setItems(ITEMS);
        return sel;
    });
    return (React.createElement(FocusZone, { direction: FocusZoneDirection.vertical, isCircularNavigation: true, shouldEnterInnerZone: _shouldEnterInnerZone, role: "grid" }, ITEMS.map(function (item, index) { return (React.createElement(DetailsRow, { key: item.name, item: item, itemIndex: index, columns: COLUMNS, selectionMode: SelectionMode.none, selection: selection, styles: detailsRowStyles })); })));
};
function _shouldEnterInnerZone(ev) {
    return ev.which === getRTLSafeKeyCode(KeyCodes.right);
}
//# sourceMappingURL=FocusZone.List.Example.js.map
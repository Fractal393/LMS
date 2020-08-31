"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Utilities_1 = require("office-ui-fabric-react/lib-commonjs/Utilities");
var react_hooks_1 = require("@uifabric/react-hooks");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var Link_1 = require("office-ui-fabric-react/lib-commonjs/Link");
var FocusZone_1 = require("office-ui-fabric-react/lib-commonjs/FocusZone");
var DetailsList_1 = require("office-ui-fabric-react/lib-commonjs/DetailsList");
var ITEMS = Utilities_1.createArray(10, function (index) { return ({
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
        onRender: function (item) { return React.createElement(Link_1.Link, { href: item.url }, item.url); },
    },
    {
        key: 'textfield',
        name: 'Link',
        fieldName: '',
        minWidth: 130,
        onRender: function (item) { return React.createElement(office_ui_fabric_react_1.TextField, { readOnly: true, defaultValue: 'ReadOnly ' + item.name }); },
    },
    {
        key: 'textfield2',
        name: 'Link2',
        fieldName: '',
        minWidth: 130,
        onRender: function (item) { return React.createElement(office_ui_fabric_react_1.TextField, { defaultValue: item.name }); },
    },
];
var detailsRowStyles = { root: { display: 'block', width: '100%' } };
exports.FocusZoneListExample = function () {
    //  Initialize the selection when the component is first rendered (same instance will be reused)
    var selection = react_hooks_1.useConst(function () {
        var sel = new DetailsList_1.Selection();
        sel.setItems(ITEMS);
        return sel;
    });
    return (React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.vertical, isCircularNavigation: true, shouldEnterInnerZone: _shouldEnterInnerZone, role: "grid" }, ITEMS.map(function (item, index) { return (React.createElement(DetailsList_1.DetailsRow, { key: item.name, item: item, itemIndex: index, columns: COLUMNS, selectionMode: DetailsList_1.SelectionMode.none, selection: selection, styles: detailsRowStyles })); })));
};
function _shouldEnterInnerZone(ev) {
    return ev.which === Utilities_1.getRTLSafeKeyCode(Utilities_1.KeyCodes.right);
}
//# sourceMappingURL=FocusZone.List.Example.js.map
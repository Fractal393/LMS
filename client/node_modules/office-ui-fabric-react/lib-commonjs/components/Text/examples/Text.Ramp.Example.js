"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Text_1 = require("office-ui-fabric-react/lib-commonjs/Text");
var DetailsList_1 = require("office-ui-fabric-react/lib-commonjs/DetailsList");
var React = require("react");
var testText = 'The quick brown fox jumped over the lazy dog.';
var variants = [
    { name: 'tiny' },
    { name: 'xSmall' },
    { name: 'small' },
    { name: 'smallPlus' },
    { name: 'medium' },
    { name: 'mediumPlus' },
    { name: 'large' },
    { name: 'xLarge' },
    { name: 'xxLarge' },
    { name: 'mega' },
];
var renderDetailsRowStyles = { root: { color: 'inherit' } };
var renderDetailsRow = function (props) { return React.createElement(DetailsList_1.DetailsRow, tslib_1.__assign({}, props, { styles: renderDetailsRowStyles })); };
var allItems = [];
variants.forEach(function (setting, index) {
    return allItems.push({
        key: setting.name + index,
        variant: setting.name,
        example: (React.createElement(Text_1.Text, { key: setting.name + 'text' + index, variant: setting.name, nowrap: true, block: true }, testText)),
    });
});
var columns = [
    { key: 'column1', name: 'Variant', fieldName: 'variant', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'column2', name: 'Example', fieldName: 'example', minWidth: 200, maxWidth: 1600, isResizable: true },
];
exports.TextRampExample = function () { return (React.createElement(DetailsList_1.DetailsList, { items: allItems, columns: columns, setKey: "set", selectionMode: DetailsList_1.SelectionMode.none, layoutMode: DetailsList_1.DetailsListLayoutMode.fixedColumns, onRenderRow: renderDetailsRow })); };
//# sourceMappingURL=Text.Ramp.Example.js.map
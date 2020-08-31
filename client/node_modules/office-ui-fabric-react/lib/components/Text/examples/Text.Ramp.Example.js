import { __assign } from "tslib";
import { Text } from 'office-ui-fabric-react/lib/Text';
import { DetailsList, DetailsListLayoutMode, SelectionMode, DetailsRow, } from 'office-ui-fabric-react/lib/DetailsList';
import * as React from 'react';
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
var renderDetailsRow = function (props) { return React.createElement(DetailsRow, __assign({}, props, { styles: renderDetailsRowStyles })); };
var allItems = [];
variants.forEach(function (setting, index) {
    return allItems.push({
        key: setting.name + index,
        variant: setting.name,
        example: (React.createElement(Text, { key: setting.name + 'text' + index, variant: setting.name, nowrap: true, block: true }, testText)),
    });
});
var columns = [
    { key: 'column1', name: 'Variant', fieldName: 'variant', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'column2', name: 'Example', fieldName: 'example', minWidth: 200, maxWidth: 1600, isResizable: true },
];
export var TextRampExample = function () { return (React.createElement(DetailsList, { items: allItems, columns: columns, setKey: "set", selectionMode: SelectionMode.none, layoutMode: DetailsListLayoutMode.fixedColumns, onRenderRow: renderDetailsRow })); };
//# sourceMappingURL=Text.Ramp.Example.js.map
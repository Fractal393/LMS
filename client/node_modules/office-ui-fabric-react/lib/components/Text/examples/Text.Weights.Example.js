import { Text } from 'office-ui-fabric-react/lib/Text';
import { DetailsList, DetailsListLayoutMode, SelectionMode } from 'office-ui-fabric-react/lib/DetailsList';
import * as React from 'react';
var TestText = 'The quick brown fox jumped over the lazy dog.';
var Weights = ['400', '600', '700'];
var Items = Weights.map(function (weight) { return ({
    key: weight,
    variant: weight,
    example: React.createElement(Text, { style: { fontWeight: Number(weight) } }, TestText),
}); });
var Columns = [
    { key: 'column1', name: 'Variant', fieldName: 'variant', minWidth: 100, maxWidth: 150, isResizable: true },
    {
        key: 'column2',
        name: 'Example',
        fieldName: 'example',
        minWidth: 200,
        maxWidth: 1600,
        isResizable: true,
        onRender: function (item) { return item.example; },
    },
];
export var TextRampExample = function () { return (React.createElement(DetailsList, { items: Items, columns: Columns, setKey: "set", selectionMode: SelectionMode.none, layoutMode: DetailsListLayoutMode.fixedColumns })); };
//# sourceMappingURL=Text.Weights.Example.js.map
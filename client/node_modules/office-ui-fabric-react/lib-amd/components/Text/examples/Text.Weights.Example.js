define(["require", "exports", "office-ui-fabric-react/lib/Text", "office-ui-fabric-react/lib/DetailsList", "react"], function (require, exports, Text_1, DetailsList_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TestText = 'The quick brown fox jumped over the lazy dog.';
    var Weights = ['400', '600', '700'];
    var Items = Weights.map(function (weight) { return ({
        key: weight,
        variant: weight,
        example: React.createElement(Text_1.Text, { style: { fontWeight: Number(weight) } }, TestText),
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
    exports.TextRampExample = function () { return (React.createElement(DetailsList_1.DetailsList, { items: Items, columns: Columns, setKey: "set", selectionMode: DetailsList_1.SelectionMode.none, layoutMode: DetailsList_1.DetailsListLayoutMode.fixedColumns })); };
});
//# sourceMappingURL=Text.Weights.Example.js.map
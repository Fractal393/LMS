"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var HoverCard_1 = require("office-ui-fabric-react/lib-commonjs/HoverCard");
var DetailsList_1 = require("office-ui-fabric-react/lib-commonjs/DetailsList");
var example_data_1 = require("@uifabric/example-data");
var Image_1 = require("office-ui-fabric-react/lib-commonjs/Image");
var Fabric_1 = require("office-ui-fabric-react/lib-commonjs/Fabric");
var Color_1 = require("office-ui-fabric-react/lib-commonjs/Color");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var itemClass = Styling_1.mergeStyles({
    selectors: {
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer',
        },
    },
});
var items = example_data_1.createListItems(10);
var buildColumn = function () {
    return DetailsList_1.buildColumns(items).filter(function (column) { return column.name === 'color' || column.name === 'width' || column.name === 'height'; });
};
var columns = buildColumn();
var onRenderPlainCard = function (item) {
    var src = item.thumbnail + ("/" + Color_1.getColorFromString(item.color).hex);
    return React.createElement(Image_1.Image, { src: src, width: item.width, height: item.height, imageFit: Image_1.ImageFit.cover });
};
var onRenderItemColumn = function (item, index, column) {
    var plainCardProps = {
        onRenderPlainCard: onRenderPlainCard,
        renderData: item,
    };
    if (column.key === 'color') {
        return (React.createElement(HoverCard_1.HoverCard, { plainCardProps: plainCardProps, instantOpenOnClick: true, type: HoverCard_1.HoverCardType.plain },
            React.createElement("div", { className: itemClass, style: { color: item.color } }, item.color)));
    }
    return item[column.key];
};
exports.HoverCardPlainCardExample = function () {
    return (React.createElement(Fabric_1.Fabric, null,
        React.createElement("p", null,
            "Hover over the ",
            React.createElement("i", null, "color"),
            " cell of a row item to see the card."),
        React.createElement(DetailsList_1.DetailsList, { setKey: "hoverSet", items: items, columns: columns, onRenderItemColumn: onRenderItemColumn })));
};
//# sourceMappingURL=HoverCard.PlainCard.Example.js.map
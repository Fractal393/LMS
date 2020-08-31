import * as React from 'react';
import { HoverCard, HoverCardType } from 'office-ui-fabric-react/lib/HoverCard';
import { DetailsList, buildColumns } from 'office-ui-fabric-react/lib/DetailsList';
import { createListItems } from '@uifabric/example-data';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { getColorFromString } from 'office-ui-fabric-react/lib/Color';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
var itemClass = mergeStyles({
    selectors: {
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer',
        },
    },
});
var items = createListItems(10);
var buildColumn = function () {
    return buildColumns(items).filter(function (column) { return column.name === 'color' || column.name === 'width' || column.name === 'height'; });
};
var columns = buildColumn();
var onRenderPlainCard = function (item) {
    var src = item.thumbnail + ("/" + getColorFromString(item.color).hex);
    return React.createElement(Image, { src: src, width: item.width, height: item.height, imageFit: ImageFit.cover });
};
var onRenderItemColumn = function (item, index, column) {
    var plainCardProps = {
        onRenderPlainCard: onRenderPlainCard,
        renderData: item,
    };
    if (column.key === 'color') {
        return (React.createElement(HoverCard, { plainCardProps: plainCardProps, instantOpenOnClick: true, type: HoverCardType.plain },
            React.createElement("div", { className: itemClass, style: { color: item.color } }, item.color)));
    }
    return item[column.key];
};
export var HoverCardPlainCardExample = function () {
    return (React.createElement(Fabric, null,
        React.createElement("p", null,
            "Hover over the ",
            React.createElement("i", null, "color"),
            " cell of a row item to see the card."),
        React.createElement(DetailsList, { setKey: "hoverSet", items: items, columns: columns, onRenderItemColumn: onRenderItemColumn })));
};
//# sourceMappingURL=HoverCard.PlainCard.Example.js.map
import * as React from 'react';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { List } from 'office-ui-fabric-react/lib/List';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { mergeStyleSets, getTheme, getFocusStyle } from 'office-ui-fabric-react/lib/Styling';
import { createListItems } from '@uifabric/example-data';
import { useConst } from '@uifabric/react-hooks';
var theme = getTheme();
var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
var classNames = mergeStyleSets({
    container: {
        overflow: 'auto',
        maxHeight: 500,
    },
    itemCell: [
        getFocusStyle(theme, { inset: -1 }),
        {
            minHeight: 54,
            padding: 10,
            boxSizing: 'border-box',
            borderBottom: "1px solid " + semanticColors.bodyDivider,
            display: 'flex',
            selectors: {
                '&:hover': { background: palette.neutralLight },
            },
        },
    ],
    itemImage: {
        flexShrink: 0,
    },
    itemContent: {
        marginLeft: 10,
        overflow: 'hidden',
        flexGrow: 1,
    },
    itemName: [
        fonts.xLarge,
        {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
    ],
    itemIndex: {
        fontSize: fonts.small.fontSize,
        color: palette.neutralTertiary,
        marginBottom: 10,
    },
    chevron: {
        alignSelf: 'center',
        marginLeft: 10,
        color: palette.neutralTertiary,
        fontSize: fonts.large.fontSize,
        flexShrink: 0,
    },
});
var onRenderCell = function (item, index, isScrolling) {
    return (React.createElement("div", { className: classNames.itemCell, "data-is-focusable": true },
        React.createElement(Image, { className: classNames.itemImage, src: isScrolling ? undefined : item.thumbnail, width: 50, height: 50, imageFit: ImageFit.cover }),
        React.createElement("div", { className: classNames.itemContent },
            React.createElement("div", { className: classNames.itemName }, item.name),
            React.createElement("div", { className: classNames.itemIndex }, "Item " + index))));
};
export var ListGhostingExample = function () {
    var items = useConst(function () { return createListItems(5000); });
    return (React.createElement(FocusZone, { direction: FocusZoneDirection.vertical },
        React.createElement("div", { className: classNames.container, "data-is-scrollable": true },
            React.createElement(List, { items: items, onRenderCell: onRenderCell }))));
};
//# sourceMappingURL=List.Ghosting.Example.js.map
import * as React from 'react';
import { getTheme, mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { lorem } from '@uifabric/example-data';
import { ScrollablePane } from 'office-ui-fabric-react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';
var theme = getTheme();
var classNames = mergeStyleSets({
    wrapper: {
        height: '40vh',
        position: 'relative',
        maxHeight: 'inherit',
    },
    pane: {
        maxWidth: 400,
        border: '1px solid ' + theme.palette.neutralLight,
    },
    sticky: {
        color: theme.palette.neutralDark,
        padding: '5px 20px 5px 10px',
        fontSize: '13px',
        borderTop: '1px solid ' + theme.palette.black,
        borderBottom: '1px solid ' + theme.palette.black,
    },
    textContent: {
        padding: '15px 10px',
    },
});
var scrollablePaneStyles = { root: classNames.pane };
var colors = ['#eaeaea', '#dadada', '#d0d0d0', '#c8c8c8', '#a6a6a6', '#c7e0f4', '#71afe5', '#eff6fc', '#deecf9'];
var items = Array.from({ length: 5 }).map(function (item, index) { return ({
    color: colors.splice(Math.floor(Math.random() * colors.length), 1)[0],
    text: lorem(200),
    index: index,
}); });
var createContentArea = function (item) { return (React.createElement("div", { key: item.index, style: {
        backgroundColor: item.color,
    } },
    React.createElement(Sticky, { stickyPosition: StickyPositionType.Both },
        React.createElement("div", { className: classNames.sticky },
            "Sticky Component #",
            item.index + 1)),
    React.createElement("div", { className: classNames.textContent }, item.text))); };
var contentAreas = items.map(createContentArea);
export var ScrollablePaneDefaultExample = function () { return (React.createElement("div", { className: classNames.wrapper },
    React.createElement(ScrollablePane, { styles: scrollablePaneStyles }, contentAreas))); };
//# sourceMappingURL=ScrollablePane.Default.Example.js.map
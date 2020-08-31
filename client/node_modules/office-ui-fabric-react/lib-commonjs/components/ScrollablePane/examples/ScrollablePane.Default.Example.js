"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var example_data_1 = require("@uifabric/example-data");
var ScrollablePane_1 = require("office-ui-fabric-react/lib-commonjs/ScrollablePane");
var Sticky_1 = require("office-ui-fabric-react/lib-commonjs/Sticky");
var theme = Styling_1.getTheme();
var classNames = Styling_1.mergeStyleSets({
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
    text: example_data_1.lorem(200),
    index: index,
}); });
var createContentArea = function (item) { return (React.createElement("div", { key: item.index, style: {
        backgroundColor: item.color,
    } },
    React.createElement(Sticky_1.Sticky, { stickyPosition: Sticky_1.StickyPositionType.Both },
        React.createElement("div", { className: classNames.sticky },
            "Sticky Component #",
            item.index + 1)),
    React.createElement("div", { className: classNames.textContent }, item.text))); };
var contentAreas = items.map(createContentArea);
exports.ScrollablePaneDefaultExample = function () { return (React.createElement("div", { className: classNames.wrapper },
    React.createElement(ScrollablePane_1.ScrollablePane, { styles: scrollablePaneStyles }, contentAreas))); };
//# sourceMappingURL=ScrollablePane.Default.Example.js.map
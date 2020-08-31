define(["require", "exports", "react", "office-ui-fabric-react/lib/HoverCard", "office-ui-fabric-react/lib/Fabric", "office-ui-fabric-react/lib/DetailsList", "@uifabric/example-data", "office-ui-fabric-react/lib/Styling"], function (require, exports, React, HoverCard_1, Fabric_1, DetailsList_1, example_data_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var classNames = Styling_1.mergeStyleSets({
        compactCard: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
        },
        expandedCard: {
            padding: '16px 24px',
        },
        item: {
            selectors: {
                '&:hover': {
                    textDecoration: 'underline',
                    cursor: 'pointer',
                },
            },
        },
    });
    var items = example_data_1.createListItems(10);
    var buildColumn = function () {
        return DetailsList_1.buildColumns(items).filter(function (column) { return column.name === 'location' || column.name === 'key'; });
    };
    var onRenderCompactCard = function (item) {
        return (React.createElement("div", { className: classNames.compactCard },
            React.createElement("a", { target: "_blank", href: "http://wikipedia.org/wiki/" + item.location }, item.location)));
    };
    var columns = buildColumn();
    var onRenderExpandedCard = function (item) {
        return (React.createElement("div", { className: classNames.expandedCard },
            item.description,
            React.createElement(DetailsList_1.DetailsList, { setKey: "expandedCardSet", items: items, columns: columns })));
    };
    var onRenderItemColumn = function (item, index, column) {
        var expandingCardProps = {
            onRenderCompactCard: onRenderCompactCard,
            onRenderExpandedCard: onRenderExpandedCard,
            renderData: item,
        };
        if (column.key === 'location') {
            return (React.createElement(HoverCard_1.HoverCard, { expandingCardProps: expandingCardProps, instantOpenOnClick: true },
                React.createElement("div", { className: classNames.item }, item.location)));
        }
        return item[column.key];
    };
    exports.HoverCardBasicExample = function () { return (React.createElement(Fabric_1.Fabric, null,
        React.createElement("p", null,
            "Hover over the ",
            React.createElement("i", null, "location"),
            " cell of a row item to see the card or use the keyboard to navigate to it."),
        React.createElement("p", null, "When using the keyboard to tab to it, the card will open but navigation inside of it will not be available."),
        React.createElement(DetailsList_1.DetailsList, { setKey: "hoverSet", items: items, columns: columns, onRenderItemColumn: onRenderItemColumn }))); };
});
//# sourceMappingURL=HoverCard.Basic.Example.js.map
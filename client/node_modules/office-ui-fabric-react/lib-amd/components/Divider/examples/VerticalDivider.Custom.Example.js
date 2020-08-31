define(["require", "exports", "react", "office-ui-fabric-react/lib/Divider", "office-ui-fabric-react/lib/Styling", "office-ui-fabric-react/lib/Utilities"], function (require, exports, React, Divider_1, Styling_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getExampleClassNames = Utilities_1.memoizeFunction(function () {
        var exampleHeight = 40;
        var theme = Styling_1.getTheme();
        return Styling_1.mergeStyleSets({
            wrapper: {
                height: 40,
                backgroundColor: theme.semanticColors.bodyStandoutBackground,
                color: theme.semanticColors.bodyText,
                padding: '0',
            },
            text: {
                display: 'inline-block',
                padding: '0 8px',
                height: exampleHeight,
                lineHeight: exampleHeight,
                verticalAlign: 'top',
                margin: 'auto',
            },
        });
    });
    var VerticalDividerStyles = {
        wrapper: {
            height: 40,
            backgroundColor: '#F4F4F4',
            padding: 0,
        },
        divider: {
            height: 28,
            backgroundColor: 'pink',
        },
    };
    exports.VerticalDividerCustomExample = function () {
        var exampleClassNames = getExampleClassNames();
        return (React.createElement("div", { className: exampleClassNames.wrapper },
            React.createElement("p", { className: exampleClassNames.text }, " Some text before the divider. "),
            React.createElement(Divider_1.VerticalDivider, { styles: VerticalDividerStyles }),
            React.createElement("p", { className: exampleClassNames.text }, "Some text after the divider. ")));
    };
});
//# sourceMappingURL=VerticalDivider.Custom.Example.js.map
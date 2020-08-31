"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Divider_1 = require("office-ui-fabric-react/lib-commonjs/Divider");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var Utilities_1 = require("office-ui-fabric-react/lib-commonjs/Utilities");
var getExampleClassNames = Utilities_1.memoizeFunction(function () {
    var exampleHeight = 40;
    var theme = Styling_1.getTheme();
    return Styling_1.mergeStyleSets({
        wrapper: {
            height: 40,
            backgroundColor: theme.semanticColors.bodyStandoutBackground,
            color: theme.semanticColors.bodyText,
            padding: '0 10px',
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
exports.VerticalDividerBasicExample = function () {
    var classNames = getExampleClassNames();
    return (React.createElement("div", { className: classNames.wrapper },
        React.createElement("p", { className: classNames.text }, "Some text before the divider. "),
        React.createElement(Divider_1.VerticalDivider, null),
        React.createElement("p", { className: classNames.text }, "Some text after the divider. ")));
};
//# sourceMappingURL=VerticalDivider.Basic.Example.js.map
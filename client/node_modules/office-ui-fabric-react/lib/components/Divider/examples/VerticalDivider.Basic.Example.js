import * as React from 'react';
import { VerticalDivider } from 'office-ui-fabric-react/lib/Divider';
import { getTheme, mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
var getExampleClassNames = memoizeFunction(function () {
    var exampleHeight = 40;
    var theme = getTheme();
    return mergeStyleSets({
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
export var VerticalDividerBasicExample = function () {
    var classNames = getExampleClassNames();
    return (React.createElement("div", { className: classNames.wrapper },
        React.createElement("p", { className: classNames.text }, "Some text before the divider. "),
        React.createElement(VerticalDivider, null),
        React.createElement("p", { className: classNames.text }, "Some text after the divider. ")));
};
//# sourceMappingURL=VerticalDivider.Basic.Example.js.map
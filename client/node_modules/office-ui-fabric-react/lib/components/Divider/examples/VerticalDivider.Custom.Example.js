import * as React from 'react';
import { VerticalDivider } from 'office-ui-fabric-react/lib/Divider';
import { mergeStyleSets, getTheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
var getExampleClassNames = memoizeFunction(function () {
    var exampleHeight = 40;
    var theme = getTheme();
    return mergeStyleSets({
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
export var VerticalDividerCustomExample = function () {
    var exampleClassNames = getExampleClassNames();
    return (React.createElement("div", { className: exampleClassNames.wrapper },
        React.createElement("p", { className: exampleClassNames.text }, " Some text before the divider. "),
        React.createElement(VerticalDivider, { styles: VerticalDividerStyles }),
        React.createElement("p", { className: exampleClassNames.text }, "Some text after the divider. ")));
};
//# sourceMappingURL=VerticalDivider.Custom.Example.js.map
define(["require", "exports", "react", "office-ui-fabric-react/lib/Separator", "office-ui-fabric-react/lib/Styling", "office-ui-fabric-react/lib/Stack", "office-ui-fabric-react/lib/Text"], function (require, exports, React, Separator_1, Styling_1, Stack_1, Text_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var theme = Styling_1.createTheme({
        fonts: {
            medium: {
                fontFamily: 'Monaco, Menlo, Consolas',
                fontSize: '30px',
            },
        },
    });
    var stackTokens = { childrenGap: 12 };
    exports.SeparatorThemingExample = function () { return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
        React.createElement(Text_1.Text, null, "Horizontal center aligned with custom theme"),
        React.createElement(Separator_1.Separator, { theme: theme }, "Today"))); };
});
//# sourceMappingURL=Separator.Theming.Example.js.map
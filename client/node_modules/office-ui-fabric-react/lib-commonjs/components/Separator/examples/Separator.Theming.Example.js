"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Separator_1 = require("office-ui-fabric-react/lib-commonjs/Separator");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var Text_1 = require("office-ui-fabric-react/lib-commonjs/Text");
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
//# sourceMappingURL=Separator.Theming.Example.js.map
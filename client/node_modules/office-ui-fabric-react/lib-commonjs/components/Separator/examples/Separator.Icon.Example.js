"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Separator_1 = require("office-ui-fabric-react/lib-commonjs/Separator");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var Text_1 = require("office-ui-fabric-react/lib-commonjs/Text");
var Icon_1 = require("office-ui-fabric-react/lib-commonjs/Icon");
var iconStyles = {
    root: {
        fontSize: '24px',
        height: '24px',
        width: '24px',
    },
};
var stackTokens = { childrenGap: 12 };
exports.SeparatorIconExample = function () { return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
    React.createElement(Text_1.Text, null, "Horizontal center aligned with an icon as content"),
    React.createElement(Separator_1.Separator, null,
        React.createElement(Icon_1.Icon, { iconName: "Clock", styles: iconStyles })))); };
//# sourceMappingURL=Separator.Icon.Example.js.map
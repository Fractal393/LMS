define(["require", "exports", "react", "office-ui-fabric-react/lib/Separator", "office-ui-fabric-react/lib/Stack", "office-ui-fabric-react/lib/Text", "office-ui-fabric-react/lib/Icon"], function (require, exports, React, Separator_1, Stack_1, Text_1, Icon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=Separator.Icon.Example.js.map
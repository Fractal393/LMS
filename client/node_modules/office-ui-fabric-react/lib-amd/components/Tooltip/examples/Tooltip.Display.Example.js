define(["require", "exports", "react", "office-ui-fabric-react/lib/Tooltip", "office-ui-fabric-react/lib/Styling", "@uifabric/react-hooks"], function (require, exports, React, Tooltip_1, Styling_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var theme = Styling_1.getTheme();
    var buttonStyle = { fontSize: theme.fonts.medium.fontSize, padding: 10 };
    var calloutProps = { gapSpace: 0 };
    // Important for correct positioning--see below
    var inlineBlockStyle = {
        root: { display: 'inline-block' },
    };
    exports.TooltipDisplayExample = function () {
        // Use useId() to ensure that the ID is unique on the page.
        // (It's also okay to use a plain string and manually ensure uniqueness.)
        var tooltip1Id = react_hooks_1.useId('tooltip1');
        var tooltip2Id = react_hooks_1.useId('tooltip2');
        return (React.createElement("div", null,
            "In some cases when a TooltipHost is wrapping ",
            React.createElement("code", null, "inline-block"),
            " or ",
            React.createElement("code", null, "inline"),
            " elements, the positioning of the Tooltip may be off. In these cases, it's recommended to set the TooltipHost's",
            ' ',
            React.createElement("code", null, "display"),
            " property to ",
            React.createElement("code", null, "inline-block"),
            ", as in the following example.",
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(Tooltip_1.TooltipHost, { content: "Incorrect positioning", id: tooltip1Id, calloutProps: calloutProps },
                React.createElement("button", { style: buttonStyle, "aria-describedby": tooltip1Id }, "Hover for incorrect positioning")),
            ' ',
            React.createElement(Tooltip_1.TooltipHost, { content: "Correct positioning", 
                // This is the important part!
                styles: inlineBlockStyle, id: tooltip2Id, calloutProps: calloutProps },
                React.createElement("button", { style: buttonStyle, "aria-describedby": tooltip2Id }, "Hover for correct positioning"))));
    };
});
//# sourceMappingURL=Tooltip.Display.Example.js.map
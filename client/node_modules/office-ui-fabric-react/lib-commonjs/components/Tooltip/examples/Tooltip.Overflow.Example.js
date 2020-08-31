"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Toggle_1 = require("office-ui-fabric-react/lib-commonjs/Toggle");
var Label_1 = require("office-ui-fabric-react/lib-commonjs/Label");
var Tooltip_1 = require("office-ui-fabric-react/lib-commonjs/Tooltip");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var Utilities_1 = require("office-ui-fabric-react/lib-commonjs/Utilities");
var react_hooks_1 = require("@uifabric/react-hooks");
var contentParent = "If the parent element's content overflows, hovering here will show a tooltip (anchored to the parent element).";
var contentSelf = "If the TooltipHost's content overflows, hovering here will show a tooltip (anchored to the TooltipHost).";
// The TooltipHost uses display: inline by default, which causes issues with this example's
// styling and layout. Use display: block instead. (other styles are just to look nice)
var theme = Styling_1.getTheme();
var hostStyles = {
    root: { display: 'block', padding: 10, backgroundColor: theme.palette.themeLighter },
};
var classNames = Styling_1.mergeStyleSets({
    // Applied to make content overflow (and tooltips activate)
    overflow: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: 200,
    },
    // Just to look nice
    example: { marginTop: 20, selectors: { '> *:first-child': { paddingBottom: 10 } } },
    parent: {
        padding: 10,
        border: '2px dashed ' + theme.palette.neutralTertiary,
        selectors: { '> *:last-child': { marginTop: 10 } },
    },
});
exports.TooltipOverflowExample = function () {
    var parentTooltipId = react_hooks_1.useId('text-tooltip');
    var _a = React.useState(false), shouldOverflow = _a[0], setShouldOverflow = _a[1];
    var _b = React.useState(false), isParentTooltipVisible = _b[0], setIsParentTooltipVisible = _b[1];
    var onOverflowChange = React.useCallback(function () { return setShouldOverflow(!shouldOverflow); }, [shouldOverflow]);
    return (React.createElement("div", null,
        React.createElement(Toggle_1.Toggle, { label: "Force text to overflow", inlineLabel: true, checked: shouldOverflow, onChange: onOverflowChange }),
        React.createElement("div", { className: classNames.example },
            React.createElement(Label_1.Label, null, "Show tooltip when parent's content overflows"),
            React.createElement("div", { className: Utilities_1.css(classNames.parent, shouldOverflow && classNames.overflow) },
                "This is the parent element.",
                React.createElement(Tooltip_1.TooltipHost, { overflowMode: Tooltip_1.TooltipOverflowMode.Parent, 
                    // In a case like this, you should usually display the non-truncated content in the tooltip.
                    content: contentParent, 
                    // If targeting the tooltip to the parent, it's necessary to manually set and remove
                    // aria-describedby for the content when the tooltip is shown/hidden
                    onTooltipToggle: setIsParentTooltipVisible, id: parentTooltipId, styles: hostStyles },
                    "This is the TooltipHost area.",
                    ' ',
                    React.createElement("span", { "aria-describedby": isParentTooltipVisible ? parentTooltipId : undefined }, contentParent)))),
        React.createElement("div", { className: classNames.example },
            React.createElement(Label_1.Label, null, "Show tooltip when TooltipHost's content overflows"),
            React.createElement(Tooltip_1.TooltipHost, { overflowMode: Tooltip_1.TooltipOverflowMode.Self, 
                // The TooltipHost itself will overflow
                hostClassName: Utilities_1.css(shouldOverflow && classNames.overflow), content: contentSelf, onTooltipToggle: setIsParentTooltipVisible, styles: hostStyles },
                "This is the TooltipHost area. ",
                contentSelf))));
};
//# sourceMappingURL=Tooltip.Overflow.Example.js.map
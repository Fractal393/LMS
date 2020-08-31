define(["require", "exports", "react", "office-ui-fabric-react", "office-ui-fabric-react/lib/Tooltip", "@uifabric/react-hooks"], function (require, exports, React, office_ui_fabric_react_1, Tooltip_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Initialize icons in case this example uses them
    office_ui_fabric_react_1.initializeIcons();
    var emojiIcon = { iconName: 'Emoji2' };
    var calloutProps = { gapSpace: 0 };
    // The TooltipHost root uses display: inline by default.
    // If that's causing sizing issues or tooltip positioning issues, try overriding to inline-block.
    var hostStyles = { root: { display: 'inline-block' } };
    exports.ButtonIconWithTooltipExample = function (props) {
        // Use useId() to ensure that the ID is unique on the page.
        // (It's also okay to use a plain string and manually ensure uniqueness.
        var tooltipId = react_hooks_1.useId('tooltip');
        var disabled = props.disabled, checked = props.checked;
        return (React.createElement("div", null,
            React.createElement(Tooltip_1.TooltipHost, { content: "Emoji", 
                // This id is used on the tooltip itself, not the host
                // (so an element with this id only exists when the tooltip is shown)
                id: tooltipId, calloutProps: calloutProps, styles: hostStyles },
                React.createElement(office_ui_fabric_react_1.IconButton, { iconProps: emojiIcon, title: "Emoji", ariaLabel: "Emoji", disabled: disabled, checked: checked })),
            React.createElement("p", null, "For now, we advise you to take this approach of wrapping IconButton with a Tooltip. We'll address providing this behavior out of the box in next version of this component in Fluent.")));
    };
});
//# sourceMappingURL=Button.IconWithTooltip.Example.js.map
define(["require", "exports", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/TeachingBubble", "office-ui-fabric-react/lib/Callout", "@uifabric/react-hooks"], function (require, exports, React, Button_1, TeachingBubble_1, Callout_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TeachingBubbleWideExample = function () {
        var _a = react_hooks_1.useBoolean(false), teachingBubbleVisible = _a[0], toggleTeachingBubbleVisible = _a[1].toggle;
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { id: "targetButton", onClick: toggleTeachingBubbleVisible, text: teachingBubbleVisible ? 'Hide TeachingBubble' : 'Show TeachingBubble' }),
            teachingBubbleVisible && (React.createElement(TeachingBubble_1.TeachingBubble, { calloutProps: { directionalHint: Callout_1.DirectionalHint.bottomCenter }, target: "#targetButton", isWide: true, hasCloseButton: true, closeButtonAriaLabel: "Close", onDismiss: toggleTeachingBubbleVisible, headline: "Discover what\u2019s trending around you" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni harum non?"))));
    };
});
//# sourceMappingURL=TeachingBubble.Wide.Example.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var TeachingBubble_1 = require("office-ui-fabric-react/lib-commonjs/TeachingBubble");
var Callout_1 = require("office-ui-fabric-react/lib-commonjs/Callout");
var react_hooks_1 = require("@uifabric/react-hooks");
exports.TeachingBubbleWideExample = function () {
    var _a = react_hooks_1.useBoolean(false), teachingBubbleVisible = _a[0], toggleTeachingBubbleVisible = _a[1].toggle;
    return (React.createElement("div", null,
        React.createElement(Button_1.DefaultButton, { id: "targetButton", onClick: toggleTeachingBubbleVisible, text: teachingBubbleVisible ? 'Hide TeachingBubble' : 'Show TeachingBubble' }),
        teachingBubbleVisible && (React.createElement(TeachingBubble_1.TeachingBubble, { calloutProps: { directionalHint: Callout_1.DirectionalHint.bottomCenter }, target: "#targetButton", isWide: true, hasCloseButton: true, closeButtonAriaLabel: "Close", onDismiss: toggleTeachingBubbleVisible, headline: "Discover what\u2019s trending around you" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni harum non?"))));
};
//# sourceMappingURL=TeachingBubble.Wide.Example.js.map
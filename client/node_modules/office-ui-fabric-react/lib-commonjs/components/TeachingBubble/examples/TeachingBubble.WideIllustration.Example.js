"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var TeachingBubble_1 = require("office-ui-fabric-react/lib-commonjs/TeachingBubble");
var Callout_1 = require("office-ui-fabric-react/lib-commonjs/Callout");
var react_hooks_1 = require("@uifabric/react-hooks");
var examplePrimaryButtonProps = {
    children: 'Try it out',
};
var exampleImageProps = { src: 'http://placehold.it/154x220', alt: 'Example placeholder image' };
var CalloutProps = { directionalHint: Callout_1.DirectionalHint.bottomCenter };
exports.TeachingBubbleWideIllustrationExample = function () {
    var _a = react_hooks_1.useBoolean(false), teachingBubbleVisible = _a[0], toggleTeachingBubbleVisible = _a[1].toggle;
    var exampleSecondaryButtonProps = React.useMemo(function () { return ({
        children: 'Maybe later',
        onClick: toggleTeachingBubbleVisible,
    }); }, [toggleTeachingBubbleVisible]);
    return (React.createElement("div", null,
        React.createElement(Button_1.DefaultButton, { id: "targetButton", onClick: toggleTeachingBubbleVisible, text: teachingBubbleVisible ? 'Hide TeachingBubble' : 'Show TeachingBubble' }),
        teachingBubbleVisible && (React.createElement(TeachingBubble_1.TeachingBubble, { illustrationImage: exampleImageProps, calloutProps: CalloutProps, isWide: true, hasSmallHeadline: true, hasCloseButton: true, closeButtonAriaLabel: "Close", target: "#targetButton", primaryButtonProps: examplePrimaryButtonProps, secondaryButtonProps: exampleSecondaryButtonProps, onDismiss: toggleTeachingBubbleVisible, headline: "Discover what\u2019s trending around you" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni harum non?"))));
};
//# sourceMappingURL=TeachingBubble.WideIllustration.Example.js.map
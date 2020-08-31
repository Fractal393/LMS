"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var TeachingBubble_1 = require("office-ui-fabric-react/lib-commonjs/TeachingBubble");
var react_hooks_1 = require("@uifabric/react-hooks");
var exampleImageProps = { src: 'http://placehold.it/364x180', alt: 'Example placeholder image' };
var examplePrimaryButtonProps = {
    children: 'Try it out',
};
exports.TeachingBubbleIllustrationExample = function () {
    var _a = react_hooks_1.useBoolean(false), teachingBubbleVisible = _a[0], toggleTeachingBubbleVisible = _a[1].toggle;
    var exampleSecondaryButtonProps = React.useMemo(function () { return ({
        children: 'Maybe later',
        onClick: toggleTeachingBubbleVisible,
    }); }, [toggleTeachingBubbleVisible]);
    return (React.createElement("div", null,
        React.createElement(Button_1.DefaultButton, { id: "targetButton", onClick: toggleTeachingBubbleVisible, text: teachingBubbleVisible ? 'Hide TeachingBubble' : 'Show TeachingBubble' }),
        teachingBubbleVisible && (React.createElement(TeachingBubble_1.TeachingBubble, { target: "#targetButton", illustrationImage: exampleImageProps, primaryButtonProps: examplePrimaryButtonProps, secondaryButtonProps: exampleSecondaryButtonProps, onDismiss: toggleTeachingBubbleVisible, headline: "Discover what\u2019s trending around you" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni harum non?"))));
};
//# sourceMappingURL=TeachingBubble.Illustration.Example.js.map
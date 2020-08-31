define(["require", "exports", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/TeachingBubble", "@uifabric/react-hooks"], function (require, exports, React, Button_1, TeachingBubble_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var examplePrimaryButtonProps = {
        children: 'Next',
    };
    exports.TeachingBubbleMultiStepExample = function () {
        var _a = react_hooks_1.useBoolean(false), teachingBubbleVisible = _a[0], toggleTeachingBubbleVisible = _a[1].toggle;
        var exampleSecondaryButtonProps = React.useMemo(function () { return ({
            children: 'Previous',
            onClick: toggleTeachingBubbleVisible,
        }); }, [toggleTeachingBubbleVisible]);
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { id: "targetButton", onClick: toggleTeachingBubbleVisible, text: teachingBubbleVisible ? 'Hide TeachingBubble' : 'Show TeachingBubble' }),
            teachingBubbleVisible && (React.createElement(TeachingBubble_1.TeachingBubble, { target: "#targetButton", primaryButtonProps: examplePrimaryButtonProps, secondaryButtonProps: exampleSecondaryButtonProps, onDismiss: toggleTeachingBubbleVisible, footerContent: "2 of 3", headline: "Discover what\u2019s trending around you" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni harum non?"))));
    };
});
//# sourceMappingURL=TeachingBubble.MultiStep.Example.js.map
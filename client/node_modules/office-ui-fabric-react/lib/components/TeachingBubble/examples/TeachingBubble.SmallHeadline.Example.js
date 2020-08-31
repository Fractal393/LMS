import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
import { useBoolean } from '@uifabric/react-hooks';
export var TeachingBubbleSmallHeadlineExample = function () {
    var _a = useBoolean(false), teachingBubbleVisible = _a[0], toggleTeachingBubbleVisible = _a[1].toggle;
    var examplePrimaryButtonProps = {
        children: 'Try it out',
        onClick: toggleTeachingBubbleVisible,
    };
    return (React.createElement("div", null,
        React.createElement(DefaultButton, { id: "targetButton", onClick: toggleTeachingBubbleVisible, text: teachingBubbleVisible ? 'Hide TeachingBubble' : 'Show TeachingBubble' }),
        teachingBubbleVisible && (React.createElement(TeachingBubble, { target: "#targetButton", primaryButtonProps: examplePrimaryButtonProps, hasSmallHeadline: true, onDismiss: toggleTeachingBubbleVisible, headline: "Discover what\u2019s trending around you", closeButtonAriaLabel: "Close" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni harum non?"))));
};
//# sourceMappingURL=TeachingBubble.SmallHeadline.Example.js.map
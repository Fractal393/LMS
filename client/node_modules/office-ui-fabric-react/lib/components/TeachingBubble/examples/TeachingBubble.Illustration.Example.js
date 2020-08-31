import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
import { useBoolean } from '@uifabric/react-hooks';
var exampleImageProps = { src: 'http://placehold.it/364x180', alt: 'Example placeholder image' };
var examplePrimaryButtonProps = {
    children: 'Try it out',
};
export var TeachingBubbleIllustrationExample = function () {
    var _a = useBoolean(false), teachingBubbleVisible = _a[0], toggleTeachingBubbleVisible = _a[1].toggle;
    var exampleSecondaryButtonProps = React.useMemo(function () { return ({
        children: 'Maybe later',
        onClick: toggleTeachingBubbleVisible,
    }); }, [toggleTeachingBubbleVisible]);
    return (React.createElement("div", null,
        React.createElement(DefaultButton, { id: "targetButton", onClick: toggleTeachingBubbleVisible, text: teachingBubbleVisible ? 'Hide TeachingBubble' : 'Show TeachingBubble' }),
        teachingBubbleVisible && (React.createElement(TeachingBubble, { target: "#targetButton", illustrationImage: exampleImageProps, primaryButtonProps: examplePrimaryButtonProps, secondaryButtonProps: exampleSecondaryButtonProps, onDismiss: toggleTeachingBubbleVisible, headline: "Discover what\u2019s trending around you" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni harum non?"))));
};
//# sourceMappingURL=TeachingBubble.Illustration.Example.js.map
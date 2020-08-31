import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
import { useBoolean } from '@uifabric/react-hooks';
var examplePrimaryButtonProps = {
    children: 'Next',
};
export var TeachingBubbleMultiStepExample = function () {
    var _a = useBoolean(false), teachingBubbleVisible = _a[0], toggleTeachingBubbleVisible = _a[1].toggle;
    var exampleSecondaryButtonProps = React.useMemo(function () { return ({
        children: 'Previous',
        onClick: toggleTeachingBubbleVisible,
    }); }, [toggleTeachingBubbleVisible]);
    return (React.createElement("div", null,
        React.createElement(DefaultButton, { id: "targetButton", onClick: toggleTeachingBubbleVisible, text: teachingBubbleVisible ? 'Hide TeachingBubble' : 'Show TeachingBubble' }),
        teachingBubbleVisible && (React.createElement(TeachingBubble, { target: "#targetButton", primaryButtonProps: examplePrimaryButtonProps, secondaryButtonProps: exampleSecondaryButtonProps, onDismiss: toggleTeachingBubbleVisible, footerContent: "2 of 3", headline: "Discover what\u2019s trending around you" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni harum non?"))));
};
//# sourceMappingURL=TeachingBubble.MultiStep.Example.js.map
import * as React from 'react';
import { classNamesFunction, DefaultButton, Overlay } from 'office-ui-fabric-react';
import { useBoolean } from '@uifabric/react-hooks';
var exampleStyles = {
    root: [
        'OverlayExample-content',
        {
            background: 'blue',
            bottom: '0',
            color: 'white',
            left: '0',
            padding: '10px',
            position: 'absolute',
            right: '0',
        },
    ],
};
var getClassNames = classNamesFunction();
var classNames = getClassNames(exampleStyles, {});
export var OverlayLightExample = function () {
    var _a = useBoolean(false), isOverlayVisible = _a[0], toggleIsOverlayVisible = _a[1].toggle;
    return (React.createElement(React.Fragment, null,
        React.createElement(DefaultButton, { onClick: toggleIsOverlayVisible, text: "Show the overlay" }),
        isOverlayVisible && (React.createElement(Overlay, { onClick: toggleIsOverlayVisible },
            React.createElement("div", { className: classNames.root },
                React.createElement("p", null, "I am content within the overlay."))))));
};
//# sourceMappingURL=Overlay.Light.Example.js.map
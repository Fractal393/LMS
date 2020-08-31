import * as React from 'react';
import { DefaultButton, getTheme, FontWeights, mergeStyleSets, DelayedRender, Callout } from 'office-ui-fabric-react';
import { useBoolean } from '@uifabric/react-hooks';
var theme = getTheme();
var styles = mergeStyleSets({
    buttonArea: {
        verticalAlign: 'top',
        display: 'inline-block',
        textAlign: 'center',
        margin: '0 100px',
        minWidth: 130,
        height: 32,
    },
    callout: {
        maxWidth: 300,
    },
    subtext: [
        theme.fonts.small,
        {
            margin: 0,
            height: '100%',
            padding: '24px 20px',
            fontWeight: FontWeights.semilight,
        },
    ],
});
export var StatusCalloutExample = function () {
    var _a = useBoolean(false), isCalloutVisible = _a[0], toggleIsCalloutVisible = _a[1].toggle;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.buttonArea },
            React.createElement(DefaultButton, { onClick: toggleIsCalloutVisible, text: isCalloutVisible ? 'Hide StatusCallout' : 'Show StatusCallout' })),
        isCalloutVisible && (React.createElement(Callout, { className: styles.callout, target: "." + styles.buttonArea, onDismiss: toggleIsCalloutVisible, role: "status", "aria-live": "assertive" },
            React.createElement(DelayedRender, null,
                React.createElement("p", { className: styles.subtext }, "This message is treated as an aria-live assertive status message, and will be read by a screen reader regardless of focus."))))));
};
//# sourceMappingURL=Callout.Status.Example.js.map
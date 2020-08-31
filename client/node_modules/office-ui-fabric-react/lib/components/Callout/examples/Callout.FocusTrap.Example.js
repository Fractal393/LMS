import * as React from 'react';
import { DefaultButton, FocusTrapCallout, Stack, FocusZone, PrimaryButton, mergeStyleSets, FontWeights, Text, } from 'office-ui-fabric-react';
import { useBoolean } from '@uifabric/react-hooks';
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
    header: {
        padding: '18px 24px 12px',
    },
    title: [
        {
            margin: 0,
            fontWeight: FontWeights.semilight,
        },
    ],
    inner: {
        height: '100%',
        padding: '0 24px 20px',
    },
    actions: {
        position: 'relative',
        marginTop: 20,
        width: '100%',
        whiteSpace: 'nowrap',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0 24px 24px',
    },
    subtext: [
        {
            margin: 0,
            fontWeight: FontWeights.semilight,
        },
    ],
});
export var CalloutFocusTrapExample = function () {
    var _a = useBoolean(false), isCalloutVisible = _a[0], toggleIsCalloutVisible = _a[1].toggle;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.buttonArea },
            React.createElement(DefaultButton, { onClick: toggleIsCalloutVisible, text: isCalloutVisible ? 'Hide FocusTrapCallout' : 'Show FocusTrapCallout' })),
        isCalloutVisible ? (React.createElement("div", null,
            React.createElement(FocusTrapCallout, { role: "alertdialog", className: styles.callout, gapSpace: 0, target: "." + styles.buttonArea, onDismiss: toggleIsCalloutVisible, setInitialFocus: true },
                React.createElement("div", { className: styles.header },
                    React.createElement(Text, { className: styles.title }, "Callout title here")),
                React.createElement("div", { className: styles.inner },
                    React.createElement("div", null,
                        React.createElement(Text, { className: styles.subtext }, "Content is wrapped in a FocusTrapZone so that user cannot accidently tab out of this callout."))),
                React.createElement(FocusZone, null,
                    React.createElement(Stack, { className: styles.buttons, gap: 8, horizontal: true },
                        React.createElement(PrimaryButton, { onClick: toggleIsCalloutVisible }, "Button 1"),
                        React.createElement(DefaultButton, { onClick: toggleIsCalloutVisible }, "Button 2")))))) : null));
};
//# sourceMappingURL=Callout.FocusTrap.Example.js.map
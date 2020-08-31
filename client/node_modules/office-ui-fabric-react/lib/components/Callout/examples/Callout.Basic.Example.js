import * as React from 'react';
import { DefaultButton, Callout, Link, getTheme, FontWeights, mergeStyleSets, Text } from 'office-ui-fabric-react';
import { useBoolean, useId } from '@uifabric/react-hooks';
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
    header: {
        padding: '18px 24px 12px',
    },
    title: [
        theme.fonts.xLarge,
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
    subtext: [
        theme.fonts.small,
        {
            margin: 0,
            fontWeight: FontWeights.semilight,
        },
    ],
    link: [
        theme.fonts.medium,
        {
            color: theme.palette.neutralPrimary,
        },
    ],
});
export var CalloutBasicExample = function () {
    var _a = useBoolean(false), isCalloutVisible = _a[0], toggleIsCalloutVisible = _a[1].toggle;
    var labelId = useId('callout-label');
    var descriptionId = useId('callout-description');
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.buttonArea },
            React.createElement(DefaultButton, { onClick: toggleIsCalloutVisible, text: isCalloutVisible ? 'Hide Callout' : 'Show Callout' })),
        isCalloutVisible && (React.createElement(Callout, { className: styles.callout, ariaLabelledBy: labelId, ariaDescribedBy: descriptionId, role: "alertdialog", gapSpace: 0, target: "." + styles.buttonArea, onDismiss: toggleIsCalloutVisible, setInitialFocus: true },
            React.createElement("div", { className: styles.header },
                React.createElement(Text, { className: styles.title, id: labelId }, "All of your favorite people")),
            React.createElement("div", { className: styles.inner },
                React.createElement(Text, { className: styles.subtext, id: descriptionId }, "Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom."),
                React.createElement("div", { className: styles.actions },
                    React.createElement(Link, { className: styles.link, href: "http://microsoft.com", target: "_blank" }, "Go to microsoft")))))));
};
//# sourceMappingURL=Callout.Basic.Example.js.map
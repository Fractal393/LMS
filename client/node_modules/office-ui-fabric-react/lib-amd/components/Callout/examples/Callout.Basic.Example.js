define(["require", "exports", "react", "office-ui-fabric-react", "@uifabric/react-hooks"], function (require, exports, React, office_ui_fabric_react_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var theme = office_ui_fabric_react_1.getTheme();
    var styles = office_ui_fabric_react_1.mergeStyleSets({
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
                fontWeight: office_ui_fabric_react_1.FontWeights.semilight,
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
                fontWeight: office_ui_fabric_react_1.FontWeights.semilight,
            },
        ],
        link: [
            theme.fonts.medium,
            {
                color: theme.palette.neutralPrimary,
            },
        ],
    });
    exports.CalloutBasicExample = function () {
        var _a = react_hooks_1.useBoolean(false), isCalloutVisible = _a[0], toggleIsCalloutVisible = _a[1].toggle;
        var labelId = react_hooks_1.useId('callout-label');
        var descriptionId = react_hooks_1.useId('callout-description');
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: styles.buttonArea },
                React.createElement(office_ui_fabric_react_1.DefaultButton, { onClick: toggleIsCalloutVisible, text: isCalloutVisible ? 'Hide Callout' : 'Show Callout' })),
            isCalloutVisible && (React.createElement(office_ui_fabric_react_1.Callout, { className: styles.callout, ariaLabelledBy: labelId, ariaDescribedBy: descriptionId, role: "alertdialog", gapSpace: 0, target: "." + styles.buttonArea, onDismiss: toggleIsCalloutVisible, setInitialFocus: true },
                React.createElement("div", { className: styles.header },
                    React.createElement(office_ui_fabric_react_1.Text, { className: styles.title, id: labelId }, "All of your favorite people")),
                React.createElement("div", { className: styles.inner },
                    React.createElement(office_ui_fabric_react_1.Text, { className: styles.subtext, id: descriptionId }, "Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom."),
                    React.createElement("div", { className: styles.actions },
                        React.createElement(office_ui_fabric_react_1.Link, { className: styles.link, href: "http://microsoft.com", target: "_blank" }, "Go to microsoft")))))));
    };
});
//# sourceMappingURL=Callout.Basic.Example.js.map
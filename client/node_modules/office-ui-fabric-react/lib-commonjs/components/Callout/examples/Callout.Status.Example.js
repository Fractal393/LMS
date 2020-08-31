"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var react_hooks_1 = require("@uifabric/react-hooks");
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
    subtext: [
        theme.fonts.small,
        {
            margin: 0,
            height: '100%',
            padding: '24px 20px',
            fontWeight: office_ui_fabric_react_1.FontWeights.semilight,
        },
    ],
});
exports.StatusCalloutExample = function () {
    var _a = react_hooks_1.useBoolean(false), isCalloutVisible = _a[0], toggleIsCalloutVisible = _a[1].toggle;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.buttonArea },
            React.createElement(office_ui_fabric_react_1.DefaultButton, { onClick: toggleIsCalloutVisible, text: isCalloutVisible ? 'Hide StatusCallout' : 'Show StatusCallout' })),
        isCalloutVisible && (React.createElement(office_ui_fabric_react_1.Callout, { className: styles.callout, target: "." + styles.buttonArea, onDismiss: toggleIsCalloutVisible, role: "status", "aria-live": "assertive" },
            React.createElement(office_ui_fabric_react_1.DelayedRender, null,
                React.createElement("p", { className: styles.subtext }, "This message is treated as an aria-live assertive status message, and will be read by a screen reader regardless of focus."))))));
};
//# sourceMappingURL=Callout.Status.Example.js.map
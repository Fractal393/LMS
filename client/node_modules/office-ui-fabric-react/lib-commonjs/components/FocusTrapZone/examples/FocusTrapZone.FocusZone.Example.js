"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var FocusTrapZone_1 = require("office-ui-fabric-react/lib-commonjs/FocusTrapZone");
var FocusZone_1 = require("office-ui-fabric-react/lib-commonjs/FocusZone");
var Toggle_1 = require("office-ui-fabric-react/lib-commonjs/Toggle");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var Utilities_1 = require("office-ui-fabric-react/lib-commonjs/Utilities");
var react_hooks_1 = require("@uifabric/react-hooks");
var stackTokens = { childrenGap: 10 };
var getTrapZoneStackStyles = Utilities_1.memoizeFunction(function (useTrapZone) { return ({
    root: { border: "2px solid " + (useTrapZone ? '#ababab' : 'transparent'), padding: 10 },
}); });
var focusZoneStackStyles = {
    root: {
        border: '2px dashed #ababab',
        padding: 10,
    },
};
exports.FocusTrapZoneFocusZoneExample = function () {
    var _a = react_hooks_1.useBoolean(false), useTrapZone = _a[0], toggleUseTrapZone = _a[1].toggle;
    var toggle = React.useRef(null);
    return (React.createElement(FocusTrapZone_1.FocusTrapZone, { disabled: !useTrapZone, forceFocusInsideTrap: true, focusPreviouslyFocusedInnerElement: true },
        React.createElement(Stack_1.Stack, { tokens: stackTokens, horizontalAlign: "start", styles: getTrapZoneStackStyles(useTrapZone) },
            React.createElement(Toggle_1.Toggle, { label: "Use trap zone", componentRef: toggle, checked: useTrapZone, onChange: toggleUseTrapZone, onText: "On (toggle to exit)", offText: "Off" }),
            React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.horizontal, "data-is-visible": true },
                React.createElement(Stack_1.Stack, { horizontal: true, tokens: stackTokens, styles: focusZoneStackStyles },
                    React.createElement(Button_1.DefaultButton, { text: "FZ1" }),
                    React.createElement(Button_1.DefaultButton, { text: "FZ1" }),
                    React.createElement(Button_1.DefaultButton, { text: "FZ1" }))),
            React.createElement(Button_1.DefaultButton, { text: "No FZ" }),
            React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.horizontal, "data-is-visible": true },
                React.createElement(Stack_1.Stack, { horizontal: true, tokens: stackTokens, styles: focusZoneStackStyles },
                    React.createElement(Button_1.DefaultButton, { text: "FZ2" }),
                    React.createElement(Button_1.DefaultButton, { text: "FZ2" }),
                    React.createElement(Button_1.DefaultButton, { text: "FZ2" }))))));
};
//# sourceMappingURL=FocusTrapZone.FocusZone.Example.js.map
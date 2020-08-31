define(["require", "exports", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/FocusTrapZone", "office-ui-fabric-react/lib/FocusZone", "office-ui-fabric-react/lib/Toggle", "office-ui-fabric-react/lib/Stack", "office-ui-fabric-react/lib/Utilities", "@uifabric/react-hooks"], function (require, exports, React, Button_1, FocusTrapZone_1, FocusZone_1, Toggle_1, Stack_1, Utilities_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=FocusTrapZone.FocusZone.Example.js.map
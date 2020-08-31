define(["require", "exports", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/FocusTrapZone", "office-ui-fabric-react/lib/Link", "office-ui-fabric-react/lib/Stack", "office-ui-fabric-react/lib/Text", "office-ui-fabric-react/lib/TextField", "office-ui-fabric-react/lib/Toggle", "office-ui-fabric-react/lib/Utilities", "@uifabric/react-hooks"], function (require, exports, React, Button_1, FocusTrapZone_1, Link_1, Stack_1, Text_1, TextField_1, Toggle_1, Utilities_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getStackStyles = Utilities_1.memoizeFunction(function (useTrapZone) { return ({
        root: { border: "2px solid " + (useTrapZone ? '#ababab' : 'transparent'), padding: 10 },
    }); });
    var textFieldStyles = { root: { width: 300 } };
    var stackTokens = { childrenGap: 8 };
    var focusClassName = 'shouldFocusInput';
    exports.FocusTrapZoneBoxCustomElementExample = function () {
        var _a = react_hooks_1.useBoolean(false), useTrapZone = _a[0], toggleUseTrapZone = _a[1].toggle;
        var toggle = React.useRef(null);
        return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
            React.createElement(Stack_1.Stack.Item, null,
                React.createElement(Text_1.Text, null, "If this button is used to enable FocusTrapZone, the hyperlink should be focused.")),
            React.createElement(Stack_1.Stack.Item, null,
                React.createElement(Button_1.DefaultButton, { onClick: toggleUseTrapZone, text: "Focus Custom Element" })),
            React.createElement(FocusTrapZone_1.FocusTrapZone, { disabled: !useTrapZone, firstFocusableSelector: focusClassName },
                React.createElement(Stack_1.Stack, { horizontalAlign: "start", tokens: stackTokens, styles: getStackStyles(useTrapZone) },
                    React.createElement(Toggle_1.Toggle, { label: "Use trap zone", componentRef: toggle, checked: useTrapZone, onChange: toggleUseTrapZone, onText: "On (toggle to exit)", offText: "Off" }),
                    React.createElement(TextField_1.TextField, { label: "Input inside trap zone", styles: textFieldStyles }),
                    React.createElement(Link_1.Link, { href: "https://bing.com", className: focusClassName, target: "_blank" }, "Hyperlink which will receive initial focus when trap zone is activated")))));
    };
});
//# sourceMappingURL=FocusTrapZone.Box.FocusOnCustomElement.Example.js.map
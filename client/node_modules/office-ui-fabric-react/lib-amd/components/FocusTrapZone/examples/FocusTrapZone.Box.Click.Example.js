define(["require", "exports", "react", "office-ui-fabric-react/lib/FocusTrapZone", "office-ui-fabric-react/lib/Link", "office-ui-fabric-react/lib/TextField", "office-ui-fabric-react/lib/Toggle", "office-ui-fabric-react/lib/Stack", "office-ui-fabric-react/lib/Utilities", "@uifabric/react-hooks"], function (require, exports, React, FocusTrapZone_1, Link_1, TextField_1, Toggle_1, Stack_1, Utilities_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getStackStyles = Utilities_1.memoizeFunction(function (useTrapZone) { return ({
        root: { border: "2px dashed " + (useTrapZone ? '#ababab' : 'transparent'), padding: 10 },
    }); });
    var textFieldStyles = { root: { width: 300 } };
    var stackTokens = { childrenGap: 15 };
    exports.FocusTrapZoneBoxClickExample = function () {
        var _a = react_hooks_1.useBoolean(false), useTrapZone = _a[0], toggleUseTrapZone = _a[1].toggle;
        var toggle = React.useRef(null);
        return (React.createElement(FocusTrapZone_1.FocusTrapZone, { disabled: !useTrapZone, isClickableOutsideFocusTrap: true, forceFocusInsideTrap: false },
            React.createElement(Stack_1.Stack, { horizontalAlign: "start", tokens: stackTokens, styles: getStackStyles(useTrapZone) },
                React.createElement(Toggle_1.Toggle, { label: "Use trap zone", componentRef: toggle, checked: useTrapZone, onChange: toggleUseTrapZone, onText: "On (toggle to exit)", offText: "Off" }),
                React.createElement(TextField_1.TextField, { label: "Input inside trap zone", styles: textFieldStyles }),
                React.createElement(Link_1.Link, { href: "https://bing.com", target: "_blank" }, "Hyperlink inside trap zone"))));
    };
});
//# sourceMappingURL=FocusTrapZone.Box.Click.Example.js.map
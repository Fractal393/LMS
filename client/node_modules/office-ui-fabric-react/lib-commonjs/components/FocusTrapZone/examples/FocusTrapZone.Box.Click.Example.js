"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FocusTrapZone_1 = require("office-ui-fabric-react/lib-commonjs/FocusTrapZone");
var Link_1 = require("office-ui-fabric-react/lib-commonjs/Link");
var TextField_1 = require("office-ui-fabric-react/lib-commonjs/TextField");
var Toggle_1 = require("office-ui-fabric-react/lib-commonjs/Toggle");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var Utilities_1 = require("office-ui-fabric-react/lib-commonjs/Utilities");
var react_hooks_1 = require("@uifabric/react-hooks");
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
//# sourceMappingURL=FocusTrapZone.Box.Click.Example.js.map
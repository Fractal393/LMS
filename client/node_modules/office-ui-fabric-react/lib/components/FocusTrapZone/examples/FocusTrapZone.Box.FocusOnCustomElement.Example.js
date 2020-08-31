import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { FocusTrapZone } from 'office-ui-fabric-react/lib/FocusTrapZone';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { useBoolean } from '@uifabric/react-hooks';
var getStackStyles = memoizeFunction(function (useTrapZone) { return ({
    root: { border: "2px solid " + (useTrapZone ? '#ababab' : 'transparent'), padding: 10 },
}); });
var textFieldStyles = { root: { width: 300 } };
var stackTokens = { childrenGap: 8 };
var focusClassName = 'shouldFocusInput';
export var FocusTrapZoneBoxCustomElementExample = function () {
    var _a = useBoolean(false), useTrapZone = _a[0], toggleUseTrapZone = _a[1].toggle;
    var toggle = React.useRef(null);
    return (React.createElement(Stack, { tokens: stackTokens },
        React.createElement(Stack.Item, null,
            React.createElement(Text, null, "If this button is used to enable FocusTrapZone, the hyperlink should be focused.")),
        React.createElement(Stack.Item, null,
            React.createElement(DefaultButton, { onClick: toggleUseTrapZone, text: "Focus Custom Element" })),
        React.createElement(FocusTrapZone, { disabled: !useTrapZone, firstFocusableSelector: focusClassName },
            React.createElement(Stack, { horizontalAlign: "start", tokens: stackTokens, styles: getStackStyles(useTrapZone) },
                React.createElement(Toggle, { label: "Use trap zone", componentRef: toggle, checked: useTrapZone, onChange: toggleUseTrapZone, onText: "On (toggle to exit)", offText: "Off" }),
                React.createElement(TextField, { label: "Input inside trap zone", styles: textFieldStyles }),
                React.createElement(Link, { href: "https://bing.com", className: focusClassName, target: "_blank" }, "Hyperlink which will receive initial focus when trap zone is activated")))));
};
//# sourceMappingURL=FocusTrapZone.Box.FocusOnCustomElement.Example.js.map
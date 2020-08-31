import * as React from 'react';
import { FocusTrapZone } from 'office-ui-fabric-react/lib/FocusTrapZone';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { useBoolean } from '@uifabric/react-hooks';
var getStackStyles = memoizeFunction(function (useTrapZone) { return ({
    root: { border: "2px dashed " + (useTrapZone ? '#ababab' : 'transparent'), padding: 10 },
}); });
var textFieldStyles = { root: { width: 300 } };
var stackTokens = { childrenGap: 15 };
export var FocusTrapZoneBoxClickExample = function () {
    var _a = useBoolean(false), useTrapZone = _a[0], toggleUseTrapZone = _a[1].toggle;
    var toggle = React.useRef(null);
    return (React.createElement(FocusTrapZone, { disabled: !useTrapZone, isClickableOutsideFocusTrap: true, forceFocusInsideTrap: false },
        React.createElement(Stack, { horizontalAlign: "start", tokens: stackTokens, styles: getStackStyles(useTrapZone) },
            React.createElement(Toggle, { label: "Use trap zone", componentRef: toggle, checked: useTrapZone, onChange: toggleUseTrapZone, onText: "On (toggle to exit)", offText: "Off" }),
            React.createElement(TextField, { label: "Input inside trap zone", styles: textFieldStyles }),
            React.createElement(Link, { href: "https://bing.com", target: "_blank" }, "Hyperlink inside trap zone"))));
};
//# sourceMappingURL=FocusTrapZone.Box.Click.Example.js.map
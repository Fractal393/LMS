import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { FocusTrapZone } from 'office-ui-fabric-react/lib/FocusTrapZone';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { useBoolean } from '@uifabric/react-hooks';
var stackTokens = { childrenGap: 10 };
var getTrapZoneStackStyles = memoizeFunction(function (useTrapZone) { return ({
    root: { border: "2px solid " + (useTrapZone ? '#ababab' : 'transparent'), padding: 10 },
}); });
var focusZoneStackStyles = {
    root: {
        border: '2px dashed #ababab',
        padding: 10,
    },
};
export var FocusTrapZoneFocusZoneExample = function () {
    var _a = useBoolean(false), useTrapZone = _a[0], toggleUseTrapZone = _a[1].toggle;
    var toggle = React.useRef(null);
    return (React.createElement(FocusTrapZone, { disabled: !useTrapZone, forceFocusInsideTrap: true, focusPreviouslyFocusedInnerElement: true },
        React.createElement(Stack, { tokens: stackTokens, horizontalAlign: "start", styles: getTrapZoneStackStyles(useTrapZone) },
            React.createElement(Toggle, { label: "Use trap zone", componentRef: toggle, checked: useTrapZone, onChange: toggleUseTrapZone, onText: "On (toggle to exit)", offText: "Off" }),
            React.createElement(FocusZone, { direction: FocusZoneDirection.horizontal, "data-is-visible": true },
                React.createElement(Stack, { horizontal: true, tokens: stackTokens, styles: focusZoneStackStyles },
                    React.createElement(DefaultButton, { text: "FZ1" }),
                    React.createElement(DefaultButton, { text: "FZ1" }),
                    React.createElement(DefaultButton, { text: "FZ1" }))),
            React.createElement(DefaultButton, { text: "No FZ" }),
            React.createElement(FocusZone, { direction: FocusZoneDirection.horizontal, "data-is-visible": true },
                React.createElement(Stack, { horizontal: true, tokens: stackTokens, styles: focusZoneStackStyles },
                    React.createElement(DefaultButton, { text: "FZ2" }),
                    React.createElement(DefaultButton, { text: "FZ2" }),
                    React.createElement(DefaultButton, { text: "FZ2" }))))));
};
//# sourceMappingURL=FocusTrapZone.FocusZone.Example.js.map
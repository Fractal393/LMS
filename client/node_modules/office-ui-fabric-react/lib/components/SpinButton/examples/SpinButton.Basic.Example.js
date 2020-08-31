import * as React from 'react';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
var StackTokens = { childrenGap: 10 };
var StackStyles = { root: { width: 400 } };
export var SpinButtonBasicExample = function () { return (React.createElement(Stack, { tokens: StackTokens, styles: StackStyles },
    React.createElement(SpinButton, { defaultValue: "0", label: 'Basic SpinButton:', min: 0, max: 100, step: 1, iconProps: { iconName: 'IncreaseIndentLegacy' }, incrementButtonAriaLabel: 'Increase value by 1', decrementButtonAriaLabel: 'Decrease value by 1' }),
    React.createElement(SpinButton, { defaultValue: "0", label: 'Decimal SpinButton:', min: 0, max: 10, step: 0.1, incrementButtonAriaLabel: 'Increase value by 0.1', decrementButtonAriaLabel: 'Decrease value by 0.1' }))); };
//# sourceMappingURL=SpinButton.Basic.Example.js.map
import * as React from 'react';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import { Position } from 'office-ui-fabric-react/lib/utilities/positioning';
export var SpinButtonBasicWithEndPositionExample = function () { return (React.createElement("div", { style: { width: '400px' } },
    React.createElement(SpinButton, { defaultValue: "0", iconProps: { iconName: 'Light' }, label: 'Basic SpinButton', labelPosition: Position.end, min: 0, max: 100, step: 1, incrementButtonAriaLabel: 'Increase value by 1', decrementButtonAriaLabel: 'Decrease value by 1' }))); };
//# sourceMappingURL=SpinButton.BasicWithEndPosition.Example.js.map
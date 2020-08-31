import * as React from 'react';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
var styles = {
    root: {
        width: '400px',
    },
};
var upArrowButtonStyles = {
    rootChecked: {
        backgroundColor: 'green',
    },
    rootPressed: {
        backgroundColor: 'green',
    },
};
var downArrowButtonStyles = {
    rootChecked: {
        backgroundColor: 'red',
    },
    rootPressed: {
        backgroundColor: 'red',
    },
};
export var SpinButtonCustomStyledExample = function () { return (React.createElement("div", null,
    React.createElement(SpinButton, { styles: styles, upArrowButtonStyles: upArrowButtonStyles, downArrowButtonStyles: downArrowButtonStyles, defaultValue: "0", label: 'Custom styled SpinButton:', min: 0, max: 100, step: 1, incrementButtonAriaLabel: 'Increase value by 1', decrementButtonAriaLabel: 'Decrease value by 1' }))); };
//# sourceMappingURL=SpinButton.CustomStyled.Example.js.map
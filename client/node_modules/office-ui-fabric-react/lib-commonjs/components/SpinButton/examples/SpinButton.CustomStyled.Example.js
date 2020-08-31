"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SpinButton_1 = require("office-ui-fabric-react/lib-commonjs/SpinButton");
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
exports.SpinButtonCustomStyledExample = function () { return (React.createElement("div", null,
    React.createElement(SpinButton_1.SpinButton, { styles: styles, upArrowButtonStyles: upArrowButtonStyles, downArrowButtonStyles: downArrowButtonStyles, defaultValue: "0", label: 'Custom styled SpinButton:', min: 0, max: 100, step: 1, incrementButtonAriaLabel: 'Increase value by 1', decrementButtonAriaLabel: 'Decrease value by 1' }))); };
//# sourceMappingURL=SpinButton.CustomStyled.Example.js.map
define(["require", "exports", "react", "office-ui-fabric-react/lib/SpinButton"], function (require, exports, React, SpinButton_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=SpinButton.CustomStyled.Example.js.map
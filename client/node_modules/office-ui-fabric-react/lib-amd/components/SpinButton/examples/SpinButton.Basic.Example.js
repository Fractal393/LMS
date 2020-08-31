define(["require", "exports", "react", "office-ui-fabric-react/lib/SpinButton", "office-ui-fabric-react/lib/Stack"], function (require, exports, React, SpinButton_1, Stack_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StackTokens = { childrenGap: 10 };
    var StackStyles = { root: { width: 400 } };
    exports.SpinButtonBasicExample = function () { return (React.createElement(Stack_1.Stack, { tokens: StackTokens, styles: StackStyles },
        React.createElement(SpinButton_1.SpinButton, { defaultValue: "0", label: 'Basic SpinButton:', min: 0, max: 100, step: 1, iconProps: { iconName: 'IncreaseIndentLegacy' }, incrementButtonAriaLabel: 'Increase value by 1', decrementButtonAriaLabel: 'Decrease value by 1' }),
        React.createElement(SpinButton_1.SpinButton, { defaultValue: "0", label: 'Decimal SpinButton:', min: 0, max: 10, step: 0.1, incrementButtonAriaLabel: 'Increase value by 0.1', decrementButtonAriaLabel: 'Decrease value by 0.1' }))); };
});
//# sourceMappingURL=SpinButton.Basic.Example.js.map
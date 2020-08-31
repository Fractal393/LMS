"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SpinButton_1 = require("office-ui-fabric-react/lib-commonjs/SpinButton");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var StackTokens = { childrenGap: 10 };
var StackStyles = { root: { width: 400 } };
exports.SpinButtonBasicExample = function () { return (React.createElement(Stack_1.Stack, { tokens: StackTokens, styles: StackStyles },
    React.createElement(SpinButton_1.SpinButton, { defaultValue: "0", label: 'Basic SpinButton:', min: 0, max: 100, step: 1, iconProps: { iconName: 'IncreaseIndentLegacy' }, incrementButtonAriaLabel: 'Increase value by 1', decrementButtonAriaLabel: 'Decrease value by 1' }),
    React.createElement(SpinButton_1.SpinButton, { defaultValue: "0", label: 'Decimal SpinButton:', min: 0, max: 10, step: 0.1, incrementButtonAriaLabel: 'Increase value by 0.1', decrementButtonAriaLabel: 'Decrease value by 0.1' }))); };
//# sourceMappingURL=SpinButton.Basic.Example.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SpinButton_1 = require("office-ui-fabric-react/lib-commonjs/SpinButton");
var positioning_1 = require("office-ui-fabric-react/lib-commonjs/utilities/positioning");
exports.SpinButtonBasicWithEndPositionExample = function () { return (React.createElement("div", { style: { width: '400px' } },
    React.createElement(SpinButton_1.SpinButton, { defaultValue: "0", iconProps: { iconName: 'Light' }, label: 'Basic SpinButton', labelPosition: positioning_1.Position.end, min: 0, max: 100, step: 1, incrementButtonAriaLabel: 'Increase value by 1', decrementButtonAriaLabel: 'Decrease value by 1' }))); };
//# sourceMappingURL=SpinButton.BasicWithEndPosition.Example.js.map
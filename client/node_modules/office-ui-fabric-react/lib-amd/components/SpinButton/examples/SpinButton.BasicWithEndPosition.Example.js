define(["require", "exports", "react", "office-ui-fabric-react/lib/SpinButton", "office-ui-fabric-react/lib/utilities/positioning"], function (require, exports, React, SpinButton_1, positioning_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SpinButtonBasicWithEndPositionExample = function () { return (React.createElement("div", { style: { width: '400px' } },
        React.createElement(SpinButton_1.SpinButton, { defaultValue: "0", iconProps: { iconName: 'Light' }, label: 'Basic SpinButton', labelPosition: positioning_1.Position.end, min: 0, max: 100, step: 1, incrementButtonAriaLabel: 'Increase value by 1', decrementButtonAriaLabel: 'Decrease value by 1' }))); };
});
//# sourceMappingURL=SpinButton.BasicWithEndPosition.Example.js.map
import * as React from 'react';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
var hasSuffix = function (value, unitSuffix) {
    var subString = value.substr(value.length - unitSuffix.length);
    return subString === unitSuffix;
};
var removeSuffix = function (value, unitSuffix) {
    if (!hasSuffix(value, unitSuffix)) {
        return value;
    }
    return value.substr(0, value.length - suffix.length);
};
var suffix = ' cm';
var onSpinButtonIncrement = function (value) {
    value = removeSuffix(value, suffix);
    if (Number(value) + 2 > 100) {
        return String(+value) + suffix;
    }
    else {
        return String(+value + 2) + suffix;
    }
};
var onSpinButtonDecrement = function (value) {
    value = removeSuffix(value, suffix);
    if (Number(value) - 2 < 0) {
        return String(+value) + suffix;
    }
    else {
        return String(+value - 2) + suffix;
    }
};
var onSpinButtonValidate = function (value) {
    value = removeSuffix(value, suffix);
    if (Number(value) > 100 || Number(value) < 0 || value.trim().length === 0 || isNaN(+value)) {
        return '0' + suffix;
    }
    return String(value) + suffix;
};
export var SpinButtonStatefulExample = function () { return (React.createElement("div", { style: { width: '400px' } },
    React.createElement(SpinButton, { label: 'SpinButton with custom implementation:', min: 0, max: 100, value: '7' + suffix, onValidate: onSpinButtonValidate, onIncrement: onSpinButtonIncrement, onDecrement: onSpinButtonDecrement, incrementButtonAriaLabel: 'Increase value by 2', decrementButtonAriaLabel: 'Decrease value by 2' }))); };
//# sourceMappingURL=SpinButton.Stateful.Example.js.map
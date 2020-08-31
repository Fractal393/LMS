import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
// Used to add spacing between example checkboxes
var stackTokens = { childrenGap: 10 };
export var CheckboxIndeterminateExample = function () {
    // Only used for the controlled checkbox (the last one)
    var _a = React.useState(true), isIndeterminate = _a[0], setIsIndeterminate = _a[1];
    var _b = React.useState(false), isChecked = _b[0], setIsChecked = _b[1];
    var onChange = React.useCallback(function (ev, newChecked) {
        if (isIndeterminate) {
            // If the checkbox was indeterminate, the first click should remove the indeterminate state
            // without affecting the checked state
            setIsIndeterminate(false);
        }
        else {
            setIsChecked(newChecked);
        }
    }, [isIndeterminate]);
    return (React.createElement(Stack, { tokens: stackTokens },
        React.createElement(Checkbox, { label: "Indeterminate checkbox (uncontrolled)", defaultIndeterminate: true }),
        React.createElement(Checkbox, { label: "Indeterminate checkbox which defaults to true when clicked (uncontrolled)", defaultIndeterminate: true, defaultChecked: true }),
        React.createElement(Checkbox, { label: "Disabled indeterminate checkbox", disabled: true, defaultIndeterminate: true }),
        React.createElement(Checkbox, { label: "Indeterminate checkbox (controlled)", indeterminate: isIndeterminate, checked: isChecked, onChange: onChange })));
};
//# sourceMappingURL=Checkbox.Indeterminate.Example.js.map
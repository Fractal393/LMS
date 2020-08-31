import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
// Used to add spacing between example checkboxes
var stackTokens = { childrenGap: 10 };
export var CheckboxBasicExample = function () {
    // These checkboxes are uncontrolled because they don't set the `checked` prop.
    return (React.createElement(Stack, { tokens: stackTokens },
        React.createElement(Checkbox, { label: "Unchecked checkbox (uncontrolled)", onChange: _onChange }),
        React.createElement(Checkbox, { label: "Checked checkbox (uncontrolled)", defaultChecked: true, onChange: _onChange }),
        React.createElement(Checkbox, { label: "Disabled checkbox", disabled: true }),
        React.createElement(Checkbox, { label: "Disabled checked checkbox", disabled: true, defaultChecked: true })));
};
function _onChange(ev, isChecked) {
    console.log("The option has been changed to " + isChecked + ".");
}
//# sourceMappingURL=Checkbox.Basic.Example.js.map
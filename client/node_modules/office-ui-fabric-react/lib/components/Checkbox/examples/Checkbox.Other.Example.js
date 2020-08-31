import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
// Optional extra props to pass through to the input element
var inputProps = {
    onFocus: function () { return console.log('Checkbox is focused'); },
    onBlur: function () { return console.log('Checkbox is blurred'); },
};
// Used to add spacing between example checkboxes
var stackTokens = { childrenGap: 10 };
export var CheckboxOtherExample = function () {
    // Only for the first checkbox, which is controlled
    var _a = React.useState(true), isChecked = _a[0], setIsChecked = _a[1];
    var onChange = React.useCallback(function (ev, checked) {
        setIsChecked(!!checked);
    }, []);
    return (React.createElement(Stack, { tokens: stackTokens },
        React.createElement(Checkbox, { label: "Controlled checkbox", checked: isChecked, onChange: onChange }),
        React.createElement(Checkbox, { label: 'Checkbox rendered with boxSide "end"', boxSide: "end" }),
        React.createElement(Checkbox, { label: "Checkbox with extra props for the input", inputProps: inputProps }),
        React.createElement(Checkbox, { label: "Checkbox with link inside the label", onRenderLabel: _renderLabelWithLink })));
};
function _renderLabelWithLink() {
    return (React.createElement("span", null,
        "Custom-rendered label with a",
        ' ',
        React.createElement(Link, { href: "https://www.microsoft.com", target: "_blank" }, "link")));
}
//# sourceMappingURL=Checkbox.Other.Example.js.map
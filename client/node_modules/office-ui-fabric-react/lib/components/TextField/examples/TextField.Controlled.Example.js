import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { useConstCallback } from '@uifabric/react-hooks';
var textFieldStyles = { fieldGroup: { width: 300 } };
var narrowTextFieldStyles = { fieldGroup: { width: 100 } };
var stackTokens = { childrenGap: 15 };
export var TextFieldControlledExample = function () {
    var _a = React.useState(''), firstTextFieldValue = _a[0], setFirstTextFieldValue = _a[1];
    var _b = React.useState(''), secondTextFieldValue = _b[0], setSecondTextFieldValue = _b[1];
    var onChangeFirstTextFieldValue = useConstCallback(function (event, newValue) {
        setFirstTextFieldValue(newValue || '');
    });
    var onChangeSecondTextFieldValue = useConstCallback(function (event, newValue) {
        if (!newValue || newValue.length <= 5) {
            setSecondTextFieldValue(newValue || '');
        }
    });
    return (React.createElement(Stack, { tokens: stackTokens },
        React.createElement(TextField, { label: "Basic controlled TextField", value: firstTextFieldValue, onChange: onChangeFirstTextFieldValue, styles: textFieldStyles }),
        React.createElement(TextField, { label: "Controlled TextField limiting length of value to 5", value: secondTextFieldValue, onChange: onChangeSecondTextFieldValue, styles: narrowTextFieldStyles })));
};
//# sourceMappingURL=TextField.Controlled.Example.js.map
import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { useId } from '@uifabric/react-hooks';
export var LabelBasicExample = function () {
    var textFieldId = useId('anInput');
    return (React.createElement("div", null,
        React.createElement(Label, null, "I'm a Label"),
        React.createElement(Label, { disabled: true }, "I'm a disabled Label"),
        React.createElement(Label, { required: true }, "I'm a required Label"),
        React.createElement(Label, { htmlFor: textFieldId }, "A Label for An Input"),
        React.createElement(TextField, { id: textFieldId })));
};
//# sourceMappingURL=Label.Basic.Example.js.map
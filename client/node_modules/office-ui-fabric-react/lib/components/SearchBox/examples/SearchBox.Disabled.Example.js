import * as React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
var stackTokens = { childrenGap: 20 };
export var SearchBoxDisabledExample = function () { return (React.createElement(Stack, { tokens: stackTokens },
    React.createElement(SearchBox, { placeholder: "Search", disabled: true }),
    React.createElement(SearchBox, { placeholder: "Search", underlined: true, disabled: true }))); };
//# sourceMappingURL=SearchBox.Disabled.Example.js.map
import * as React from 'react';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { createTheme } from 'office-ui-fabric-react/lib/Styling';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Text } from 'office-ui-fabric-react/lib/Text';
var theme = createTheme({
    fonts: {
        medium: {
            fontFamily: 'Monaco, Menlo, Consolas',
            fontSize: '30px',
        },
    },
});
var stackTokens = { childrenGap: 12 };
export var SeparatorThemingExample = function () { return (React.createElement(Stack, { tokens: stackTokens },
    React.createElement(Text, null, "Horizontal center aligned with custom theme"),
    React.createElement(Separator, { theme: theme }, "Today"))); };
//# sourceMappingURL=Separator.Theming.Example.js.map
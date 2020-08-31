import * as React from 'react';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
var iconStyles = {
    root: {
        fontSize: '24px',
        height: '24px',
        width: '24px',
    },
};
var stackTokens = { childrenGap: 12 };
export var SeparatorIconExample = function () { return (React.createElement(Stack, { tokens: stackTokens },
    React.createElement(Text, null, "Horizontal center aligned with an icon as content"),
    React.createElement(Separator, null,
        React.createElement(Icon, { iconName: "Clock", styles: iconStyles })))); };
//# sourceMappingURL=Separator.Icon.Example.js.map
import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
export var ContextualMenuIconSecondaryTextExample = function () {
    return React.createElement(DefaultButton, { text: "Click for ContextualMenu", menuProps: menuProps });
};
var menuItems = [
    {
        key: 'Later Today',
        iconProps: {
            iconName: 'Clock',
        },
        text: 'Later Today',
        secondaryText: '7:00 PM',
    },
    {
        key: 'Tomorrow',
        iconProps: {
            iconName: 'Coffeescript',
        },
        text: 'Tomorrow',
        secondaryText: 'Thu. 8:00 AM',
    },
    {
        key: 'This Weekend',
        iconProps: {
            iconName: 'Vacation',
        },
        text: 'This Weekend',
        secondaryText: 'Sat. 10:00 AM',
    },
    {
        key: 'Next Week',
        iconProps: {
            iconName: 'Suitcase',
        },
        text: 'Next Week',
        secondaryText: 'Mon. 8:00 AM',
    },
];
var menuProps = {
    shouldFocusOnMount: true,
    items: menuItems,
};
//# sourceMappingURL=ContextualMenu.Icon.SecondaryText.Example.js.map
import * as React from 'react';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
var options = [
    { key: 'day', text: 'Day', iconProps: { iconName: 'CalendarDay' } },
    { key: 'week', text: 'Week', iconProps: { iconName: 'CalendarWeek' } },
    { key: 'month', text: 'Month', iconProps: { iconName: 'Calendar' }, disabled: true },
];
export var ChoiceGroupIconExample = function () {
    return React.createElement(ChoiceGroup, { label: "Pick one icon", defaultSelectedKey: "day", options: options });
};
//# sourceMappingURL=ChoiceGroup.Icon.Example.js.map
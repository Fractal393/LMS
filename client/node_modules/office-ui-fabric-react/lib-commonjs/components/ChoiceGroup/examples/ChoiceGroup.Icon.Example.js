"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ChoiceGroup_1 = require("office-ui-fabric-react/lib-commonjs/ChoiceGroup");
var options = [
    { key: 'day', text: 'Day', iconProps: { iconName: 'CalendarDay' } },
    { key: 'week', text: 'Week', iconProps: { iconName: 'CalendarWeek' } },
    { key: 'month', text: 'Month', iconProps: { iconName: 'Calendar' }, disabled: true },
];
exports.ChoiceGroupIconExample = function () {
    return React.createElement(ChoiceGroup_1.ChoiceGroup, { label: "Pick one icon", defaultSelectedKey: "day", options: options });
};
//# sourceMappingURL=ChoiceGroup.Icon.Example.js.map
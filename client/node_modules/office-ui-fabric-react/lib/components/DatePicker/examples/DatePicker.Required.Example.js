import * as React from 'react';
import { DatePicker, DayOfWeek } from 'office-ui-fabric-react/lib/DatePicker';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
var DayPickerStrings = {
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    goToToday: 'Go to today',
    prevMonthAriaLabel: 'Go to previous month',
    nextMonthAriaLabel: 'Go to next month',
    prevYearAriaLabel: 'Go to previous year',
    nextYearAriaLabel: 'Go to next year',
    closeButtonAriaLabel: 'Close date picker',
    isRequiredErrorMessage: 'Field is required.',
    invalidInputErrorMessage: 'Invalid date format.',
};
var controlClass = mergeStyleSets({
    control: {
        margin: '0 0 15px 0',
        maxWidth: '300px',
    },
});
var firstDayOfWeek = DayOfWeek.Sunday;
export var DatePickerRequiredExample = function () { return (React.createElement("div", { className: "docs-DatePickerExample" },
    React.createElement("p", null, "Validation will happen when Date Picker loses focus."),
    React.createElement(DatePicker, { className: controlClass.control, label: "Date required (with label)", isRequired: true, firstDayOfWeek: firstDayOfWeek, strings: DayPickerStrings, placeholder: "Select a date...", ariaLabel: "Select a date" }),
    React.createElement(DatePicker, { className: controlClass.control, isRequired: true, firstDayOfWeek: firstDayOfWeek, strings: DayPickerStrings, placeholder: "Date required with no label...", ariaLabel: "Select a date" }))); };
//# sourceMappingURL=DatePicker.Required.Example.js.map
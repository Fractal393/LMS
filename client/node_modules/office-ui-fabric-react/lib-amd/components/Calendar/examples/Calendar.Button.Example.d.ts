import * as React from 'react';
export interface ICalendarButtonExampleProps {
    isDayPickerVisible?: boolean;
    isMonthPickerVisible?: boolean;
    highlightCurrentMonth?: boolean;
    highlightSelectedMonth?: boolean;
    buttonString?: string;
    showMonthPickerAsOverlay?: boolean;
    showGoToToday?: boolean;
}
export declare const CalendarButtonExample: React.FunctionComponent<ICalendarButtonExampleProps>;

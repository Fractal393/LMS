import * as React from 'react';
import { DayOfWeek, DateRangeType } from 'office-ui-fabric-react/lib/Calendar';
export interface ICalendarInlineExampleProps {
    isMonthPickerVisible?: boolean;
    dateRangeType: DateRangeType;
    autoNavigateOnSelection: boolean;
    showGoToToday: boolean;
    showNavigateButtons?: boolean;
    highlightCurrentMonth?: boolean;
    highlightSelectedMonth?: boolean;
    isDayPickerVisible?: boolean;
    showMonthPickerAsOverlay?: boolean;
    showWeekNumbers?: boolean;
    minDate?: Date;
    maxDate?: Date;
    restrictedDates?: Date[];
    showSixWeeksByDefault?: boolean;
    workWeekDays?: DayOfWeek[];
    firstDayOfWeek?: DayOfWeek;
}
export declare const CalendarInlineExample: React.FunctionComponent<ICalendarInlineExampleProps>;

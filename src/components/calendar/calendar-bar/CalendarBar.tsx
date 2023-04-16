import React from "react";
import { calendar } from "~/helpers/calendar";
import Day from "./Day";

const CalendarBar = () => {
  const [calendarDates, setCalendarDates] = React.useState(
    calendar.generateBarDates()
  );

  return (
    <div className="card glass mt-20 flex flex-row items-center justify-center divide-x-0 overflow-scroll py-5 shadow-xl">
      {calendarDates.map((date) => (
        <Day date={date} />
      ))}
    </div>
  );
};

export default CalendarBar;

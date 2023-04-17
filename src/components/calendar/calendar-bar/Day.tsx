import React from "react";
import type { DateObj } from "~/helpers/calendar";

interface DayProps {
  date: DateObj;
}

const Day = ({ date }: DayProps) => {
  return (
    <div
      className={`z-10 flex flex-col items-center justify-center p-2 px-3 ${
        date.isToday ? "rounded-full border-2 border-red-500" : "null"
      }`}
    >
      <div>{date.date.toDate().toDateString().slice(0, 3)}</div>
      <div>{date.date.date()}</div>
    </div>
  );
};

export default Day;

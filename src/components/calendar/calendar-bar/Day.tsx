import React from "react";
import { DateObj } from "~/helpers/calendar";

interface DayProps {
  date: DateObj;
}

const Day = ({ date }: DayProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-2 px-3 ${
        date.isToday && "rounded-full border-2 border-red-500"
      }`}
    >
      <div>{date.date.toDate().toDateString().slice(0, 3)}</div>
      <div>{date.date.date()}</div>
    </div>
  );
};

export default Day;

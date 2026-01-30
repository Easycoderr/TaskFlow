import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import SimpleButtonIcon from "../components/SimpleButtonIcon";
import { IoToday } from "react-icons/io5";
import { useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth)),
  });
  console.log(format(addMonths(new Date(), 1), "MMMM-yyyy"));
  return (
    <div className="bg-bg text-text dark:text-text-dark dark:bg-bg-dark">
      {/* Calendar */}
      <div className="max-w-lg mx-auto grid grid-cols-1 border-gray-400">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          {/* Month and year name */}
          <h2 className="text-2xl">{format(currentMonth, "MMMM - yyyy")}</h2>
          {/* action buttons */}
          <div className="flex items-center gap-4">
            <SimpleButtonIcon
              onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
              title="move to prev month"
              label="Arrow left button"
            >
              <BsArrowLeftSquare className="text-2xl hover:text-primary transition-all duration-300" />
            </SimpleButtonIcon>
            <SimpleButtonIcon
              onClick={() => setCurrentMonth(new Date())}
              title="Today date"
              label="Today date button"
            >
              <IoToday className="text-2xl hover:text-primary transition-all duration-300" />
            </SimpleButtonIcon>
            <SimpleButtonIcon
              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
              title="move to next month"
              label="Arrow right button"
            >
              <BsArrowRightSquare className="text-2xl hover:text-primary transition-all duration-300" />
            </SimpleButtonIcon>
          </div>
        </div>
        {/* days of the week */}
        <div className="grid grid-cols-7 font-semibold mb-2">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
            <div
              key={d}
              className="border-primary p-4 text-xs text-center odd:bg-gray-100 dark:odd:bg-gray-900"
            >
              {d}
            </div>
          ))}
        </div>
        {/* the calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, idx) => (
            <div
              key={idx}
              className={`h-12 flex items-center justify-center cursor-pointer text-sm
              ${!isSameMonth(day, currentMonth) ? "text-gray-400  dark:text-gray-500" : "dark:text-text-dark text-gray-700"}
              ${isToday(day) ? "bg-linear-to-tr from-cyan-600 via-cyan-500 to-cyan-600 bg-300 animate-gradient text-text rounded-md" : "hover:bg-primary rounded-md transition-all duration-200"}`}
            >
              {format(day, "d")}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;

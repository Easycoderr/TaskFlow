import {
  BsArrowLeftSquare,
  BsArrowRightSquare,
  BsTriangleFill,
} from "react-icons/bs";
import SimpleButtonIcon from "../components/SimpleButtonIcon";
import { IoToday } from "react-icons/io5";
import { useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import Heading from "../components/Heading";
import useTasks from "../features/tasks/useTasks";
import { GoDot, GoDotFill } from "react-icons/go";
import Spinner from "../components/Spinner";

function Calendar() {
  const { data: tasks, isPending, isError } = useTasks();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isMousehover, setIsMouseHover] = useState(null);
  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth)),
  });
  if (isPending) return <Spinner />;
  return (
    <div className="grid grid-cols-2 bg-bg text-text dark:text-text-dark dark:bg-bg-dark">
      {/* header */}
      <div className="text-text col-span-2 dark:text-text-dark space-y-3 flex items-center justify-between mb-8">
        <div>
          <Heading>Calendar</Heading>
        </div>
      </div>
      {/* Calendar */}
      <div className="max-w-lg mx-auto grid grid-cols-1 border-gray-400">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          {/* Month and year name */}
          <h2 className="text-2xl font-semibold">
            {format(currentMonth, "MMMM - yyyy")}
          </h2>
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
        <div className="border p-2 border-primary">
          {/* days of the week */}
          <div className="grid grid-cols-7 font-semibold mb-2">
            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
              <div key={d} className="border-primary p-4 text-xs text-center ">
                {d}
              </div>
            ))}
          </div>
          {/* the calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, idx) => {
              const hasTasks = tasks?.filter((task) =>
                isSameDay(new Date(task.due_date), day),
              );

              return (
                <div
                  onMouseLeave={() => setIsMouseHover(null)}
                  onMouseOver={() => setIsMouseHover(idx)}
                  key={idx}
                  className={`relative h-12 flex items-center justify-center cursor-pointer text-sm
              ${!isSameMonth(day, currentMonth) ? "text-gray-400  dark:text-gray-500" : "dark:text-text-dark text-gray-700"}
              ${isToday(day) ? "bg-linear-to-tr from-cyan-600 via-cyan-500 to-cyan-600 bg-300 animate-gradient text-text rounded-md" : "hover:bg-primary rounded-md transition-all duration-200"}`}
                >
                  {hasTasks?.length !== 0 && isMousehover === idx && (
                    <div className="absolute -bottom-10 right-[50%] translate-x-[50%] shadow-sm z-20">
                      {/* Outer container with the rotating snake */}
                      <div className="snake-border-container p-[1px] rounded-md bg-gray-200 dark:bg-gray-700">
                        {/* Inner container to hold the actual content */}
                        <div className="snake-border-inner text-text-muted dark:text-text-muted-dark p-2 rounded-md bg-card dark:bg-card-dark">
                          {hasTasks?.map((task) => (
                            <div
                              key={task.id}
                              className="relative text-xs flex items-center gap-1 z-20"
                            >
                              <span className="font-medium">{task.title}</span>
                              <GoDotFill size={8} />
                              <span
                                className={`${task.status === "completed" ? "text-primary" : "text-amber-500"}`}
                              >
                                {task.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* The Triangle Tip */}
                      <span>
                        <BsTriangleFill className="dark:text-gray-700 text-gray-200 absolute -top-2 left-[50%] -translate-x-[50%]" />
                      </span>
                    </div>
                  )}
                  {format(day, "d")}
                  <span
                    className={`absolute bottom-0.5 right-0.5 ${hasTasks?.length !== 0 ? "bg-amber-400 rounded-full h-2 w-2 animate-pulse" : ""}`}
                  ></span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;

import { format, isSameDay, isSameMonth, isToday } from "date-fns";
import { BsTriangleFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

function CalendarGrid({
  setSelectedDay,
  setIsMouseHover,
  isMousehover,
  currentMonth,
  tasks,
  days,
}) {
  return (
    <div className="bg-card dark:bg-card-dark rounded-md p-2">
      {/* days of the week */}
      <div className="grid grid-cols-7 font-semibold mb-2 divide-x divide-gray-800">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
          <div key={d} className="p-4 text-xs text-center ">
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
              onClick={() => setSelectedDay(day)}
              onMouseLeave={() => setIsMouseHover(null)}
              onMouseOver={() => setIsMouseHover(idx)}
              key={idx}
              className={`relative h-12 flex items-center justify-center cursor-pointer text-sm
                      ${!isSameMonth(day, currentMonth) ? "text-gray-400  dark:text-gray-500" : "dark:text-text-dark text-gray-700"}
                      ${isToday(day) ? "bg-linear-to-tr border border-secondary bg-secondary/20 backdrop-blur-2xl text-text rounded-md" : "hover:bg-primary/30 hover:border hover:border-primary rounded-md transition-colors duration-200"}`}
            >
              {hasTasks?.length !== 0 && isMousehover === idx && (
                <div className="absolute -bottom-10 right-[50%] translate-x-[50%] shadow-sm z-20">
                  {/* Outer container with the rotating snake */}
                  <div className="snake-border-container p-px rounded-md bg-gray-200 dark:bg-gray-700">
                    {/* Inner container to hold the actual content */}
                    <div className="snake-border-inner text-text-muted dark:text-text-muted-dark p-2 rounded-md bg-card dark:bg-card-dark">
                      {hasTasks?.slice(0, 1).map((task) => (
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
                          <span>
                            {hasTasks.length > 1 && (
                              <span
                                className="hover:underline hover:text-gray-500"
                                onClick={() => setSelectedDay(day)}
                              >
                                more...
                              </span>
                            )}
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
  );
}

export default CalendarGrid;

import { BsDot, BsFire } from "react-icons/bs";
import { isOverDue, isToday } from "../../utils/taskUtils";
import useUpdateTaskStatus from "../tasks/useUpdateTaskStatus";
import generateCharecter from "../../utils/generateCharecter";

function TodayTasks({ tasks }) {
  const filteredTasks = tasks
    // 1. Sort by date (Earliest first)
    ?.sort((a, b) => new Date(a.due_date) - new Date(b.due_date))
    .filter((task) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Normalize to start of today

      const dueDate = new Date(task.due_date);
      dueDate.setHours(0, 0, 0, 0); // Normalize to start of due date

      // Comparison is now safe because we are using Date objects
      const isToday = dueDate.getTime() === today.getTime();
      const overDue = isOverDue(task);
      return isToday || overDue;
    })
    //  limit task we want display first 4 indexs
    .slice(0, 5);

  return (
    <div className="p-4 space-y-5 rounded-md col-span-2 md:col-span-1 bg-card  text-text dark:text-text-dark dark:bg-card-dark shadow-md">
      <h3 className="text-lg flex items-center gap-1 sm:text-xl font-medium tracking-tight">
        <BsFire className="text-orange-400 mb-0.5" /> Focus Today
      </h3>
      {/* list of today items */}
      <div className="flex flex-col gap-4">
        {/* items */}

        {filteredTasks.map((task) => (
          <TodayItem
            key={task.id}
            id={task.id}
            title={task.title}
            status={task.status}
            dueDate={task.due_date}
          />
        ))}
      </div>
    </div>
  );
}
function TodayItem({ id, status, title, dueDate }) {
  const uniqeId = generateCharecter();
  const { mutate, isPending: isUpdating } = useUpdateTaskStatus();
  const isCompleted = status === "completed";
  function handleUpdateStatus() {
    const data = {
      status: status === "completed" ? "incomplete" : "completed",
    };
    mutate({ id, data });
  }
  return (
    <div className="flex flex-row items-center justify-between">
      {/* checkbox */}
      <div className="flex items-center gap-2">
        <input
          onChange={handleUpdateStatus}
          disabled={isUpdating}
          type="checkbox"
          name={uniqeId}
          id={uniqeId}
          checked={isCompleted}
          className="accent-primary cursor-pointer hover:accent-green-400"
        />
        <label
          disabled={isUpdating}
          htmlFor={uniqeId}
          className={`select-none ${isUpdating && "opacity-50"} cursor-pointer flex items-center relative`}
        >
          <div
            className={`absolute transition-all duration-300 ${isCompleted ? "w-full" : "w-0"} bg-linear-to-r from-primary via-green-secondary to-primary opacity-80 h-0.5`}
          ></div>
          {title}
        </label>
      </div>
      <div
        title={`Due Date: ${dueDate}`}
        className="text-xs flex items-center gap-1"
      >
        <span className="hidden md:block">{dueDate}</span>
        <span className="hidden md:block">
          <BsDot />
        </span>
        <span>{isToday(dueDate) ? "Today" : "Over due"}</span>
        <span
          className={`h-2 w-2 rounded-full ${isToday(dueDate) ? "bg-amber-500" : "bg-red-500/70 animate-pulse"}`}
        ></span>
      </div>
    </div>
  );
}

export default TodayTasks;

import { BiEdit, BiTrash } from "react-icons/bi";

function TaskItem({ title, completed, priority, dueDate, project }) {
  return (
    <div className="flex flex-col items-center py-4 sm:py-3 p-3 justify-between gap-4 border border-gray-200 dark:border-gray-700 hover:border-primary transition-all duration-300  shadow-md bg-bg dark:bg-card-dark rounded-md">
      {/* title checkbox */}
      <div className="flex flex-row items-center gap-2 sm:mr-auto">
        <input
          type="checkbox"
          name="task"
          id="task"
          checked={completed}
          className="accent-primary h-4 w-4 cursor-pointer hover:accent-green-400"
        />
        <label
          htmlFor="task"
          className="select-none text-lg cursor-pointer flex items-center relative"
        >
          <div
            className={`absolute transition-all duration-300 ${completed ? "w-full" : "w-0"} bg-linear-to-r from-primary via-green-secondary to-primary opacity-80 h-0.5`}
          ></div>
          {title}
        </label>
      </div>
      <div className="flex flex-col w-full items-center sm:flex-row sm:mr-auto sm:justify-between gap-4">
        {/* project tag */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div className="bg-linear-to-l from-primary via-secondary to-primary animate-logo bg-300 text-transparent bg-clip-text font-medium">
            #{project}
          </div>
          {/* due date */}
          <div className="text-sm text-text-muted dark:text-text-muted-dark">
            {dueDate}
          </div>
          {/* status */}
          <div className="text-sm flex items-center gap-1 text-text-muted dark:text-text-muted-dark">
            <span>{completed ? "completed" : "incompleted"}</span>
            <span
              className={`h-2 w-2 rounded-full ${completed ? "bg-primary" : "bg-amber-500 animate-pulse"}`}
            ></span>
          </div>
        </div>
        {/* actions */}
        <div className="flex gap-2">
          <button className="bg-red-700/70 text-text-dark rounded-md px-2 py-1 text-sm flex items-center gap-1 cursor-pointer transition-all duration-300 hover:opacity-60">
            <BiTrash /> Delete
          </button>
          <button className="bg-green-700/70 text-text-dark rounded-md px-2 py-1 text-sm flex items-center gap-1 cursor-pointer transition-all duration-300 hover:opacity-60">
            <BiEdit /> Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;

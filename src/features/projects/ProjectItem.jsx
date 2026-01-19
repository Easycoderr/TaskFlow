import { BiEdit, BiTrash } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { LuAlarmClockOff } from "react-icons/lu";

function ProjectItem({
  title,
  description,
  status,
  tasksCount,
  completedTasks,
  dueDate,
}) {
  const progress = tasksCount > 0 ? (completedTasks / tasksCount) * 100 : 0;
  return (
    <div className="bg-card dark:bg-card-dark space-y-3 rounded-md border hover:border-primary transition-all duration-300 p-4">
      {/* heade */}
      <h2 className="text-xl font-semibold leading-tight tracking tight">
        {title}
      </h2>
      <p className="leading-relaxed text-sm text-text-muted dark:text-text-muted-dark">
        {description}
      </p>
      <div className="flex flex-col gap-1 mb-10">
        <span className="font-medium">
          {completedTasks} / {tasksCount} tasks
        </span>
        <span className="rounded-full overflow-hidden relative border border-text-muted dark:border-text-muted h-3 w-full">
          {/* progress */}
          <span
            title="you have complete 3 tasks of 10."
            className={`absolute h-full transition-all duration-300 bg-linear-to-r from-primary via-secondary to-primary bg-300 animate-gradient`}
            style={{ width: `${progress}%` }}
          ></span>
        </span>
      </div>
      {/* FOOTER OF CARD */}
      <div className="flex justify-between md:items-end flex-col gap-y-4 md:gap-y-0 md:flex-row">
        {/* status */}
        <div className="space-y-2">
          <div className="text-sm flex items-center gap-2">
            <span className="h-2 w-2 bg-primary rounded-full animate-pulse"></span>
            {status}
          </div>
          {/* duedate */}
          <div className="text-sm flex items-center gap-2">
            <LuAlarmClockOff className="text-red-500" />
            {dueDate}
          </div>
        </div>
        {/* actions */}
        <div className="flex flex-row flex-wrap gap-2">
          <Button
            colorClasses="bg-cyan-100 text-cyan-700"
            type="button"
            title="View"
            label="View button"
          >
            <BsEye className="" />
            <span className="text-sm">View</span>
          </Button>
          <Button
            colorClasses="bg-red-100 text-red-700"
            type="button"
            title="Delete"
            label="delete button"
          >
            <BiTrash className="" />
            <span className="text-sm">Delete</span>
          </Button>
          <Button
            colorClasses="bg-green-100 text-green-700"
            type="button"
            title="Edit"
            label="Edit button"
          >
            <BiEdit className="" />
            <span className="text-sm">Edit</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
function Button({ colorClasses, children, type, title, label }) {
  return (
    <button
      aria-label={label}
      title={title}
      type={type}
      className={`flex items-center gap-1 ${colorClasses} px-3 py-1.5 cursor-pointer rounded-md hover:opacity-80 transition-all duration-300`}
    >
      {children}
    </button>
  );
}
export default ProjectItem;

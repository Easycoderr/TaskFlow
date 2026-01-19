import { LuAlarmClockOff } from "react-icons/lu";
import Heading from "../components/Heading";
import { BiEdit, BiLeftArrowAlt, BiTrash } from "react-icons/bi";
import { Button } from "../features/projects/ProjectItem";
import TaskItem from "../features/tasks/TaskItem";
export const fakeTasks = [
  {
    id: 1,
    title: "Fix login validation",
    completed: false,
    priority: "high",
    dueDate: "2026-01-20",
    project: "Auth System",
  },
  {
    id: 2,
    title: "Finish dashboard UI",
    completed: false,
    priority: "medium",
    dueDate: "2026-01-21",
    project: "TaskFlow",
  },
  {
    id: 3,
    title: "API integration",
    completed: true,
    priority: "low",
    dueDate: "2026-01-18",
    project: "Backend",
  },
  {
    id: 4,
    title: "Prepare project demo",
    completed: false,
    priority: "high",
    dueDate: "2026-01-22",
    project: "Presentation",
  },
];

function ProjectDetails() {
  return (
    <div className="">
      <div>
        {/* navigate to project */}
        <button
          aria-label="back to projects"
          title="back to projects"
          className="flex items-center group gap-1 cursor-pointer px-3 py-2 border rounded-md border-gray-100 dark:border-gray-700 hover:border-primary transition-all duration-300"
        >
          <BiLeftArrowAlt className="text-xl group-hover:scale-105 group-hover:-translate-x-1 transition-all duration-300" />
          <span className="">Back to projects</span>
        </button>
      </div>

      <div className="bg-bg p-6 dark:bg-bg-dark space-y-10 overflow-y-auto grid grid-cols-2 gap-x-4">
        {/* project */}
        <div className="text-text dark:text-text-dark gap-8 md:gap-0 col-span-2 flex flex-col md:flex-row items-center md:justify-between">
          <div className="space-y-3">
            <div>
              <Heading>Project Name</Heading>
            </div>
            <div className="leading-relaxed max-w-2xl text-text-muted dark:text-text-muted-dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              id, harum totam ipsam iste quasi, delectus perspiciatis eos
              maiores earum reprehenderit voluptatum, illum quod. Ducimus enim
              aliquid dignissimos nemo? Excepturi.
            </div>
            {/* status duedate and action buttons */}
            <div className="flex md:justify-between gap-4 md:gap-0 md:items-center md:flex-row flex-col">
              <div className="flex gap-4 md:gap-8 text-text-muted dark:text-text-muted-dark">
                <div className="text-sm flex items-center gap-2">
                  <span className="h-2 w-2  bg-primary rounded-full animate-pulse"></span>
                  Active
                </div>
                {/* duedate */}
                <div className="text-sm text-text-muted dark:text-text-muted-dark flex items-center gap-2">
                  <LuAlarmClockOff className="text-red-500" />
                  2026/5/24
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-2">
                <Button
                  colorClasses="bg-red-100/70 text-red-700/90"
                  type="button"
                  title="Delete project"
                  label="delete button"
                >
                  <BiTrash className="" />
                  <span className="text-sm">Delete</span>
                </Button>
                <Button
                  colorClasses="bg-green-100/70 text-green-700"
                  type="button"
                  title="Edit project"
                  label="Edit button"
                >
                  <BiEdit className="" />
                  <span className="text-sm">Edit</span>
                </Button>
              </div>
            </div>
            {/* actions of project */}
          </div>
          {/* progress */}
          <div className="flex flex-col items-center gap-4">
            {/* Outer circle using conic-gradient */}
            <div
              className="relative flex items-center justify-center rounded-full md:w-46 md:h-46 w-36 h-36"
              style={{
                background: `conic-gradient(var(--color-primary) ${10}%, #e5e7eb 0)`,
              }}
            >
              {/* Inner circle (the "hole") to make it a ring */}
              <div className="absolute inset-2 rounded-full bg-white dark:bg-card-dark flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <span className="text-xl md:text-3xl font-bold">
                    {Math.round(10)}%
                  </span>
                  <span className="text-sm md:text-lg text-text-muted">
                    {4}/{3}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 ">
          <h3 className="text-xl font-medium py-4">Project Tasks</h3>
          {/* task card */}
          {/* project tasks*/}
          <div className="overflow-y-auto grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-4 text-text dark:text-text-dark">
            {/* header */}

            {fakeTasks.map((item) => (
              <TaskItem
                key={item.id}
                title={item.title}
                completed={item.completed}
                dueDate={item.dueDate}
                project={item.project}
                priority={item.priority}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;

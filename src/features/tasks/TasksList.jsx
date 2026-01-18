import TaskItem from "./TaskItem";
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

function TasksList() {
  return (
    <div className="overflow-y-auto grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-4 text-text dark:text-text-dark">
      {/* task card */}
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
  );
}

export default TasksList;

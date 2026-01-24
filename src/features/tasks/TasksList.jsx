import Spinner from "../../components/Spinner";
import TaskItem from "./TaskItem";
import useTasks from "./useTasks";

function TasksList() {
  const { data: tasks, isLoading } = useTasks();
  if (isLoading) return <Spinner />;
  return (
    <div className="overflow-y-auto grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-4 text-text dark:text-text-dark">
      {/* task card */}
      {tasks.data.map((item) => (
        <TaskItem
          key={item.id}
          title={item.title}
          completed={item.completed}
          dueDate={item.dueDate}
          project={item.projects?.name}
          priority={item.priority}
        />
      ))}
    </div>
  );
}

export default TasksList;

import EmptyPage from "../../components/EmptyPage";
import Spinner from "../../components/Spinner";
import TaskItem from "./TaskItem";
import useTasks from "./useTasks";

function TasksList() {
  const { data: tasks, isPending } = useTasks();

  if (isPending) return <Spinner />;

  if (!tasks.length)
    return <EmptyPage>There is no task add your first task</EmptyPage>;
  return (
    <div className="overflow-y-auto grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-4 text-text dark:text-text-dark">
      {/* task card */}

      {tasks.map((item) => (
        <TaskItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          status={item.status}
          dueDate={item.due_date}
          project={item.projects}
          priority={item.priority}
        />
      ))}
    </div>
  );
}

export default TasksList;

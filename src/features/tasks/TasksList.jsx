import { SlEarphones } from "react-icons/sl";
import EmptyPage from "../../components/EmptyPage";
import Spinner from "../../components/Spinner";
import { countTask, isOverDue, isToday } from "../../utils/taskUtils";
import TaskItem from "./TaskItem";
import useTasks from "./useTasks";

function TasksList({ selectedValue }) {
  const { data: tasks, isPending } = useTasks();
  if (isPending) return <Spinner />;
  // we make sure there is a data and thin start our logic.
  if (!tasks.length)
    return <EmptyPage>There is no task add your first task</EmptyPage>;
  const filteredTask =
    selectedValue === "all"
      ? tasks
      : selectedValue === "overdue"
        ? countTask(tasks, isOverDue)
        : selectedValue === "today"
          ? countTask(tasks, (t) => isToday(t.due_date))
          : countTask(tasks, (t) => t.status === selectedValue);
  if (!filteredTask.length)
    return <EmptyPage>There is no task for "{selectedValue}"</EmptyPage>;
  return (
    <div className="overflow-y-auto grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-4 text-text dark:text-text-dark">
      {/* task card */}

      {filteredTask.map((item) => (
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

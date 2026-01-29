import EmptyPage from "../../components/EmptyPage";
import Spinner from "../../components/Spinner";
import { countTask, isOverDue, isToday } from "../../utils/taskUtils";
import TaskItem from "./TaskItem";
import useTasks from "./useTasks";
import ErrorState from "../../components/ErrorState";

import searchFilter from "../../utils/searchUtils";

function TasksList({ selectedValue, searchValue }) {
  const { data: tasks, isPending, isError } = useTasks();
  if (isPending) return <Spinner />;
  if (isError)
    return <ErrorState message="Something went wrong. Please try again." />;
  // we make sure there is a data and thin start our functionality & logic.
  if (!tasks.length)
    return (
      <EmptyPage>You don't have any tasks yet. Add your first task.</EmptyPage>
    );
  let filteredTask;
  switch (selectedValue) {
    case "all":
      filteredTask = tasks;
      break;
    case "overdue":
      filteredTask = countTask(tasks, isOverDue);
      break;
    case "today":
      filteredTask = countTask(tasks, (t) => isToday(t.due_date));
      break;
    default:
      // This handles any status-based values dynamically
      filteredTask = countTask(tasks, (t) => t.status === selectedValue);
      break;
  }
  if (searchValue) {
    filteredTask = searchFilter(filteredTask, (t) =>
      t.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }
  // in a case we have search value
  if (selectedValue !== "all" && !filteredTask?.length)
    return <EmptyPage>No {selectedValue} tasks found.</EmptyPage>;
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

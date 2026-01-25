import { BiEdit, BiTrash } from "react-icons/bi";
import { useUiStates } from "../../hooks/useUiContext";
import { useState } from "react";
import useUpdateTask from "./useUpdateTask";
import useDeleteTask from "./useDeleteTask";

function TaskItem({
  id,
  title,
  description,
  status,
  priority,
  dueDate,
  project,
}) {
  // states
  const [newStatus, setNewStatus] = useState(status);

  // useUpdateTask for updating status
  const { mutate, isPending } = useUpdateTask();
  // useDeleteTask for deleting task
  const { mutate: mutateDelete, isPending: isDeleting } = useDeleteTask();

  // dispatch for open form modal and get that current task data for modal
  const { dispatch } = useUiStates();
  // handle delete task
  function handleDeleteTask() {
    console.log(id);
    mutateDelete(id);
  }
  // update state and push that new status to supabase
  function handleUpdateTaskStatus(status) {
    setNewStatus(status);
    const newTaskData = {
      status,
    };
    mutate({ id: id, data: newTaskData });
  }

  return (
    <div className="flex flex-col items-center py-4 sm:py-3 p-3 justify-between gap-4 border border-gray-200 dark:border-gray-700 hover:border-primary transition-all duration-300  shadow-md bg-bg dark:bg-card-dark rounded-md">
      {/* title checkbox */}
      <div className="flex flex-row items-center gap-2 sm:mr-auto">
        <input
          disabled={isPending}
          onChange={() =>
            handleUpdateTaskStatus(
              newStatus === "incomplete" ? "completed" : "incomplete",
            )
          }
          type="checkbox"
          name="task"
          id="task"
          defaultChecked={newStatus === "completed"}
          className="accent-primary h-4 w-4 cursor-pointer hover:accent-green-400"
        />
        <label
          htmlFor="task"
          className="select-none text-lg cursor-pointer flex items-center relative"
        >
          <div
            className={`absolute transition-all duration-300 ${newStatus === "completed" ? "w-full" : "w-0"} bg-linear-to-r from-primary via-green-secondary to-primary opacity-80 h-0.5`}
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
            <span>{newStatus}</span>
            <span
              className={`h-2 w-2 rounded-full ${newStatus === "completed" ? "bg-primary" : "bg-amber-500 animate-pulse"}`}
            ></span>
          </div>
        </div>
        {/* actions */}
        <div className="flex gap-2">
          <button
            onClick={handleDeleteTask}
            disabled={isDeleting}
            className={`${isDeleting ? "opacity-40 bg-red-600/80" : "bg-red-700/70"} text-text-dark rounded-md px-2 py-1 text-sm flex items-center gap-1 cursor-pointer transition-all duration-300 hover:opacity-60`}
          >
            <BiTrash /> Delete
          </button>
          <button
            onClick={() =>
              dispatch({
                value: "OPEN_MODAL",
                payload: {
                  modal: "editTask",
                  data: {
                    id,
                    title,
                    status,
                    description,
                    priority,
                    dueDate,
                    project,
                  },
                },
              })
            }
            className="bg-green-700/70 text-text-dark rounded-md px-2 py-1 text-sm flex items-center gap-1 cursor-pointer transition-all duration-300 hover:opacity-60"
          >
            <BiEdit /> Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;

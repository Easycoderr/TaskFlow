import { BiEdit, BiTrash } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { LuAlarmClockOff } from "react-icons/lu";
import { useUiStates } from "../../hooks/useUiContext";
import useDeleteProject from "./useDeleteProject";
import ConfirmationModal from "../../components/ConfirmationModal";
import Modal from "../../UI/Modal";
import { useNavigate } from "react-router";
import { countTasks } from "../../utils/countTasks";

function ProjectItem({ id, name, description, status, dueDate, tasks }) {
  const { mutate, isPending: isDeleting } = useDeleteProject();
  const { modal, dispatch } = useUiStates();
  const navigate = useNavigate();
  // tasks logic find tasks number and completed number also progress.
  const { tasksCount, completedTasks, progress } = countTasks(tasks, id);
  // handle delete project function
  function handleDeleteProject() {
    mutate(id);
  }
  return (
    <div className="bg-card dark:bg-card-dark space-y-3 rounded-md border hover:border-primary transition-all duration-300 p-4">
      {/* heade */}
      <h2 className="text-xl font-semibold leading-tight tracking tight">
        {name}
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
          <div className="text-sm flex items-center gap-x-2">
            <span
              className={`h-2 w-2 rounded-full ${status === "active" ? "bg-amber-500 animate-pulse" : "bg-primary"}`}
            ></span>
            <span className="mb-0.5">{status}</span>
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
            onClick={() => {
              navigate(`/project/${id}`);
            }}
            colorClasses="bg-cyan-100 text-cyan-700"
            type="button"
            title="View"
            label="View button"
          >
            <BsEye className="" />
            <span className="text-sm">View</span>
          </Button>
          <Button
            loading={isDeleting}
            onClick={() => {
              tasksCount
                ? dispatch({
                    value: "OPEN_MODAL",
                    payload: {
                      modal: "deleteProject",
                    },
                  })
                : handleDeleteProject();
            }}
            colorClasses="bg-red-100 text-red-700"
            type="button"
            title="Delete"
            label="delete button"
          >
            <BiTrash />
            <span className="text-sm">Delete</span>
          </Button>
          <Button
            colorClasses="bg-green-100 text-green-700"
            type="button"
            title="Edit"
            label="Edit button"
            onClick={() =>
              dispatch({
                value: "OPEN_MODAL",
                payload: {
                  modal: "editProject",
                  data: { id, name, description, status, dueDate },
                },
              })
            }
          >
            <BiEdit />
            <span className="text-sm">Edit</span>
          </Button>
        </div>
      </div>
      {modal === "deleteProject" && (
        <Modal>
          <ConfirmationModal
            title="Deletion"
            message={`This project has ${tasksCount > 1 ? tasksCount + "tasks" : tasksCount + " task"}. Deleting it will unlink those tasks from the project.
            You can still find them in Tasks.
            Are you sure?`}
            onConfirm={handleDeleteProject}
          />
        </Modal>
      )}
    </div>
  );
}
export function Button({
  colorClasses,
  children,
  type,
  title,
  label,
  onClick,
  loading,
}) {
  return (
    <button
      disabled={loading}
      onClick={onClick}
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

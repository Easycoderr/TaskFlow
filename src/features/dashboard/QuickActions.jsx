import { BiPlus } from "react-icons/bi";
import Button from "../../components/Button";
import { useUiStates } from "../../hooks/useUiContext";

function QuickActions() {
  const { dispatch } = useUiStates();
  return (
    <div className="col-span-2 flex items-center justify-end gap-4">
      <Button
        type="primary"
        type2="button"
        title="Click to add new task"
        onClick={() =>
          dispatch({ value: "OPEN_MODAL", payload: { modal: "taskForm" } })
        }
      >
        <span className="flex items-center gap-1">
          <BiPlus className="text-xl font-bold" />
          Add Task
        </span>
      </Button>
      <Button
        type="secondary"
        title="Click to add new project"
        onClick={() =>
          dispatch({ value: "OPEN_MODAL", payload: { modal: "projectForm" } })
        }
      >
        <span className="flex items-center gap-1">
          <BiPlus className="text-xl font-bold" />
          Add Project
        </span>
      </Button>
    </div>
  );
}

export default QuickActions;

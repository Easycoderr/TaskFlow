import { BiPlus } from "react-icons/bi";
import Button from "../components/Button";
import Heading from "../components/Heading";
import TasksList from "../features/tasks/TasksList";
import SearchFilterRow from "../components/SearchFilterRow";
import Modal from "../UI/Modal";
import TaskForm from "../features/tasks/TaskForm";
import { useUiStates } from "../hooks/useUiContext";
import { useState } from "react";
const options = [
  { value: "all", label: "All" },
  { value: "today", label: "Today" },
  { value: "completed", label: "Completed" },
  { value: "incomplete", label: "Incomplete" },
  { value: "overdue", label: "Overdue" },
];
function Tasks() {
  const { modal, modalData, dispatch } = useUiStates();
  // filter state
  const [selectedValue, setSelectedValue] = useState("all");
  return (
    <div className="col-start-2 row-start-2 bg-bg text-text dark:text-text-dark dark:bg-bg-dark space-y-10">
      <div className="text-text dark:text-text-dark space-y-3 flex items-center justify-between mb-5">
        <div>
          <Heading>Tasks</Heading>
        </div>
        <Button
          type="primary"
          type2="button"
          title="Click to add new task"
          onClick={() =>
            dispatch({
              value: "OPEN_MODAL",
              payload: { modal: "addTask" },
            })
          }
        >
          <span className="flex items-center gap-1">
            <BiPlus className="text-xl font-bold" />
            Add Task
          </span>
        </Button>
      </div>
      <SearchFilterRow
        options={options}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <TasksList selectedValue={selectedValue} />
      {modal && (
        <Modal>
          <TaskForm key={modalData?.id || "new-task"} />
        </Modal>
      )}
    </div>
  );
}
export default Tasks;

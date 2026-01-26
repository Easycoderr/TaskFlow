import { useState } from "react";
import { BsCardText } from "react-icons/bs";
import CustomSelect from "../../components/CustomSelect";
import Input from "../../components/Input";

import { GrPlan } from "react-icons/gr";
import Button from "../../components/Button";
import { useUiStates } from "../../hooks/useUiContext";
import useUpdateTask from "./useUpdateTask";
import useAddTask from "./useAddTask";
import { useAuth } from "../../hooks/useAuth";
import useProjects from "../projects/useProjects";

const statusOptions = [
  { value: "completed", label: "Completed" },
  { value: "incomplete", label: "Incomplete" },
];
const priorityOptions = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

function TaskForm() {
  const { data: projects, isLoading } = useProjects();
  const projectOptions = projects?.map((project) => {
    return {
      id: project.id,
      value: project.name,
      label: project.name,
    };
  });

  // get user id
  const {
    state: { user },
  } = useAuth();
  const { mutate: mutateUpdate, isPending: isUpadating } = useUpdateTask();
  const { mutate: mutateAdd, isPending: isAdding } = useAddTask();
  const { modal, modalData } = useUiStates();

  // form states

  const [title, setTitle] = useState(modalData?.title || "");
  const [description, setDescription] = useState(modalData?.description || "");
  const [dueDate, setDueDate] = useState(modalData?.dueDate || "");
  const [selectedStatus, setSelectedStatus] = useState(
    modalData?.status || "incomplete",
  );
  const [selectedPriority, setSelectedPriority] = useState(
    modalData?.priority || null,
  );
  const [selectedProject, setSelectedProject] = useState(
    modalData?.project?.name || null,
  );

  // handle update and add task

  function handleSubmitTask(e) {
    e.preventDefault();
    if (!title || !dueDate || !selectedPriority) return null;
    const projectId = projectOptions.find(
      (project) => project.value === selectedProject,
    ).id;

    const data = {
      title,
      description,
      due_date: dueDate,
      status: selectedStatus,
      priority: selectedPriority,
      project_id: projectId,
    };
    if (modal === "addTask") {
      mutateAdd({ data, user_id: user.id });
    } else {
      mutateUpdate({ id: modalData.id, data });
    }
  }
  return (
    <div className="space-y-6 max-w-xl sm:min-w-md">
      {/* header */}
      <div className="flex flex-col text-2xl text-text dark:text-text-dark tracking-tight font-medium">
        <span className="mx-auto mb-2">
          {modal === "addTask" ? "Add task" : "Edit task"}
        </span>
        <div className="bg-linear-to-l from-transparent via-primary to-transparent h-0.5"></div>
      </div>
      <form action="" className="space-y-4 flex flex-col">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          inputName="task-name"
          inputType="text"
          label="title"
          icon={<GrPlan />}
        />
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          inputName="description"
          inputType="text"
          label="Description"
          icon={<BsCardText />}
        />
        <Input
          onChange={(e) => setDueDate(e.target.value)}
          value={dueDate}
          inputName="dueDate"
          inputType="date"
          label="Due date"
        />
        <div className="flex flex-col sm:flex-row gap-2">
          {modal === "editTask" && (
            <CustomSelect
              options={statusOptions}
              value={selectedStatus}
              onChange={setSelectedStatus}
              placeholder="Status"
            />
          )}
          <CustomSelect
            options={priorityOptions}
            value={selectedPriority}
            onChange={setSelectedPriority}
            placeholder="Priority"
          />
          <CustomSelect
            options={projectOptions}
            value={selectedProject}
            onChange={setSelectedProject}
            placeholder="Projects"
          />
        </div>

        <div className="ml-auto flex flex-row items-center gap-3">
          <Button
            type="cancel"
            type2="button"
            title="click to close and cancel project."
          >
            Cancel
          </Button>
          <Button
            loading={isUpadating || isLoading}
            type="secondary"
            title="click to add the new project."
            onClick={handleSubmitTask}
          >
            {modal === "addTask"
              ? `${isAdding ? "Creating..." : "Create task"}`
              : `${isUpadating ? "Updating..." : "Update task"}`}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;

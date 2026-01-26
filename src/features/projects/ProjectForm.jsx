import { useState } from "react";
import CustomSelect from "../../components/CustomSelect";
import Input from "../../components/Input";
import { GrPlan } from "react-icons/gr";
import { BsCardText } from "react-icons/bs";
import Button from "../../components/Button";
import { useUiStates } from "../../hooks/useUiContext";
import useAddProject from "./useAddProject";
import { useAuth } from "../../hooks/useAuth";

const options = [
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];
function ProjectForm() {
  // UI state s for constroling close and open form
  const { modal, modalData } = useUiStates();
  // form states
  const [selectedStatus, setSelectedStatus] = useState(
    modalData?.status || options[0].value,
  );
  const [projectName, setProjectName] = useState(modalData?.name || "");
  const [description, setDescription] = useState(modalData?.description || "");
  const [dueDate, setDueDate] = useState(modalData?.dueDate || "");

  const { mutate, isPending: isAdding } = useAddProject();
  // get user id
  const { state } = useAuth();
  function onSubmit(e) {
    e.preventDefault();
    const projectData = {
      name: projectName,
      description,
      status: selectedStatus,
      due_date: dueDate,
    };

    mutate({ data: projectData, user_id: state.user.id });
  }
  return (
    <div className="space-y-6 max-w-xl sm:min-w-md">
      {/* header */}
      <div className="flex flex-col text-2xl text-text dark:text-text-dark tracking-tight font-medium">
        <span className="mx-auto mb-2">
          {modal === "addProject" ? "Add project" : "Edit project"}
        </span>
        <div className="bg-linear-to-l from-transparent via-primary to-transparent h-0.5"></div>
      </div>
      <form action="" className="space-y-4 flex flex-col" onSubmit={onSubmit}>
        <Input
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          inputName="project-name"
          inputType="text"
          label="Project name"
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
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          inputName="dueDate"
          inputType="date"
          label="Due date"
        />
        {modal === "editProject" && (
          <CustomSelect
            options={options}
            value={selectedStatus}
            onChange={setSelectedStatus}
            placeholder="Status"
          />
        )}
        <div className="ml-auto flex flex-row items-center gap-3">
          <Button
            type="cancel"
            type2="button"
            title="click to close and cancel project."
          >
            Cancel
          </Button>
          <Button
            loading={isAdding}
            type="secondary"
            title="click to add the new project."
          >
            {modal === "addProject"
              ? `${isAdding ? "Creating..." : "Create Project"}`
              : "Update project"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;

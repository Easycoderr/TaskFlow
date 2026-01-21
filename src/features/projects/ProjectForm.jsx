import { useState } from "react";
import CustomSelect from "../../components/CustomSelect";
import Input from "../../components/Input";
import { GrPlan } from "react-icons/gr";
import { BsCardText } from "react-icons/bs";
import Button from "../../components/Button";
import { useUiStates } from "../../hooks/useUiContext";

const options = [
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];
function ProjectForm() {
  const { modal } = useUiStates();
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  return (
    <div className="space-y-6 max-w-xl sm:min-w-md">
      {/* header */}
      <div className="flex flex-col text-2xl text-text dark:text-text-dark tracking-tight font-medium">
        <span className="mx-auto mb-2">
          {modal === "addProject" ? "Add project" : "Edit project"}
        </span>
        <div className="bg-linear-to-l from-transparent via-primary to-transparent h-0.5"></div>
      </div>
      <form action="" className="space-y-4 flex flex-col">
        <Input
          inputName="project-name"
          inputType="text"
          label="Project name"
          icon={<GrPlan />}
        />
        <Input
          inputName="description"
          inputType="text"
          label="Description"
          icon={<BsCardText />}
        />
        <Input inputName="dueDate" inputType="date" label="Due date" />
        {
          <CustomSelect
            options={options}
            value={selectedValue}
            onChange={setSelectedValue}
            placeholder="Status"
          />
        }
        <div className="ml-auto flex flex-row items-center gap-3">
          <Button
            type="cancel"
            type2="button"
            title="click to close and cancel project."
          >
            Cancel
          </Button>
          <Button type="secondary" title="click to add the new project.">
            {modal === "addProject" ? "Create Project" : "Update project"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;

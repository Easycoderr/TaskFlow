import { useState } from "react";
import { BsCardText } from "react-icons/bs";
import CustomSelect from "../../components/CustomSelect";
import Input from "../../components/Input";

import { GrPlan } from "react-icons/gr";
import Button from "../../components/Button";

const statusOptions = [
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];
const priorityOptions = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];
function TaskForm() {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState(null);

  return (
    <div className="space-y-6 max-w-xl sm:min-w-md">
      {/* header */}
      <div className="flex flex-col text-2xl text-text dark:text-text-dark tracking-tight font-medium">
        <span className="mx-auto mb-2">Add task</span>
        <div className="bg-linear-to-l from-transparent via-primary to-transparent h-0.5"></div>
      </div>
      <form action="" className="space-y-4 flex flex-col">
        <Input
          inputName="task-name"
          inputType="text"
          label="title"
          icon={<GrPlan />}
        />
        <Input
          inputName="description"
          inputType="text"
          label="Description"
          icon={<BsCardText />}
        />
        <Input inputName="dueDate" inputType="date" label="Due date" />
        <div className="flex flex-col sm:flex-row gap-4">
          <CustomSelect
            options={statusOptions}
            value={selectedStatus}
            onChange={setSelectedStatus}
            placeholder="Status"
          />
          <CustomSelect
            options={priorityOptions}
            value={selectedPriority}
            onChange={setSelectedPriority}
            placeholder="Priority"
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
          <Button type="secondary" title="click to add the new project.">
            Create task
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;

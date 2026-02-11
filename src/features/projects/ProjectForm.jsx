import CustomSelect from "../../components/CustomSelect";
import Input from "../../components/Input";
import { GrPlan } from "react-icons/gr";
import { BsCardText } from "react-icons/bs";
import Button from "../../components/Button";
import { useUiStates } from "../../hooks/useUiContext";
import useAddProject from "./useAddProject";
import { useAuth } from "../../hooks/useAuth";
import useUpdateProject from "./useUpdateProject";
import { Controller, useForm } from "react-hook-form";

const options = [
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];
function ProjectForm() {
  // custom API Hooks
  const { mutate: addMutate, isPending: isAdding } = useAddProject();
  const { mutate: updateMutate, isPending: isUpdating } = useUpdateProject();
  // UI state s for constroling close and open form
  const { modal, modalData } = useUiStates();
  // useForm hook
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: modalData?.name || "",
      description: modalData?.description || "",
      dueDate: modalData?.dueDate || "",
      status: modalData?.status || options[0].value,
    },
  });
  // get user id
  const { state } = useAuth();
  function onSubmit(data) {
    const { name, description, status, dueDate } = data;
    const user_id = state.user.id;
    const projectData = {
      name,
      description,
      status,
      due_date: dueDate,
    };
    if (modal === "addProject") {
      addMutate({ data: projectData, user_id });
    } else {
      updateMutate({ id: modalData?.id, data: projectData });
    }
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
      <form
        action=""
        className="space-y-4 flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          inputName="name"
          inputType="text"
          label="Project name"
          icon={<GrPlan />}
          error={errors.name}
          {...register("name", { required: "Name is required" })}
        />
        <Input
          inputName="description"
          inputType="text"
          label="Description"
          icon={<BsCardText />}
          error={errors.description}
          {...register("description")}
        />
        <Input
          inputName="dueDate"
          inputType="date"
          label="Due date"
          error={errors.dueDate}
          {...register("dueDate", { required: "Due date is required" })}
        />
        {modal === "editProject" && (
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <CustomSelect {...field} options={options} placeholder="Status" />
            )}
          />
        )}
        <div className="ml-auto flex flex-row items-center gap-3">
          <Button
            onClick={() => reset()}
            type="cancel"
            type2="button"
            title="click to reset  project form."
          >
            Cancel
          </Button>
          <Button
            type2="submit"
            loading={isAdding}
            type="secondary"
            title={`click to ${isAdding ? "add the new" : "update the"} project.`}
          >
            {modal === "addProject"
              ? `${isAdding ? "Creating..." : "Create Project"}`
              : `${isUpdating ? "Updating..." : "Update project"}`}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;

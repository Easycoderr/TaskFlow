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
import { Controller, useForm } from "react-hook-form";

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

  // useForm hook
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: modalData?.title || "",
      description: modalData?.description || "",
      dueDate: modalData?.dueDate || "",
      status: modalData?.status || "incomplete",
      priority: modalData?.priority || null,
      project: modalData?.project?.name || null,
    },
  });

  function onSubmit(data) {
    const {
      title,
      description,
      dueDate,
      status,
      priority,
      project: selectedProject,
    } = data;
    const projectId = projectOptions.find(
      (project) => project.value === selectedProject,
    )?.id;

    const taskData = {
      title,
      description,
      due_date: dueDate,
      status,
      priority,
      project_id: projectId,
    };
    if (modal === "addTask") {
      mutateAdd({ data: taskData, user_id: user.id });
    } else {
      mutateUpdate({ id: modalData.id, data: taskData });
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
      <form
        action=""
        className="space-y-4 flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          inputName="title"
          inputType="text"
          label="title"
          error={errors.title}
          icon={<GrPlan />}
          focus={true}
          {...register("title", { required: "Title is required" })}
        />
        <Input
          inputName="description"
          inputType="text"
          label="Description"
          error={errors.description}
          icon={<BsCardText />}
          {...register("description")}
        />
        <Input
          inputName="dueDate"
          inputType="date"
          label="Due date"
          error={errors.dueDate}
          {...register("dueDate", { required: "Due date is required" })}
        />
        <div className="flex flex-col sm:flex-row gap-2">
          {modal === "editTask" && (
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  {...field}
                  options={statusOptions}
                  placeholder="Status"
                />
              )}
            />
          )}
          <Controller
            name="priority"
            control={control}
            render={({ field }) => (
              <CustomSelect
                {...field}
                options={priorityOptions}
                placeholder="Priority"
              />
            )}
          />

          <Controller
            name="project"
            control={control}
            render={({ field }) => (
              <CustomSelect
                {...field}
                options={projectOptions}
                placeholder="Projects"
              />
            )}
          />
        </div>

        <div className="ml-auto flex flex-row items-center gap-3">
          <Button
            onClick={() => reset()}
            type="cancel"
            type2="button"
            title="click to close and cancel project."
          >
            Cancel
          </Button>
          <Button
            loading={isUpadating || isLoading}
            type="secondary"
            type2="submit"
            title="click to add the new project."
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

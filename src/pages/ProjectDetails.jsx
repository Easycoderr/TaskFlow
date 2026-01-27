import { LuAlarmClockOff } from "react-icons/lu";
import Heading from "../components/Heading";
import { BiEdit, BiLeftArrowAlt, BiTrash } from "react-icons/bi";
import { Button } from "../features/projects/ProjectItem";
import TaskItem from "../features/tasks/TaskItem";
import Modal from "../UI/Modal";
import ProjectForm from "../features/projects/ProjectForm";

import { useUiStates } from "../hooks/useUiContext";
import { useNavigate, useParams } from "react-router";
import useProject from "../features/projectDetails/useProject";
import Spinner from "../components/Spinner";
import useTasks from "../features/tasks/useTasks";
import { countTasks } from "../utils/countTasks";
import EmptyPage from "../components/EmptyPage";

import { PiEmpty } from "react-icons/pi";

function ProjectDetails() {
  const navigate = useNavigate();
  // get project id from url
  const { projectId } = useParams();

  // ui state open and close modal
  const { modal, dispatch } = useUiStates();

  // manage Remote states projects and tasks data
  const { data: project, isPending } = useProject(Number(projectId));

  const { data: tasks, isLoading: isLoadingTasks } = useTasks();
  // get current project tasks

  const { filteredTasks, tasksCount, completedTasks, progress } = countTasks(
    tasks,
    Number(projectId),
  );

  if (isPending || isLoadingTasks) return <Spinner />;

  return (
    <div className="">
      <div>
        {/* navigate to project */}
        <button
          onClick={() => navigate(-1)}
          aria-label="back to projects"
          title="back to projects"
          className="flex items-center group gap-1 cursor-pointer px-3 py-2 border rounded-md border-gray-100 dark:border-gray-700 hover:border-primary transition-all duration-300"
        >
          <BiLeftArrowAlt className="text-lg group-hover:scale-105 group-hover:-translate-x-1 transition-all duration-300" />
          <span className="text-sm">Back to projects</span>
        </button>
      </div>

      <div className="bg-bg p-6 dark:bg-bg-dark space-y-10 overflow-y-auto grid grid-cols-2 gap-x-4">
        {/* project */}
        <div className="text-text dark:text-text-dark gap-8 md:gap-0 col-span-2 flex flex-col md:flex-row items-center md:justify-between">
          <div className="space-y-3">
            <div>
              <Heading>{project?.name}</Heading>
            </div>
            <div className="leading-relaxed max-w-2xl text-text-muted dark:text-text-muted-dark">
              {project?.description}
            </div>
            {/* status duedate and action buttons */}
            <div className="flex md:justify-between gap-4 md:gap-0 md:items-center md:flex-row flex-col">
              <div className="flex gap-4 md:gap-8 text-text-muted dark:text-text-muted-dark">
                <div className="text-sm flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${project?.status === "active" ? "bg-amber-500  animate-pulse" : "bg-primary"}`}
                  ></span>
                  <span className="mb-0.5">{project?.status}</span>
                </div>
                {/* duedate */}
                <div className="text-sm text-text-muted dark:text-text-muted-dark flex items-center gap-2">
                  <LuAlarmClockOff className="text-red-500" />
                  {project?.due_date}
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-2">
                <Button
                  colorClasses="bg-red-100/70 text-red-700/90"
                  type="button"
                  title="Delete project"
                  label="delete button"
                >
                  <BiTrash className="" />
                  <span className="text-sm">Delete</span>
                </Button>
                <Button
                  colorClasses="bg-green-100/70 text-green-700"
                  type="button"
                  title="Edit project"
                  label="Edit button"
                  onClick={() =>
                    dispatch({
                      value: "OPEN_MODAL",
                      payload: { modal: "editProject" },
                    })
                  }
                >
                  <BiEdit className="" />
                  <span className="text-sm">Edit</span>
                </Button>
              </div>
            </div>
            {/* actions of project */}
          </div>
          {/* progress */}
          <div className="flex flex-col items-center gap-4">
            {/* Outer circle using conic-gradient */}
            <div
              className="relative flex items-center justify-center rounded-full md:w-46 md:h-46 w-36 h-36"
              style={{
                background: `conic-gradient(var(--color-primary) ${progress}%, #e5e7eb 0)`,
              }}
            >
              {/* Inner circle (the "hole") to make it a ring */}
              <div className="absolute inset-2 rounded-full bg-white dark:bg-card-dark flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <span className="text-xl md:text-3xl font-bold">
                    {Math.round(progress)}%
                  </span>
                  <span className="text-sm md:text-lg text-text-muted">
                    {completedTasks}/{tasksCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 ">
          <h3 className="text-xl font-medium py-4">Project Tasks</h3>
          {/* task card */}
          {/* project tasks*/}
          <div className="overflow-y-auto grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-4 text-text dark:text-text-dark">
            {/* header */}
            <div className="col-span-2">
              {!filteredTasks.length && (
                <EmptyPage>
                  <span className="flex items-center flex-col gap-2 text-red-400">
                    <PiEmpty className="text-red-500" size={40} />
                    Therre is no task yet for "{project?.name}" project.
                  </span>
                </EmptyPage>
              )}
            </div>
            {filteredTasks.map((item) => (
              <TaskItem
                key={item.id}
                title={item.title}
                status={item.status}
                dueDate={item.due_date}
                project={item.projects}
                priority={item.priority}
              />
            ))}
          </div>
        </div>
      </div>
      {modal === "editProject" && (
        <Modal>
          <ProjectForm />
        </Modal>
      )}
    </div>
  );
}

export default ProjectDetails;

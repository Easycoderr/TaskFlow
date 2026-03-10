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
import useTasks from "../features/tasks/useTasks";
import { countTasks } from "../utils/countTasks";
import EmptyPage from "../components/EmptyPage";

import { PiEmpty } from "react-icons/pi";
import TaskForm from "../features/tasks/TaskForm";
import useDeleteProject from "../features/projects/useDeleteProject";
import ConfirmationModal from "../components/ConfirmationModal";
import ErrorState from "../components/ErrorState";
import ProjectDetailsSkeleton from "../components/skeletons/ProjectDetailsSkeleton";
import ProjectDetailHeader from "../features/projectDetails/projectDetailHeader";

function ProjectDetails() {
  const navigate = useNavigate();
  // get project id from url
  const { projectId } = useParams();

  // ui state open and close modal
  const { modal } = useUiStates();

  // manage Remote states projects and tasks data
  const {
    data: project,
    isPending,
    isError: isProjectError,
  } = useProject(Number(projectId));

  // delete project
  const { mutate, isPending: isDeleting } = useDeleteProject();
  const { id = null } = project || {};

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    isError: isTaskError,
  } = useTasks();

  // get current project tasks

  const { filteredTasks, tasksCount, completedTasks, progress } = countTasks(
    tasks,
    Number(projectId),
  );

  function handleDeleteProject() {
    mutate(id);
    navigate(-1);
  }

  if (isPending || isLoadingTasks) return <ProjectDetailsSkeleton />;

  if (isProjectError)
    return <ErrorState message="Something went wrong. Please try again." />;

  return (
    <div className="">
      <ProjectDetailHeader
        onDelete={handleDeleteProject}
        isDeleting={isDeleting}
        filteredTasks={filteredTasks}
        tasksCount={tasksCount}
        completedTasks={completedTasks}
        progress={progress}
        project={project}
        isTaskError={isTaskError}
      />
      {modal === "editProject" && (
        <Modal>
          <ProjectForm />
        </Modal>
      )}
      {modal === "editTask" && (
        <Modal>
          <TaskForm />
        </Modal>
      )}
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

export default ProjectDetails;

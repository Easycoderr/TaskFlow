import EmptyPage from "../../components/EmptyPage";
import ErrorState from "../../components/ErrorState";
import Spinner from "../../components/Spinner";
import {
  countTask as filterProject,
  isOverDue,
  isToday,
} from "../../utils/taskUtils";
import useTasks from "../tasks/useTasks";
import ProjectItem from "./ProjectItem";
import useProjects from "./useProjects";

function ProjectsList({ selectedValue }) {
  const { data: projects, isLoading, isError } = useProjects();
  const { data: tasks, isLoading: loadingTasks } = useTasks();

  if (isLoading || loadingTasks) return <Spinner />;
  if (isError)
    return <ErrorState message="Something went wrong. Please try again." />;
  if (!projects.length)
    return (
      <EmptyPage>
        You don't have any projects yet. Add your first project.
      </EmptyPage>
    );
  const filteredTask =
    selectedValue === "all"
      ? tasks
      : selectedValue === "overdue"
        ? filterProject(projects, isOverDue)
        : selectedValue === "today"
          ? filterProject(projects, (p) => isToday(p.due_date))
          : filterProject(projects, (p) => p.status === selectedValue);
  if (selectedValue !== "all" && !filteredTask?.length)
    return <EmptyPage>No {selectedValue} projects found.</EmptyPage>;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          name={project.name}
          description={project.description}
          status={project.status}
          dueDate={project.due_date}
          tasks={tasks}
        />
      ))}
    </div>
  );
}

export default ProjectsList;

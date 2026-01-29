import EmptyPage from "../../components/EmptyPage";
import ErrorState from "../../components/ErrorState";
import Spinner from "../../components/Spinner";
import searchFilter from "../../utils/searchUtils";
import {
  countTask as filterProject,
  isOverDue,
  isToday,
} from "../../utils/taskUtils";
import useTasks from "../tasks/useTasks";
import ProjectItem from "./ProjectItem";
import useProjects from "./useProjects";

function ProjectsList({ selectedValue, searchValue }) {
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

  // project logic
  let filteredProjects;
  switch (selectedValue) {
    case "all":
      filteredProjects = projects;
      break;

    case "overdue":
      filteredProjects = filterProject(projects, isOverDue);
      break;

    case "today":
      filteredProjects = filterProject(projects, (p) => isToday(p.due_date));
      break;

    default:
      // This handles any specific status (e.g., "completed", "pending")
      filteredProjects = filterProject(
        projects,
        (p) => p.status === selectedValue,
      );
      break;
  }

  // search logic
  if (searchValue) {
    filteredProjects = searchFilter(filteredProjects, (p) =>
      p.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    console.log(filteredProjects);
  }

  if (selectedValue !== "all" && !filteredProjects?.length)
    return <EmptyPage>No {selectedValue} projects found.</EmptyPage>;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {filteredProjects?.map((project) => (
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

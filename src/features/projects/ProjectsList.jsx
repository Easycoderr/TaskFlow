import EmptyPage from "../../components/EmptyPage";
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
  const { data: projects, isLoading } = useProjects();
  const { data: tasks, isLoading: loadingTasks } = useTasks();

  if (isLoading || loadingTasks) return <Spinner />;

  if (!projects.length)
    return <EmptyPage>There is no project add your first project</EmptyPage>;
  const filteredTask =
    selectedValue === "all"
      ? tasks
      : selectedValue === "overdue"
        ? filterProject(projects, isOverDue)
        : selectedValue === "today"
          ? filterProject(projects, (p) => isToday(p.due_date))
          : filterProject(projects, (p) => p.status === selectedValue);
  if (!filteredTask.length)
    return <EmptyPage>There is no project for "{selectedValue}"</EmptyPage>;
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

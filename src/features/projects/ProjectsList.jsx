import EmptyPage from "../../components/EmptyPage";
import Spinner from "../../components/Spinner";
import useTasks from "../tasks/useTasks";
import ProjectItem from "./ProjectItem";
import useProjects from "./useProjects";

function ProjectsList() {
  const { data: projects, isLoading } = useProjects();
  const { data: tasks, isLoading: loadingTasks } = useTasks();

  if (isLoading || loadingTasks) return <Spinner />;

  if (!projects.length)
    return <EmptyPage>There is no project add your first project</EmptyPage>;
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

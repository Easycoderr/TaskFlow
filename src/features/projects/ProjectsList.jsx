import EmptyPage from "../../components/EmptyPage";
import useTasks from "../tasks/useTasks";
import ProjectItem from "./ProjectItem";
import useProjects from "./useProjects";

function ProjectsList() {
  const { data: projects, isLoading } = useProjects();
  const { data: tasks } = useTasks();

  if (isLoading)
    return <EmptyPage>There is no project add your first project</EmptyPage>;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          title={project.name}
          description={project.description}
          status={project.status}
          dueDate={project.dueDate}
          tasks={tasks}
        />
      ))}
    </div>
  );
}

export default ProjectsList;

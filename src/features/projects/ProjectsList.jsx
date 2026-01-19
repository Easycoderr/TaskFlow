import ProjectItem from "./ProjectItem";

const fakeProjects = [
  {
    id: 1,
    title: "TaskFlow App",
    description: "Main productivity app UI and logic",
    status: "active",
    progress: 60,
    tasksCount: 10,
    completedTasks: 6,
    dueDate: "2026-01-30",
  },
  {
    id: 2,
    title: "Auth System",
    description: "Login, signup, and validation",
    status: "active",
    progress: 40,
    tasksCount: 5,
    completedTasks: 2,
    dueDate: "2026-01-25",
  },
  {
    id: 3,
    title: "Landing Page",
    description: "Marketing landing page",
    status: "completed",
    progress: 100,
    tasksCount: 4,
    completedTasks: 4,
    dueDate: "2026-01-18",
  },
];

function ProjectsList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {fakeProjects.map((project) => (
        <ProjectItem
          key={project.id}
          title={project.title}
          description={project.description}
          status={project.status}
          progress={project.progress}
          tasksCount={project.tasksCount}
          completedTasks={project.completedTasks}
          dueDate={project.dueDate}
        />
      ))}
    </div>
  );
}

export default ProjectsList;

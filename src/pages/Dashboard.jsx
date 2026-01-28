import QuickActions from "../features/dashboard/QuickActions";
import StatsCards from "../features/dashboard/StatsCards";
import TodayTasks from "../features/dashboard/TodayTasks";
import UpcomingList from "../features/dashboard/UpcomingList";
import Heading from "../components/Heading";
import Modal from "../UI/Modal";
import TaskForm from "../features/tasks/TaskForm";
import { useUiStates } from "../hooks/useUiContext";
import ProjectForm from "../features/projects/ProjectForm";
import useTasks from "../features/tasks/useTasks";
import Spinner from "../components/Spinner";
import { useAuth } from "../hooks/useAuth";

function Dashboard() {
  const { modal } = useUiStates();
  const { data: tasks, isPending } = useTasks();
  const {
    state: { user },
  } = useAuth();

  if (isPending) return <Spinner />;
  return (
    <div className="bg-bg dark:bg-bg-dark space-y-10 overflow-y-auto grid grid-cols-2 gap-x-4">
      <div className="text-text dark:text-text-dark space-y-3 col-span-2 flex items-center justify-between">
        <div>
          <Heading>Dashboard</Heading>
          <h3 className="text-lg sm:text-xl font-medium tracking-tight">
            Good morning, {user.user_metadata.display_name}
          </h3>
        </div>
      </div>
      {/* Stats cards */}
      <StatsCards tasks={tasks} />
      <TodayTasks tasks={tasks} />
      <UpcomingList tasks={tasks} />
      <QuickActions />
      {modal && (
        <Modal>
          {modal === "taskForm" ? (
            <TaskForm />
          ) : (
            modal === "projectForm" && <ProjectForm />
          )}
        </Modal>
      )}
    </div>
  );
}

export default Dashboard;

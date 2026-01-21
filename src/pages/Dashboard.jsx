import QuickActions from "../features/dashboard/QuickActions";
import StatsCards from "../features/dashboard/StatsCards";
import TodayTasks from "../features/dashboard/TodayTasks";
import UpcomingList from "../features/dashboard/UpcomingList";
import Heading from "../components/Heading";
import Modal from "../UI/Modal";
import TaskForm from "../features/tasks/TaskForm";
import { useUiStates } from "../hooks/useUiContext";
import ProjectForm from "../features/projects/ProjectForm";

function Dashboard() {
  const { modal } = useUiStates();
  return (
    <div className="bg-bg dark:bg-bg-dark space-y-10 overflow-y-auto grid grid-cols-2 gap-x-4">
      <div className="text-text dark:text-text-dark space-y-3 col-span-2 flex items-center justify-between">
        <div>
          <Heading>Dashboard</Heading>
          <h3 className="text-lg sm:text-xl font-medium tracking-tight">
            Good morning, EasyCoder
          </h3>
        </div>
      </div>
      {/* Stats cards */}
      <StatsCards />
      <TodayTasks />
      <UpcomingList />
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

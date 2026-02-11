import { IoTodaySharp } from "react-icons/io5";
import StatsCardItem from "./StatsCardItem";
import { MdDoneAll, MdPendingActions } from "react-icons/md";
import { LuAlarmClockOff } from "react-icons/lu";
import { countTask, isOverDue, isToday } from "../../utils/taskUtils";

function StatsCards({ tasks }) {
  // today tasks status
  const todayTasks = countTask(tasks, (t) => isToday(t.due_date))?.length;
  const completedTasks = countTask(
    tasks,
    (t) => t.status.toLowerCase() === "completed",
  )?.length;
  const incompleteTasks = countTask(
    tasks,
    (t) => t.status.toLowerCase() === "incomplete",
  )?.length;
  const overDueTasks = countTask(tasks, isOverDue)?.length;
  return (
    <div className="col-span-2 grid md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* card 1 */}
      <StatsCardItem record={todayTasks} title="Today">
        <IoTodaySharp className="text-cyan-600 text-4xl" />
      </StatsCardItem>
      {/* card 2 */}
      <StatsCardItem record={completedTasks} title="Completed">
        <MdDoneAll className="text-4xl" />
      </StatsCardItem>
      {/* card 3 */}
      <StatsCardItem record={incompleteTasks} title="Incompleted">
        <MdPendingActions className="text-amber-500 text-4xl" />
      </StatsCardItem>
      {/* card 3 */}
      <StatsCardItem record={overDueTasks} title="Overdue">
        <LuAlarmClockOff className="text-red-500 text-4xl" />
      </StatsCardItem>
    </div>
  );
}

export default StatsCards;

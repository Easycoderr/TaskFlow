import { format, isSameDay } from "date-fns";

import EmptyPage from "../../components/EmptyPage";
import CalendarTask from "./CalendarTask";
import { FcEmptyTrash } from "react-icons/fc";
import { GiNothingToSay } from "react-icons/gi";

function CalendarTaskList({ tasks, selectedDay }) {
  const todayTasks = isSameDay(new Date(), selectedDay);
  const filteredTask = tasks?.filter((task) =>
    isSameDay(task.due_date, selectedDay),
  );

  return (
    <div className="overflow-y-auto col-span-2 xl:col-span-1">
      <div className="flex justify-between items-center mb-8">
        {/* Month and year name */}
        <h2 className="text-xl font-semibold">
          <span>
            {format(selectedDay, "MMMM do, yyyy") || (todayTasks && "Today")}
          </span>
          {" - "}
          Tasks <span>({filteredTask.length})</span>
        </h2>
        {/* action buttons */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-y-4">
        {filteredTask?.length === 0 && (
          <div className="mx-auto">
            <EmptyPage>
              <span className="text-sm">
                No tasks yet for{" "}
                <span>
                  {todayTasks ? "today" : format(selectedDay, "MMMM do, yyyy")}
                </span>
              </span>
            </EmptyPage>
          </div>
        )}
        {filteredTask.map((task) => (
          <CalendarTask
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            dueDate={task.due_date}
            project={task.projects}
            priority={task.priority}
          />
        ))}
      </div>
    </div>
  );
}

export default CalendarTaskList;

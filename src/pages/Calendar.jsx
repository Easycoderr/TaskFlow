import { BsTriangleFill } from "react-icons/bs";

import { useState } from "react";
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import Heading from "../components/Heading";
import useTasks from "../features/tasks/useTasks";

import Spinner from "../components/Spinner";
import ErrorState from "../components/ErrorState";
import CalendarTaskList from "../features/calendar/CalendarTaskList";
import CalendarHeader from "../features/calendar/CalendarHeader";
import CalendarGrid from "../features/calendar/CalendarGrid";
import { useUiStates } from "../hooks/useUiContext";
import TaskForm from "../features/tasks/TaskForm";
import Modal from "../UI/Modal";
import CalendarSidebarSkeleton from "../components/skeletons/CalendarSidebarSkeleton";

function Calendar() {
  // uiStates
  const { modal, modalData } = useUiStates();
  // task API call
  const { data: tasks, isPending, isError } = useTasks();
  // states
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isMousehover, setIsMouseHover] = useState(null);
  const [selectedDay, setSelectedDay] = useState(new Date());
  if (isPending) return <CalendarSidebarSkeleton />;
  if (isError)
    return <ErrorState message="Something went wrong please try again!" />;
  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth)),
  });
  return (
    <div className="grid grid-cols-2 bg-bg text-text dark:text-text-dark dark:bg-bg-dark md:gap-x-10 space-y-8">
      {/* header */}
      <div className="text-text col-span-2 dark:text-text-dark space-y-3 flex items-center justify-between">
        <div>
          <Heading>Calendar</Heading>
        </div>
      </div>
      {/* Calendar */}
      <div className="grid grid-cols-1 border-gray-400 col-span-2 xl:col-span-1">
        {/* Header */}
        <CalendarHeader
          setCurrentMonth={setCurrentMonth}
          currentMonth={currentMonth}
        />
        <CalendarGrid
          isMousehover={isMousehover}
          setIsMouseHover={setIsMouseHover}
          setSelectedDay={setSelectedDay}
          currentMonth={currentMonth}
          tasks={tasks}
          days={days}
        />
      </div>
      <CalendarTaskList tasks={tasks} selectedDay={selectedDay} />
      {modal && (
        <Modal>
          <TaskForm key={modalData?.id || "new-task"} />
        </Modal>
      )}
    </div>
  );
}

export default Calendar;

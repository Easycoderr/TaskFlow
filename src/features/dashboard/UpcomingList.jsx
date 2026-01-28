import { BiSolidTimer, BiTime, BiTimer } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { isOverDue } from "../../utils/taskUtils";
import { BsDash } from "react-icons/bs";

function UpcomingList({ tasks }) {
  const filteredTasks = tasks
    // 1. Sort by date (Earliest first)
    ?.sort((a, b) => new Date(b.due_date) - new Date(a.due_date))
    .filter((task) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Normalize to start of today

      const dueDate = new Date(task.due_date);
      dueDate.setHours(0, 0, 0, 0); // Normalize to start of due date

      // Comparison is now safe because we are using Date objects
      const overDue = !isOverDue(task);
      return overDue;
    })
    //  limit task we want display first 3 indexs
    .slice(0, 3);
  return (
    <div className="p-4 space-y-4 rounded-md col-span-2 md:col-span-1 bg-card  text-text dark:text-text-dark dark:bg-card-dark shadow-md">
      <h3 className="text-lg flex items-center gap-1 sm:text-xl font-medium tracking-tight">
        <BiSolidTimer size={22} className="text-primary" /> Upcoming
      </h3>
      {/* list of today items */}
      <ul className="divide-y divide-gray-200 dark:divide-gray-700 p-0">
        {filteredTasks.map((item, index) => (
          <UpcomingItem key={index} task={item} />
        ))}
      </ul>
    </div>
  );
}

function UpcomingItem({ task }) {
  const { title, due_date } = task;
  return (
    <li className="py-4 hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer flex items-center gap-2">
      <span>
        <GoDotFill />
      </span>
      <span>{title}</span>
      <BsDash />
      <span>{due_date}</span>
    </li>
  );
}

export default UpcomingList;

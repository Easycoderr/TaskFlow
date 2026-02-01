import { addMonths, format } from "date-fns";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import SimpleButtonIcon from "../../components/SimpleButtonIcon";
import { IoToday } from "react-icons/io5";
function CalendarHeader({ setCurrentMonth, currentMonth }) {
  return (
    <div className="flex justify-between items-center mb-8">
      {/* Month and year name */}
      <h2 className="text-2xl font-semibold">
        {format(currentMonth, "MMMM - yyyy")}
      </h2>
      {/* action buttons */}
      <div className="flex items-center gap-4">
        <SimpleButtonIcon
          onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
          title="move to prev month"
          label="Arrow left button"
        >
          <BsArrowLeftSquare className="text-2xl hover:text-primary transition-all duration-300" />
        </SimpleButtonIcon>
        <SimpleButtonIcon
          onClick={() => setCurrentMonth(new Date())}
          title="Today date"
          label="Today date button"
        >
          <IoToday className="text-2xl hover:text-primary transition-all duration-300" />
        </SimpleButtonIcon>
        <SimpleButtonIcon
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          title="move to next month"
          label="Arrow right button"
        >
          <BsArrowRightSquare className="text-2xl hover:text-primary transition-all duration-300" />
        </SimpleButtonIcon>
      </div>
    </div>
  );
}

export default CalendarHeader;

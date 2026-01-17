import { BiPlus, BiSearch } from "react-icons/bi";
import Button from "../components/Button";
import Heading from "../UI/Heading";
import SimpleButtonIcon from "../components/SimpleButtonIcon";

function Tasks() {
  return (
    <div className="bg-bg text-text dark:text-text-dark dark:bg-bg-dark space-y-10 overflow-y-auto">
      <div className="text-text dark:text-text-dark space-y-3 flex items-center justify-between">
        <div>
          <Heading>Tasks</Heading>
        </div>
        <Button type="primary" type2="button" title="Click to add new task">
          <span className="flex items-center gap-1">
            <BiPlus className="text-xl font-bold" />
            Add Task
          </span>
        </Button>
      </div>
      <div className="flex justify-between items-center p-2">
        {/* search */}
        <div className="relative min-w-xs">
          <input
            type="text"
            name="search"
            id="search"
            placeholder=" "
            className="z-20 w-full p-2 bg-bg text-bg-dark outline-none ring-2 focus:ring-primary text-sm rounded-md peer"
          />
          <label
            htmlFor="Search"
            className="transition-all pointer-events-none px-1 rounded-md duration-300 absolute top-1/2 -translate-y-1/2 left-2 text-text-muted dark:text-text-muted-dark text-sm
                 peer-focus:-top-px peer-focus:text-xs peer-focus:text-primary
                 peer-[:not(:placeholder-shown)]:-top-px peer-[:not(:placeholder-shown)]:text-xs peer-focus:p-0.5 peer-[:not(:placeholder-shown)]:p-0.5 peer-focus:bg-bg peer-focus:dark:bg-bg-dark peer-[:not(:placeholder-shown)]:bg-bg peer-[:not(:placeholder-shown)]:dark:bg-bg-dark"
          >
            Search
          </label>
          <span className="border-l peer-focus:border-l-primary hover:border-l-primary rounded-l-none rounded-md border-l-gray-400 h-full p-2 absolute top-1/2 -translate-y-1/2 right-0 flex items-center hover:bg-gray-200">
            <SimpleButtonIcon>
              <BiSearch className="text-xl text-text group-hover:-rotate-12 group-hover:scale-105 group-hover:text-primary transition-all duration-300" />
            </SimpleButtonIcon>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Tasks;

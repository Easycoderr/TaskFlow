import { BiPlus } from "react-icons/bi";
import Button from "../components/Button";
import Heading from "../UI/Heading";

import TasksList from "../features/tasks/TasksList";
import SearchFilterRow from "../components/SearchFilterRow";

function Tasks() {
  return (
    <div className="col-start-2 row-start-2 bg-bg text-text dark:text-text-dark dark:bg-bg-dark space-y-10">
      <div className="text-text dark:text-text-dark space-y-3 flex items-center justify-between mb-5">
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
      <SearchFilterRow />
      <TasksList />
    </div>
  );
}
export default Tasks;

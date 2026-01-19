import { BiPlus } from "react-icons/bi";
import Button from "../components/Button";
import Heading from "../components/Heading";
import SearchFilterRow from "../components/SearchFilterRow";
import ProjectsList from "../features/projects/ProjectsList";

function Projects() {
  return (
    <div className="col-start-2 row-start-2 bg-bg text-text dark:text-text-dark dark:bg-bg-dark space-y-10">
      <div className="text-text dark:text-text-dark space-y-3 flex items-center justify-between mb-5">
        <div>
          <Heading>Projects</Heading>
        </div>
        <Button type="primary" type2="button" title="Click to add new project">
          <span className="text-sm flex md:text-md items-center gap-1">
            <BiPlus className="text-xl font-bold" />
            Add Project
          </span>
        </Button>
      </div>
      <SearchFilterRow />

      {/* project card */}
      <ProjectsList />
    </div>
  );
}

export default Projects;

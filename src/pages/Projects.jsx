import { BiPlus } from "react-icons/bi";
import Button from "../components/Button";
import Heading from "../components/Heading";
import SearchFilterRow from "../components/SearchFilterRow";
import ProjectsList from "../features/projects/ProjectsList";
import { useUiStates } from "../hooks/useUiContext";
import Modal from "../UI/Modal";
import ProjectForm from "../features/projects/ProjectForm";

function Projects() {
  const { dispatch, modal } = useUiStates();
  return (
    <div className="col-start-2 row-start-2 bg-bg text-text dark:text-text-dark dark:bg-bg-dark space-y-10">
      <div className="text-text dark:text-text-dark space-y-3 flex items-center justify-between mb-5">
        <div>
          <Heading>Projects</Heading>
        </div>
        <Button
          type="primary"
          type2="button"
          title="Click to add new project"
          onClick={() =>
            dispatch({
              value: "OPEN_MODAL",
              payload: { modal: "addProject" },
            })
          }
        >
          <span className="text-sm flex md:text-md items-center gap-1">
            <BiPlus className="text-xl font-bold" />
            Add Project
          </span>
        </Button>
      </div>
      <SearchFilterRow />

      {/* project card */}
      <ProjectsList />
      {/* form modal */}
      {modal && (
        <Modal>
          <ProjectForm />
        </Modal>
      )}
    </div>
  );
}

export default Projects;

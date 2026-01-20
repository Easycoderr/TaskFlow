import { useRef, useState } from "react";
import SideBar from "../UI/SideBar";
import TopBar from "../UI/TopBar";
// import ProjectDetails from "../pages/ProjectDetails";
// import Modal from "../UI/Modal";
// import Projects from "../pages/Projects";
import Tasks from "../pages/Tasks";
// import Dashboard from "../pages/Dashboard";

function Layout() {
  const [isExpand, setIsExpand] = useState(false);
  const refEl = useRef();
  function handleExpanding() {
    setIsExpand((expand) => !expand);
  }

  return (
    // layout
    <div
      className={`relative grid md:grid-cols-[250px_1fr] ${isExpand ? "grid-cols-[200px_1fr]" : "grid-cols-[70px_1fr]"} overflow-x-visible 
      grid-rows-[70px_1fr] h-screen bg-bg dark:bg-bg-dark transition-all duration-300`}
    >
      {/* top bar */}
      <TopBar />
      {/* side bar */}
      <SideBar
        handleExpanding={handleExpanding}
        setIsExpand={setIsExpand}
        isExpand={isExpand}
        refEl={refEl}
      />
      <main className="overflow-y-auto bg-bg dark:bg-bg-dark p-4 sm:p-6 col-start-2 row-start-2 col-span-3 row-span-3">
        {/* <Dashboard /> */}
        <Tasks />
        {/* <Projects /> */}
        {/* <ProjectDetails /> */}
      </main>
    </div>
  );
}

export default Layout;

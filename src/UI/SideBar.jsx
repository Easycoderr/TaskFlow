import Logo from "../components/Logo";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { SlCalender, SlSettings } from "react-icons/sl";
import { SiBlueprint } from "react-icons/si";
import { FaTasks } from "react-icons/fa";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import SimpleButtonIcon from "../components/SimpleButtonIcon";
import UseOutSideClicker from "../hooks/useOutSideClicker";
import { NavLink } from "react-router";

function SideBar({ isExpand, setIsExpand, handleExpanding, refEl }) {
  // Outside click sidebar
  UseOutSideClicker(refEl, () => setIsExpand(false), true);
  return (
    <>
      {/* if Expand make background blur overlay. */}
      {isExpand && (
        <div className="bg-gray-50/30 dark:bg-gray-600/20 z-10 backdrop-blur-sm min-h-screen w-screen absolute top-0 bottom-0 right-0 left-0"></div>
      )}
      <aside
        aria-expanded={isExpand}
        ref={refEl}
        className={`row-span-2 overflow-hidden z-30 bg-bg dark:bg-bg-dark min-h-screen text-text dark:text-text-dark col-span-1 row-start-1 border-r border-gray-200 dark:border-gray-700`}
      >
        <div className="relative flex flex-col gap-3 min-h-screen">
          <div className="md:hidden absolute top-18 -right-2.5 text-xl">
            <SimpleButtonIcon onClick={handleExpanding}>
              {isExpand ? (
                <GoSidebarExpand className="group-hover:text-primary transition-all duration-400" />
              ) : (
                <GoSidebarCollapse className="group-hover:text-primary transition-all duration-400" />
              )}
            </SimpleButtonIcon>
          </div>
          {/* Logo  */}
          <div
            className={`${isExpand ? "text-3xl" : "text-sm"} transition-all duration-300 md:text-3xl mx-auto flex items-center py-5 justify-between`}
          >
            <Logo />
          </div>
          <ul className="flex flex-col gap-4 flex-1 overflow-hidden">
            <SideBarItem
              isExpand={isExpand}
              label="Dashboard"
              toPage="dashboard"
            >
              <LuLayoutDashboard
                size={19}
                className="group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300"
              />
            </SideBarItem>
            <SideBarItem isExpand={isExpand} label="Tasks" toPage="tasks">
              <FaTasks
                size={19}
                className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
              />
            </SideBarItem>
            <SideBarItem isExpand={isExpand} label="Projects" toPage="projects">
              <SiBlueprint
                size={19}
                className="group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300"
              />
            </SideBarItem>
            <SideBarItem isExpand={isExpand} label="Calender" toPage="calender">
              <SlCalender className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            </SideBarItem>
            <SideBarItem isExpand={isExpand} label="Settings" toPage="settings">
              <SlSettings className="group-hover:-rotate-45 group-hover:scale-105 transition-all duration-400" />
            </SideBarItem>
            <li className="group mt-auto px-2 md:px-4 mb-5">
              <a
                href="#"
                className={`text-red-500 group-hover:from-red-300/50  bg-gray-100 dark:bg-gray-900 bg-300 group-hover:animate-gradient group-hover:via-red-200/60 group-hover:to-red-300/50 bg-linear-to-tl transition-all duration-400 md:px-4 py-4 rounded-md flex items-center justify-center md:justify-start md:gap-6 ${isExpand && "px-4 justify-start gap-6"}`}
              >
                <LuLogOut className="group-hover:translate-x-0.5 group-hover:scale-105 transition-all duration-400" />
                <span className={`md:block ${isExpand ? "block" : "hidden"}`}>
                  Logout
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
function SideBarItem({ isExpand, children, label, toPage }) {
  return (
    <li className={`group md:px-4 ${isExpand ? "px-4" : "px-2"}`}>
      <NavLink
        to={toPage}
        className={`group-hover:from-primary/50 bg-gray-100 dark:bg-gray-900  bg-300 group-hover:animate-gradient group-hover:to-secondary/50 bg-linear-to-tl transition-all duration-400 md:px-4 py-4 rounded-md flex items-center justify-center md:justify-start md:gap-6 ${isExpand && "px-4 justify-start gap-6"}`}
      >
        {children}
        <span className={`md:block ${isExpand ? "block" : "hidden"}`}>
          {label}
        </span>
      </NavLink>
    </li>
  );
}
export default SideBar;

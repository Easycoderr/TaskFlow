// import Dashboard from "../pages/dashboard/dashboard";
import Logo from "../components/Logo";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { SlCalender, SlSettings } from "react-icons/sl";
import { SiBlueprint } from "react-icons/si";
import { FaTasks } from "react-icons/fa";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import SimpleButtonIcon from "../components/SimpleButtonIcon";
import { useState } from "react";

function Layout() {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div
      className={`grid md:grid-cols-[260px_1fr] ${isExpand ? "grid-cols-[200px_1fr]" : "grid-cols-[70px_1fr]"} overflow-x-visible 
grid-rows-[70px_1fr] min-h-screen bg-bg dark:bg-bg-dark transition-all duration-300`}
    >
      {/* top bar */}
      <div className="bg-bg dark:bg-bg-dark col-span-3 col-start-2 border-b border-gray-200"></div>
      {/* side bar */}
      <aside className="relative bg-bg dark:bg-bg-dark min-h-screen text-text dark:text-text-dark col-span-1 row-start-1 row-span-4 border-r border-gray-200">
        <div className="flex flex-col gap-3 min-h-screen">
          <div className="md:hidden absolute top-18 -right-2.5 text-xl">
            <SimpleButtonIcon onClick={() => setIsExpand((expand) => !expand)}>
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
            <li className={`group md:px-4 ${isExpand ? "px-4" : "px-2"}`}>
              <a
                href="#"
                className={`whitespace-nowrap group-hover:from-primary/50 bg-gray-100 dark:bg-gray-600 bg-300 group-hover:animate-gradient group-hover:to-secondary/50 bg-linear-to-tl transition-all duration-300 md:px-4 py-4 rounded-md flex items-center justify-center md:justify-start md:gap-6 ${isExpand && "px-4 justify-start gap-6"}`}
              >
                <LuLayoutDashboard
                  size={19}
                  className="group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300"
                />
                <span className={`md:block ${isExpand ? "block" : "hidden"}`}>
                  Dashboard
                </span>
              </a>
            </li>
            <li className={`group md:px-4 ${isExpand ? "px-4" : "px-2"}`}>
              <a
                href="#"
                className={`group-hover:from-primary/50 bg-gray-100 dark:bg-gray-600 bg-300 group-hover:animate-gradient group-hover:to-secondary/50 bg-linear-to-tl transition-all duration-300 md:px-4 py-4 rounded-md flex items-center justify-center md:justify-start md:gap-6 ${isExpand && "px-4 justify-start gap-6"}`}
              >
                <FaTasks
                  size={19}
                  className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                />
                <span className={`md:block ${isExpand ? "block" : "hidden"}`}>
                  Tasks
                </span>
              </a>
            </li>
            <li className={`group md:px-4 ${isExpand ? "px-4" : "px-2"}`}>
              <a
                href="#"
                className={`group-hover:from-primary/50 bg-gray-100 dark:bg-gray-600 bg-300 group-hover:animate-gradient group-hover:to-secondary/50 bg-linear-to-tl transition-all duration-300 md:px-4 py-4 rounded-md flex items-center justify-center md:justify-start md:gap-6 ${isExpand && "px-4 justify-start gap-6"}`}
              >
                <SiBlueprint
                  size={19}
                  className="group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300"
                />{" "}
                <span className={`md:block ${isExpand ? "block" : "hidden"}`}>
                  Projects
                </span>
              </a>
            </li>
            <li className={`group md:px-4 ${isExpand ? "px-4" : "px-2"}`}>
              <a
                href="#"
                className={`group-hover:from-primary/50 bg-gray-100 dark:bg-gray-600 bg-300 group-hover:animate-gradient group-hover:to-secondary/50 bg-linear-to-tl transition-all duration-300 md:px-4 py-4 rounded-md flex items-center justify-center md:justify-start md:gap-6 ${isExpand && "px-4 justify-start gap-6"}`}
              >
                <SlCalender className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <span className={`md:block ${isExpand ? "block" : "hidden"}`}>
                  Calender
                </span>
              </a>
            </li>
            <li className={`group md:px-4 ${isExpand ? "px-4" : "px-2"}`}>
              <a
                href="#"
                className={`group-hover:from-primary/50 bg-gray-100 dark:bg-gray-600  bg-300 group-hover:animate-gradient group-hover:to-secondary/50 bg-linear-to-tl transition-all duration-400 md:px-4 py-4 rounded-md flex items-center justify-center md:justify-start md:gap-6 ${isExpand && "px-4 justify-start gap-6"}`}
              >
                <SlSettings className="group-hover:-rotate-45 group-hover:scale-105 transition-all duration-400" />
                <span className={`md:block ${isExpand ? "block" : "hidden"}`}>
                  Settings
                </span>
              </a>
            </li>
            <li className="group mt-auto px-2 md:px-4 mb-5">
              <a
                href="#"
                className={`text-red-500 group-hover:from-red-300/50  bg-gray-100 dark:bg-gray-600 bg-300 group-hover:animate-gradient group-hover:via-red-200/60 group-hover:to-red-300/50 bg-linear-to-tl transition-all duration-400 md:px-4 py-4 rounded-md flex items-center justify-center md:justify-start md:gap-6 ${isExpand && "px-4 justify-start gap-6"}`}
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
      <div className="bg-bg dark:bg-bg-dark p-9 col-start-2 row-start-2 col-span-3 row-span-3">
        main content
      </div>
    </div>
  );
}

export default Layout;

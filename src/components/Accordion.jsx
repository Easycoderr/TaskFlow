import { useState } from "react";
import { BiChevronUp, BiUpArrow } from "react-icons/bi";

function Accordion({ children, title, icon }) {
  const [isAccordion, setIsAccordion] = useState(false);
  return (
    <div
      className={`${isAccordion && "space-y-4"} flex flex-col bg-card dark:bg-gray-800 shadow-sm p-3 rounded-md transition-all duration-300`}
    >
      <div
        onClick={() => setIsAccordion((drawer) => !drawer)}
        className={`transition-all duration-200 font-simebold tracking-wide flex items-center justify-between`}
      >
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="select-none text-sm font-medium tracking-">{title}</h3>
        </div>
        <span className="cursor-pointer">
          <BiChevronUp
            className={`${isAccordion && "rotate-180 text-primary"} transition-all duration-400 text-2xl`}
          />
        </span>
      </div>
      <div
        className={`w-0 h-0.5 bg-linear-to-r from-trasnparent animate-logo bg-300 via-primary to-transparent ${isAccordion && "w-full"} transition-all duration-300`}
      ></div>
      <div className={`${!isAccordion && "hidden"}`}>{children}</div>
    </div>
  );
}

export default Accordion;

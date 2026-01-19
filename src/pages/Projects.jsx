import { BiEdit, BiPlus, BiTrash } from "react-icons/bi";
import Button from "../components/Button";
import Heading from "../components/Heading";

import { LuAlarmClockOff } from "react-icons/lu";
import { BsEye, BsEyeFill } from "react-icons/bs";

function Projects() {
  return (
    <div className="col-start-2 row-start-2 bg-bg text-text dark:text-text-dark dark:bg-bg-dark space-y-10">
      <div className="text-text dark:text-text-dark space-y-3 flex items-center justify-between mb-5">
        <div>
          <Heading>Projects</Heading>
        </div>
        <Button type="primary" type2="button" title="Click to add new project">
          <span className="flex items-center gap-1">
            <BiPlus className="text-xl font-bold" />
            Add Project
          </span>
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Each project card shows:

Project name

Short description (optional)

Progress (e.g. 3 / 10 tasks) or progress bar

Status: Active / Completed

Due date (optional) */}
        {/* project card */}
        <div className="bg-card dark:bg-card-dark space-y-3 rounded-md border hover:border-primary transition-all duration-300 p-4">
          {/* heade */}
          <h2 className="text-xl font-semibold leading-tight tracking tight">
            Task Flow Backend
          </h2>
          <p className="leading-relaxed text-sm text-text-muted dark:text-text-muted-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            distinctio! Veniam laboriosam nisi dolore.
          </p>
          <div className="flex flex-col gap-1 mb-10">
            <span className="font-medium">5 / 10 tasks</span>
            <span className="rounded-full overflow-hidden relative border border-text-muted dark:border-text-muted h-3 w-full">
              {/* progress */}
              <span
                title="you have complete 3 tasks of 10."
                className="absolute w-1/2 h-full transition-all duration-300 bg-linear-to-r from-primary via-secondary to-primary bg-300 animate-gradient"
              ></span>
            </span>
          </div>
          {/* FOOTER OF CARD */}
          <div className="flex justify-between md:items-end flex-col gap-y-4 md:gap-y-0 md:flex-row">
            {/* status */}
            <div className="space-y-2">
              <div className="text-sm flex items-center gap-2">
                <span className="h-2 w-2 bg-primary rounded-full animate-pulse"></span>
                Active
              </div>
              {/* duedate */}
              <div className="text-sm flex items-center gap-2">
                <LuAlarmClockOff className="text-red-500" />
                2026/28/2
              </div>
            </div>
            {/* actions */}
            <div className="flex flex-row gap-x-2">
              <button className="flex items-center gap-1 bg-cyan-100 text-cyan-700 px-3 py-1.5 cursor-pointer rounded-md hover:opacity-80 transition-all duration-300">
                <BsEye className="" />
                <span className="text-sm">View</span>
              </button>
              <button className="flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1.5 cursor-pointer rounded-md hover:opacity-80 transition-all duration-300">
                <BiTrash className="" />
                <span className="text-sm">Delete</span>
              </button>
              <button className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1.5 cursor-pointer rounded-md hover:opacity-80 transition-all duration-300">
                <BiEdit className="" />
                <span className="text-sm">Edit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

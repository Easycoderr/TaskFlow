import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router";
import TaskSkeleton from "./TaskSkeleton";

function ProjectDetailsSkeleton() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div>
        {/* navigate to project */}
        <button
          onClick={() => navigate(-1)}
          aria-label="back to projects"
          title="back to projects"
          className="flex items-center group gap-1 cursor-pointer px-3 py-2 border rounded-md border-gray-100 dark:border-gray-700 hover:border-primary transition-all duration-300"
        >
          <BiLeftArrowAlt className="text-lg group-hover:scale-105 group-hover:-translate-x-1 transition-all duration-300" />
          <span className="text-sm">Back to projects</span>
        </button>
      </div>

      <div className="bg-bg p-6 dark:bg-bg-dark space-y-10 overflow-y-auto grid grid-cols-2 gap-x-4">
        {/* project */}
        <div className="gap-8 md:gap-0 col-span-2 flex flex-col md:flex-row items-center md:justify-between">
          <div className="space-y-3">
            <div className="w-30 h-8 bg-gray-100 dark:bg-card-dark rounded-md animate-pulse"></div>
            <div className="w-full h-6 bg-gray-100 dark:bg-card-dark rounded-md animate-pulse"></div>
            {/* status duedate and action buttons */}
            <div className="flex md:justify-between gap-4  md:items-center md:flex-row flex-col">
              <div className="flex gap-4 md:gap-8 text-text-muted dark:text-text-muted-dark">
                <div className="text-sm flex items-center gap-2">
                  <div className="w-20 h-6 bg-gray-100 dark:bg-card-dark rounded-md animate-pulse"></div>
                </div>
                {/* duedate */}
                <div className="w-25 h-6 bg-gray-100 dark:bg-card-dark rounded-md animate-pulse"></div>
              </div>
              <div className="flex flex-row flex-wrap gap-2">
                <div className="w-20 h-6 bg-gray-100 dark:bg-card-dark rounded-md animate-pulse"></div>
                <div className="w-20 h-6 bg-gray-100 dark:bg-card-dark rounded-md animate-pulse"></div>
              </div>
            </div>
            {/* actions of project */}
          </div>
          {/* progress */}
          <div className="flex flex-col items-center gap-4">
            {/* Outer circle using conic-gradient */}
            <div className="relative flex items-center justify-center rounded-full md:w-46 md:h-46 w-36 h-36">
              {/* Inner circle (the "hole") to make it a ring */}
              <div className="absolute inset-2 rounded-full bg-gray-100 dark:bg-card-dark animate-pulse flex items-center justify-center">
                <div className="flex flex-col gap-2 items-center">
                  <div className="w-20 h-6 bg-gray-200 dark:bg-gray-900 rounded-md"></div>
                  <div className="w-15 h-6 bg-gray-200 dark:bg-gray-900 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 ">
          <h3 className="text-xl font-medium py-4">Project Tasks</h3>
          {/* task card */}
          {/* project tasks*/}
          <div className="overflow-y-auto grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-4 text-text dark:text-text-dark">
            {/* header */}
            <div className="col-span-2">
              <TaskSkeleton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsSkeleton;

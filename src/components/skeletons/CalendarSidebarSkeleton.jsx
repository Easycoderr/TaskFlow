import SkeletonCard from "./SkeletonCard";

// Create an array with the number for skeletons
const skeletonItems = Array(2).fill(0);

function CalendarSidebarSkeleton() {
  return (
    <div className="grid grid-cols-2 dark:text-text-dark dark:bg-bg-dark md:gap-x-10 space-y-8">
      {/* header */}
      <div className="flex col-span-2">
        <div className="bg-gray-200 dark:bg-card-dark h-8 w-30 rounded-md animate-pulse"></div>
      </div>
      {/* Calendar */}
      <div className="grid grid-cols-1 col-span-2 xl:col-span-1 gap-5">
        {/* Header */}
        <div className="flex justify-between items-center animate-pulse">
          <div className="h-8 w-40 bg-gray-200 dark:bg-card-dark rounded-md"></div>
          <div className="flex gap-3 items-center">
            <div className="h-8 w-12 bg-gray-200 dark:bg-card-dark rounded-md"></div>
            <div className="h-8 w-8 bg-gray-200 dark:bg-card-dark rounded-md"></div>
            <div className="h-8 w-12 bg-gray-200 dark:bg-card-dark rounded-md"></div>
          </div>
        </div>
        {/* grid */}
        <div className="h-60 w-full rounded-md animate-pulse bg-gray-200 dark:bg-card-dark"></div>
      </div>
      <div className="space-y-4 col-span-2 xl:col-span-1">
        <div className="bg-gray-200 dark:bg-card-dark h-8 w-25 rounded-md animate-pulse"></div>{" "}
        {skeletonItems.map((_, index) => (
          <SkeletonCard key={index}>
            <div className="h-25 p-4 flex flex-col items-center justify-between gap-4 bg-gray-200 dark:bg-card-dark animate-pulse rounded-md">
              {/* title checkbox */}
              <div className="flex flex-row items-center gap-2 sm:mr-auto">
                <div className="h-6 w-20 bg-gray-100 dark:bg-gray-900 rounded-md"></div>
              </div>
              <div className="flex flex-col w-full items-center sm:flex-row sm:mr-auto sm:justify-between gap-4">
                {/* project tag */}
                <div className="flex gap-4 items-center flex-col sm:flex-row">
                  <div className="h-6 w-20 bg-gray-100 dark:bg-gray-900 rounded-md"></div>
                  {/* due date */}
                  <div className="h-6 w-30 bg-gray-100 dark:bg-gray-900 rounded-md"></div>
                  {/* status */}
                  <div className="mt-0.5 h-2 w-2 bg-gray-100 dark:bg-gray-900 rounded-full"></div>
                </div>
                {/* actions */}
                <div className="flex gap-2">
                  <div className="h-6 w-20 bg-gray-100 dark:bg-gray-900 rounded-md"></div>
                  <div className="h-6 w-20 bg-gray-100 dark:bg-gray-900 rounded-md"></div>
                </div>
              </div>
            </div>
          </SkeletonCard>
        ))}
      </div>
    </div>
  );
}

export default CalendarSidebarSkeleton;

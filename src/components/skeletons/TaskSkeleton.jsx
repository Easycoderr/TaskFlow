import SkeletonCard from "./SkeletonCard";

// Create an array with the number for skeletons
const skeletonItems = Array(4).fill(0);
function TaskSkeleton() {
  return (
    <div className="overflow-y-auto grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-4 text-text dark:text-text-dark">
      {/* task card */}
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
  );
}

export default TaskSkeleton;

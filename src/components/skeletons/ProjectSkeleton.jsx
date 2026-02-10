import SkeletonCard from "./SkeletonCard";

// Create an array with the number for skeletons
const skeletonItems = Array(2).fill(0);
function ProjectSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {skeletonItems.map((_, index) => (
        <SkeletonCard key={index}>
          <div className="bg-gray-200 dark:bg-card-dark space-y-3 rounded-md animate-pulse p-4">
            {/* heade */}
            <div className="w-30 h-8 bg-gray-100 dark:bg-gray-900 rounded-md"></div>
            <div className="w-full h-6 bg-gray-100 dark:bg-gray-900 rounded-md"></div>
            <div className="flex flex-col gap-2 mb-10">
              <span className="w-25 h-6 bg-gray-100 dark:bg-gray-900 rounded-md"></span>
              <span className="w-full h-3 bg-gray-100 dark:bg-gray-900 rounded-full"></span>
            </div>
            {/* FOOTER OF CARD */}
            <div className="flex justify-between md:items-end flex-col gap-y-4 md:gap-y-0 md:flex-row">
              {/* status */}
              <div className="space-y-2">
                <div className="w-20 h-6 bg-gray-100 dark:bg-gray-900 rounded-md"></div>
                {/* duedate */}
                <div className="w-20 h-6 bg-gray-100 dark:bg-gray-900 rounded-md"></div>
              </div>
              {/* actions */}
              <div className="flex flex-row flex-wrap gap-2">
                <div className="w-20 h-6 bg-gray-100 dark:bg-gray-900 rounded-md"></div>
                <div className="w-20 h-6 bg-gray-100 dark:bg-gray-900 rounded-md"></div>
                <div className="w-20 h-6 bg-gray-100 dark:bg-gray-900 rounded-md"></div>
              </div>
            </div>
          </div>
        </SkeletonCard>
      ))}
    </div>
  );
}

export default ProjectSkeleton;

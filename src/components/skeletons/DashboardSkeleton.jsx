function DashboardSkeleton() {
  return (
    <div className="bg-bg dark:bg-bg-dark space-y-10 overflow-y-auto grid grid-cols-2 gap-x-4 overflow-x-hidden">
      {/* header */}
      <div className="space-y-3 col-span-2 flex items-center justify-between">
        <div className="space-y-3">
          <div className="h-10 w-40 rounded-md bg-gray-200 dark:bg-card-dark animate-pulse"></div>
          <div className="h-5 w-70 rounded-md bg-gray-200 dark:bg-card-dark animate-pulse"></div>
        </div>
      </div>
      {/* status cards */}
      <div className="col-span-2 grid md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ">
        <div className="h-30 sm:max-w-80 rounded-md bg-gray-200 dark:bg-card-dark animate-pulse"></div>
        <div className="h-30 sm:max-w-80 rounded-md bg-gray-200 dark:bg-card-dark animate-pulse"></div>
        <div className="h-30 sm:max-w-80 rounded-md bg-gray-200 dark:bg-card-dark animate-pulse"></div>
        <div className="h-30 sm:max-w-80 rounded-md bg-gray-200 dark:bg-card-dark animate-pulse"></div>
      </div>
      {/* today focus */}
      <div className="p-4 space-y-5 rounded-md col-span-2 md:col-span-1 bg-gray-200 dark:bg-card-dark animate-pulse">
        <h3 className="w-15 h-6 bg-gray-200 dark:bg-gray-900 rounded-md"></h3>
        {/* list of today items */}
        <div className="flex flex-col gap-4">
          {/* items */}
          <div className="w-full h-8 bg-gray-200 dark:bg-gray-900 rounded-md"></div>
          <div className="w-full h-8 bg-gray-200 dark:bg-gray-900 rounded-md"></div>
          <div className="w-full h-8 bg-gray-200 dark:bg-gray-900 rounded-md"></div>
          <div className="w-full h-8 bg-gray-200 dark:bg-gray-900 rounded-md"></div>
        </div>
      </div>
      {/* upcomming  */}
      <div className="p-4 space-y-4 rounded-md col-span-2 md:col-span-1 bg-gray-200 dark:bg-card-dark animate-pulse">
        <h3 className="w-15 h-6 bg-gray-200 dark:bg-gray-900 rounded-md"></h3>
        {/* list of today items */}
        <div className="flex flex-col gap-4">
          {/* items */}
          <div className="w-full h-8 bg-gray-200 dark:bg-gray-900 rounded-md"></div>
          <div className="w-full h-8 bg-gray-200 dark:bg-gray-900 rounded-md"></div>
          <div className="w-full h-8 bg-gray-200 dark:bg-gray-900 rounded-md"></div>
          <div className="w-full h-8 bg-gray-200 dark:bg-gray-900 rounded-md"></div>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="col-span-2 flex items-center justify-end gap-4">
        <div className="w-34 h-10 bg-gray-200 dark:bg-card-dark rounded-md animate-pluse"></div>
        <div className="w-38 h-10 bg-gray-200 dark:bg-card-dark rounded-md animate-pluse"></div>
      </div>
    </div>
  );
}

export default DashboardSkeleton;

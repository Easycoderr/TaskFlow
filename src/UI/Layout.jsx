// import Dashboard from "../pages/dashboard/dashboard";

function Layout() {
  return (
    <div
      className="grid grid-cols-[260px_1fr]
grid-rows-[70px_1fr] min-h-screen bg-bg dark:bg-bg-dark"
    >
      {/* top bar */}
      <div className="bg-bg dark:bg-bg-dark col-span-3 col-start-2 border-b border-gray-200"></div>
      {/* side bar */}
      <div className="bg-bg dark:bg-bg-dark col-span-1 row-start-1 row-span-4 border-r border-gray-200">
        {" "}
        side bar
      </div>
      <div className="bg-bg dark:bg-bg-dark col-start-2 row-start-2 col-span-3 row-span-3">
        main content
      </div>
    </div>
  );
}

export default Layout;

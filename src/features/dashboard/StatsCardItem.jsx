function StatsCardItem({ children, title, record }) {
  let customColor;
  switch (title.toLowerCase()) {
    case "today":
      customColor = "from-cyan-500/50 via-cyan-500/10 to-cyan-500/5";
      break;
    case "completed":
      customColor = "from-green-500/50 via-green-500/10 to-green-500/5";
      break;
    case "incompleted":
      customColor = "from-amber-500/50 via-amber-500/10 to-amber-500/5";
      break;
    case "overdue":
      customColor = "from-red-500/50 via-red-500/10 to-red-500/5";
      break;
    default:
      customColor = "from-cyan-500/50 via-cyan-500/10 to-cyan-500/5";
  }
  return (
    <div className="relative flex items-center justify-around px-3 py-5 overflow-hidden shadow bg-card dark:bg-card-dark rounded-md hover:scale-105 transition-all duration-300">
      <div
        className={`bg-linear-to-bl ${customColor} absolute top-0 bottom-0 right-0 left-0 z-10`}
      ></div>
      <div className="flex flex-col gap-5">
        <span className="text-2xl text-primary z-20">{children}</span>
        <h4 className="text-xl font-medium z-20">{title}</h4>
      </div>
      <p className="font-semibold text-3xl z-20 self-end">{record}</p>
    </div>
  );
}

export default StatsCardItem;

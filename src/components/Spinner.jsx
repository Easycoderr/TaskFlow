import Logo from "./Logo";

function Spinner() {
  return (
    <div className="flex flex-col bg-bg dark:bg-bg-dark h-screen items-center justify-center gap-4">
      <div className="relative h-16 w-16 flex items-center justify-center">
        {/* Outer Orbiting Ring */}
        <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-primary border-r-secondary animate-spin" />

        {/* Inner Pulsing Task Core */}
        <div className="text-xs">
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default Spinner;

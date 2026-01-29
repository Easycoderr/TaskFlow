import { CiWarning } from "react-icons/ci";
import { IoReloadSharp } from "react-icons/io5";

function ErrorState({ message }) {
  function handleReload() {
    window.location.reload();
  }
  return (
    <div className="flex items-center justify-center mx-auto">
      {/* message */}
      <div className="flex items-center relative gap-2 dark:bg-red-500/80 p-8 dark:text-red-100 bg-red-500/90 text-red-100 rounded-md text-lg font-medium leading-relaxed">
        <button
          onClick={handleReload}
          className="border-none bg-none absolute right-1 top-1 active:rotate-180 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <IoReloadSharp />
        </button>
        <span>
          <CiWarning size={30} />
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ErrorState;

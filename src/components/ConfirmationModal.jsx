import { useUiStates } from "../hooks/useUiContext";

function ConfirmationModal({
  title,
  message,
  confirmText = "Confirm",
  onConfirm,
  variant = "danger", // 'danger' for delete, 'primary' for logout
}) {
  const { dispatch } = useUiStates();

  const handleClose = () => dispatch({ value: "CLOSE_MODAL" });

  const handleAction = () => {
    onConfirm();
    handleClose();
  };

  const isDanger = variant === "danger";

  return (
    <div className="max-w-100 text-center sm:text-left">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        {/* Visual Icon (Optional but Professional) */}
        <div
          className={`p-3 rounded-full shrink-0 ${isDanger ? "bg-red-100 dark:bg-red-900/30" : "bg-blue-100 dark:bg-blue-900/30"}`}
        >
          <div
            className={`w-6 h-6 ${isDanger ? "text-red-600" : "text-blue-600"}`}
          >
            {/* Use your choice of icon here */}
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {message}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
        <button
          onClick={handleClose}
          className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleAction}
          className={`cursor-pointer px-4 py-2 text-sm font-medium text-white rounded-lg shadow-sm transition-opacity hover:opacity-90 ${
            isDanger ? "bg-red-600" : "bg-blue-600"
          }`}
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;

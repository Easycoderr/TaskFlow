/* eslint-disable no-unused-vars */
function Button({ children, type, onClick, title, type2, loading = false }) {
  const styles = {
    form: `${loading && " cursor-not-allowed opacity-40"} mb-2.5  text-sm font-medium text-gray-50 tracking-wider shadow-green-300 w-full bg-linear-to-br from-primary via-secondary to-primary bg-300 p-3 rounded-md transition-all duration-300 hover:shadow-sm cursor-pointer hover:animate-gradient`,
    cta: "font-medium text-gray-50 tracking-wider shadow-green-400 bg-linear-to-br from-primary via-secondary to-primary bg-300 py-3 px-8 rounded-md transition-all duration-300 hover:shadow-md cursor-pointer hover:animate-gradient",
    primary:
      "text-sm text-white font-medium   tracking-wider shadow-green-200 bg-linear-to-br from-primary via-secondary to-primary bg-300 py-2 px-5 rounded-md transition-all duration-300 hover:shadow-sm cursor-pointer hover:animate-gradient",
    secondary:
      "text-sm text-white font-medium  tracking-wider shadow-green-200  bg-linear-to-br from-secondary via-primary to-secondary bg-300 py-2 px-5 rounded-md transition-all duration-300 hover:shadow-sm cursor-pointer hover:animate-gradient",
    cancel:
      "text-sm text-red-50 font-medium tracking-tight shadow-red-200 bg-linear-to-br from-red-500 to-red-500 bg-300 py-2 px-5 rounded-md transition-all duration-300 hover:shadow-sm cursor-pointer hover:animate-gradient",
  };
  return (
    <button
      type={type2}
      title={title}
      aria-label={children}
      className={styles[type]}
      onClick={onClick}
      disabled={loading}
    >
      {children}
    </button>
  );
}

export default Button;

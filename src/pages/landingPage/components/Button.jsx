/* eslint-disable no-unused-vars */
function Button({ children, type, onClick, title, type2 }) {
  const styles = {
    form: "mb-2.5  text-sm font-medium text-gray-50 tracking-wider shadow-green-300 w-full bg-linear-to-br from-primary via-secondary to-primary bg-300 p-3 rounded-md transition-all duration-300 hover:shadow-sm cursor-pointer hover:animate-gradient",
    cta: "font-medium text-gray-50 tracking-wider shadow-green-400 bg-linear-to-br from-primary via-secondary to-primary bg-300 py-3 px-8 rounded-md transition-all duration-300 hover:shadow-md cursor-pointer hover:animate-gradient",
    primary:
      "text-sm font-medium  tracking-wider shadow-green-200 bg-linear-to-br from-primary via-secondary to-primary bg-300 py-1 px-3 md:py-2 md:px-6 rounded-md transition-all duration-300 hover:shadow-md cursor-pointer hover:animate-gradient",
    secondary:
      "text-sm font-medium  tracking-wider shadow-green-200  bg-linear-to-br from-secondary via-primary to-secondary bg-300 py-1 px-3 md:py-2 md:px-6 rounded-md transition-all duration-300 hover:shadow-md cursor-pointer hover:shadow-lg hover:animate-gradient",
    iconMoon: "cursor-pointer mr-2 md:mr-10",
    iconSun: "cursor-pointer mr-2 md:mr-10",
  };
  return (
    <button
      type={type2}
      title={title}
      aria-label={children}
      className={styles[type]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

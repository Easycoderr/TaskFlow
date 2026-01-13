/* eslint-disable no-unused-vars */
function Button({ children, type, onClick, title }) {
  const style = {
    primary:
      "text-sm font-medium  tracking-wider shadow-green-200 bg-gradient-to-br from-primary via-secondary to-primary bg-300 py-2 px-6 rounded-md transition-all duration-300 hover:shadow-md cursor-pointer hover:animate-gradient",
    secondary:
      "text-sm font-medium  tracking-wider shadow-green-200  bg-gradient-to-br from-secondary via-primary to-secondary bg-300 py-2 px-6 rounded-md transition-all duration-300 hover:shadow-md cursor-pointer hover:shadow-lg hover:animate-gradient",
    iconMoon: "bg-gray-700 p-1 rounded-md cursor-pointer mr-20",
    iconLight: "bg-gray-200 p-1 rounded-md cursor-pointer mr-20",
  };
  return (
    <button
      title={title}
      aria-label={children}
      class={style[type]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

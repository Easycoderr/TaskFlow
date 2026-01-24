import { forwardRef } from "react";

const Input = forwardRef(
  ({ inputName, inputType, icon, label, error, value, ...rest }, ref) => {
    return (
      <div className="relative">
        <input
          {...rest}
          ref={ref}
          id={inputName}
          name={inputName}
          type={inputType}
          value={value}
          placeholder=" "
          className={`peer bg-bg text-text  text-sm rounded-sm p-3 outline-none ring-[0.5px] focus:ring-2 focus:ring-primary focus:border-primary ${error && "ring-red-400 border-red-400 focus:ring-red-400 focus:border-red-400"} w-full`}
        />

        <label
          htmlFor="email"
          className="absolute  rounded-sm transition-all duration-300 ease-in-out pointer-events-none 
                         top-1/2 -translate-y-1/2 left-2 text-text-muted dark:text-text-muted-dark text-sm
                         peer-focus:-top-px peer-focus:text-xs peer-focus:text-primary
                         peer-[:not(:placeholder-shown)]:-top-px peer-[:not(:placeholder-shown)]:text-xs peer-focus:p-0.5 peer-[:not(:placeholder-shown)]:p-0.5 peer-focus:bg-bg peer-focus:dark:bg-bg-dark peer-[:not(:placeholder-shown)]:bg-bg peer-[:not(:placeholder-shown)]:dark:bg-bg-dark"
        >
          {error ? (
            <span className="text-red-400">{error.message}</span>
          ) : (
            label
          )}
        </label>
        <span
          className={`absolute text-text peer-focus:text-primary ${error && "text-red-400 dark:text-red-400 peer-focus:text-red-400"} top-1/2 -translate-y-1/2 right-2.5`}
        >
          {icon}
        </span>
      </div>
    );
  },
);

export default Input;

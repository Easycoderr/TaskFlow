import { useState } from "react";
import { ImSad } from "react-icons/im";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const CustomSelect = ({
  type,
  options,
  value,
  onChange,
  placeholder,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options
    ? options?.find((option) => option.value === value)
    : null;

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div
      className={`relative ${type === "filter" ? "w-full sm:max-w-1/4" : "w-72"} text-sm`}
    >
      {/* Select Button */}
      <button
        type="button"
        className="flex items-center justify-between w-full p-3 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="truncate flex flex-row items-center text-text gap-1">
          {icon && <span>{icon}</span>}

          {selectedOption ? selectedOption.label : placeholder}
        </span>
        {isOpen ? (
          <MdArrowDropUp className="w-5 h-5 text-text" />
        ) : (
          <MdArrowDropDown className="w-5 h-5 text-text" />
        )}
      </button>

      {/* Options Dropdown */}
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 overflow-auto bg-white rounded-md shadow-sm max-h-60 focus:outline-none">
          {options ? (
            options.map((option) => (
              <li
                key={option.value}
                className={`p-3 cursor-pointer select-none relative ${
                  option.value === value
                    ? "bg-primary text-text"
                    : "text-text hover:bg-green-100"
                }`}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))
          ) : (
            <li
              className={`p-3 cursor-pointer select-none relative text-text text-center hover:bg-green-100 flex items-center justify-center gap-1`}
            >
              <span>there is no {placeholder.toLowerCase()}</span>
              <ImSad className="text-red-800 text-lg" />
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;

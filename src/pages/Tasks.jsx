import { BiFilter, BiPlus, BiSearch } from "react-icons/bi";
import Button from "../components/Button";
import Heading from "../UI/Heading";
import SimpleButtonIcon from "../components/SimpleButtonIcon";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
const options = [
  { value: "all", label: "All" },
  { value: "today", label: "Today" },
  { value: "completed", label: "Completed" },
  { value: "incompleted", label: "Incompleted" },
  { value: "overdue", label: "Overdue" },
];

function Tasks() {
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  return (
    <div className="bg-bg text-text dark:text-text-dark dark:bg-bg-dark space-y-10">
      <div className="text-text dark:text-text-dark space-y-3 flex items-center justify-between">
        <div>
          <Heading>Tasks</Heading>
        </div>
        <Button type="primary" type2="button" title="Click to add new task">
          <span className="flex items-center gap-1">
            <BiPlus className="text-xl font-bold" />
            Add Task
          </span>
        </Button>
      </div>
      <div className="flex justify-between items-center p-2">
        {/* search */}
        <div className="relative min-w-xs shadow-sm rounded-md">
          <input
            type="text"
            name="search"
            id="search"
            placeholder=" "
            className="border border-gray-300 z-20 w-full p-2 bg-bg dark:bg-gray-200 text-bg-dark outline-none focus:ring-2 focus:ring-primary text-sm rounded-md peer"
          />
          <label
            htmlFor="Search"
            className="transition-all pointer-events-none px-1 rounded-md duration-300 absolute top-1/2 -translate-y-1/2 left-2 text-text-muted dark:text-text-muted-dark text-sm
                 peer-focus:-top-px peer-focus:text-xs peer-focus:text-primary
                 peer-[:not(:placeholder-shown)]:-top-px peer-[:not(:placeholder-shown)]:text-xs peer-focus:p-0.5 peer-[:not(:placeholder-shown)]:p-0.5 peer-focus:bg-bg peer-focus:dark:bg-bg-dark peer-[:not(:placeholder-shown)]:bg-bg peer-[:not(:placeholder-shown)]:dark:bg-bg-dark"
          >
            Search
          </label>
          <span className="border-l peer-focus:border-l-primary hover:border-l-primary rounded-l-none rounded-md border-l-gray-300 h-full p-2 absolute top-1/2 -translate-y-1/2 right-0 flex items-center hover:bg-gray-200">
            <SimpleButtonIcon>
              <BiSearch className="text-xl text-text group-hover:-rotate-12 group-hover:scale-105 group-hover:text-primary transition-all duration-300" />
            </SimpleButtonIcon>
          </span>
        </div>
        {/* Filter */}
        <CustomSelect
          options={options}
          value={selectedValue}
          onChange={setSelectedValue}
          placeholder="select filter"
        />
      </div>
    </div>
  );
}
const CustomSelect = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption =
    options.find((option) => option.value === value) || null;

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-72 text-sm">
      {/* Select Button */}
      <button
        type="button"
        className="flex items-center justify-between w-full p-2 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="truncate flex flex-row items-center gap-1">
          <BiFilter />
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <MdArrowDropDown className="w-5 h-5 text-gray-400" />
      </button>

      {/* Options Dropdown */}
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 overflow-auto bg-white rounded-md shadow-sm max-h-60 focus:outline-none">
          {options.map((option) => (
            <li
              key={option.value}
              className={`p-3 cursor-pointer select-none relative ${
                option.value === value
                  ? "bg-primary text-white"
                  : "text-gray-900 hover:bg-green-100"
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;

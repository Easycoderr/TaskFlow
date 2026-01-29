import { BiSearch } from "react-icons/bi";
import SimpleButtonIcon from "./SimpleButtonIcon";
import CustomSelect from "./CustomSelect";

function SearchFilterRow({ options, selectedValue, setSelectedValue }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      {/* search */}
      <div className="relative min-w-2xs shadow-sm rounded-md">
        <input
          type="text"
          name="search"
          id="search"
          placeholder=" "
          className="border border-gray-300 z-20 w-full p-3 bg-bg dark:bg-gray-200 text-bg-dark outline-none focus:ring-2 focus:ring-primary text-sm rounded-md peer"
        />
        <label
          htmlFor="Search"
          className="transition-all pointer-events-none px-1 rounded-md duration-300 absolute top-1/2 -translate-y-1/2 left-2 text-text-muted dark:text-text-muted-dark text-sm
                 peer-focus:-top-px peer-focus:text-xs peer-focus:text-primary
                 peer-[:not(:placeholder-shown)]:-top-px peer-[:not(:placeholder-shown)]:text-xs peer-focus:p-0.5 peer-[:not(:placeholder-shown)]:p-0.5 peer-focus:bg-bg peer-focus:dark:bg-bg-dark peer-[:not(:placeholder-shown)]:bg-bg peer-[:not(:placeholder-shown)]:dark:bg-bg-dark"
        >
          Search
        </label>
        <SimpleButtonIcon>
          <span className="group cursor-pointer border-l peer-focus:border-l-primary rounded-l-none rounded-md border-l-gray-300 h-full p-2 absolute top-1/2 -translate-y-1/2 right-0 flex items-center">
            <BiSearch className="text-xl text-text group-hover:-rotate-12 group-hover:scale-105 group-hover:text-primary transition-all duration-300" />
          </span>
        </SimpleButtonIcon>
      </div>
      {/* Filter */}
      <CustomSelect
        options={options}
        value={selectedValue}
        onChange={setSelectedValue}
        placeholder="select filter"
      />
    </div>
  );
}

export default SearchFilterRow;

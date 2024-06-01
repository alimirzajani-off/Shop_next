import { CiSearch } from "react-icons/ci";

export const SearchBox = ({}) => {
  return (
    <div className="flex items-center h-10 w-[50%] p-1 bg-neutral-100 text-neutral-500 rounded">
      <span className="mx-2">
        <CiSearch />
      </span>
      <input
        placeholder="جستجو..."
        className="w-full bg-neutral-100  focus:outline-none"
      />
    </div>
  );
};

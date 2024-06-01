export const EmailBox = ({}) => {
  return (
    <div className="flex">
      <input
        placeholder="جستجو..."
        className="p-2 rounded w-full bg-neutral-100  focus:outline-none"
      />
      <button className="rounded py-2 px-4 mr-2 bg-[#e0e0e2]">ثبت</button>
    </div>
  );
};

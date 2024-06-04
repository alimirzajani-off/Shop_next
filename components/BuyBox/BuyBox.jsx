export const BuyBox = ({ price }) => {
  return (
    <div className="bg-neutral-100 rounded-md text-center sm:w-full w-[18rem] p-4 ">
      <div className="text-justify border-b border-solid border-n-200 pb-4">
        <p>فروشنده</p>
        <p>دی جی تحریر</p>
      </div>
      {/* <div>
        {}
      </div> */}
      <div className="p-4">{price}تومان</div>
      <button className="text-white bg-[#ef4056] w-full rounded p-2">
        افزودن به سبد
      </button>
    </div>
  );
};

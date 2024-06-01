import Link from "next/link";
import { useState } from "react";
import { SearchBox } from "@/components/SearchBox/SearchBox";
import { TbLogin } from "react-icons/tb";

export const Header = () => {
  const [SearchValue, setSearchValue] = useState("");
  return (
    <header className="flex flex-col sticky top-0 bg-white h-22 shadow-md	mb-4 p-2">
      <div className="flex flex-wrap justify-between items-center">
        <SearchBox />
        <div className="flex rounded border border-solid border-[#e0e0e2] p-2">
          <span className="flex">
            <TbLogin />
            ورود
          </span>
          |<span>ثبت نام</span>
        </div>
      </div>
      <nav className="flex justify-between items-center">
        <ul className="flex">
          <li className="p-2">
            <Link href={"/"}>خانه</Link>
          </li>
          <li className="p-2">
            <Link href={"/about"}>درباره ما</Link>
          </li>
        </ul>
        <div>لوگو </div>
      </nav>
    </header>
  );
};

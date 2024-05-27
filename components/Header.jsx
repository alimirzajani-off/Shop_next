import Link from "next/link";
import { useEffect } from "react";

export const Header = () => {
  return (
    <header className="flex justify-between items-center sticky top-0 bg-white h-12">
      <ul className="flex">
        <li className="p-4">
          <Link href={"/"}>home</Link>
        </li>
        <li className="p-4">
          <Link href={"/about"}>about</Link>
        </li>
      </ul>
      <div>logo</div>
    </header>
  );
};

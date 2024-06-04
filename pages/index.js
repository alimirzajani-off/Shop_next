import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import products from "@/List/Products.json";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(5);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 1);
  };

  const loadLess = () => {
    setVisibleCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <div className="cover mt-4"></div>
      {/* <Image className="w-full" src={"/cover.jpg"} width={300} height={50} /> */}
      <div className="flex justify-center items-center mt-10 my-6 bg-[#F6DF60] px-2">
        <button
          className="bg-white rounded-full w-8	h-8"
          style={{ visibility: visibleCount > 5 ? "" : "hidden" }}
          onClick={loadLess}
        >
          <div className="mr-[7px]">
            <IoIosArrowForward />
          </div>
        </button>
        {products.slice(visibleCount - 5, visibleCount).map((item, index) => (
          <Link
            key={index}
            href={`/products/${item.id}`}
            className="flex flex-col items-center justify-center bg-white	shadow-md rounded w-40	h-52 m-4 p-2"
          >
            <Image
              src={`/${item.image}`}
              alt={`/${item.image}`}
              width={150}
              height={100}
            />
            <div className="">{item.ProductName}</div>
            <div className="">{item.ProductPrice}</div>
          </Link>
        ))}
        {visibleCount == products.length && (
          <>
            <Link
              href={"/products"}
              className="text-sm	 bg-white rounded-full w-8	h-8"
            >
              بیشتر
            </Link>
          </>
        )}
        {visibleCount < products.length && (
          <button className="bg-white rounded-full w-8	h-8" onClick={loadMore}>
            <div className="mr-[7px]">
              <IoIosArrowBack />
            </div>
          </button>
        )}
      </div>
      <div className="flex flex-wrap	justify-center">
        <div className=" m-4">
          <Image
            className="rounded-lg"
            src={"/cover_2.webp"}
            alt={`cover_2`}
            width={650}
            height={300}
          />
        </div>
        <div className=" m-4">
          <Image
            className="rounded-lg"
            src={"/cover_3.webp"}
            alt={`cover_3`}
            width={650}
            height={300}
          />
        </div>
        <div className=" m-4">
          <Image
            className="rounded-lg"
            src={"/cover_4.webp"}
            alt={`cover_4`}
            width={650}
            height={300}
          />
        </div>
        <div className=" m-4">
          <Image
            className="rounded-lg"
            src={"/cover_5.webp"}
            alt={`cover_5`}
            width={650}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

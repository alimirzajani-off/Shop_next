import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import Link from "next/link";
import products from "@/List/Products.json";
import { useState } from "react";

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
      <div className="flex flex-wrap justify-center items-center mt-10 my-6 bg-[#F6DF60] px-2">
        <button
          className="bg-white rounded-full w-12	h-12"
          style={{ visibility: visibleCount > 5 ? "" : "hidden" }}
          onClick={loadLess}
        >
          قبلی
        </button>
        {products.slice(visibleCount - 5, visibleCount).map((item) => (
          <Link
            href={`/products/${item.id}`}
            className="flex flex-col items-center justify-center bg-white	shadow-md rounded w-40	h-52 m-4 p-2"
          >
            <Image src={`/${item.image}`} width={150} height={100} />
            <div className="">{item.ProductName}</div>
            <div className="">{item.ProductPrice}</div>
          </Link>
        ))}
        {visibleCount == products.length && (
          <>
            <Link
              href={"/products"}
              // href={`/product/${item.id}`}
              className="flex flex-col items-center justify-center	shadow-md rounded w-40	h-52 m-4 p-2"
            >
              مشاهده موارد بیشتر
            </Link>
          </>
        )}
        {visibleCount < products.length && (
          <button className="bg-white rounded-full w-12	h-12" onClick={loadMore}>
            بعدی
          </button>
        )}
      </div>
      <div className="flex flex-wrap	justify-center">
        <div className=" m-4">
          <Image
            className="rounded-lg"
            src={"/cover_2.webp"}
            width={650}
            height={300}
          />
        </div>
        <div className=" m-4">
          <Image
            className="rounded-lg"
            src={"/cover_3.webp"}
            width={650}
            height={300}
          />
        </div>
        <div className=" m-4">
          <Image
            className="rounded-lg"
            src={"/cover_4.webp"}
            width={650}
            height={300}
          />
        </div>
        <div className=" m-4">
          <Image
            className="rounded-lg"
            src={"/cover_5.webp"}
            width={650}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

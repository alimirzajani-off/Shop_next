import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import products from "@/List/Products.json";
import { BuyBox } from "@/components/BuyBox/BuyBox";
import { IoIosArrowBack } from "react-icons/io";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  let product = products.find((item) => item.id == id);

  const [isExpanded, setisExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("section1");
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const scrollToRef = (ref) => {
    // Subtract the height of the header and tab
    window.scrollTo(0, ref.current.offsetTop - 132);
    setActiveTab(ref.current.id);
  };

  useEffect(() => {
    // window.addEventListener("scroll", (e) => {
    //   console.log(e);
    // });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { rootMargin: "100px 20px 30px 50px", threshold: 0 }
    );

    observer.observe(section1Ref.current);
    observer.observe(section2Ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-around">
        <Head>
          <meta name="description" content={`${product?.ProductName}`} />
          <meta
            name="description"
            content={`${product?.ProductName}قیمت و خرید`}
          />
          <title>{product?.ProductName}</title>
        </Head>
        <div className="w-[15rem]">
          <Image
            src={`/${product?.image}`}
            alt={`/${product?.image}`}
            width={250}
            height={300}
          />
        </div>
        <div className="grow mx-4">
          <div className="sm:text-justify  w-full p-2 text-center">
            {product?.ProductName}
          </div>
          <div className="sm:grid grid-cols-2 gap-4 flex flex-wrap justify-center">
            <div className="text-center sm:w-full w-[18rem] border-t border-solid border-n-200 ">
              <div className="p-2">{product?.ProductPrice}</div>
            </div>
            <BuyBox price={product?.ProductPrice} />
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-[white] sticky py-1 top-24">
          <div className="flex mx-4">
            <div>
              <button
                className={`px-2 pb-1`}
                onClick={() => scrollToRef(section1Ref)}
              >
                {" "}
                معرفی
              </button>
              <div
                className={` ${
                  activeTab === "section1" &&
                  "h-1 rounded-t-md	border-b-4 border-solid border-red-700	"
                }`}
              ></div>
            </div>
            <div>
              <button
                className={`px-2 pb-1`}
                onClick={() => scrollToRef(section2Ref)}
              >
                بررسی تخصصی
              </button>
              <div
                className={` ${
                  activeTab === "section2" &&
                  "h-1 rounded-t-md	 border-b-4 border-solid border-red-700	"
                }`}
              ></div>
            </div>
          </div>
          <div className="mx-4 border-b-[1px] border-solid border-black-700"></div>
        </div>
        <div className="mx-4">
          <div
            id="section1"
            ref={section1Ref}
            className={`pb-4 border-b-4 border-solid border-black-700`}
          >
            <p className="font-bold	">معرفی</p>
            <p
              className={`font-light leading-loose overflow-hidden	${
                isExpanded ? "" : "line-clamp-4	"
              }`}
              dangerouslySetInnerHTML={{ __html: product?.ProductDescription }}
            />
            <div
              className="flex items-end pt-2"
              onClick={() => setisExpanded(!isExpanded)}
            >
              <p className="pl-2 text-cyan-500	">
                {isExpanded ? "بستن" : "بیشتر"}
              </p>
              <IoIosArrowBack className="text-cyan-500	" />
            </div>
          </div>
          <div
            id="section2"
            ref={section2Ref}
            className={`pb-4 border-b-4 border-solid border-black-700`}
          >
            <p className="font-bold	">بررسی تخصصی</p>
          </div>
        </div>
      </div>
    </div>
  );
}

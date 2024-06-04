import { Footer } from "@/Layout/Footer";
import { Header } from "@/Layout/Header";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export const Layout = ({ children }) => {
  const [scrolled, setscrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setscrolled(true);
      } else if (
        document.body.scrollTop == 0 ||
        document.documentElement.scrollTop == 0
      ) {
        setscrolled(false);
      }
    });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setscrolled(false);
  };

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      {scrolled ? (
        <div
          className="w-fit p-3 bg-neutral-100 rounded-full fixed bottom-2 right-2 shadow-md "
          onClick={handleScrollToTop}
        >
          <IoIosArrowUp />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

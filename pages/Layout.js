import { Footer } from "@/Layout/Footer";
import { Header } from "@/Layout/Header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

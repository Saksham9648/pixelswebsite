import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyContact from "./StickyContact";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <StickyContact />
    </div>
  );
};

export default Layout;

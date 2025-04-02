import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { FiHome, FiInfo, FiLayers, FiBriefcase, FiDollarSign, FiUsers, FiHelpCircle, FiMessageSquare, FiMenu } from "react-icons/fi";
// import Image from "next/image"; // Uncomment this if using Next.js for optimized images

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const isActive = (path: string) => location === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-background/95 backdrop-blur-md z-50 transition-all duration-300 shadow-md ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/">
          <a className="flex items-center space-x-2">
            {/* Standard <img> Tag for Logo */}
            <img 
              src="https://i.postimg.cc/d1m5G5Gr/Picsart-25-04-02-09-07-21-126.png" // Replace with your actual logo URL
              alt="PixelsBeing Logo"
              className="h-14 w-14" // Adjust size as needed
            />
            
            {/* Next.js Optimized Version (Uncomment if using Next.js) */}
            {/* <Image 
              src="https://via.placeholder.com/150" // Replace with actual logo URL
              alt="PixelsBeing Logo"
              width={32} 
              height={32} 
              priority
            /> */}
          </a>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-foreground focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <FiMenu className="text-2xl" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {[
            { href: "/", label: "Home", icon: <FiHome /> },
            { href: "/about", label: "About", icon: <FiInfo /> },
            { href: "/services", label: "Services", icon: <FiLayers /> },
            { href: "/portfolio", label: "Portfolio", icon: <FiBriefcase /> },
            { href: "/pricing", label: "Pricing", icon: <FiDollarSign /> },
            { href: "/refer-earn", label: "Refer & Earn", icon: <FiUsers /> },
            { href: "/faq", label: "FAQ", icon: <FiHelpCircle /> }
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={`${
                  isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"
                } transition-colors duration-300 font-medium flex items-center gap-1`}
              >
                {item.icon} {item.label}
              </a>
            </Link>
          ))}

          <Link href="/contact">
            <a className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-1 shadow-md">
              <FiMessageSquare className="inline-block" />
              Contact Us
            </a>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-card lg:hidden">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            {[
              { href: "/", label: "Home", icon: <FiHome /> },
              { href: "/about", label: "About", icon: <FiInfo /> },
              { href: "/services", label: "Services", icon: <FiLayers /> },
              { href: "/portfolio", label: "Portfolio", icon: <FiBriefcase /> },
              { href: "/pricing", label: "Pricing", icon: <FiDollarSign /> },
              { href: "/refer-earn", label: "Refer & Earn", icon: <FiUsers /> },
              { href: "/faq", label: "FAQ", icon: <FiHelpCircle /> }
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  onClick={closeMobileMenu}
                  className={`${
                    isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"
                  } transition-colors duration-300 py-2 font-medium flex items-center gap-2`}
                >
                  {item.icon} {item.label}
                </a>
              </Link>
            ))}

            <Link href="/contact">
              <a
                onClick={closeMobileMenu}
                className="bg-primary hover:bg-primary/90 text-white px-5 py-3 rounded-full inline-flex items-center gap-2 transition-all duration-300 shadow-md mt-2"
              >
                <FiMessageSquare className="text-lg" />
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

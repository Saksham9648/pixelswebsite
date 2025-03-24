import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { FiHome, FiInfo, FiLayers, FiBriefcase, FiDollarSign, FiUsers, FiHelpCircle, FiMessageSquare, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-background/95 backdrop-blur-md z-50 transition-all duration-300 shadow-md ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center space-x-2">
            <span className="text-2xl font-montserrat font-bold blue-text">
              PixelsBeing
            </span>
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
          <Link href="/">
            <a
              className={`${
                isActive("/")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 font-medium flex items-center gap-1`}
            >
              <FiHome className="inline-block" />
              Home
            </a>
          </Link>
          <Link href="/about">
            <a
              className={`${
                isActive("/about")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 font-medium flex items-center gap-1`}
            >
              <FiInfo className="inline-block" />
              About
            </a>
          </Link>
          <Link href="/services">
            <a
              className={`${
                isActive("/services")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 font-medium flex items-center gap-1`}
            >
              <FiLayers className="inline-block" />
              Services
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              className={`${
                isActive("/portfolio")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 font-medium flex items-center gap-1`}
            >
              <FiBriefcase className="inline-block" />
              Portfolio
            </a>
          </Link>
          <Link href="/pricing">
            <a
              className={`${
                isActive("/pricing")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 font-medium flex items-center gap-1`}
            >
              <FiDollarSign className="inline-block" />
              Pricing
            </a>
          </Link>
          <Link href="/refer-earn">
            <a
              className={`${
                isActive("/refer-earn")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 font-medium flex items-center gap-1`}
            >
              <FiUsers className="inline-block" />
              Refer & Earn
            </a>
          </Link>
          <Link href="/faq">
            <a
              className={`${
                isActive("/faq")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 font-medium flex items-center gap-1`}
            >
              <FiHelpCircle className="inline-block" />
              FAQ
            </a>
          </Link>
          <Link href="/contact">
            <a className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-1 shadow-md">
              <FiMessageSquare className="inline-block" />
              Contact Us
            </a>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } bg-card lg:hidden`}
      >
        <div className="container mx-auto py-4 flex flex-col space-y-4">
          <Link href="/">
            <a
              onClick={closeMobileMenu}
              className={`${
                isActive("/")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 py-2 font-medium flex items-center gap-2`}
            >
              <FiHome className="text-lg" />
              Home
            </a>
          </Link>
          <Link href="/about">
            <a
              onClick={closeMobileMenu}
              className={`${
                isActive("/about")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 py-2 font-medium flex items-center gap-2`}
            >
              <FiInfo className="text-lg" />
              About
            </a>
          </Link>
          <Link href="/services">
            <a
              onClick={closeMobileMenu}
              className={`${
                isActive("/services")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 py-2 font-medium flex items-center gap-2`}
            >
              <FiLayers className="text-lg" />
              Services
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              onClick={closeMobileMenu}
              className={`${
                isActive("/portfolio")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 py-2 font-medium flex items-center gap-2`}
            >
              <FiBriefcase className="text-lg" />
              Portfolio
            </a>
          </Link>
          <Link href="/pricing">
            <a
              onClick={closeMobileMenu}
              className={`${
                isActive("/pricing")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 py-2 font-medium flex items-center gap-2`}
            >
              <FiDollarSign className="text-lg" />
              Pricing
            </a>
          </Link>
          <Link href="/refer-earn">
            <a
              onClick={closeMobileMenu}
              className={`${
                isActive("/refer-earn")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 py-2 font-medium flex items-center gap-2`}
            >
              <FiUsers className="text-lg" />
              Refer & Earn
            </a>
          </Link>
          <Link href="/faq">
            <a
              onClick={closeMobileMenu}
              className={`${
                isActive("/faq")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 py-2 font-medium flex items-center gap-2`}
            >
              <FiHelpCircle className="text-lg" />
              FAQ
            </a>
          </Link>
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
    </nav>
  );
};

export default Navbar;

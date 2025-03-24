import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

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
      className={`fixed top-0 left-0 w-full bg-background/90 backdrop-blur-md z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center space-x-2">
            <span className="text-2xl font-montserrat font-bold gradient-text">
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
          <i className="fas fa-bars text-xl"></i>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/">
            <a
              className={`${
                isActive("/")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 font-medium`}
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a
              className={`${
                isActive("/about")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 font-medium`}
            >
              About
            </a>
          </Link>
          <Link href="/services">
            <a
              className={`${
                isActive("/services")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 font-medium`}
            >
              Services
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              className={`${
                isActive("/portfolio")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 font-medium`}
            >
              Portfolio
            </a>
          </Link>
          <Link href="/pricing">
            <a
              className={`${
                isActive("/pricing")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 font-medium`}
            >
              Pricing
            </a>
          </Link>
          <Link href="/refer-earn">
            <a
              className={`${
                isActive("/refer-earn")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 font-medium`}
            >
              Refer & Earn
            </a>
          </Link>
          <Link href="/faq">
            <a
              className={`${
                isActive("/faq")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 font-medium`}
            >
              FAQ
            </a>
          </Link>
          <Link href="/contact">
            <a className="animate-glow bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full transition-all duration-300">
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
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link href="/">
            <a
              onClick={closeMobileMenu}
              className={`${
                isActive("/")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors duration-300 py-2 font-medium`}
            >
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
              } transition-colors duration-300 py-2 font-medium`}
            >
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
              } transition-colors duration-300 py-2 font-medium`}
            >
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
              } transition-colors duration-300 py-2 font-medium`}
            >
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
              } transition-colors duration-300 py-2 font-medium`}
            >
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
              } transition-colors duration-300 py-2 font-medium`}
            >
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
              } transition-colors duration-300 py-2 font-medium`}
            >
              FAQ
            </a>
          </Link>
          <Link href="/contact">
            <a
              onClick={closeMobileMenu}
              className="animate-glow bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full inline-block text-center transition-all duration-300"
            >
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

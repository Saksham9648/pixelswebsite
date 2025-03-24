import { Link } from "wouter";
import { 
  FiMap, 
  FiPhone, 
  FiMail, 
  FiArrowRight, 
  FiGlobe, 
  FiHeart,
  FiShoppingCart,
  FiBarChart,
  FiSettings
} from "react-icons/fi";
import { 
  FiLinkedin, 
  FiTwitter, 
  FiFacebook, 
  FiInstagram 
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-montserrat font-bold blue-text">PixelsBeing</h3>
            <p className="text-muted-foreground">
              Transforming ideas into digital reality with innovative web
              development, SEO, and app development solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FiFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FiTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-montserrat font-semibold blue-text">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group">
                    <FiArrowRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group">
                    <FiArrowRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group">
                    <FiArrowRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <a className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group">
                    <FiArrowRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    Portfolio
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <a className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group">
                    <FiArrowRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    Pricing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group">
                    <FiArrowRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-montserrat font-semibold blue-text">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <FiGlobe className="mr-2 h-4 w-4 text-primary" />
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <FiBarChart className="mr-2 h-4 w-4 text-primary" />
                  SEO Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <FiHeart className="mr-2 h-4 w-4 text-primary" />
                  App Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <FiShoppingCart className="mr-2 h-4 w-4 text-primary" />
                  E-commerce Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <FiSettings className="mr-2 h-4 w-4 text-primary" />
                  Website Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-montserrat font-semibold blue-text">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1 mr-3 bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiMap className="text-primary" />
                </div>
                <span className="text-muted-foreground">
                  123 Tech Park, Civil Lines, Lucknow, UP
                </span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiPhone className="text-primary" />
                </div>
                <div>
                  <span className="text-muted-foreground block">+91 1234567890</span>
                  <span className="text-muted-foreground block mt-1">+91 9876543210</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-primary" />
                </div>
                <span className="text-muted-foreground">
                  info@pixelsbeing.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} PixelsBeing. All Rights Reserved.
          </p>
          <p className="text-muted-foreground mt-4">
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300 mx-3"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300 mx-3"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

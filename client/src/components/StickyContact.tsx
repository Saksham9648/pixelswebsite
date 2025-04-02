import { useState, useEffect } from "react";
import { Link } from "wouter";
import { FiMessageCircle, FiPhone, FiMail, FiMessageSquare, FiX, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const StickyContact = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scrolling behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Contact Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={togglePopup}
          className="bg-primary hover:bg-primary/90 text-white w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg"
          aria-label="Contact options"
        >
          {isPopupVisible ? (
            <FiX className="text-xl" />
          ) : (
            <FiMessageCircle className="text-xl" />
          )}
        </button>

        <AnimatePresence>
          {isPopupVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-20 right-0 bg-card rounded-xl shadow-xl p-6 w-72 border border-border"
            >
              <h4 className="text-lg font-bold mb-4">Get in <span className="blue-text">Touch</span></h4>
              <div className="flex flex-col space-y-3">
                <a
                  href="tel:+911234567890"
                  className="flex items-center space-x-3 text-foreground hover:text-primary p-2 rounded-lg hover:bg-primary/5 transition-all"
                >
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                    <FiPhone className="text-primary" />
                  </div>
                  <span>+91 8756309900</span>
                </a>
                <a
                  href="mailto:info@pixelsbeing.com"
                  className="flex items-center space-x-3 text-foreground hover:text-primary p-2 rounded-lg hover:bg-primary/5 transition-all"
                >
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                    <FiMail className="text-primary" />
                  </div>
                  <span>pixelsbeing@gmail.com</span>
                </a>
                <Link href="/contact">
                  <a className="bg-primary hover:bg-primary/90 text-white py-3 px-4 text-center rounded-lg transition-all duration-300 mt-2 flex items-center justify-center gap-2 shadow-md">
                    <FiMessageSquare />
                    Contact Form
                  </a>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-8 left-8 z-50"
          >
            <button
              onClick={scrollToTop}
              className="bg-muted hover:bg-primary/90 hover:text-white text-primary w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md border border-primary/20"
              aria-label="Scroll to top"
            >
              <FiChevronUp className="text-xl" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyContact;

import { useState } from "react";
import { Link } from "wouter";
import { FiMessageCircle, FiPhone, FiMail, FiMessageSquare, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const StickyContact = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={togglePopup}
        className="bg-primary hover:bg-primary/90 text-white w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
        aria-label="Contact options"
      >
        {isPopupVisible ? (
          <FiX className="text-2xl" />
        ) : (
          <FiMessageCircle className="text-2xl" />
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
            <h4 className="text-lg font-bold mb-4 blue-text">Get in Touch</h4>
            <div className="flex flex-col space-y-4">
              <a
                href="tel:+911234567890"
                className="flex items-center space-x-3 text-foreground hover:text-primary p-2 rounded-lg hover:bg-primary/5 transition-all"
              >
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                  <FiPhone className="text-primary" />
                </div>
                <span>+91 1234567890</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-3 text-foreground hover:text-primary p-2 rounded-lg hover:bg-primary/5 transition-all"
              >
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                  <FiPhone className="text-primary" />
                </div>
                <span>+91 9876543210</span>
              </a>
              <a
                href="mailto:info@pixelsbeing.com"
                className="flex items-center space-x-3 text-foreground hover:text-primary p-2 rounded-lg hover:bg-primary/5 transition-all"
              >
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                  <FiMail className="text-primary" />
                </div>
                <span>info@pixelsbeing.com</span>
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
  );
};

export default StickyContact;

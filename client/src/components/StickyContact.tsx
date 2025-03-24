import { useState } from "react";
import { Link } from "wouter";

const StickyContact = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={togglePopup}
        className="animate-glow bg-primary hover:bg-primary/90 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
        aria-label="Contact options"
      >
        <i className="fas fa-comment-dots text-xl"></i>
      </button>

      <div
        className={`${
          isPopupVisible ? "block" : "hidden"
        } absolute bottom-16 right-0 bg-card rounded-lg shadow-lg p-4 w-64`}
      >
        <div className="flex flex-col space-y-3">
          <a
            href="tel:+911234567890"
            className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
          >
            <i className="fas fa-phone"></i>
            <span>+91 1234567890</span>
          </a>
          <a
            href="tel:+919876543210"
            className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
          >
            <i className="fas fa-phone"></i>
            <span>+91 9876543210</span>
          </a>
          <a
            href="mailto:info@pixelsbeing.com"
            className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
          >
            <i className="fas fa-envelope"></i>
            <span>info@pixelsbeing.com</span>
          </a>
          <Link href="/contact">
            <a className="bg-primary/20 hover:bg-primary/30 text-primary py-2 text-center rounded-md transition-colors duration-300">
              Contact Form
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StickyContact;

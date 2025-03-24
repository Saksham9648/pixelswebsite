import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaqItemProps } from "@/lib/types";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-card rounded-xl p-6 border transition-all duration-300 ${
        isOpen ? "border-primary/30 shadow-md" : "border-border"
      }`}
    >
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
        role="button"
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isOpen ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
          } transition-colors duration-300`}>
            <FiHelpCircle className="w-4 h-4" />
          </div>
          <h3 className={`text-xl font-montserrat font-semibold ${
            isOpen ? "blue-text" : "text-foreground"
          }`}>
            {question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex items-center justify-center w-8 h-8 rounded-full ${
            isOpen ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
          } transition-colors duration-300`}
        >
          <FiChevronDown className="w-4 h-4" />
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 overflow-hidden pl-11"
          >
            <div className="border-l-2 border-primary/20 pl-4 py-1">
              <p className="text-muted-foreground">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FaqItem;

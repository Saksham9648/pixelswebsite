import { motion } from "framer-motion";
import { ServiceCardProps } from "@/lib/types";
import { Link } from "wouter";
import { FiCode, FiSearch, FiSmartphone, FiCheck, FiArrowRight } from "react-icons/fi";

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  // Function to render the correct icon based on icon name string
  const renderIcon = () => {
    switch(icon) {
      case 'FiCode':
        return <FiCode className="w-10 h-10" />;
      case 'FiSearch':
        return <FiSearch className="w-10 h-10" />;
      case 'FiSmartphone':
        return <FiSmartphone className="w-10 h-10" />;
      default:
        return <FiCode className="w-10 h-10" />;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-card rounded-xl p-8 border border-border transition-all duration-300 shadow-sm hover:shadow-md h-full flex flex-col"
    >
      <div className="mb-6 transition-all duration-300">
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
          {renderIcon()}
        </div>
      </div>
      
      <h3 className="text-2xl font-montserrat font-bold mb-4 blue-text">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2 mt-1">
              <FiCheck />
            </span>
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link href="/contact">
        <a className="inline-flex items-center gap-2 bg-muted hover:bg-primary text-foreground hover:text-white py-2 px-6 rounded-lg transition-all duration-300 mt-auto">
          Learn More
          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        </a>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;

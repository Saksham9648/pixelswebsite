import { motion } from "framer-motion";
import { ServiceCardProps } from "@/lib/types";
import { Link } from "wouter";
import { 
  FiCode, 
  FiSearch, 
  FiSmartphone, 
  FiCheck, 
  FiArrowRight, 
  FiLayout,
  FiPieChart,
  FiShoppingBag
} from "react-icons/fi";

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  // Function to render the correct icon based on icon name string
  const renderIcon = () => {
    switch(icon) {
      case 'FiCode':
        return <FiCode className="w-8 h-8" />;
      case 'FiSearch':
        return <FiSearch className="w-8 h-8" />;
      case 'FiSmartphone':
        return <FiSmartphone className="w-8 h-8" />;
      case 'FiLayout':
        return <FiLayout className="w-8 h-8" />;
      case 'FiPieChart':
        return <FiPieChart className="w-8 h-8" />;
      case 'FiShoppingBag':
        return <FiShoppingBag className="w-8 h-8" />;
      default:
        return <FiCode className="w-8 h-8" />;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-card rounded-xl p-6 md:p-8 border border-border transition-all duration-300 shadow-sm hover:shadow-lg hover:border-primary/30 h-full flex flex-col"
    >
      <div className="mb-6 transition-all duration-300">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
          {renderIcon()}
        </div>
      </div>
      
      <h3 className="text-2xl font-montserrat font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              <FiCheck size={12} className="text-primary" />
            </div>
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link href="/contact">
        <a className="inline-flex items-center gap-2 border border-primary/30 bg-muted hover:bg-primary text-foreground hover:text-white py-2.5 px-6 rounded-lg transition-all duration-300 mt-auto self-start">
          Get Started
          <FiArrowRight />
        </a>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;

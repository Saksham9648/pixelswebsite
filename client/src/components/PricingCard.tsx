import { motion } from "framer-motion";
import { PricingCardProps } from "@/lib/types";
import { Link } from "wouter";
import { FiCheck, FiX, FiArrowRight } from "react-icons/fi";

const PricingCard = ({ title, price, description, features, popular = false }: PricingCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`pricing-card bg-card rounded-xl overflow-hidden ${
        popular 
          ? "border-2 border-primary relative z-10 scale-105 shadow-xl" 
          : "border border-border"
      } transition-all duration-300 hover:shadow-lg`}
    >
      {popular && (
        <div className="absolute top-5 right-5 bg-primary/20 text-primary px-3 py-1 text-sm font-medium rounded-full">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-montserrat font-bold mb-4">{title}</h3>
        <div className="flex items-baseline mb-6">
          <span className={`text-4xl font-bold ${popular ? "blue-text" : ""}`}>{price}</span>
          <span className="text-muted-foreground ml-2">/ one-time</span>
        </div>
        <p className="text-muted-foreground mb-8">{description}</p>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-start ${!feature.included ? "opacity-50" : ""}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 mr-3 ${
                feature.included 
                  ? "bg-primary/20 text-primary" 
                  : "bg-muted/50 text-muted-foreground"
              }`}>
                {feature.included ? <FiCheck size={14} /> : <FiX size={14} />}
              </div>
              <span className="text-muted-foreground">{feature.text}</span>
            </li>
          ))}
        </ul>
        
        <Link href="/contact">
          <a className={`flex items-center justify-center gap-2 ${
            popular 
              ? "bg-primary hover:bg-primary/90 text-white shadow-lg" 
              : "bg-muted hover:bg-primary hover:text-white text-foreground border border-primary/20"
          } py-3 px-6 rounded-lg transition-all duration-300 font-medium`}>
            Get Started
            <FiArrowRight />
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default PricingCard;

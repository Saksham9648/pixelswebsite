import { motion } from "framer-motion";
import { PricingCardProps } from "@/lib/types";
import { Link } from "wouter";

const PricingCard = ({ title, price, description, features, popular = false }: PricingCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`pricing-card bg-card rounded-xl overflow-hidden ${
        popular 
          ? "border-2 border-primary relative z-10 scale-105" 
          : "border border-border"
      } transition-all duration-300 hover:shadow-lg`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium">
          Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-montserrat font-bold mb-4">{title}</h3>
        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-2">/ one-time</span>
        </div>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-start ${!feature.included ? "opacity-50" : ""}`}>
              <i className={`${feature.included ? "fas fa-check text-primary" : "fas fa-times"} mt-1 mr-2`}></i>
              <span className="text-muted-foreground">{feature.text}</span>
            </li>
          ))}
        </ul>
        
        <Link href="/contact">
          <a className={`block text-center ${
            popular 
              ? "bg-primary hover:bg-primary/90 text-white" 
              : "bg-muted hover:bg-primary hover:text-white text-foreground"
          } py-3 px-6 rounded-full transition-all duration-300 font-medium`}>
            Get Started
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default PricingCard;

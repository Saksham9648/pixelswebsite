import { motion } from "framer-motion";
import { PortfolioItemProps } from "@/lib/types";
import { FiExternalLink } from "react-icons/fi";

const PortfolioItem = ({ image, title, description, tags, link }: PortfolioItemProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg group border border-border h-full"
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.a 
            href={link} // Ensure link is used correctly
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <FiExternalLink />
            View Project
          </motion.a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-montserrat font-bold mb-3 blue-text">{title}</h3>
        <p className="text-muted-foreground mb-5 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


export default PortfolioItem;

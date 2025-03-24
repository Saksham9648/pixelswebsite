import { motion } from "framer-motion";
import { PortfolioItemProps } from "@/lib/types";

const PortfolioItem = ({ image, title, description, tags }: PortfolioItemProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="portfolio-item bg-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <a 
            href="#" 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full transition-all duration-300"
          >
            View Project
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-montserrat font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full"
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

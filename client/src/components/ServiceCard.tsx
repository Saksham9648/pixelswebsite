import { motion } from "framer-motion";
import { ServiceCardProps } from "@/lib/types";
import { Link } from "wouter";

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="service-card bg-card rounded-xl p-6 border border-border transition-all duration-300"
    >
      <div className="service-icon text-5xl text-muted-foreground mb-6 transition-all duration-300">
        <i className={icon}></i>
      </div>
      <h3 className="text-2xl font-montserrat font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <i className="fas fa-check text-primary mt-1 mr-2"></i>
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Link href="/contact">
        <a className="inline-block bg-muted hover:bg-primary text-foreground hover:text-white py-2 px-6 rounded-full transition-all duration-300">
          Learn More
        </a>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;

import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import ServiceCard from "@/components/ServiceCard";
import { ServiceCardProps } from "@/lib/types";

const services: ServiceCardProps[] = [
  {
    icon: "fas fa-laptop-code",
    title: "Web Development",
    description: "Custom-designed, responsive websites that drive engagement and conversions.",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "CMS Integration",
      "Performance Optimization",
      "Custom Web Applications",
      "Website Maintenance"
    ]
  },
  {
    icon: "fas fa-search",
    title: "SEO Services",
    description: "Data-driven strategies to improve your search rankings and organic traffic.",
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Link Building",
      "Performance Analytics",
      "Local SEO",
      "Content Strategy"
    ]
  },
  {
    icon: "fas fa-mobile-alt",
    title: "App Development",
    description: "Custom mobile applications that provide seamless user experiences.",
    features: [
      "iOS & Android Apps",
      "Cross-Platform Solutions",
      "UI/UX Design",
      "App Maintenance",
      "Progressive Web Apps",
      "App Store Optimization"
    ]
  },
  {
    icon: "fas fa-shopping-cart",
    title: "E-commerce Solutions",
    description: "Complete online shopping platforms with secure payment processing and inventory management.",
    features: [
      "Custom E-commerce Websites",
      "Payment Gateway Integration",
      "Product Management",
      "Order Tracking",
      "Customer Accounts",
      "Abandoned Cart Recovery"
    ]
  },
  {
    icon: "fas fa-bullhorn",
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies to increase your online visibility and drive conversions.",
    features: [
      "Social Media Marketing",
      "Email Campaigns",
      "Content Marketing",
      "PPC Advertising",
      "Analytics & Reporting",
      "Conversion Optimization"
    ]
  },
  {
    icon: "fas fa-paint-brush",
    title: "UI/UX Design",
    description: "User-centered design that focuses on creating intuitive and engaging experiences.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
      "Interaction Design",
      "Design Systems"
    ]
  }
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | PixelsBeing</title>
        <meta name="description" content="Explore our comprehensive web development, SEO, and app development services at PixelsBeing. Professional solutions for businesses in Lakhimpur, Gonda, Sitapur, and Lucknow." />
      </Helmet>

      <section className="py-32 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer comprehensive digital solutions tailored to meet your business needs and drive growth in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Need a custom solution for your specific requirements?
            </p>
            <Link href="/contact">
              <a className="animate-glow bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium">
                Contact Us
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;

import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import PortfolioItem from "@/components/PortfolioItem";
import { PortfolioItemProps } from "@/lib/types";

const portfolioItems: PortfolioItemProps[] = [
  {
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "LuxeCart E-commerce",
    description: "A premium online shopping experience with integrated payment solutions and inventory management.",
    tags: ["Web Development", "E-commerce", "UX Design"]
  },
  {
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "FitTrack Mobile App",
    description: "A health and fitness tracking application with personalized workout plans and progress analytics.",
    tags: ["App Development", "UI/UX Design", "iOS & Android"]
  },
  {
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "GreenEarth SEO Campaign",
    description: "A comprehensive SEO strategy that increased organic traffic by 287% for an eco-friendly products company.",
    tags: ["SEO", "Content Marketing", "Analytics"]
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "FinServe Banking Portal",
    description: "A secure online banking platform with advanced transaction features and account management.",
    tags: ["Web Development", "Security", "Fintech"]
  },
  {
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Wanderlust Travel App",
    description: "A travel companion app with itinerary planning, booking integration, and local recommendations.",
    tags: ["App Development", "Travel", "UI/UX Design"]
  },
  {
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "CoreHR Corporate Website",
    description: "A modern corporate website with integrated recruitment portal and client dashboard.",
    tags: ["Web Development", "Corporate", "HR Solutions"]
  }
];

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | PixelsBeing</title>
        <meta name="description" content="Explore our portfolio of web development, SEO, and app development projects. See how PixelsBeing has helped businesses in Lakhimpur, Gonda, Sitapur, and Lucknow achieve digital success." />
      </Helmet>

      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our recent projects that showcase our expertise and creativity. Each project represents our commitment to delivering exceptional digital solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <PortfolioItem {...item} />
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
              Ready to create your own success story with us?
            </p>
            <Link href="/contact">
              <a className="animate-glow bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium">
                Start Your Project
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

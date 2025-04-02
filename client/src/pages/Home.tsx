import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import { Link } from "wouter";
import ServiceCard from "@/components/ServiceCard";
import PortfolioItem from "@/components/PortfolioItem";
import { ServiceCardProps, PortfolioItemProps } from "@/lib/types";
import { FiCode, FiSearch, FiSmartphone } from "react-icons/fi";

const services: ServiceCardProps[] = [
  {
    icon: "FiCode",
    title: "Web Development",
    description: "Custom-designed, responsive websites that drive engagement and conversions.",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "CMS Integration",
      "Performance Optimization"
    ]
  },
  {
    icon: "FiSearch",
    title: "SEO Services",
    description: "Data-driven strategies to improve your search rankings and organic traffic.",
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Link Building",
      "Performance Analytics"
    ]
  },
  {
    icon: "FiSmartphone",
    title: "App Development",
    description: "Custom mobile applications that provide seamless user experiences.",
    features: [
      "iOS & Android Apps",
      "Cross-Platform Solutions",
      "UI/UX Design",
      "App Maintenance"
    ]
  }
];

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
  }
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PixelsBeing | Web Development, SEO, and App Development Services</title>
        <meta name="description" content="PixelsBeing - Professional web development, SEO, and app development services in Lakhimpur, Gonda, Sitapur, and Lucknow." />
        <meta name="keywords" content="web developer in Lakhimpur, web developer in Gonda, web developer in Sitapur, best web developer in Lucknow, web development, SEO, app development" />
      </Helmet>

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section id="services" className="relative py-24 bg-card">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Our <span className="blue-text">Premium Services</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer comprehensive digital solutions tailored to meet your business needs and goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <Link href="/portfolio">
              <a className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium shadow-md">
                View Our Work
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
  <div className="container mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
        Our <span className="blue-text">Portfolio</span>
      </h2>
      <p className="text-muted-foreground text-lg">
        Explore our recent projects that showcase our expertise and creativity.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <PortfolioItem
          image="https://i.postimg.cc/ZK86g0fc/Screenshot-2025-04-02-09-14-24-41-b5a5c5cb02ca09c784c5d88160e2ec24.jpg"
          title="BeingxBot"
          description="BeingxBot is a digital solutions platform powered by Pixels Being, offering innovative web development, SEO, and user-friendly digital experiences to enhance brand growth."
          tags={["Web Development", "E-commerce", "UX Design"]}
          link="https://beingxbot.tech"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <PortfolioItem
          image="https://i.postimg.cc/zXZn0Tkv/Screenshot-2025-04-02-09-14-51-18-b5a5c5cb02ca09c784c5d88160e2ec24.jpg"
          title="Bookify App"
          description="Bookify by Pixels Being is a smart booking app that simplifies appointment scheduling with an intuitive and seamless experience."
          tags={["App Development", "UI/UX Design", "iOS & Android"]}
          link="https://play.google.com/store/apps/details?id=com.bookify.app"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <PortfolioItem
          image="https://i.postimg.cc/8CbMQygy/Picsart-24-12-30-11-55-57-575.png"
          title="Home Tuition Wala SEO Campaign"
          description="A comprehensive SEO strategy that increased organic traffic by 287% for a home tuition providing company."
          tags={["SEO", "Content Marketing", "Analytics"]}
          link="https://67738ad0644e61c07776d298--superlative-sprinkles-f01280.netlify.app"
        />
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="mt-16 text-center"
    >
      <Link href="/contact">
        <a className="relative bg-muted hover:bg-muted/70 text-foreground px-8 py-3 rounded-lg transition-all duration-300 font-medium border border-primary/30">
          Start Your Project
        </a>
      </Link>
    </motion.div>
  </div>
</section>


    </>
  );
};

export default Home;

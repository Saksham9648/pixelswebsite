import { motion } from "framer-motion";
import { Link } from "wouter";
import AnimatedBackground from "./AnimatedBackground";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-20 z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp} className="order-2 lg:order-1">
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6"
            >
              Transforming Ideas into <span className="gradient-text">Digital Reality</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl"
            >
              PixelsBeing delivers cutting-edge web development, SEO, and app development services to elevate your brand in the digital landscape.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <Link href="/services">
                <a className="animate-glow bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium text-lg">
                  Explore Services
                </a>
              </Link>
              <Link href="/portfolio">
                <a className="relative bg-muted text-foreground px-8 py-3 rounded-full transition-all duration-300 font-medium text-lg hover:bg-muted/70 border border-primary/30">
                  View Portfolio
                </a>
              </Link>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-12 flex items-center space-x-6"
            >
              <div className="flex -space-x-2">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-background" />
                <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-background" />
                <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-background" />
              </div>
              <div>
                <p className="text-muted-foreground font-medium">Trusted by <span className="text-primary">500+</span> clients</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 animate-float card-3d">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Web Development" 
                className="rounded-xl shadow-2xl" 
              />
              
              <div className="absolute -bottom-5 -left-5 bg-card rounded-lg p-4 shadow-lg border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-white"></i>
                  </div>
                  <p className="text-sm font-medium">98% Client Satisfaction</p>
                </div>
              </div>
              
              <div className="absolute -top-5 -right-5 bg-card rounded-lg p-4 shadow-lg border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-rocket text-white"></i>
                  </div>
                  <p className="text-sm font-medium">300+ Projects Delivered</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/3 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/3 -left-12 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#services" 
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to services"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;

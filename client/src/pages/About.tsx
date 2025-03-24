import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { fadeIn, fadeInUp } from "@/lib/animations";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | PixelsBeing</title>
        <meta name="description" content="Learn about PixelsBeing - our story, mission and values. Professional web development, SEO, and app development services." />
      </Helmet>

      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn} initial="initial" animate="animate" className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden card-3d">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Our Team" 
                  className="w-full h-auto" 
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/3 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-1/3 -right-12 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
              
              {/* Stats Card */}
              <motion.div 
                variants={fadeInUp}
                className="absolute -bottom-8 -right-8 bg-card rounded-xl p-6 shadow-xl border border-border max-w-xs"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <h4 className="text-3xl font-bold gradient-text mb-2">5+</h4>
                    <p className="text-muted-foreground text-sm">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold gradient-text mb-2">300+</h4>
                    <p className="text-muted-foreground text-sm">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold gradient-text mb-2">98%</h4>
                    <p className="text-muted-foreground text-sm">Client Satisfaction</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold gradient-text mb-2">50+</h4>
                    <p className="text-muted-foreground text-sm">Team Members</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                About <span className="gradient-text">PixelsBeing</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Founded in 2018, PixelsBeing has grown from a small team of passionate developers to a full-service digital agency serving clients across India and beyond.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Our mission is to bridge the gap between technology and business success. We believe in creating digital experiences that not only look stunning but also drive tangible results for our clients.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-lightbulb text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-montserrat font-semibold mb-1">Innovative Solutions</h4>
                    <p className="text-muted-foreground">We constantly push the boundaries of what's possible in digital technology.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-users text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-montserrat font-semibold mb-1">Client-Focused Approach</h4>
                    <p className="text-muted-foreground">Your success is our top priority. We build long-term relationships based on trust.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-chart-line text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-montserrat font-semibold mb-1">Results-Driven Strategy</h4>
                    <p className="text-muted-foreground">We focus on delivering measurable results that impact your bottom line.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact">
                <a className="animate-glow bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium inline-block">
                  Get in Touch
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

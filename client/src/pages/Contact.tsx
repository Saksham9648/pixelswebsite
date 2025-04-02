import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ContactForm from "@/components/ContactForm";
import { FiInstagram, FiYoutube, FiLinkedin, FiGithub } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | PixelsBeing</title>
        <meta name="description" content="Get in touch with PixelsBeing for professional web development, SEO, and app development services in Lakhimpur, Gonda, Sitapur, and Lucknow. Request a free consultation today." />
      </Helmet>

      <section className="py-32 bg-card relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to start your project? Contact us today for a free consultation. We're excited to hear about your ideas and how we can help bring them to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <div className="bg-card rounded-xl p-8 border border-border h-full">
                <h3 className="text-2xl font-montserrat font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-montserrat font-semibold mb-1">Our Location</h4>
                      <p className="text-muted-foreground">Nirmal nager Seth Ghat Road,<br />Lakhimpur, Uttar Pradesh, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-phone-alt text-primary"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-montserrat font-semibold mb-1">Phone Numbers</h4>
                      <p className="text-muted-foreground mb-1">+91 8756309900</p>
                      <p className="text-muted-foreground">+91 8604474985</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-montserrat font-semibold mb-1">Email Address</h4>
                      <p className="text-muted-foreground">pixelsbeing@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-clock text-primary"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-montserrat font-semibold mb-1">Working Hours</h4>
                      <p className="text-muted-foreground">24 x 7</p>
                      {/* <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p> */}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-xl font-montserrat font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                href="https://www.instagram.com/pixelsbeing?igsh=NWw5b2ZiaDFhZm5m"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                aria-label="Instagram" target="_blank"
              >
                <FiInstagram />
              </a>
              <a
                href="https://youtube.com/@indo-cs?si=gb_tmTx4SOkjIvxK"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                aria-label="Youtube" target="_blank"
              >
                <FiYoutube />
              </a>
              <a
                href="https://www.linkedin.com/in/pixels-being-02911635a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                aria-label="Linkedin" target="_blank"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://github.com/pixelsbeing"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                aria-label="Github" target="_blank"
              >
                <FiGithub />
              </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

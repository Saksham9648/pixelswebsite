import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import FaqItem from "@/components/FaqItem";
import { FaqItemProps } from "@/lib/types";

const faqItems: FaqItemProps[] = [
  {
    question: "How long does it take to build a website?",
    answer: "The timeline for website development varies depending on the complexity of the project. A basic website typically takes 2-3 weeks, while more complex projects with custom functionality can take 6-8 weeks or more. During our initial consultation, we'll provide you with a specific timeline based on your requirements."
  },
  {
    question: "What information do you need to start a project?",
    answer: "To get started, we need to understand your business goals, target audience, design preferences, and functionality requirements. We'll also ask for any existing brand materials (logo, color scheme, etc.) and content for the website. Our detailed discovery questionnaire helps gather all the necessary information to kickstart your project."
  },
  {
    question: "Do you provide website maintenance services?",
    answer: "Yes, we offer comprehensive website maintenance packages that include regular updates, security patches, performance optimization, content updates, and technical support. Our maintenance plans ensure your website remains secure, up-to-date, and performing optimally. We recommend our maintenance services to keep your website running smoothly."
  },
  {
    question: "How long does it take to see results from SEO?",
    answer: "SEO is a long-term strategy that typically shows initial results within 3-6 months. However, significant improvements in rankings and traffic usually take 6-12 months, depending on your industry competition, website authority, and the quality of optimization. We provide monthly reports to track progress and make necessary adjustments to your SEO strategy."
  },
  {
    question: "What is your payment structure?",
    answer: "Our typical payment structure includes a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we may structure payments into multiple milestones. We accept payments via bank transfer, UPI, and major credit cards. All payment terms are clearly outlined in our project proposal and agreement."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices, including smartphones, tablets, and desktop computers. Responsive design is a standard feature in all our web development packages."
  },
  {
    question: "Can you help me with content creation?",
    answer: "Yes, we offer content creation services as part of our comprehensive web development packages. Our team of experienced copywriters can create engaging, SEO-optimized content for your website, including page copy, blog posts, and product descriptions. We can also help with image selection and basic photo editing."
  },
  {
    question: "Do you offer domain registration and hosting services?",
    answer: "Yes, we can assist with domain registration and provide reliable hosting solutions for your website. We work with trusted hosting providers to ensure your website has excellent uptime, fast loading speeds, and robust security features. We can also help transfer existing domains and websites if you're switching from another provider."
  }
];

const Faq = () => {
  return (
    <>
      <Helmet>
        <title>FAQ | PixelsBeing</title>
        <meta name="description" content="Find answers to frequently asked questions about our web development, SEO, and app development services. Learn more about how PixelsBeing can help your business." />
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
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to the most common questions about our services. If you don't see your question here, feel free to contact us directly.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <FaqItem question={item.question} answer={item.answer} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground mb-4">
                Don't see your question here? Reach out to us directly.
              </p>
              <Link href="/contact">
                <a className="relative bg-card hover:bg-card/70 text-foreground px-8 py-3 rounded-full transition-all duration-300 font-medium border border-primary/30">
                  Contact Us
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;

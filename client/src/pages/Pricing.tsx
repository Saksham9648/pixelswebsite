import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import PricingCard from "@/components/PricingCard";
import { PricingCardProps } from "@/lib/types";

const pricingPlans: PricingCardProps[] = [
  {
    title: "Basic",
    price: "₹6,999",
    description: "Perfect for small businesses just getting started with their online presence.",
    features: [
      { included: true, text: "5-Page Website" },
      { included: true, text: "Mobile Responsive" },
      { included: true, text: "Contact Form" },
      { included: true, text: "Social Media Integration" },
      { included: false, text: "E-commerce Functionality" },
      { included: false, text: "Advanced SEO" }
    ]
  },
  {
    title: "Standard",
    price: "₹19,999",
    description: "Ideal for growing businesses looking to expand their digital footprint.",
    features: [
      { included: true, text: "10-Page Website" },
      { included: true, text: "Mobile Responsive" },
      { included: true, text: "Advanced Contact Forms" },
      { included: true, text: "Social Media Integration" },
      { included: true, text: "Basic E-commerce (up to 50 products)" },
      { included: true, text: "Standard SEO Package" }
    ],
    popular: true
  },
  {
    title: "Premium",
    price: "₹29,999+",
    description: "Complete solution for established businesses seeking maximum online impact.",
    features: [
      { included: true, text: "Unlimited Pages" },
      { included: true, text: "Mobile Responsive" },
      { included: true, text: "Custom Forms & Integrations" },
      { included: true, text: "Advanced Social Media Integration" },
      { included: true, text: "Full E-commerce Functionality" },
      { included: true, text: "Comprehensive SEO Package" }
    ]
  }
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | PixelsBeing</title>
        <meta name="description" content="View our transparent pricing plans for web development, SEO, and app development services. Affordable solutions for businesses in Lakhimpur, Gonda, Sitapur, and Lucknow." />
      </Helmet>

      <section className="py-32 relative grid-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Our <span className="gradient-text">Pricing Plans</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose the perfect plan that suits your business needs and budget. All our plans include quality service and dedicated support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <PricingCard {...plan} />
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
              Need a custom solution? We can create a tailored package just for you.
            </p>
            <Link href="/contact">
              <a className="relative bg-card hover:bg-card/70 text-foreground px-8 py-3 rounded-full transition-all duration-300 font-medium border border-primary/30">
                Request Custom Quote
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing;

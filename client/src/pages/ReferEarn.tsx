import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ReferralForm from "@/components/ReferralForm";
import { ReferStepProps } from "@/lib/types";

const referSteps: ReferStepProps[] = [
  {
    number: 1,
    title: "Refer a Friend or Business",
    description: "Share your unique referral link with friends, family, or business contacts who could benefit from our services."
  },
  {
    number: 2,
    title: "They Become a Client",
    description: "When your referral signs up for any of our services and makes their first payment, you qualify for a reward."
  },
  {
    number: 3,
    title: "Receive Your Reward",
    description: "Earn up to ₹5,000 or 10% of the project value (whichever is higher) for each successful referral."
  }
];

const ReferEarn = () => {
  return (
    <>
      <Helmet>
        <title>Refer & Earn | PixelsBeing</title>
        <meta name="description" content="Join our referral program and earn rewards for every successful referral. Refer friends and businesses to PixelsBeing's web development, SEO, and app development services." />
      </Helmet>

      <section className="py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                Refer & <span className="gradient-text">Earn</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Join our referral program and earn rewards for every successful referral you make. It's easy to get started!
              </p>
              
              <div className="space-y-8 mb-8">
                {referSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-primary">{step.number}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-montserrat font-semibold mb-1">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-muted rounded-xl p-6 border border-border"
              >
                <h4 className="text-xl font-montserrat font-semibold mb-3">Referral Rewards:</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <i className="fas fa-gift text-primary mt-1 mr-2"></i>
                    <span className="text-muted-foreground">Basic Package Referral: ₹2,000 or 10%</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-gift text-primary mt-1 mr-2"></i>
                    <span className="text-muted-foreground">Standard Package Referral: ₹3,500 or 10%</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-gift text-primary mt-1 mr-2"></i>
                    <span className="text-muted-foreground">Premium Package Referral: ₹5,000 or 10%</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">*Terms and conditions apply. Rewards are processed after the referred client's first payment is completed.</p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <ReferralForm />
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/3 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-1/3 -left-12 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReferEarn;

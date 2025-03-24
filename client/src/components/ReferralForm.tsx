import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ReferralFormData } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

const referralFormSchema = z.object({
  name: z.string().min(2, "Your name is required"),
  email: z.string().email("Please enter a valid email address"),
  friendName: z.string().min(2, "Friend's name is required"),
  friendEmail: z.string().email("Please enter a valid email address for your friend"),
});

const ReferralForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReferralFormData>({
    resolver: zodResolver(referralFormSchema),
  });

  const onSubmit = async (data: ReferralFormData) => {
    setIsSubmitting(true);
    
    try {
      // In a real app, this would send data to a server
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("Referral form submitted:", data);
      reset();
      
      toast({
        title: "Referral submitted!",
        description: "Thank you for your referral! We will contact your friend soon.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your referral. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 bg-card rounded-xl border border-border card-3d"
    >
      <h3 className="text-2xl font-montserrat font-bold mb-6">Join Our Referral Program</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-muted-foreground mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={`w-full bg-muted border ${
              errors.name ? "border-destructive" : "border-border"
            } focus:border-primary rounded-lg px-4 py-3 text-foreground outline-none transition-colors duration-300`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-muted-foreground mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`w-full bg-muted border ${
              errors.email ? "border-destructive" : "border-border"
            } focus:border-primary rounded-lg px-4 py-3 text-foreground outline-none transition-colors duration-300`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="friendName" className="block text-muted-foreground mb-2">
            Friend's Name
          </label>
          <input
            type="text"
            id="friendName"
            {...register("friendName")}
            className={`w-full bg-muted border ${
              errors.friendName ? "border-destructive" : "border-border"
            } focus:border-primary rounded-lg px-4 py-3 text-foreground outline-none transition-colors duration-300`}
            placeholder="Enter your friend's name"
          />
          {errors.friendName && (
            <p className="mt-1 text-sm text-destructive">{errors.friendName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="friendEmail" className="block text-muted-foreground mb-2">
            Friend's Email
          </label>
          <input
            type="email"
            id="friendEmail"
            {...register("friendEmail")}
            className={`w-full bg-muted border ${
              errors.friendEmail ? "border-destructive" : "border-border"
            } focus:border-primary rounded-lg px-4 py-3 text-foreground outline-none transition-colors duration-300`}
            placeholder="Enter your friend's email"
          />
          {errors.friendEmail && (
            <p className="mt-1 text-sm text-destructive">{errors.friendEmail.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-full transition-all duration-300 font-medium"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            "Submit Referral"
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default ReferralForm;

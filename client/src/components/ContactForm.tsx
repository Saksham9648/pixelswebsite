import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ContactFormData } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message is too short").max(500, "Message is too long"),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // In a real app, this would send data to a server
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", data);
      setIsSuccess(true);
      reset();
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
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
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>

        <div>
          <label htmlFor="phone" className="block text-muted-foreground mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            className={`w-full bg-muted border ${
              errors.phone ? "border-destructive" : "border-border"
            } focus:border-primary rounded-lg px-4 py-3 text-foreground outline-none transition-colors duration-300`}
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="block text-muted-foreground mb-2">
            Service Interested In
          </label>
          <select
            id="service"
            {...register("service")}
            className={`w-full bg-muted border ${
              errors.service ? "border-destructive" : "border-border"
            } focus:border-primary rounded-lg px-4 py-3 text-foreground outline-none transition-colors duration-300`}
          >
            <option value="" disabled>Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="seo">SEO Services</option>
            <option value="app-development">App Development</option>
            <option value="other">Other</option>
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-destructive">{errors.service.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-muted-foreground mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={5}
            className={`w-full bg-muted border ${
              errors.message ? "border-destructive" : "border-border"
            } focus:border-primary rounded-lg px-4 py-3 text-foreground outline-none transition-colors duration-300`}
            placeholder="Tell us about your project..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-full transition-all duration-300 font-medium relative overflow-hidden"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {isSuccess && (
        <div className="mt-6 bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-lg">
          <p>Thank you for contacting us! We'll get back to you as soon as possible.</p>
        </div>
      )}
    </motion.div>
  );
};

export default ContactForm;

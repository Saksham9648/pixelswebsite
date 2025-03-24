import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiList, FiMessageSquare, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { ContactFormData } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

// Google Apps Script deployed URL - this would be replaced with your actual script URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec";

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
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      service: "",
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Prepare form data for submission
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      // For demo/development purposes without a real Google Script URL
      // Comment this section and uncomment the fetch below when you have a real script URL
      console.log("Form data ready for Google Sheets:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Uncomment the following code when you have a valid Google Script URL
      /* 
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors" // This is important for CORS issues with Google Apps Script
      });
      */
      
      setIsSuccess(true);
      reset();
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      // Reset success message after 8 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 8000);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("There was a problem sending your message. Please try again.");
      
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
      className="bg-card p-6 md:p-8 rounded-xl border border-border shadow-lg"
    >
      <h3 className="text-2xl font-montserrat font-bold mb-6 text-center">
        <span className="blue-text">Contact</span> Us
      </h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="flex items-center gap-2 text-foreground font-medium">
              <FiUser className="text-primary" />
              Your Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className={`w-full bg-muted border ${
                errors.name ? "border-destructive" : "border-border"
              } focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-foreground outline-none transition-all duration-300`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="flex items-center gap-2 text-foreground font-medium">
              <FiMail className="text-primary" />
              Your Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className={`w-full bg-muted border ${
                errors.email ? "border-destructive" : "border-border"
              } focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-foreground outline-none transition-all duration-300`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="flex items-center gap-2 text-foreground font-medium">
            <FiPhone className="text-primary" />
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            className={`w-full bg-muted border ${
              errors.phone ? "border-destructive" : "border-border"
            } focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-foreground outline-none transition-all duration-300`}
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="flex items-center gap-2 text-foreground font-medium">
            <FiList className="text-primary" />
            Service Interested In
          </label>
          <select
            id="service"
            {...register("service")}
            className={`w-full bg-muted border ${
              errors.service ? "border-destructive" : "border-border"
            } focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-foreground outline-none transition-all duration-300`}
          >
            <option value="" disabled>Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="seo">SEO Services</option>
            <option value="app-development">App Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="ui-ux-design">UI/UX Design</option>
            <option value="other">Other</option>
          </select>
          {errors.service && (
            <p className="text-sm text-destructive">{errors.service.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="flex items-center gap-2 text-foreground font-medium">
            <FiMessageSquare className="text-primary" />
            Your Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={5}
            className={`w-full bg-muted border ${
              errors.message ? "border-destructive" : "border-border"
            } focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-foreground outline-none transition-all duration-300`}
            placeholder="Tell us about your project..."
          />
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-lg transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-md"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Message...
            </>
          ) : (
            <>
              <FiSend />
              Send Message
            </>
          )}
        </button>
      </form>

      {isSuccess && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 bg-primary/10 border border-primary/30 text-foreground p-6 rounded-lg flex items-start gap-3"
        >
          <FiCheckCircle className="text-primary text-xl mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold mb-1">Message Sent Successfully!</h4>
            <p className="text-muted-foreground">Thank you for contacting us! We'll get back to you as soon as possible.</p>
          </div>
        </motion.div>
      )}
      
      {error && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 bg-destructive/10 border border-destructive/30 text-foreground p-6 rounded-lg flex items-start gap-3"
        >
          <FiAlertCircle className="text-destructive text-xl mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold mb-1">Error Sending Message</h4>
            <p className="text-muted-foreground">{error}</p>
          </div>
        </motion.div>
      )}
      
      {/* Instructions for Google Apps Script Integration */}
      <div className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
        <p className="mb-2"><strong>Note for deployment:</strong> To integrate with Google Sheets:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Create a Google Sheet with columns for: name, email, phone, service, message, timestamp</li>
          <li>Create a Google Apps Script with the following code:</li>
        </ol>
        <div className="bg-muted p-4 rounded-md mt-2 text-xs overflow-x-auto">
          <pre>{`
// Google Apps Script Code
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = e.parameter;
  
  // Add a new row with form data
  sheet.appendRow([
    data.name,
    data.email,
    data.phone,
    data.service,
    data.message,
    new Date() // timestamp
  ]);
  
  // Return success response
  return ContentService
    .createTextOutput(JSON.stringify({ 'result': 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
          `}</pre>
        </div>
        <p className="mt-2">3. Deploy the script as a web app (accessible to anyone) and replace the GOOGLE_SCRIPT_URL in the code with your deployed script URL.</p>
      </div>
    </motion.div>
  );
};

export default ContactForm;

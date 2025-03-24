export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface PortfolioItemProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

export interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: Array<{ included: boolean; text: string }>;
  popular?: boolean;
}

export interface FaqItemProps {
  question: string;
  answer: string;
}

export interface ReferStepProps {
  number: number;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ReferralFormData {
  name: string;
  email: string;
  friendName: string;
  friendEmail: string;
}

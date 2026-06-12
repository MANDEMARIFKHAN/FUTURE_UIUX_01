export interface LinkItem {
  name: string;
  href: string;
}

export interface Program {
  title: string;
  description: string;
  duration: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  frequency: string;
  features: string[];
  recommended?: boolean;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
  experience: string;
  expertise: string[];
  socials: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface BookingSlot {
  id: string;
  date: string;
  time: string;
  isAvailable: boolean;
  isBooked: boolean;
}

export interface BookingDetails {
  name: string;
  email: string;
  phone: string;
  topic1: string;
  topic2: string;
  selectedSlot: BookingSlot | null;
  selectedPlan: PricingPlan | null;
}

export interface PricingPlan {
  id: string;
  name: string;
  duration: number; // in minutes
  originalPrice: number;
  currentPrice: number;
  discount?: number;
  isPopular?: boolean;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
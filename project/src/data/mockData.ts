import { PricingPlan, Testimonial, FAQ, BookingSlot } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'intro',
    name: 'Intro Session',
    duration: 15,
    originalPrice: 4000,
    currentPrice: 200,
    discount: 95,
    isPopular: true,
    features: [
      'One-on-one guidance',
      'Exam strategy discussion',
      'Career roadmap basics',
      'Q&A session'
    ]
  },
  {
    id: 'regular',
    name: 'Regular Session',
    duration: 15,
    originalPrice: 1000,
    currentPrice: 1000,
    features: [
      'Detailed exam preparation',
      'University application guidance',
      'Resume/Profile review',
      'Mock interview prep',
      'Resource recommendations'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Session',
    duration: 15,
    originalPrice: 2500,
    currentPrice: 2500,
    features: [
      'Comprehensive career planning',
      'Personal statement review',
      'Industry insights sharing',
      'Networking strategy',
      'Follow-up support (1 week)',
      'Priority scheduling'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Arjun Sharma',
    role: 'Software Engineer',
    company: 'Samsung R&D',
    content: 'The guidance I received was invaluable for my JEE preparation. The personalized approach and insider tips from someone who actually cleared these exams made all the difference.',
    rating: 5
  },
  {
    id: '2',
    name: 'Priya Patel',
    role: 'Graduate Student',
    company: 'NUS Singapore',
    content: 'Helped me navigate the complex university application process. Got admission to my dream university with scholarship. Highly recommend!',
    rating: 5
  },
  {
    id: '3',
    name: 'Rahul Kumar',
    role: 'Hardware Engineer',
    company: 'Qualcomm',
    content: 'The career guidance and interview preparation was spot-on. Landed my dream job at Qualcomm thanks to the structured approach and mentorship.',
    rating: 5
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What exams do you provide guidance for?',
    answer: 'I provide guidance for JEE Main & Advanced, BITSAT, GRE, and other competitive exams. Having cleared these exams myself with top ranks, I can share proven strategies and insider tips.'
  },
  {
    id: '2',
    question: 'Do you guarantee results?',
    answer: 'While I cannot guarantee specific results, I provide proven strategies and personalized guidance based on my own success and experience mentoring 100+ students. Your dedication and effort are key factors in achieving success.'
  },
  {
    id: '3',
    question: 'What is your refund policy?',
    answer: 'Full refund is available if you cancel 24 hours before the scheduled session. For cancellations within 24 hours, we offer a one-time reschedule. No refunds after the session has started.'
  },
  {
    id: '4',
    question: 'Is my information kept confidential?',
    answer: 'Absolutely. All discussions, documents shared, and personal information are kept strictly confidential. I maintain the highest standards of privacy and discretion in all mentorship sessions.'
  },
  {
    id: '5',
    question: 'Can I record the sessions?',
    answer: 'Recording sessions is strictly prohibited to maintain confidentiality and privacy of all participants. However, I provide detailed notes and action items after each session.'
  }
];

export const generateTimeSlots = (): BookingSlot[] => {
  const slots: BookingSlot[] = [];
  const dates = [];
  
  // Generate next 14 days
  for (let i = 1; i <= 14; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }

  const timeSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  dates.forEach((date, dateIndex) => {
    timeSlots.forEach((time, timeIndex) => {
      // Randomly mark some slots as booked for social proof
      const isBooked = Math.random() < 0.3;
      slots.push({
        id: `${date}-${time}`,
        date,
        time,
        isAvailable: !isBooked,
        isBooked
      });
    });
  });

  return slots;
};
import { PricingPlan, Program, Testimonial, Trainer } from './types';

export const programsInfo: Program[] = [
  {
    title: 'Strength Training',
    description: 'Build muscle mass, improve bone density, and increase overall power.',
    duration: '45-60 Min',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Weight Loss',
    description: 'High-energy routines designed to burn maximum calories and shed fat.',
    duration: '45-60 Min',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Functional Training',
    description: 'Enhance your daily movement patterns with full-body exercises.',
    duration: '50 Min',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'CrossFit',
    description: 'Intense varied functional movements performed at high intensity.',
    duration: '60 Min',
    image: 'https://images.unsplash.com/photo-1517963628607-235ccdd5476c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Yoga & Flexibility',
    description: 'Improve mobility, balance, and core strength through flowing movements.',
    duration: '60 Min',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'HIIT',
    description: 'Short bursts of intense exercise followed by brief recovery periods.',
    duration: '30-45 Min',
    image: 'https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&q=80&w=1000'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '499',
    frequency: '/month',
    features: [
      'Access to Gym Equipment',
      'Locker Room Access',
      'Free WiFi',
      '1 Guest Pass / Month'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '999',
    frequency: '/month',
    recommended: true,
    features: [
      'Everything in Basic',
      'Unlimited Group Classes',
      'Sauna & Spa Access',
      'Fitness Assessment',
      '4 Guest Passes / Month'
    ]
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '1499',
    frequency: '/month',
    features: [
      'Everything in Premium',
      '2 Personal Training Sessions',
      'Nutrition Plan',
      'Priority Class Booking',
      'Unlimited Guest Passes'
    ]
  }
];

export const trainers: Trainer[] = [
  {
    id: 't1',
    name: 'Marcus Vance',
    role: 'Head Strength Coach',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=800',
    experience: '10+ Years',
    expertise: ['Powerlifting', 'Bodybuilding', 'Nutrition'],
    socials: { instagram: '#', twitter: '#' }
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    role: 'CrossFit Expert',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800',
    experience: '8 Years',
    expertise: ['CrossFit', 'HIIT', 'Mobility'],
    socials: { instagram: '#', facebook: '#' }
  },
  {
    id: 't3',
    name: 'David Chen',
    role: 'Functional Training',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800',
    experience: '6 Years',
    expertise: ['Calisthenics', 'Core', 'Endurance'],
    socials: { instagram: '#' }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test1',
    name: 'Sarah Jenkins',
    role: 'Member since 2023',
    content: 'Elite Fit Gym transformed my approach to fitness. The trainers are incredibly knowledgeable and the atmosphere is always motivating.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'test2',
    name: 'Michael Torres',
    role: 'Elite Member',
    content: 'Best facility I\'ve ever trained at. The equipment is top-notch and the community here pushes you to be your absolute best.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'test3',
    name: 'Jessica Lee',
    role: 'Member since 2024',
    content: 'I joined for the group classes and stayed for the results. The instructors bring so much energy to every single session.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
  }
];

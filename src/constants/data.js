import {
  FaDumbbell,
  FaRunning,
  FaHeartbeat,
  FaUsers,
  FaAppleAlt,
  FaSpa,
} from 'react-icons/fa'

export const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Pricing', to: 'pricing' },
  { name: 'Gallery', to: 'gallery' },
  { name: 'Contact', to: 'contact' },
]

export const services = [
  {
    icon: FaDumbbell,
    title: 'Strength Training',
    description:
      'Unlock your true strength with Olympic-grade equipment, structured progression plans, and expert guidance tailored to beginners and advanced lifters alike.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
  },
  {
    icon: FaRunning,
    title: 'Cardio Performance Zone',
    description:
      'Enhance stamina and burn fat efficiently with cutting-edge cardio machines and science-backed HIIT training protocols.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80',
  },
  {
    icon: FaHeartbeat,
    title: 'Functional Fitness',
    description:
      'Train for real-world performance using kettlebells, battle ropes, TRX systems, and mobility-focused movement drills.',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80',
  },
  {
    icon: FaUsers,
    title: 'Group Fitness Classes',
    description:
      'Experience high-energy sessions including Zumba, CrossFit, Yoga, HIIT, and Spinning — all led by certified professional trainers.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
  },
  {
    icon: FaAppleAlt,
    title: 'Nutrition & Diet Planning',
    description:
      'Receive customized meal plans and one-on-one nutrition coaching designed to accelerate fat loss, muscle gain, and overall wellness.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
  },
  {
    icon: FaSpa,
    title: 'Recovery & Wellness',
    description:
      'Optimize recovery with steam therapy, guided stretching, foam rolling zones, and advanced post-workout recovery support.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  },
]

export const pricingPlans = [
  {
    name: 'Starter',
    price: '1,499',
    period: '/month',
    description: 'Ideal for beginners taking their first step toward fitness.',
    features: [
      'Access to gym floor',
      'Standard equipment usage',
      'Locker room access',
      'Free WiFi',
      '1 complimentary fitness assessment',
      'Morning batch access',
    ],
    highlighted: false,
    buttonText: 'Start Your Journey',
  },
  {
    name: 'IMPACT Pro',
    price: '2,999',
    period: '/month',
    description: 'Our most popular plan for committed fitness enthusiasts.',
    features: [
      'Unlimited full-day gym access',
      'All group classes included',
      'Personal trainer (2 sessions/week)',
      'Nutrition consultation',
      'Steam room & sauna access',
      'Progress tracking support',
      '1 guest pass/month',
      'Priority equipment access',
    ],
    highlighted: true,
    buttonText: 'Upgrade to Pro',
  },
  {
    name: 'Elite',
    price: '4,999',
    period: '/month',
    description: 'Premium experience designed for elite athletes and serious achievers.',
    features: [
      'Everything in IMPACT Pro',
      'Daily personal training',
      'Customized meal plans',
      'Sports massage (2 sessions/month)',
      'Advanced body composition analysis',
      'VIP locker with premium amenities',
      'Unlimited guest passes',
    ],
    highlighted: false,
    buttonText: 'Go Elite',
  },
]

export const contactInfo = {
  gymName: "Ram's Fitness Club IMPACT",
  address:
    '111/14, Mangalam, Sector 11 Rd, Kumbha Marg, Pratap Nagar, Jaipur, Rajasthan 302033',
  phone: '+91 97722 78888',
  email: 'info@ramsfitnessimpact.com',
  hours: [
    { day: 'Monday - Saturday', time: '5:00 AM – 10:00 PM' },
    { day: 'Sunday', time: '7:00 AM – 12:00 PM' }, // assuming noon
  ],
}

export const footerLinks = {
  quickLinks: [
    { name: 'Home', to: 'home' },
    { name: 'About Us', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Pricing', to: 'pricing' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Contact', to: 'contact' },
  ],
  services: [
    'Strength Training',
    'Cardio Performance Zone',
    'Group Fitness Classes',
    'Personal Training',
    'Nutrition & Diet Planning',
    'Recovery & Wellness',
  ],
  socialLinks: [
    { name: 'Instagram', url: 'https://instagram.com/' },
    { name: 'Facebook', url: 'https://facebook.com/' },
    { name: 'YouTube', url: 'https://youtube.com/' },
    { name: 'Twitter', url: 'https://twitter.com/' },
  ],
}

export const stats = [
  { number: '8000+', label: 'Active Members' },
  { number: '60+', label: 'Certified Trainers' },
  { number: '150+', label: 'Premium Equipment Units' },
  { number: '12+', label: 'Years of Excellence' },
]
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
      'Build raw power with our state-of-the-art free weights, machines, and progressive overload programs designed for all fitness levels.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
  },
  {
    icon: FaRunning,
    title: 'Cardio Zone',
    description:
      'Boost your endurance and torch calories with premium treadmills, ellipticals, rowing machines, and high-intensity interval circuits.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80',
  },
  {
    icon: FaHeartbeat,
    title: 'Functional Fitness',
    description:
      'Train your body for real-life movements with kettlebells, battle ropes, TRX suspension, and dynamic mobility workouts.',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80',
  },
  {
    icon: FaUsers,
    title: 'Group Classes',
    description:
      'Join the energy of group sessions including Zumba, CrossFit, Yoga, HIIT, and spinning classes led by certified instructors.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
  },
  {
    icon: FaAppleAlt,
    title: 'Nutrition Planning',
    description:
      'Get personalized meal plans and nutrition coaching from certified dietitians to fuel your transformation journey.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
  },
  {
    icon: FaSpa,
    title: 'Recovery & Wellness',
    description:
      'Recover faster with our steam room, foam rolling area, stretching zones, and post-workout recovery protocols.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  },
]

export const pricingPlans = [
  {
    name: 'Starter',
    price: '1,499',
    period: '/month',
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      'Access to gym floor',
      'Basic equipment usage',
      'Locker room access',
      'Free WiFi',
      '1 fitness assessment',
      'Morning batch only',
    ],
    highlighted: false,
    buttonText: 'Get Started',
  },
  {
    name: 'IMPACT Pro',
    price: '2,999',
    period: '/month',
    description: 'Most popular plan for serious fitness enthusiasts',
    features: [
      'Full gym access all day',
      'All group classes included',
      'Personal trainer (2x/week)',
      'Nutrition consultation',
      'Steam room & sauna',
      'Progress tracking app',
      'Guest pass (1/month)',
      'Priority equipment access',
    ],
    highlighted: true,
    buttonText: 'Go IMPACT Pro',
  },
  {
    name: 'Elite',
    price: '4,999',
    period: '/month',
    description: 'Ultimate package for elite athletes and pros',
    features: [
      'Everything in IMPACT Pro',
      'Daily personal training',
      'Custom meal plans',
      'Sports massage (2x/month)',
      'Body composition analysis',
      'VIP locker with amenities',
      'Unlimited guest passes',
    ],
    highlighted: false,
    buttonText: 'Go Elite',
  },
]

export const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    alt: 'Modern gym floor with equipment',
    span: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    alt: 'Weight training area',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    alt: 'Yoga and flexibility zone',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
    alt: 'Dumbbells rack',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80',
    alt: 'Group fitness class',
    span: 'col-span-1 md:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80',
    alt: 'Boxing and combat training',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80',
    alt: 'Treadmill cardio zone',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    alt: 'Stretching and recovery',
    span: '',
  },
]

export const contactInfo = {
  gymName: "Ram's Fitness Club IMPACT",
  address:
    '111/14, Mangalam, Sector 11 Rd, Kumbha Marg, Pratap Nagar, Jaipur, Rajasthan 302033',
  phone: '097722 78888',
  email: 'info@ramsfitnessimpact.com',
  hours: [
    { day: 'Monday', time: '5:00 AM – 10:00 PM' },
    { day: 'Tuesday', time: '5:00 AM – 10:00 PM' },
    { day: 'Wednesday', time: '5:00 AM – 10:00 PM' },
    { day: 'Thursday', time: '5:00 AM – 10:00 PM' },
    { day: 'Friday', time: '5:00 AM – 10:00 PM' },
    { day: 'Saturday', time: '5:00 AM – 10:00 PM' },
    { day: 'Sunday', time: '7:00 AM – 12:00 AM' },
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
    'Cardio Zone',
    'Group Classes',
    'Personal Training',
    'Nutrition Planning',
    'Recovery & Wellness',
  ],
  socialLinks: [
    { name: 'Instagram', url: '#' },
    { name: 'Facebook', url: '#' },
    { name: 'YouTube', url: '#' },
    { name: 'Twitter', url: '#' },
  ],
}

export const stats = [
  { number: '8000+', label: 'Active Members' },
  { number: '60+', label: 'Expert Trainers' },
  { number: '150+', label: 'Equipment' },
  { number: '12+', label: 'Years Experience' },
]
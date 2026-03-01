import React from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaTrophy, FaShieldAlt, FaClock } from 'react-icons/fa'

const features = [
  {
    icon: FaTrophy,
    title: 'Award-Winning Facility',
    desc: "Recognized as one of Jaipur's top fitness clubs with cutting-edge infrastructure and premium services.",
  },
  {
    icon: FaShieldAlt,
    title: 'Safe & Hygienic',
    desc: 'Hospital-grade sanitization with 24/7 air purification and regularly cleaned equipment for your safety.',
  },
  {
    icon: FaClock,
    title: 'Extended Hours',
    desc: 'Open from 5 AM to 10 PM on weekdays and 7 AM to midnight on Sundays — train on your schedule.',
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 md:py-40 bg-impact-darker overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-impact-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-impact-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-5">
              {/* Column 1 */}
              <div className="space-y-5">
                <div className="overflow-hidden rounded-2xl aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80"
                    alt="Gym equipment at Ram's Fitness Club"
                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80"
                    alt="Personal training session"
                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              {/* Column 2 - offset */}
              <div className="space-y-5 mt-12">
                <div className="overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80"
                    alt="Intense workout session"
                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=600&q=80"
                    alt="Fitness community"
                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-8 right-2 md:right-8 bg-gradient-to-br from-impact-blue to-impact-cyan p-7 rounded-2xl shadow-2xl shadow-impact-blue/25 z-20"
            >
              <div className="text-5xl font-black text-white leading-none">12+</div>
              <div className="text-sm text-white/80 font-medium mt-2 leading-snug">
                Years of
                <br />
                Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-10"
          >
            {/* Title Block */}
            <div className="space-y-6">
              <span className="text-impact-blue-light font-semibold text-sm uppercase tracking-[0.25em] block">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Where{' '}
                <span className="bg-gradient-to-r from-impact-blue to-impact-cyan bg-clip-text text-transparent">
                  Discipline
                </span>{' '}
                Meets Results
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-impact-blue to-impact-cyan rounded-full" />
            </div>

            {/* Description */}
            <div className="space-y-5">
              <p className="text-lg text-gray-400 leading-relaxed">
                Ram&apos;s Fitness Club IMPACT is more than just a gym — it&apos;s a
                transformation hub. Located in the heart of Pratap Nagar, Jaipur,
                we&apos;ve built one of the city&apos;s most premium training facilities
                equipped with world-class equipment and led by certified fitness
                professionals.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Whether you&apos;re a beginner taking your first step or a seasoned
                athlete pushing boundaries, our supportive community and
                state-of-the-art facility are designed to help you make a lasting
                IMPACT on your fitness journey.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-7">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-impact-blue/10 border border-impact-blue/20 rounded-xl flex items-center justify-center group-hover:bg-impact-blue/20 transition-colors duration-300">
                    <feature.icon className="text-impact-blue text-xl" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-lg font-semibold">{feature.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                'Expert Trainers',
                'Modern Equipment',
                'Clean Environment',
                'AC Facility',
                'Parking Available',
                'Diet Consultation',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="text-impact-blue text-sm flex-shrink-0" />
                  <span className="text-sm text-gray-400">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
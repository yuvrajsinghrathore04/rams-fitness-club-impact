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
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-impact-darker overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-impact-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-impact-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          
          {/* ================= LEFT SIDE IMAGES ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              
              {/* Column 1 */}
              <div className="space-y-4 sm:space-y-5">
                <div className="overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80"
                    alt="Gym equipment"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80"
                    alt="Personal training"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4 sm:space-y-5 mt-8 sm:mt-12">
                <div className="overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80"
                    alt="Workout session"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=600&q=80"
                    alt="Fitness community"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Floating Experience Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="
                absolute 
                -bottom-6 sm:-bottom-8 
                right-4 sm:right-10 
                bg-gradient-to-br from-impact-blue to-impact-cyan 
                px-6 py-5 sm:p-7 
                rounded-xl sm:rounded-2xl 
                shadow-xl sm:shadow-2xl 
                z-20
              "
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-none">
                12+
              </div>
              <div className="text-xs sm:text-sm text-white/80 font-medium mt-1 sm:mt-2 leading-snug">
                Years of <br /> Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 sm:space-y-10 order-1 lg:order-2"
          >
            {/* Title */}
            <div className="space-y-5">
              <span className="text-impact-blue-light font-semibold text-xs sm:text-sm uppercase tracking-widest block">
                About Us
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Where{' '}
                <span className="bg-gradient-to-r from-impact-blue to-impact-cyan bg-clip-text text-transparent">
                  Discipline
                </span>{' '}
                Meets Results
              </h2>

              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-impact-blue to-impact-cyan rounded-full" />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                Ram&apos;s Fitness Club IMPACT is more than just a gym — it&apos;s a
                transformation hub located in the heart of Pratap Nagar, Jaipur.
                Our premium facility features world-class equipment and certified
                trainers committed to excellence.
              </p>

              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Whether you&apos;re just starting or pushing your limits, our
                supportive environment helps you create lasting results and make a
                real IMPACT on your fitness journey.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6 sm:space-y-7">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15 }}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-impact-blue/10 border border-impact-blue/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <feature.icon className="text-impact-blue text-lg sm:text-xl" />
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-1">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Expert Trainers',
                'Modern Equipment',
                'Clean Environment',
                'AC Facility',
                'Parking Available',
                'Diet Consultation',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-impact-blue text-sm flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-400">
                    {item}
                  </span>
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
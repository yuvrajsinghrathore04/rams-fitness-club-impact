import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { services } from '../constants/data'

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative bg-impact-card border border-impact-border rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-impact-blue/40 flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-impact-card via-impact-card/30 to-transparent" />

        {/* Icon Badge */}
        <div className="absolute top-4 left-4 w-12 h-12 sm:w-14 sm:h-14 bg-impact-blue/90 rounded-xl flex items-center justify-center shadow-md shadow-impact-blue/20">
          <service.icon className="text-white text-xl sm:text-2xl" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-impact-blue transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6 flex-1">
          {service.description}
        </p>

        <div className="flex items-center gap-2 text-impact-blue font-semibold text-sm cursor-pointer group/link">
          <span className="transition-all duration-300 group-hover/link:mr-2">
            Learn More
          </span>
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-1.5" />
        </div>
      </div>

      {/* Subtle Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-impact-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  )
}

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-20 md:py-32 bg-impact-dark overflow-hidden"
    >
      {/* Background Glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-impact-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        <SectionHeading
          subtitle="Our Services"
          title="Everything You Need to Succeed"
          description="From strength training to recovery, we provide a complete range of fitness services designed to transform your body and elevate your performance."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-14">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
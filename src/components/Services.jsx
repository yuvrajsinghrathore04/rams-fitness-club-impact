import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { services } from '../constants/data'

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: 'easeOut' }}
      className="group relative bg-impact-card border border-impact-border rounded-2xl overflow-hidden hover:border-impact-blue/30 transition-all duration-500 flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-impact-card via-impact-card/20 to-transparent" />
        <div className="absolute top-5 left-5 w-14 h-14 bg-impact-blue/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg shadow-impact-blue/20">
          <service.icon className="text-white text-2xl" />
        </div>
      </div>

      {/* Content */}
      <div className="p-8 md:p-10 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-4 group-hover:text-impact-blue transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-base leading-relaxed text-gray-400 mb-8 flex-1">
          {service.description}
        </p>
        <div className="flex items-center gap-3 text-impact-blue font-semibold text-sm cursor-pointer group/link pt-2">
          <span className="group-hover/link:mr-2 transition-all duration-300">
            Learn More
          </span>
          <FaArrowRight className="text-xs group-hover/link:translate-x-2 transition-transform duration-300" />
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-impact-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  )
}

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-28 md:py-40 bg-impact-dark overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-impact-blue/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <SectionHeading
          subtitle="Our Services"
          title="Everything You Need to Succeed"
          description="From strength training to recovery, we offer a comprehensive suite of fitness services designed to transform your body and elevate your performance."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
import React from 'react'
import { motion } from 'framer-motion'

const SectionHeading = ({ subtitle, title, description, align = 'center' }) => {
  const alignmentClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`flex flex-col ${alignmentClasses[align]} mb-20 md:mb-28`}
    >
      {subtitle && (
        <span className="text-impact-blue-light font-semibold text-sm uppercase tracking-[0.25em] mb-5">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed mt-2">
          {description}
        </p>
      )}
      <div className="w-24 h-1.5 bg-gradient-to-r from-impact-blue to-impact-cyan rounded-full mt-8" />
    </motion.div>
  )
}

export default SectionHeading
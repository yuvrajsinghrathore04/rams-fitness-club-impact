import React from 'react'
import { motion } from 'framer-motion'

const SectionHeading = ({
  subtitle,
  title,
  description,
  align = 'center',
}) => {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${
        isCenter ? 'items-center text-center' : 'items-start text-left'
      } mb-16 md:mb-24 px-4 sm:px-0`}
    >
      {/* Subtitle */}
      {subtitle && (
        <span className="text-impact-blue-light font-semibold text-xs sm:text-sm uppercase tracking-[0.3em] mb-4">
          {subtitle}
        </span>
      )}

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mt-6 max-w-2xl ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}

      {/* Divider */}
      <div
        className={`h-1 w-20 sm:w-24 rounded-full mt-8 bg-gradient-to-r from-impact-blue to-impact-cyan ${
          isCenter ? '' : ''
        }`}
      />
    </motion.div>
  )
}

export default SectionHeading
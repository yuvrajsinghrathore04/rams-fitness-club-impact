import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaPlay, FaArrowDown } from 'react-icons/fa'
import { stats } from '../constants/data'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="Ram's Fitness Club IMPACT Interior"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-impact-darker/90 via-impact-darker/75 to-impact-darker" />
        <div className="absolute inset-0 bg-gradient-to-r from-impact-darker/90 via-transparent to-impact-darker/70" />
      </div>

      {/* Animated Background Blobs (Hidden on Mobile) */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-impact-blue/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-impact-cyan/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 text-center py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-impact-blue/10 border border-impact-blue/30 rounded-full px-5 py-2 mb-8 md:mb-10">
            <span className="w-2 h-2 bg-impact-blue rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-impact-blue-light tracking-wider">
              Jaipur's Premium Fitness Destination
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.15] mb-6 md:mb-8">
            Make Your{' '}
            <span className="bg-gradient-to-r from-impact-blue via-impact-blue-light to-impact-cyan bg-clip-text text-transparent">
              IMPACT
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed px-2">
            Transform your body and mind at Ram's Fitness Club IMPACT.
            World-class equipment, expert trainers, and a powerful community —
            right here in Pratap Nagar, Jaipur.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 md:mb-20">
            <Link to="pricing" smooth duration={800} offset={-100}>
              <button className="w-full sm:w-auto bg-gradient-to-r from-impact-blue to-impact-cyan text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full text-base md:text-lg font-semibold hover:scale-105 transition-all duration-300">
                Start Your Journey
              </button>
            </Link>

            <Link to="about" smooth duration={800} offset={-100}>
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <FaPlay className="text-impact-blue text-sm" />
                Explore More
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-impact-blue to-impact-cyan bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-500 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Link to="about" smooth duration={800} offset={-100}>
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <span className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase">
              Scroll
            </span>
            <FaArrowDown className="text-impact-blue group-hover:text-impact-cyan transition-colors duration-300 text-sm" />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Hero
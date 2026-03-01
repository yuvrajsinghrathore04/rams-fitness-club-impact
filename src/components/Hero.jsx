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
        />
        <div className="absolute inset-0 bg-gradient-to-b from-impact-darker/85 via-impact-darker/70 to-impact-darker" />
        <div className="absolute inset-0 bg-gradient-to-r from-impact-darker/90 via-transparent to-impact-darker/60" />
      </div>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-impact-blue/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-impact-cyan/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-impact-blue/10 border border-impact-blue/30 rounded-full px-7 py-2.5 mb-12"
          >
            <span className="w-2.5 h-2.5 bg-impact-blue rounded-full animate-pulse" />
            <span className="text-sm font-medium text-impact-blue-light tracking-wider">
              Jaipur&apos;s Premium Fitness Destination
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-10"
          >
            Make Your{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-impact-blue via-impact-blue-light to-impact-cyan bg-clip-text text-transparent">
                IMPACT
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -bottom-3 left-0 h-1.5 bg-gradient-to-r from-impact-blue to-impact-cyan rounded-full"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed"
          >
            Transform your body and mind at Ram&apos;s Fitness Club IMPACT.
            World-class equipment, expert trainers, and a community that
            pushes you beyond limits — all in the heart of Pratap Nagar, Jaipur.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 mb-24"
          >
            <Link to="pricing" smooth={true} duration={800} offset={-100}>
              <button className="w-full sm:w-auto bg-gradient-to-r from-impact-blue to-impact-cyan text-white px-12 py-5 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-impact-blue/30 transition-all duration-300 cursor-pointer">
                Start Your Journey
              </button>
            </Link>
            <Link to="about" smooth={true} duration={800} offset={-100}>
              <button className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white/5 border border-white/10 text-white px-12 py-5 rounded-full text-lg font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                <FaPlay className="text-impact-blue text-sm" />
                Explore More
              </button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.12, duration: 0.5 }}
                className="text-center space-y-2"
              >
                <div className="text-3xl md:text-5xl font-black bg-gradient-to-r from-impact-blue to-impact-cyan bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-500 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <Link to="about" smooth={true} duration={800} offset={-100}>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <span className="text-xs text-gray-500 tracking-[0.2em] uppercase font-medium">
              Scroll Down
            </span>
            <FaArrowDown className="text-impact-blue group-hover:text-impact-cyan transition-colors duration-300" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero
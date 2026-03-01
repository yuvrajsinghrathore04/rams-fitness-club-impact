import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40
                     w-12 h-12 sm:w-14 sm:h-14
                     bg-gradient-to-r from-impact-blue to-impact-cyan
                     rounded-full flex items-center justify-center
                     shadow-xl shadow-impact-blue/30
                     hover:scale-110 active:scale-95
                     transition-transform duration-300
                     cursor-pointer group"
        >
          <FaArrowUp className="text-white text-sm sm:text-base group-hover:-translate-y-1 transition-transform duration-300" />

          {/* Subtle Glow Ring */}
          <span className="absolute inset-0 rounded-full border border-white/10" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
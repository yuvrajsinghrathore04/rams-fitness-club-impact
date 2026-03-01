import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
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
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-40 w-16 h-16 bg-gradient-to-r from-impact-blue to-impact-cyan rounded-full flex items-center justify-center shadow-2xl shadow-impact-blue/30 hover:scale-110 transition-transform duration-300 cursor-pointer group"
        >
          <FaArrowUp className="text-white text-lg group-hover:-translate-y-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-impact-blue to-impact-cyan rounded-full animate-ping opacity-20" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
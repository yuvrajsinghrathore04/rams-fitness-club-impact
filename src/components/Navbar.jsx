import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaBolt } from 'react-icons/fa'
import { navLinks } from '../constants/data'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-impact-darker/95 backdrop-blur-xl shadow-2xl shadow-black/50 border-b border-impact-border/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative">
                <FaBolt className="text-2xl md:text-3xl text-impact-blue group-hover:text-impact-cyan transition-colors duration-300" />
                <div className="absolute inset-0 bg-impact-blue/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-black tracking-tight leading-none">
                  RAM&apos;S <span className="text-impact-blue">FITNESS</span>
                </span>
                <span className="text-[9px] md:text-[10px] font-bold tracking-[0.35em] text-impact-gold uppercase mt-0.5">
                  Club IMPACT
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={-100}
                  spy={true}
                  activeClass="text-impact-blue"
                  className="text-sm font-medium text-gray-300 hover:text-white cursor-pointer transition-colors duration-300 relative group py-2"
                >
                  {link.name}
                  <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-impact-blue group-hover:w-full transition-all duration-300 rounded-full" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link to="contact" smooth={true} duration={800} offset={-100}>
                <button className="bg-gradient-to-r from-impact-blue to-impact-cyan text-white px-8 py-3 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-lg hover:shadow-impact-blue/25 transition-all duration-300 cursor-pointer">
                  Join Now
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white text-3xl z-50 relative cursor-pointer"
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-impact-darker/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    offset={-100}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-semibold text-gray-200 hover:text-impact-blue cursor-pointer transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-100}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button className="mt-6 bg-gradient-to-r from-impact-blue to-impact-cyan text-white px-12 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 cursor-pointer">
                    Join Now
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
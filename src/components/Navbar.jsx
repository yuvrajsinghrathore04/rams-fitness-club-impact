import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaBolt } from 'react-icons/fa'
import { navLinks } from '../constants/data'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef(null)

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto'
  }, [isMobileMenuOpen])

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-impact-darker/95 backdrop-blur-xl shadow-xl border-b border-impact-border/40 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link
              to="home"
              smooth
              duration={800}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <FaBolt className="text-2xl md:text-3xl text-impact-blue group-hover:text-impact-cyan transition duration-300" />
              <div className="leading-none">
                <div className="text-base sm:text-lg md:text-xl font-black tracking-tight">
                  RAM&apos;S <span className="text-impact-blue">FITNESS</span>
                </div>
                <div className="text-[8px] sm:text-[9px] font-bold tracking-[0.35em] text-impact-gold uppercase">
                  Club IMPACT
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth
                  duration={800}
                  offset={-90}
                  spy
                  activeClass="text-impact-blue"
                  className="text-sm font-medium text-gray-300 hover:text-white cursor-pointer transition duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-impact-blue group-hover:w-full transition-all duration-300 rounded-full" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link to="contact" smooth duration={800} offset={-90}>
                <button className="bg-gradient-to-r from-impact-blue to-impact-cyan text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition duration-300">
                  Join Now
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              className="lg:hidden text-white text-3xl relative z-50"
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
            ref={menuRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-impact-darker flex flex-col items-center justify-center text-center px-6"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={800}
                    offset={-90}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-semibold text-gray-200 hover:text-impact-blue transition duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <Link
                to="contact"
                smooth
                duration={800}
                offset={-90}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <button className="mt-6 bg-gradient-to-r from-impact-blue to-impact-cyan text-white px-10 py-3.5 rounded-full text-lg font-semibold hover:scale-105 transition duration-300">
                  Join Now
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBolt,
} from 'react-icons/fa'
import { footerLinks, contactInfo } from '../constants/data'

const socialIcons = {
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
  YouTube: FaYoutube,
  Twitter: FaTwitter,
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-impact-darker pt-20 sm:pt-24 md:pt-32 overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-impact-blue/30 to-transparent" />

      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-impact-blue/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-20 relative z-10">

        {/* ================= Newsletter ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-impact-blue/10 via-impact-card to-impact-blue/10 border border-impact-blue/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-16 sm:mb-20 md:mb-24 text-center"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-snug">
            Ready to Join the{' '}
            <span className="text-impact-blue">IMPACT Family</span>?
          </h3>

          <p className="text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Subscribe to get exclusive offers, workout tips, and updates about new classes and events.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-impact-dark/50 border border-impact-border rounded-full px-6 py-3 sm:py-4 text-white placeholder-gray-600 focus:border-impact-blue/50 focus:ring-2 focus:ring-impact-blue/20 transition-all duration-300 text-sm"
            />
            <button className="bg-gradient-to-r from-impact-blue to-impact-cyan text-white px-8 py-3 sm:py-4 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-lg hover:shadow-impact-blue/25 transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* ================= Footer Grid ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaBolt className="text-xl sm:text-2xl text-impact-blue" />
              <div>
                <div className="text-base sm:text-lg font-black leading-none">
                  RAM&apos;S <span className="text-impact-blue">FITNESS</span>
                </div>
                <div className="text-[9px] sm:text-[10px] tracking-[0.35em] text-impact-gold uppercase">
                  Club IMPACT
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
              Jaipur&apos;s premier fitness destination in Pratap Nagar. Transform your body and elevate your mind with expert guidance.
            </p>

            <div className="flex items-center gap-3">
              {footerLinks.socialLinks.map((social) => {
                const Icon = socialIcons[social.name]
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-impact-card border border-impact-border rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-impact-blue hover:border-impact-blue transition-all duration-300"
                  >
                    <Icon className="text-xs sm:text-sm" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-5 sm:mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth
                    duration={800}
                    offset={-80}
                    className="text-xs sm:text-sm text-gray-500 hover:text-impact-blue cursor-pointer transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-5 sm:mb-6">
              Our Services
            </h4>

            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.services.map((service) => (
                <li
                  key={service}
                  className="text-xs sm:text-sm text-gray-500 hover:text-impact-blue transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-5 sm:mb-6">
              Get in Touch
            </h4>

            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-impact-blue text-xs sm:text-sm mt-1 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {contactInfo.address}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-impact-blue text-xs sm:text-sm flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-xs sm:text-sm text-gray-500 hover:text-impact-blue transition-colors duration-300"
                >
                  +91 {contactInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-impact-blue text-xs sm:text-sm flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-xs sm:text-sm text-gray-500 hover:text-impact-blue transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= Bottom Bar ================= */}
        <div className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-impact-border">
          <p className="text-xs sm:text-sm text-gray-600 text-center">
            © {currentYear} Ram&apos;s Fitness Club IMPACT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
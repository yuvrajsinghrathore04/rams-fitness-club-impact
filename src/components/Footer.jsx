import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaHeart,
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
    <footer className="relative bg-impact-darker pt-28 md:pt-36 overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-impact-blue/30 to-transparent" />

      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-impact-blue/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-impact-blue/10 via-impact-card to-impact-blue/10 border border-impact-blue/20 rounded-2xl p-10 md:p-14 mb-24 text-center"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join the{' '}
            <span className="text-impact-blue">IMPACT Family</span>?
          </h3>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed text-lg">
            Subscribe to get exclusive offers, workout tips, and be the first to
            know about new classes and events at Ram&apos;s Fitness Club.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-impact-dark/50 border border-impact-border rounded-full px-7 py-4 text-white placeholder-gray-600 focus:border-impact-blue/50 focus:ring-2 focus:ring-impact-blue/20 transition-all duration-300 text-sm"
            />
            <button className="bg-gradient-to-r from-impact-blue to-impact-cyan text-white px-10 py-4 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-lg hover:shadow-impact-blue/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-16">
          {/* Column 1 - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-7">
              <FaBolt className="text-2xl text-impact-blue" />
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight leading-none">
                  RAM&apos;S <span className="text-impact-blue">FITNESS</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.35em] text-impact-gold uppercase mt-0.5">
                  Club IMPACT
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              Jaipur&apos;s premier fitness destination in Pratap Nagar. Transform
              your body, elevate your mind, and make a lasting IMPACT with
              world-class equipment and expert guidance.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.socialLinks.map((social) => {
                const Icon = socialIcons[social.name]
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-impact-card border border-impact-border rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-impact-blue hover:border-impact-blue transition-all duration-300"
                  >
                    <Icon className="text-sm" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    offset={-100}
                    className="text-sm text-gray-500 hover:text-impact-blue cursor-pointer transition-colors duration-300 flex items-center gap-3 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-impact-blue transition-all duration-300 rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-8">Our Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-500 hover:text-impact-blue cursor-pointer transition-colors duration-300 flex items-center gap-3 group">
                    <span className="w-0 group-hover:w-3 h-0.5 bg-impact-blue transition-all duration-300 rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-8">Get in Touch</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-impact-blue text-sm mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-500 leading-relaxed">
                  {contactInfo.address}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-impact-blue text-sm flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-sm text-gray-500 hover:text-impact-blue transition-colors duration-300"
                >
                  +91 {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-impact-blue text-sm flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-gray-500 hover:text-impact-blue transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-10 border-t border-impact-border">
          <div className="flex items-center justify-center pb-10">
            <p className="text-sm text-gray-600 text-center">
              © {currentYear} Ram&apos;s Fitness Club IMPACT. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
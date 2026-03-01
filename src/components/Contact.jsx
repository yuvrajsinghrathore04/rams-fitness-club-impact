import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { contactInfo } from '../constants/data'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  const inputClasses =
    'w-full bg-impact-dark/50 border border-impact-border rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:border-impact-blue/50 focus:ring-2 focus:ring-impact-blue/20 transition-all duration-300 text-sm leading-relaxed'

  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 bg-impact-darker overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-impact-blue/20 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-impact-blue/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <SectionHeading
          subtitle="Contact Us"
          title="Ready to Make Your IMPACT?"
          description="Visit us, give us a call, or drop a message. We're here to help you start your fitness journey at Ram's Fitness Club IMPACT."
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left - Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="flex items-start gap-5 p-6 md:p-7 bg-impact-card border border-impact-border rounded-2xl hover:border-impact-blue/30 transition-all duration-300 group">
              <div className="flex-shrink-0 w-14 h-14 bg-impact-blue/10 rounded-xl flex items-center justify-center group-hover:bg-impact-blue/20 transition-colors duration-300">
                <FaMapMarkerAlt className="text-impact-blue text-xl" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">Our Location</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {contactInfo.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5 p-6 md:p-7 bg-impact-card border border-impact-border rounded-2xl hover:border-impact-blue/30 transition-all duration-300 group">
              <div className="flex-shrink-0 w-14 h-14 bg-impact-blue/10 rounded-xl flex items-center justify-center group-hover:bg-impact-blue/20 transition-colors duration-300">
                <FaPhone className="text-impact-blue text-xl" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">Call Us</h4>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-sm text-gray-400 hover:text-impact-blue transition-colors duration-300 block"
                >
                  +91 {contactInfo.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5 p-6 md:p-7 bg-impact-card border border-impact-border rounded-2xl hover:border-impact-blue/30 transition-all duration-300 group">
              <div className="flex-shrink-0 w-14 h-14 bg-impact-blue/10 rounded-xl flex items-center justify-center group-hover:bg-impact-blue/20 transition-colors duration-300">
                <FaEnvelope className="text-impact-blue text-xl" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">Email Us</h4>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-gray-400 hover:text-impact-blue transition-colors duration-300 block"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-5 p-6 md:p-7 bg-impact-card border border-impact-border rounded-2xl hover:border-impact-blue/30 transition-all duration-300 group">
              <div className="flex-shrink-0 w-14 h-14 bg-impact-blue/10 rounded-xl flex items-center justify-center group-hover:bg-impact-blue/20 transition-colors duration-300">
                <FaClock className="text-impact-blue text-xl" />
              </div>
              <div className="space-y-3 flex-1">
                <h4 className="text-lg font-semibold">Working Hours</h4>
                <div className="space-y-2.5">
                  {contactInfo.hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between gap-8 text-sm"
                    >
                      <span className="text-gray-500">{h.day}</span>
                      <span className="text-gray-400 font-medium whitespace-nowrap">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-impact-border aspect-video mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d75.7873!3d26.8523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5e7b0c3d2e7%3A0x1234567890abcdef!2sPratap%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ram's Fitness Club IMPACT Location"
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="flex items-start"
          >
            <div className="bg-impact-card border border-impact-border rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl w-full max-w-xl mx-auto lg:mx-0 sticky top-28">
              <div className="space-y-3 mb-10">
                <h3 className="text-2xl md:text-3xl font-bold">Send Us a Message</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Fill out the form below and our team will get back to you within
                  24 hours.
                </p>
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4 bg-green-500/10 border border-green-500/30 rounded-xl p-5 mb-8"
                >
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                  <p className="text-sm text-green-400 leading-relaxed">
                    Thank you! Your message has been sent successfully. We&apos;ll
                    contact you soon.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-400">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-400">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-400">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputClasses}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-400">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="" className="bg-impact-dark">
                        Select a topic
                      </option>
                      <option value="membership" className="bg-impact-dark">
                        Membership Inquiry
                      </option>
                      <option value="training" className="bg-impact-dark">
                        Personal Training
                      </option>
                      <option value="classes" className="bg-impact-dark">
                        Group Classes
                      </option>
                      <option value="other" className="bg-impact-dark">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-400">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your fitness goals..."
                    required
                    rows={6}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-impact-blue to-impact-cyan text-white py-5 rounded-full text-base font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-impact-blue/25 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
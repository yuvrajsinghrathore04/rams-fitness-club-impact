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
    'w-full bg-impact-dark/60 border border-impact-border rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:border-impact-blue/60 focus:ring-2 focus:ring-impact-blue/20 transition-all duration-300 text-sm leading-relaxed'

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-impact-darker overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-impact-blue/20 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-impact-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <SectionHeading
          subtitle="Contact Us"
          title="Ready to Make Your IMPACT?"
          description="Visit us, give us a call, or drop a message. We're here to help you start your fitness journey at Ram's Fitness Club IMPACT."
        />

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-14 md:gap-20 items-start">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Cards */}
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: 'Our Location',
                content: contactInfo.address,
              },
              {
                icon: <FaPhone />,
                title: 'Call Us',
                content: `+91 ${contactInfo.phone}`,
                link: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
              },
              {
                icon: <FaEnvelope />,
                title: 'Email Us',
                content: contactInfo.email,
                link: `mailto:${contactInfo.email}`,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 p-6 md:p-8 bg-impact-card border border-impact-border rounded-2xl hover:border-impact-blue/40 transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-impact-blue/10 rounded-xl flex items-center justify-center text-impact-blue text-lg md:text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-sm text-gray-400 hover:text-impact-blue transition-colors duration-300"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.content}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Working Hours */}
            <div className="p-6 md:p-8 bg-impact-card border border-impact-border rounded-2xl space-y-4">
              <div className="flex items-center gap-3 text-impact-blue">
                <FaClock />
                <h4 className="text-lg font-semibold text-white">
                  Working Hours
                </h4>
              </div>
              <div className="space-y-3">
                {contactInfo.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between text-sm text-gray-400"
                  >
                    <span>{h.day}</span>
                    <span className="font-medium text-gray-300">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-impact-border aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                loading="lazy"
                title="Ram's Fitness Club IMPACT Location"
                className="w-full h-full"
                style={{ border: 0 }}
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="bg-impact-card border border-impact-border rounded-2xl p-6 md:p-10 shadow-xl w-full max-w-xl lg:sticky lg:top-24">
              
              <div className="space-y-3 mb-8">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Send Us a Message
                </h3>
                <p className="text-sm text-gray-500">
                  Fill out the form and our team will contact you soon.
                </p>
              </div>

              {isSubmitted && (
                <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-6">
                  <FaCheckCircle className="text-green-500" />
                  <p className="text-sm text-green-400">
                    Message sent successfully!
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select Topic</option>
                    <option value="membership">Membership</option>
                    <option value="training">Personal Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-impact-blue to-impact-cyan py-4 rounded-full font-semibold text-white hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
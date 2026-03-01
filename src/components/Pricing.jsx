import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaStar } from 'react-icons/fa'
import { Link } from 'react-scroll'
import SectionHeading from './SectionHeading'
import { pricingPlans } from '../constants/data'

const PricingCard = ({ plan, index }) => {
  const isHighlighted = plan.highlighted

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: 'easeOut' }}
      className={`relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] flex flex-col ${
        isHighlighted
          ? 'bg-gradient-to-b from-impact-blue/20 via-impact-card to-impact-card border-2 border-impact-blue/50 shadow-2xl shadow-impact-blue/10 lg:scale-105 lg:hover:scale-[1.07]'
          : 'bg-impact-card border border-impact-border hover:border-impact-blue/30'
      }`}
    >
      {/* Popular Badge */}
      {isHighlighted && (
        <div className="bg-gradient-to-r from-impact-blue to-impact-cyan text-center py-3">
          <div className="flex items-center justify-center gap-2">
            <FaStar className="text-white text-xs" />
            <span className="text-sm font-bold text-white tracking-wider uppercase">
              Most Popular
            </span>
            <FaStar className="text-white text-xs" />
          </div>
        </div>
      )}

      <div className={`p-8 md:p-10 lg:p-12 flex flex-col flex-1 ${isHighlighted ? 'pt-8' : ''}`}>
        {/* Plan Name */}
        <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
        <p className="text-sm text-gray-500 mb-8 leading-relaxed">{plan.description}</p>

        {/* Price */}
        <div className="flex items-baseline gap-1.5 mb-10">
          <span className="text-lg text-gray-400">₹</span>
          <span
            className={`text-5xl md:text-6xl font-black ${
              isHighlighted
                ? 'bg-gradient-to-r from-impact-blue to-impact-cyan bg-clip-text text-transparent'
                : 'text-white'
            }`}
          >
            {plan.price}
          </span>
          <span className="text-gray-500 text-lg ml-1">{plan.period}</span>
        </div>

        {/* Divider */}
        <div
          className={`h-px mb-10 ${
            isHighlighted
              ? 'bg-gradient-to-r from-transparent via-impact-blue/50 to-transparent'
              : 'bg-impact-border'
          }`}
        />

        {/* Features */}
        <ul className="space-y-5 mb-12 flex-1">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                  isHighlighted
                    ? 'bg-impact-blue/20 text-impact-blue'
                    : 'bg-white/5 text-gray-400'
                }`}
              >
                <FaCheck className="text-xs" />
              </div>
              <span className="text-sm text-gray-400 leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <Link to="contact" smooth={true} duration={800} offset={-100}>
          <button
            className={`w-full py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 cursor-pointer ${
              isHighlighted
                ? 'bg-gradient-to-r from-impact-blue to-impact-cyan text-white hover:shadow-lg hover:shadow-impact-blue/25'
                : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
            }`}
          >
            {plan.buttonText}
          </button>
        </Link>
      </div>
    </motion.div>
  )
}

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative py-28 md:py-40 bg-impact-darker overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-impact-blue/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-impact-blue/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-impact-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <SectionHeading
          subtitle="Pricing Plans"
          title="Choose Your IMPACT Plan"
          description="Flexible membership plans designed to fit every fitness level and budget. No hidden fees, no long-term contracts."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-10 max-w-6xl mx-auto items-start">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center text-sm text-gray-600 mt-16"
        >
          All plans include a 3-day free trial. Cancel anytime. GST applicable.
        </motion.p>
      </div>
    </section>
  )
}

export default Pricing
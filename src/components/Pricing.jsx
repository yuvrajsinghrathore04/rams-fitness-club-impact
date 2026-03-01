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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className={`relative rounded-3xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 ${
        isHighlighted
          ? 'bg-gradient-to-b from-impact-blue/20 via-impact-card to-impact-card border border-impact-blue/50 shadow-xl shadow-impact-blue/20 lg:scale-105'
          : 'bg-impact-card border border-impact-border hover:border-impact-blue/40'
      }`}
    >
      {/* Popular Badge */}
      {isHighlighted && (
        <div className="bg-gradient-to-r from-impact-blue to-impact-cyan text-center py-2.5 text-xs font-bold tracking-wider uppercase text-white">
          ★ Most Popular
        </div>
      )}

      <div className="p-6 sm:p-8 md:p-10 flex flex-col flex-1">

        {/* Plan Name */}
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
          {plan.name}
        </h3>

        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          {plan.description}
        </p>

        {/* Price */}
        <div className="flex items-end gap-1 mb-8">
          <span className="text-gray-400 text-lg">₹</span>
          <span
            className={`text-4xl md:text-5xl font-black leading-none ${
              isHighlighted
                ? 'bg-gradient-to-r from-impact-blue to-impact-cyan bg-clip-text text-transparent'
                : 'text-white'
            }`}
          >
            {plan.price}
          </span>
          <span className="text-gray-500 text-base ml-1">
            {plan.period}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-impact-border mb-8" />

        {/* Features */}
        <ul className="space-y-4 mb-10 flex-1">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center mt-1 ${
                  isHighlighted
                    ? 'bg-impact-blue/20 text-impact-blue'
                    : 'bg-white/5 text-gray-400'
                }`}
              >
                <FaCheck className="text-[10px]" />
              </div>
              <span className="text-sm text-gray-400 leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <Link to="contact" smooth duration={800} offset={-90}>
          <button
            className={`w-full py-3.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105 ${
              isHighlighted
                ? 'bg-gradient-to-r from-impact-blue to-impact-cyan text-white hover:shadow-lg hover:shadow-impact-blue/30'
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
      className="relative py-20 md:py-32 bg-impact-darker overflow-hidden"
    >
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-impact-blue/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-impact-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 relative z-10">

        <SectionHeading
          subtitle="Pricing Plans"
          title="Choose Your IMPACT Plan"
          description="Flexible membership plans designed to fit every fitness level and budget. No hidden fees. No long-term contracts."
        />

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-14 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-xs sm:text-sm text-gray-600 mt-12"
        >
          All plans include a 3-day free trial. Cancel anytime. GST applicable.
        </motion.p>
      </div>
    </section>
  )
}

export default Pricing
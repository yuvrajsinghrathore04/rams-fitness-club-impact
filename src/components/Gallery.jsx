import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaExpand } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { galleryImages } from '../constants/data'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedImage])

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-impact-dark overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-impact-border to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <SectionHeading
          subtitle="Our Gallery"
          title="See the IMPACT in Action"
          description="Take a virtual tour of our world-class facility. Every corner is designed to fuel your motivation and push your limits."
        />

        {/* ================= Gallery Grid ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl ${
                image.span || ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 scale-75 group-hover:scale-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-impact-blue/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <FaExpand className="text-white text-sm sm:text-base" />
                  </div>
                </div>
              </div>

              {/* Bottom Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-400">
                <p className="text-xs sm:text-sm text-white font-medium">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= Lightbox ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-xl sm:rounded-2xl"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-impact-blue rounded-full flex items-center justify-center hover:bg-impact-blue-dark transition-colors duration-300 shadow-xl"
              >
                <FaTimes className="text-white text-sm sm:text-base" />
              </button>

              {/* Caption */}
              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-white text-xs sm:text-sm bg-black/60 backdrop-blur-sm rounded-full px-5 py-2 inline-block">
                  {selectedImage.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
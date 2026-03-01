import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaExpand } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { galleryImages } from '../constants/data'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section
      id="gallery"
      className="relative py-28 md:py-40 bg-impact-dark overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-impact-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <SectionHeading
          subtitle="Our Gallery"
          title="See the IMPACT in Action"
          description="Take a virtual tour of our world-class facility. Every corner is designed to fuel your motivation and push your limits."
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                image.span || ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <div className={`w-full ${image.span ? 'aspect-square' : 'aspect-[4/3]'}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-75">
                  <div className="w-14 h-14 bg-impact-blue/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <FaExpand className="text-white text-lg" />
                  </div>
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-white font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-3 -right-3 md:top-4 md:right-4 w-14 h-14 bg-impact-blue rounded-full flex items-center justify-center hover:bg-impact-blue-dark transition-colors duration-300 cursor-pointer shadow-2xl"
              >
                <FaTimes className="text-white text-xl" />
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="text-white font-medium bg-black/60 backdrop-blur-sm rounded-full px-8 py-3 inline-block text-sm">
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
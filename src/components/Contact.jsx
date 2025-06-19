import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="contact" className="py-20 bg-white contact-clip relative">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-orange-500 text-2xl font-bold mb-16 text-center"
        >
          CONTACT US
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          EM<span className="relative">PH</span>ASIS DESIGNS
        </motion.h3>

        {/* Get Quote Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center mb-8"
        >
          <button
            onClick={() => setShowModal(true)}
            className="inline-block bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300"
          >
            Get Quote
          </button>
        </motion.div>

        {/* Address & Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center mb-8"
        >
          <p className="text-gray-800 mb-4 text-lg">
            Address:- Tank Bund Road, Opposite Indira Canteen Bismillah Nagar, Bengaluru-560029, Karnataka, India
          </p>

          <h4 className="text-2xl font-bold mb-4">Contact Number</h4>
          <p className="text-gray-800 mb-2 text-lg">
            <a
              href="tel:+918892325805"
              className="hover:underline text-orange-500 font-semibold text-lg md:text-xl"
            >
              +91-88923 25805
            </a>
          </p>
          <p className="text-gray-800 mb-6 text-lg">
            <a
              href="tel:+918088255301"
              className="hover:underline text-orange-500 font-semibold text-lg md:text-xl"
            >
              +91-80882 55301
            </a>
          </p>

          <p className="text-gray-800 text-lg">
            Email id:{' '}
            <a
              href="mailto:emphasisdesigns@gmail.com"
              className="hover:underline text-orange-500 font-semibold text-lg md:text-xl"
            >
              emphasisdesigns@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center space-x-8 mt-12"
        >
          <a
            href="https://wa.me/918892325805"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-green-500 hover:text-green-600 text-4xl transition-colors duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/emphasisdesigns.ed"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-600 hover:text-pink-700 text-4xl transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/company/emphasisdesigns"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-700 hover:text-blue-800 text-4xl transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/@emphasisdesigns"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-red-600 hover:text-red-700 text-4xl transition-colors duration-300"
          >
            <FaYoutube />
          </a>
        </motion.div>
      </div>

      {/* Modal with Responsive Google Form */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl relative overflow-hidden">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold z-10"
              aria-label="Close"
            >
              ×
            </button>
            <div className="w-full aspect-[4/3] sm:aspect-[16/9]">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScfmn2dFy_93G2lIbiXqgNGuTa2e6JOgv9lU3r84r689jqYAA/viewform?embedded=true"
                className="w-full h-full border-0"
                allowFullScreen
                title="Request a Quote Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;

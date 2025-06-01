import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white contact-clip">
      <div className="container mx-auto px-4">
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
          className="text-3xl md:text-4xl font-bold mb-8 text-center relative"
        >
          EM
          <span className="relative">
            PH
          </span>
          ASIS DESIGNS
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center mb-8"
        >
          <p className="text-gray-800 mb-4">
            Address:- Tank Bund Road, Opposite Indira Canteen Bismillah Nagar, Bengaluru-560029, Karnataka, India
          </p>
          
          <h4 className="text-2xl font-bold mb-4">Contact Number</h4>
          <p className="text-gray-800 mb-2">+91-88923 25805</p>
          <p className="text-gray-800 mb-6">+91-80882 55301</p>
          
          <p className="text-gray-800">
            Email id:- emphasisdesigns@gmail.com
          </p>
        </motion.div>

        {/* Social Icons Section */}
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
    </section>
  );
};

export default Contact;

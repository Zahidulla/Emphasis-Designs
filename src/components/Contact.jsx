import React from 'react';
import { motion } from 'framer-motion';

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
          <p className="text-gray-800 mb-2">+91-80882 55301</p>
          <p className="text-gray-800 mb-6">+91-80882 55301</p>
          
          <p className="text-gray-800">
            Email id:- emphasisdesigns@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white team-clip">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-orange-500 text-2xl font-bold mb-6 text-center"
        >
          OUR TEAM
        </motion.h2>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center relative"
        >
          WE HAVE EX
          <span className="relative">
            P
          </span>
          ERIENCED MEMBERS
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-600 max-w-4xl mx-auto text-center mb-16"
        >
          At Emphasis Designs, our team comprises highly skilled professionals with deep expertise in architectural design, construction execution, 2D and 3D modeling, and interior and exterior design. From concept to completion, our architects, engineers, and designers work collaboratively to deliver creative, functional, and sustainable spaces tailored to our clients' visions. We are committed to quality craftsmanship, innovative solutions, and customer satisfaction in every project we undertake.
        </motion.p>
      </div>
    </section>
  );
};

export default Team;
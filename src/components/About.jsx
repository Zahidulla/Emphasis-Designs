import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    'Specializes in designing and constructing.',
    'Strong understanding of our clients\' wants and goals.',
    'Architectural design, engineering, and construction management.',
    'Specialized in interior and exterior design.',
    'Sustainable engineering solutions.'
  ];

  return (
    <section id="about" className="py-20 about-clip bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-orange-500 text-2xl font-bold mb-6 text-center md:text-left"
        >
          About Us
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Welcome To Emphasis designs.
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 mb-8"
            >
              Our team of experts are specialized in designing and constructing commercial and residential spaces that are functional, sustainable, and aesthetically pleasing.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4 mb-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button 
                className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative">
              <img  
                className="w-full h-auto rounded-lg shadow-lg" 
                alt="Architects working on blueprints"
               src="https://images.pexels.com/photos/7642088/pexels-photo-7642088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

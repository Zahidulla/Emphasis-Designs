import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "Our clients' satisfaction is at the heart of everything we do. From residential interiors to large-scale commercial projects, Emphasis Designs has earned the trust of countless customers through our commitment to quality, creativity, and timely delivery. Our clients often praise our attention to detail, transparent communication, and ability to bring their vision to life. Their positive feedback motivates us to continue exceeding expectations in architectural design, construction, and interior and exterior transformations.",
      avatar: "client-avatar-1"
    },
    {
      id: 2,
      content: "Working with Emphasis Designs was a seamless experience from start to finish. Their team truly understood our vision and delivered beyond our expectations. The attention to detail and quality of work was exceptional.",
      avatar: "client-avatar-2"
    },
    {
      id: 3,
      content: "We hired Emphasis Designs for our office renovation, and they transformed the space completely. Their innovative approach to design and commitment to sustainability aligned perfectly with our company values.",
      avatar: "client-avatar-3"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-20 bg-gray-50 testimonials-clip">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-orange-500 text-2xl font-bold mb-16 text-center"
        >
          CUSTOMER TESTIMONIALS
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img  
                className="w-full h-full object-cover" 
                alt="Client testimonial avatar"
               src="https://images.pexels.com/photos/32235885/pexels-photo-32235885.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>
          </div>
          
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-gray-600 mb-8">{testimonials[activeTestimonial].content}</p>
          </motion.div>
          
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeTestimonial ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

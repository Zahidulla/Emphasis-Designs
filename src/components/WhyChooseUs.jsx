import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const values = [
    {
      title: 'Work Strategy',
      description:
        'Driving innovation with creative, innovative solutions. Creativity, tech, and strategy in perfect harmony.',
      image:
        'https://images.pexels.com/photos/5922329/pexels-photo-5922329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Specialised Engineers',
      description:
        'Expert engineers delivering tailored solutions with precision and innovation.',
      image:
        'https://images.pexels.com/photos/3769135/pexels-photo-3769135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Best Quality',
      description:
        'Delivering exceptional service in designs with unmatched quality and care.',
      image:
        'https://images.pexels.com/photos/7937751/pexels-photo-7937751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Skilled Workers',
      description:
        'Expertly trained, highly skilled workers delivering quality craftsmanship and reliable results.',
      image:
        'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-orange-500 text-2xl font-bold mb-4 text-center"
        >
          WHY CHOOSE US
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          OUR PROMISE AND VALUES
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-6"
            >
              <div className="w-32 h-32 relative flex-shrink-0">
                <img
                  className="w-full h-full object-cover rounded-md"
                  alt={value.title}
                  src={value.image}
                />
              </div>

              <div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'ARCHITECTURE / 2D SITE PLANS',
      description: 'Detailed layout plans for smart and efficient space utilization.',
      image: 'https://images.pexels.com/photos/5292195/pexels-photo-5292195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'EXTERIOR DESIGN',
      description: 'Elegant, modern facades that blend aesthetics with function.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'INTERIOR DESIGN',
      description: 'Creative interiors tailored to reflect your style and comfort.',
      image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'E2E CONSTRUCTION SERVICE',
      description: 'Turnkey solutions from concept to completion, hassle-free.',
      image: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'CONSULTING AND PMC',
      description: 'Expert project management and strategic construction advice.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'STRUCTURAL DESIGN',
      description: 'Safe, resilient structures engineered with precision and care.',
      image: 'https://images.pexels.com/photos/32132510/pexels-photo-32132510/free-photo-of-construction-site-at-sunset-with-workers-on-scaffolding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <section id="services" className="relative py-10 md:py-16 text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.pexels.com/photos/3559235/pexels-photo-3559235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Blurry overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 scale-[0.95] md:scale-100">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-orange-500 text-2xl font-bold mb-6 text-center"
        >
          OUR SERVICES
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          WE OFFER OUR CLIENTS
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-[90%] mx-auto aspect-square rounded-md overflow-hidden group shadow-lg"
            >
              <div className="relative w-full h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 w-full bg-black/70 text-white text-center py-3 px-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h4 className="text-sm md:text-base font-semibold mb-1">{service.title}</h4>
                  <p className="text-xs md:text-sm opacity-80">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      image: 'high-rise-construction-project',
      title: 'Commercial Tower',
      description: 'Modern high-rise commercial building in urban center'
    },
    {
      image: 'modern-architectural-structure',
      title: 'Cultural Center',
      description: 'Innovative architectural design for public space'
    },
    {
      image: 'twin-towers-construction',
      title: 'Twin Towers Development',
      description: 'Large-scale residential and commercial complex'
    },
    {
      image: 'luxury-residential-building',
      title: 'Luxury Residences',
      description: 'High-end residential apartments with modern amenities'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Calculate visible projects (3 on desktop, 1 on mobile)
  const getVisibleProjects = () => {
    const visibleProjects = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      visibleProjects.push(projects[index]);
    }
    return visibleProjects;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 projects-clip">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          EXPLORE OUR RECENT PROJECT
        </motion.h2>
        
        <div className="relative">
          <div className="flex justify-center">
            <div className="hidden md:grid md:grid-cols-3 gap-6 w-full">
              {getVisibleProjects().map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden rounded-lg shadow-lg"
                >
                  <img  
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" 
                    alt={project.title}
                   src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                </motion.div>
              ))}
            </div>
            
            <div className="md:hidden w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <img  
                  className="w-full h-64 object-cover" 
                  alt={projects[currentIndex].title}
                 src="https://images.unsplash.com/photo-1495224814653-94f36c0a31ea" />
              </motion.div>
            </div>
          </div>
          
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
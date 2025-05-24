import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const projectData = {
  Exterior: [
    {
      image: 'https://images.unsplash.com/photo-1697256200022-f61abccad430',
      title: 'Commercial Tower',
    },
    {
      image: 'https://images.unsplash.com/photo-1495224814653-94f36c0a31ea',
      title: 'Twin Towers Development',
    },
  ],
  Interior: [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      title: 'Luxury Residences',
    },
    {
      image: 'https://images.unsplash.com/photo-1598300057791-6b3d87db8bbf',
      title: 'Modern Living Room',
    },
  ],
  Site: [
    {
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      title: 'Construction Site A',
    },
    {
      image: 'https://images.unsplash.com/photo-1573497019136-0d09663c17a0',
      title: 'Site Logistics',
    },
  ],
};

const featuredVideos = [
  {
    url: 'https://www.youtube.com/embed/1La4QzGeaaQ',
    title: 'Corporate Promo',
  },
  {
    url: 'https://www.youtube.com/embed/jfKfPfyJRdk',
    title: 'Project Launch Event',
  },
  {
    url: 'https://www.youtube.com/embed/qIcTM8WXFjk',
    title: 'Behind the Build',
  },
];

const Projects = () => {
  const tabs = Object.keys(projectData);
  const [activeTab, setActiveTab] = useState('Exterior');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState('');

  const [featuredIndex, setFeaturedIndex] = useState(0);

  const projects = projectData[activeTab];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % featuredVideos.length);
  };

  const prevFeatured = () => {
    setFeaturedIndex((prev) => (prev - 1 + featuredVideos.length) % featuredVideos.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  };

  const getVisibleFeaturedVideos = () => {
    const visible = [];
    const length = Math.min(3, featuredVideos.length);
    for (let i = 0; i < length; i++) {
      const index = (featuredIndex + i) % featuredVideos.length;
      visible.push(featuredVideos[index]);
    }
    return visible;
  };

  return (
    <>
      {/* Project Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
          >
            EXPLORE OUR RECENT PROJECTS
          </motion.h2>

          {/* Tabs */}
          <div className="flex justify-center mb-10 space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentIndex(0);
                }}
                className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300
                  ${
                    activeTab === tab
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-orange-100'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Desktop */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {getVisibleProjects().map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  onClick={() => setModalImage(project.image)}
                >
                  <img
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                    src={project.image}
                    alt={project.title}
                  />
                </motion.div>
              ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setModalImage(projects[currentIndex].image)}
              >
                <img
                  className="w-full h-64 object-cover"
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                />
              </motion.div>
            </div>

            {/* Arrows */}
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

          {/* Dots */}
          <div className="flex justify-center mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Modal Preview */}
          <AnimatePresence>
            {modalImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="relative bg-white rounded-xl overflow-hidden shadow-2xl max-w-5xl w-full h-[80vh] flex items-center justify-center"
                >
                  <img
                    src={modalImage}
                    alt="Project Preview"
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={() => setModalImage('')}
                    className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            OUR FEATURED VIDEOS
          </h2>

          <div className="relative">
            {/* Desktop View */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {getVisibleFeaturedVideos().map((video, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-lg bg-gray-100 p-2"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={video.url}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-64"
                    ></iframe>
                  </div>
                  <p className="text-center mt-2 font-medium">{video.title}</p>
                </div>
              ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
              <div className="overflow-hidden rounded-lg shadow-lg bg-gray-100 p-2">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={featuredVideos[featuredIndex].url}
                    title={featuredVideos[featuredIndex].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64"
                  ></iframe>
                </div>
                <p className="text-center mt-2 font-medium">
                  {featuredVideos[featuredIndex].title}
                </p>
              </div>
            </div>

            {/* Arrows for desktop */}
            <button
              onClick={prevFeatured}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button
              onClick={nextFeatured}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
              aria-label="Next Slide"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
          </div>

          {/* Dots for mobile */}
          <div className="flex justify-center mt-6 md:hidden">
            {featuredVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => setFeaturedIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full ${
                  index === featuredIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

// Spinner Component
const Spinner = () => (
  <div className="flex items-center justify-center h-64">
    <div className="w-12 h-12 border-4 border-orange-500 border-dotted rounded-full animate-spin"></div>
  </div>
);

const Projects = () => {
  const tabs = Object.keys(projectData);
  const [activeTab, setActiveTab] = useState('Exterior');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState('');
  const [modalVideo, setModalVideo] = useState('');
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const projects = projectData[activeTab];

  useEffect(() => {
    setLoading(true);
  }, [activeTab]);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const nextFeatured = () => setFeaturedIndex((prev) => (prev + 1) % featuredVideos.length);
  const prevFeatured = () => setFeaturedIndex((prev) => (prev - 1 + featuredVideos.length) % featuredVideos.length);

  const getVisibleProjects = () =>
    [...Array(3)].map((_, i) => projects[(currentIndex + i) % projects.length]);

  const getVisibleFeaturedVideos = () =>
    [...Array(Math.min(3, featuredVideos.length))].map(
      (_, i) => featuredVideos[(featuredIndex + i) % featuredVideos.length]
    );

  const videoSwipeHandlers = useSwipeable({
    onSwipedLeft: nextFeatured,
    onSwipedRight: prevFeatured,
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
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

          <div className="flex justify-center mb-10 w-full max-w-md mx-auto space-x-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentIndex(0);
                }}
                className={`flex-1 text-center px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-orange-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative">
            {/* Show Spinner if Loading */}
            {loading ? (
              <Spinner />
            ) : (
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
                      onLoad={handleImageLoad}
                    />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Mobile View */}
            {!loading && (
              <div className="md:hidden overflow-x-auto no-scrollbar">
                <div className="flex space-x-4">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="min-w-[85%] flex-shrink-0 overflow-hidden rounded-lg shadow-lg cursor-pointer"
                      onClick={() => setModalImage(project.image)}
                    >
                      <img
                        className="w-full h-64 object-cover"
                        src={project.image}
                        alt={project.title}
                        onLoad={handleImageLoad}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10" onClick={prevSlide}>
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10" onClick={nextSlide}>
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
          </div>

          <AnimatePresence>
            {modalImage && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
                <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="relative bg-white rounded-xl overflow-hidden shadow-2xl max-w-5xl w-full h-[80vh] flex items-center justify-center">
                  <img src={modalImage} alt="Project Preview" className="w-full h-full object-contain" />
                  <button onClick={() => setModalImage('')} className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow">
                    <X className="w-5 h-5" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Featured Videos Section */}
      {/* Keep this section same as your existing code */}
      {/* You can add similar loading spinner for videos if needed */}
    </>
  );
};

export default Projects;

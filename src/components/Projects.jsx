import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

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
  { url: 'https://www.youtube.com/embed/KsYdgb65FJo?si=KlWKA3f3YSuTCJTH' },
  { url: 'https://www.youtube.com/embed/lUWL4-HfEVM?si=Crim0Je6nRnoeh8S' },
  { url: 'https://www.youtube.com/embed/NEKP-1REoto?si=khWZ_mns0D_GIzG1' },
  { url: 'https://www.youtube.com/embed/i_iNHzVadc0?si=hpyZcZ0snkXotcym' },
];

const Projects = () => {
  const tabs = Object.keys(projectData);
  const [activeTab, setActiveTab] = useState('Exterior');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState('');
  const [modalVideo, setModalVideo] = useState('');
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const projects = projectData[activeTab];

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
                    />
                  </motion.div>
                ))}
              </div>
            </div>

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
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">OUR FEATURED VIDEOS</h2>
          <div className="relative">
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {getVisibleFeaturedVideos().map((video, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg bg-gray-100 p-2 cursor-pointer" onClick={() => setModalVideo(video.url)}>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={video.url}
                      title={`Video ${index}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-64 pointer-events-none"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:hidden overflow-x-auto no-scrollbar" {...videoSwipeHandlers}>
              <div className="flex space-x-4">
                {featuredVideos.map((video, index) => (
                  <div key={index} className="min-w-[85%] flex-shrink-0 overflow-hidden rounded-lg shadow-lg bg-gray-100 p-2 cursor-pointer" onClick={() => setModalVideo(video.url)}>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={video.url}
                        title={`Video ${index}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-64 pointer-events-none"
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={prevFeatured} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10">
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button onClick={nextFeatured} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10">
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {modalVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="relative bg-white rounded-xl overflow-hidden shadow-2xl max-w-5xl w-full h-[80vh] flex items-center justify-center">
              <iframe
                src={modalVideo}
                title="Video Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
              <button onClick={() => setModalVideo('')} className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow">
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const projectData = {
  Exterior: [
    {
      iframe: 'https://drive.google.com/file/d/1FaGJ7hKUZ6C44_bzd2HYKjB0lWLBwnFs/preview',
      title: 'Commercial Tower 1',
    },
    {
      iframe: 'https://drive.google.com/file/d/1iRKNbVw2dutBpchQ8EJj35b_dNf1eo29/preview',
      title: 'Twin Towers Development 2',
    },
    {
      iframe: 'https://drive.google.com/file/d/1brUAnXvH9hmlc0qraWQxCBq7821HJLJQ/preview',
      title: 'Twin Towers Development 3',
    },
    {
      iframe: 'https://drive.google.com/file/d/1sHOR3CrBkmeMmE3ftEgNQRtnJPYNAAcQ/preview',
      title: 'Twin Towers Development 4',
    },
    {
      iframe: 'https://drive.google.com/file/d/1NX1OfGDfL26JmMDBPcd8CEeoq6CWdH6X/preview',
      title: 'Twin Towers Development 5',
    },
    {
      iframe: 'https://drive.google.com/file/d/19VV-uQl3-we6E-kjjCorsCPZ4yyNoTfb/preview',
      title: 'Twin Towers Development 6',
    },
    {
      iframe: 'https://drive.google.com/file/d/1TdV2OdD_H_RXTDPOAAmUhpfUsN7v5fhe/preview',
      title: 'Twin Towers Development 7',
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

const Projects = () => {
  const tabs = Object.keys(projectData);
  const [activeTab, setActiveTab] = useState('Exterior');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const projects = projectData[activeTab];

  const handleClick = (project) => {
    setModalContent(project.iframe || project.image);
    setModalOpen(true);
  };

  return (
    <>
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
                onClick={() => setActiveTab(tab)}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white p-2"
                onClick={() => handleClick(project)}
              >
                {project.iframe ? (
                  <iframe
                    src={project.iframe}
                    className="w-full h-64"
                    allow="autoplay"
                  ></iframe>
                ) : (
                  <img
                    className="w-full h-64 object-cover"
                    src={project.image}
                    alt={project.title}
                  />
                )}
                <p className="mt-2 text-center font-semibold">{project.title}</p>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {modalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="relative bg-white rounded-xl overflow-hidden shadow-2xl w-[90%] max-w-4xl h-[70vh] flex items-center justify-center"
                >
                  {modalContent.includes('drive.google.com') ? (
                    <iframe
                      src={modalContent}
                      className="w-full h-full"
                      allow="autoplay"
                    ></iframe>
                  ) : (
                    <img
                      src={modalContent}
                      alt="Preview"
                      className="w-full h-full object-contain"
                    />
                  )}
                  <button
                    onClick={() => setModalOpen(false)}
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
    </>
  );
};

export default Projects;

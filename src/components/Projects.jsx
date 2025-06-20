import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const projectData = {
  Exterior: [
    {
      image: 'https://drive.google.com/file/d/1FaGJ7hKUZ6C44_bzd2HYKjB0lWLBwnFs/preview',
      title: 'Twin Towers Developmen1t (Video)',
      isIframe: true
    },
    {
      image: 'https://drive.google.com/file/d/1iRKNbVw2dutBpchQ8EJj35b_dNf1eo29/preview',
      title: 'Development Site Overview',
      isIframe: true
    },
    {
      image: 'https://drive.google.com/file/d/1brUAnXvH9hmlc0qraWQxCBq7821HJLJQ/preview',
      title: 'Commercial Tower22 (Video)',
      isIframe: true
    },
    {
      image: 'https://drive.google.com/file/d/1sHOR3CrBkmeMmE3ftEgNQRtnJPYNAAcQ/preview',
      title: 'Landscape Flyover',
      isIframe: true
    },
    {
      image: 'https://drive.google.com/file/d/1NX1OfGDfL26JmMDBPcd8CEeoq6CWdH6X/preview',
      title: 'Twin Towers (View)',
      isIframe: true
    },
    {
      image: 'https://drive.google.com/file/d/19VV-uQl3-we6E-kjjCorsCPZ4yyNoTfb/preview',
      title: 'Twin Towers Developmen22 (Video)',
      isIframe: true
    },
    {
      image: 'https://drive.google.com/file/d/1TdV2OdD_H_RXTDPOAAmUhpfUsN7v5fhe/preview',
      title: 'Construction Phase',
      isIframe: true
    }
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

// In your rendering code where you map `getVisibleProjects()`:
{
  getVisibleProjects().map((project, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={() => setModalImage(project.image)}
    >
      {project.isIframe ? (
        <iframe
          src={project.image}
          title={project.title}
          className="w-full h-64"
          allow="autoplay"
        />
      ) : (
        <img
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
          src={project.image}
          alt={project.title}
        />
      )}
    </motion.div>
  ))
}

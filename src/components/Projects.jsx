import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
const projectData = {
  Exterior: [
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750399789/WhatsApp_Image_2025-06-19_at_9.48.12_PM_yfwv06.jpg', title: 'Commercial Tower22' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750399789/WhatsApp_Image_2025-06-19_at_9.48.11_PM_axktgz.jpg', title: 'Twin Towers Development2' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750399788/WhatsApp_Image_2025-06-19_at_9.48.14_PM_2_pyz4ar.jpg', title: 'Twin Towers Developmen1t' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750399788/WhatsApp_Image_2025-06-19_at_9.48.14_PM_sfl7av.jpg', title: 'Twin Towers Developmen22' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750399788/WhatsApp_Image_2025-06-19_at_9.48.15_PM_1_nlskge.jpg', title: 'Commercial Tower2233' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750399786/WhatsApp_Image_2025-06-19_at_9.48.17_PM_2_h0flrn.jpg', title: 'Twin Towers Development122' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750399788/WhatsApp_Image_2025-06-19_at_9.48.15_PM_pyi6mi.jpg', title: 'Twin Towers Developmen1t333' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750399786/WhatsApp_Image_2025-06-19_at_9.48.17_PM_l38u1x.jpg', title: 'Twin Towers Developmen22' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750399786/WhatsApp_Image_2025-06-19_at_9.48.16_PM_1_oytk4r.jpg', title: 'Twin Towers Developmen1t333' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750399786/WhatsApp_Image_2025-06-19_at_9.48.17_PM_1_bdx8nu.jpg', title: 'Twin Towers Developmen22' },
  ],
  Interior: [
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1751557709/Enscape_2025-05-07-00-25-47_Enscape_scene_6_o2qpto.png', title: 'Luxury Residences' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1751557772/Enscape_2025-05-07-00-25-47_Enscape_scene_10_ips0lo.png', title: 'Modern Living Room' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1751557719/Enscape_2025-05-07-00-25-47_Enscape_scene_3_ii7e1q.png', title: 'Luxury Residences1' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1751557699/Enscape_2025-05-07-00-25-47_Enscape_scene_12_ntrfpm.png', title: 'Modern Living Room2' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1751557694/Enscape_2025-05-07-00-25-47_Enscape_scene_1_t7lwl1.png', title: 'Luxury Residences21' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1751557688/Enscape_2025-05-07-00-25-47_Enscape_scene_9_ojmxwz.png', title: 'Modern Living Room21' },
  ],
  Site: [
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750400984/WhatsApp_Image_2025-06-20_at_11.54.38_AM_sc25zr.jpg', title: 'Construction Site A1' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750400982/WhatsApp_Image_2025-06-20_at_11.54.39_AM_1_hdsyut.jpg', title: 'Site Logisticsas' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750400978/WhatsApp_Image_2025-06-20_at_11.54.43_AM_cxpizy.jpg', title: 'Construction Site Aq' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750400977/WhatsApp_Image_2025-06-20_at_11.54.43_AM_1_wfb8n0.jpg', title: 'Site Logistics22' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750400983/WhatsApp_Image_2025-06-20_at_11.54.38_AM_1_khn9wd.jpg', title: 'Construction Site 2A' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750400983/WhatsApp_Image_2025-06-20_at_11.54.39_AM_wyc7fv.jpg', title: 'Site Logistic22s' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750400982/WhatsApp_Image_2025-06-20_at_11.54.41_AM_1_reark3.jpg', title: 'Construction Site 22A' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750400981/WhatsApp_Image_2025-06-20_at_11.54.42_AM_1_looz6b.jpg', title: 'Site Logistics2' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750400982/WhatsApp_Image_2025-06-20_at_11.54.41_AM_wqaay7.jpg', title: 'Construction Site 22wA' },
    { image: 'https://res.cloudinary.com/dgztlk3y1/image/upload/v1750400976/WhatsApp_Image_2025-06-20_at_11.54.46_AM_zrurbd.jpg', title: 'Site Logistics2ss' },
  ]
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
                  setModalImage('');
                  setCurrentIndex(0);
                  setActiveTab(tab);
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

          <div className="relative" key={activeTab}>
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

      {/* Video Modal */}
      <AnimatePresence>
        {modalVideo && (
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
              className="relative bg-white rounded-xl overflow-hidden shadow-2xl w-[90%] max-w-3xl h-[60vh] flex items-center justify-center"
            >
              <iframe
                src={modalVideo}
                title="Video Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
              <button
                onClick={() => setModalVideo('')}
                className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow"
              >
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

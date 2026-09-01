import { useState } from 'react';
import { X } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import GalleryCard from '../components/cards/GalleryCard';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const images = [
    { 
      src: '/survey5.jpg', 
      category: 'Site Survey',
      title: 'Topographical Survey',
      location: 'Lucknow'
    },
    { 
      src: '/survey6.jpg', 
      category: 'Design Work',
      title: 'Civil Design',
      location: 'Lucknow'
    },
    { 
      src: '/survey7.jpg', 
      category: 'Site Survey',
      title: 'Boundary Survey',
      location: 'Uttar Pradesh'
    },
    { 
      src: '/survey8.jpg', 
      category: 'Equipment',
      title: 'Total Station',
      location: 'On Site'
    },
    { 
      src: '/survey9.jpg', 
      category: 'Equipment',
      title: 'Auto Level',
      location: 'On Site'
    },
    { 
      src: '/site visintg3.jpg', 
      category: 'Training',
      title: 'Practical Field Training',
      location: 'Lucknow'
    },
  ];

  const openLightbox = (imgSrc) => {
    setCurrentImg(imgSrc);
    setLightboxOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        eyebrow="Our Gallery"
        title="Surveying in Action."
        description="A visual documentation of our fieldwork, designs, equipment, and training sessions."
        image="/survey10.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Gallery" }
        ]}
      />

      <section className="py-20 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, idx) => (
              <GalleryCard 
                key={idx}
                image={img.src}
                category={img.category}
                title={img.title}
                location={img.location}
                onClick={() => openLightbox(img.src)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-[#10263F]/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#F59E0B] transition-colors bg-white/10 p-2 rounded-full"
            onClick={() => setLightboxOpen(false)}
          >
            <X size={24} />
          </button>
          <img 
            src={currentImg} 
            alt="Gallery Enlarge" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" 
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;

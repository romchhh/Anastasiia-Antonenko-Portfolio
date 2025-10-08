'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ContactForm from '@/components/ContactForm';
import NavigationButton, { CloseButton } from '@/components/NavigationButton';

export default function InTheEyesOfOthersPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'full'>('overview');
  // Modal state
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery images with absolute positioning based on provided coordinates
  const gap = 20;
  
  const galleryImages = [
    // ROW 1
    // Column 1
    { src: '/In the Eyes of Others/Anastasiia_Antonenko_Fragile Traces_06 14.png', width: 637, height: 800, top: 0, left: 1 + gap },
    // Column 2
    { src: '/In the Eyes of Others/Anastasiia_Antonenko_Fragile Traces_06 12.png', width: 450, height: 523, top: 0, left: 688 },
    
    // ROW 2
    // Column 2
    { src: '/In the Eyes of Others/Anastasiia_Antonenko_Fragile Traces_06 15.png', width: 450, height: 523, top: 554, left: 688 },
    
    // ROW 3
    // Column 1
    { src: '/In the Eyes of Others/Anastasiia_Antonenko_Fragile Traces_06 8.png', width: 637, height: 800, top: 831, left: gap },
    // Column 2
    { src: '/In the Eyes of Others/Anastasiia_Antonenko_Fragile Traces_06 16.png', width: 450, height: 523, top: 1108, left: 688 },
    
    // ROW 4
    // Column 1
    { src: '/In the Eyes of Others/Anastasiia_Antonenko_Fragile Traces_06 17.png', width: 533, height: 673, top: 1661, left: gap },
    // Column 2
    { src: '/In the Eyes of Others/Anastasiia_Antonenko_Fragile Traces_06 18.png', width: 553, height: 673, top: 1661, left: 583 }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  }, [selectedImage, galleryImages.length]);

  const prevImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  }, [selectedImage, galleryImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, nextImage, prevImage]);

  const overviewText =
    'This series explores the boundary between humans and animals, inspired by John Berger\'s idea of animals as "the other." The yellow tone filters perception, while animal motifs reveal a primal essence within us. The work asks if we can see animals not as separate, but as an extension of ourselves.';

  const fullStoryText = `This series of photographs was born from reflections on the relationship between humans and animals—how we look at them and how they might look back at us. It was inspired by John Berger's Ways of Seeing, where animals are described as "the other," alienated in our consciousness yet inseparable from who we are.

Through these works, I wanted to explore not just how we perceive animals, but also how they can reveal something profound about ourselves. The yellow tone in the series serves as a metaphor for altered perception, a filter we place over reality to make it more palatable or comprehensible. The animal motifs symbolize the primal, natural essence within us—an essence we often overlook in daily life, yet one that persists quietly beneath the surface.

This project examines the fragile boundary between two worlds: the human and the animal. It seeks to dissolve that boundary, asking whether we can view ourselves through the eyes of nature. Can we see animals not as "the other," but as an extension of ourselves? And if we do, how might it transform the way we engage with the world around us?`;
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] relative">
      <div className="mx-6 my-6 bg-transparent relative pr-[17rem]">
        {/* Header */}
        <Header title="IN THE EYES OF OTHERS" subtitle="anastasiia antonenko" />

        {/* Main content area */}
        <main className="py-8 pl-12 pr-8">
            {/* Intro block with meta, separator and text; separator should not span the gallery below */}
            <div className="grid grid-cols-[260px_1px_1fr] gap-6 items-start">
              {/* Left meta column */}
              <aside className="text-[#1A1A1A]">
                <div className="space-y-8 pr-6 -ml-6">
                  <div>
                    <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">year:</p>
                    <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">2025</p>
                  </div>
                  <div>
                    <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">medium:</p>
                    <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">multiple exposure on instant camera</p>
                  </div>
                </div>
              </aside>
              {/* Vertical separator - extends to horizontal line above */}
              <div className="bg-gray-300 w-px self-stretch -mt-8" />

              {/* Right content */}
              <section>
                <div className="flex items-baseline gap-8 pb-4">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={"text-[45px] font-normal leading-[110%] tracking-[0.03em] lowercase transition-colors " + (activeTab === 'overview' ? 'text-[#1A1A1A]' : 'text-[#515151] hover:text-[#1A1A1A]')}
                  >
                    overview
                  </button>
                  <button
                    onClick={() => setActiveTab('full')}
                    className={"text-[45px] font-normal leading-[110%] tracking-[0.03em] lowercase transition-colors " + (activeTab === 'full' ? 'text-[#1A1A1A]' : 'text-[#515151] hover:text-[#1A1A1A]')}
                  >
                    full story
                  </button>
                </div>

                <p className="mt-3 text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A] w-[680px] whitespace-pre-line">
                  {activeTab === 'overview' ? overviewText : fullStoryText}
                </p>

                {/* Horizontal line spanning full width */}
                <div className="relative mt-8">
                  {/* Full-width horizontal line from left edge to sidebar */}
                  <div className="absolute top-0 h-px bg-gray-300" style={{ left: 'calc(-2rem - 260px - 1.5rem - 1px - 1.5rem)', right: 'calc(-2rem - 3%)' }} />
                </div>
              </section>
            </div>

            {/* Gallery: exact layout with absolute positioning */}
            <div className="-ml-12 -mr-8 mt-6 relative" style={{ height: '2354px' }}>
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="absolute overflow-hidden bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  style={{
                    width: `${image.width}px`,
                    height: `${image.height}px`,
                    top: `${image.top}px`,
                    left: `${image.left}px`
                  }}
                  onClick={() => openModal(index)}
                >
                  <img 
                    src={image.src} 
                    alt={`In the Eyes of Others ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>

            {/* Contact card */}
            <div className="mt-10 pt-6">
              <ContactForm />
            </div>
        </main>
      </div>

      {/* Sidebar - fixed positioned relative to viewport */}
      <div className="fixed top-0 bottom-0 right-0 w-[17rem]">
        <Sidebar />
      </div>

      {/* Modal for image viewing */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Close button - fixed to top-right corner of viewport */}
          <CloseButton
            onClick={closeModal}
            className="fixed top-8 right-8"
          />

          <div className="relative mx-4 flex items-center justify-center">
            {/* Image */}
            <img
              src={galleryImages[selectedImage].src}
              alt={`In the Eyes of Others ${selectedImage + 1}`}
              className="h-[85vh] w-auto max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation arrows */}
            <NavigationButton
              direction="left"
              onClick={(e) => {
                e?.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2"
              variant="lightbox"
            />

            <NavigationButton
              direction="right"
              onClick={(e) => {
                e?.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2"
              variant="lightbox"
            />
          </div>
        </div>
      )}
    </div>
  );
}


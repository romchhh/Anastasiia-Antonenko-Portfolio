'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ContactForm from '@/components/ContactForm';
import NavigationButton, { CloseButton } from '@/components/NavigationButton';

export default function KyivInColorPolaroidPage() {
  // Modal state
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery images with absolute positioning based on provided coordinates
  const gap = 20;
  
  const galleryImages = [
    // ROW 1
    // Column 1
    { src: '/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 14.png', width: 637, height: 800, top: 0, left: gap },
    // Column 2
    { src: '/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 12.png', width: 450, height: 523, top: 0, left: 688 },
    
    // ROW 2
    // Column 1
    { src: '/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 8.png', width: 637, height: 798, top: 831, left: gap },
    // Column 2
    { src: '/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 19.png', width: 450, height: 523, top: 553, left: 688 },
    
    // ROW 3
    // Column 2
    { src: '/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 20.png', width: 450, height: 523, top: 1106, left: 687 },
    
    // ROW 4
    // Column 1
    { src: '/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 17.png', width: 533, height: 673, top: 1659, left: gap },
    // Column 2
    { src: '/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 18.png', width: 553, height: 673, top: 1659, left: 583 },
    
    // ROW 5
    // Column 1
    { src: '/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 141.png', width: 637, height: 800, top: 2362, left: gap },
    // Column 2
    { src: '/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 121.png', width: 450, height: 523, top: 2362, left: 688 },
    
    // ROW 6
    // Column 2
    { src: '/Kyiv in Color. Polaroid edition/Anastasiia_A1111ntonenko_Fragile Traces_06 19.png', width: 450, height: 523, top: 2915, left: 688 },
    
    // ROW 7
    // Column 1
    { src: '/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko11_Fragile Traces_06 8.png', width: 637, height: 798, top: 3193, left: gap },
    // Column 2
    { src: '/Kyiv in Color. Polaroid edition/Anastasi1212ia_Antonenko_Fragile Traces_06 20.png', width: 450, height: 523, top: 3468, left: 687 },
    
    // ROW 8
    // Column 1
    { src: '/Kyiv in Color. Polaroid edition/Anastasiia_Antone2121nko_Fragile Traces_06 17.png', width: 533, height: 673, top: 4021, left: gap },
    // Column 2
    { src: '/Kyiv in Color. Polaroid edition/Anastasiia_Antone2121nko_Fragile Traces_06 18.png', width: 553, height: 673, top: 4021, left: 583 }
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

  const fullStoryText = `This series presents Kyiv through Polaroid photography, each image a unique document of everyday life shaped by the unpredictability of instant film. Unlike the analog series, it captures spontaneous encounters with the city, preserving fleeting moments in raw, unrepeatable form.`;
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] relative">
      <div className="mx-6 my-6 bg-transparent relative pr-[17rem]">
        {/* Header */}
        <Header title="KYIV IN COLOR. POLAROID EDITION" subtitle="anastasiia antonenko" />

        {/* Main content area */}
        <main className="py-8 pl-12 pr-8">
            {/* Intro block with meta, separator and text; separator should not span the gallery below */}
            <div className="grid grid-cols-[260px_1px_1fr] gap-6 items-start">
              {/* Left meta column */}
              <aside className="text-[#1A1A1A]">
                <div className="space-y-8 pr-6 -ml-6">
                  <div>
                    <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">years:</p>
                    <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">2022–2023</p>
                  </div>
                  <div>
                    <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">medium:</p>
                    <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">instant photography hand-embroidered with thread</p>
                  </div>
                </div>
              </aside>
              {/* Vertical separator - extends to horizontal line above */}
              <div className="bg-gray-300 w-px self-stretch -mt-8" />

              {/* Right content */}
              <section>
                <div className="pb-4">
                  <h2 className="text-[45px] font-normal leading-[110%] tracking-[0.03em] lowercase text-[#1A1A1A]">
                    full story
                  </h2>
                </div>

                <p className="mt-3 text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A] w-[680px] whitespace-pre-line">
                  {fullStoryText}
                </p>

                {/* Horizontal line spanning full width */}
                <div className="relative mt-8">
                  {/* Full-width horizontal line from left edge to sidebar */}
                  <div className="absolute top-0 h-px bg-gray-300" style={{ left: 'calc(-2rem - 260px - 1.5rem - 1px - 1.5rem)', right: 'calc(-2rem - 3%)' }} />
                </div>
              </section>
            </div>

            {/* Gallery: exact layout with absolute positioning */}
            <div className="-ml-12 -mr-8 mt-6 relative" style={{ height: '4714px' }}>
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
                    alt={`Kyiv in Color. Polaroid Edition ${index + 1}`} 
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
              alt={`Kyiv in Color. Polaroid Edition ${selectedImage + 1}`}
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


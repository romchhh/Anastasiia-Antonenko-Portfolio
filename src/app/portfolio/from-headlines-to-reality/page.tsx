'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ContactForm from '@/components/ContactForm';
import NavigationButton, { CloseButton } from '@/components/NavigationButton';

export default function FromHeadlinesToRealityPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'full'>('overview');
  // Modal state
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery images with absolute positioning based on provided coordinates
  const gap = 20;
  
  const galleryImages = [
    // ROW 1
    // Column 1
    { src: '/from headlines to reality/Anastasiia_Antonenko_Fragile Traces_06 2.png', width: 650, height: 932, top: 0, left: gap },
    // Column 2
    { src: '/from headlines to reality/Anastasiia_Antonenko_Fragile Traces_06 3.png', width: 438, height: 615, top: 0, left: 700 },
    
    // ROW 2
    // Column 1
    { src: '/from headlines to reality/Rectangle 76.png', width: 650, height: 466, top: 962, left: gap },
    // Column 2
    { src: '/from headlines to reality/Anastasiia_Antonenko_Fragile Traces_06 10.png', width: 438, height: 615, top: 645, left: 700 },
    
    // ROW 3
    // Column 1 - two images side by side
    { src: '/from headlines to reality/Anastasiia_Antonenko_Fragile Traces_06 12.png', width: 320, height: 444, top: 1458, left: gap },
    { src: '/from headlines to reality/Anastasiia_Antonenko_Fragile Traces_06 13.png', width: 320, height: 444, top: 1458, left: 350 },
    // Column 2
    { src: '/from headlines to reality/Anastasiia_Antonenko_Fragile Traces_06 11.png', width: 437, height: 612, top: 1290, left: 700 },
    
    // ROW 4
    // Column 1
    { src: '/from headlines to reality/Anastasiia_Antonenko_Fragile Traces_06 14.png', width: 533, height: 776, top: 1932, left: gap },
    // Column 2
    { src: '/from headlines to reality/Anastasiia_Antonenko_Fragile Traces_06 15.png', width: 553, height: 776, top: 1932, left: 585 }
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
    'This project reflects on how war reshapes urban space and emotional life. Cityscapes with tanks, ruins, and daily routines form a quiet archive of endurance, while collages of cut-out headlines reveal fractures between lived experience and public language.';

  const fullStoryText = `This project reflects on how war reshapes urban space and emotional experience, blending personal memory with documentary attention. At its core are cityscapes where ruins and everyday life coexist — tanks in squares, children passing wrecked machinery, civilians pausing at sites of destruction. Over months these scenes became a quiet archive of presence and endurance.

Research also explored how public language responds to trauma, focusing on Ukrainian headlines as markers of transition and fracture. Cut-out texts in collages act not as commentary but as ruptures and reminders, revealing how memory and meaning are rebuilt under pressure.

Born in Luhansk, I carry loss as both personal and generational, making this work not only about war but about presence and the human effort to hold on to meaning.`;
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] relative">
      <div className="mx-6 my-6 bg-transparent relative pr-[17rem]">
        {/* Header */}
        <Header title="FROM HEADLINES TO REALITY" subtitle="anastasiia antonenko" />

        {/* Main content area */}
        <main className="py-8 pl-12 pr-8">
            {/* Intro block with meta, separator and text; separator should not span the gallery below */}
            <div className="grid grid-cols-[260px_1px_1fr] gap-6 items-start">
              {/* Left meta column */}
              <aside className="text-[#1A1A1A]">
                <div className="space-y-8 pr-6 -ml-6">
                  <div>
                    <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">years:</p>
                    <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">2023–2024</p>
                  </div>
                  <div>
                    <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">medium:</p>
                    <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">collage of newspaper prints and analog photography on heavy paper, tea-dyed</p>
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
            <div className="-ml-12 -mr-8 mt-6 relative" style={{ height: '2738px' }}>
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
                    alt={`From Headlines to Reality ${index + 1}`} 
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
              alt={`From Headlines to Reality ${selectedImage + 1}`}
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

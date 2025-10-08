'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ContactForm from '@/components/ContactForm';
import NavigationButton, { CloseButton } from '@/components/NavigationButton';

export default function KyivInColorPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'full'>('overview');
  // Modal state
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery images with absolute positioning based on provided coordinates
  const gap = 20;
  
  const galleryImages = [
    // ROW 1
    // Column 1
    { src: '/Kyiv in Color/Rectangle 74.png', width: 638, height: 430, top: 0, left: gap },
    // Column 2
    { src: '/Kyiv in Color/1 997.png', width: 450, height: 277, top: 0, left: 688 },
    
    // ROW 2
    // Column 1
    { src: '/Kyiv in Color/19 97.png', width: 638, height: 431, top: 461, left: gap },
    // Column 2
    { src: '/Kyiv in Color/1 1000.png', width: 450, height: 276, top: 307, left: 688 },
    
    // ROW 3
    // Column 2
    { src: '/Kyiv in Color/1 1001.png', width: 450, height: 279, top: 613, left: 688 },
    
    // ROW 4
    // Column 1
    { src: '/Kyiv in Color/15 2.png', width: 430, height: 690, top: 922, left: gap },
    // Column 2
    { src: '/Kyiv in Color/19 99.png', width: 658, height: 426, top: 922, left: 480 },
    
    // ROW 5
    // Column 1
    { src: '/Kyiv in Color/1 999.png', width: 429, height: 293, top: 1642, left: 1 + gap },
    // Column 2
    { src: '/Kyiv in Color/19 100.png', width: 658, height: 426, top: 1378, left: 480 },
    
    // ROW 6
    // Column 1
    { src: '/Kyiv in Color/1 1002.png', width: 429, height: 294, top: 1965, left: 1 + gap },
    // Column 2
    { src: '/Kyiv in Color/19 101.png', width: 658, height: 425, top: 1834, left: 480 },
    
    // ROW 7
    // Column 1
    { src: '/Kyiv in Color/19 98.png', width: 533, height: 368, top: 2289, left: gap },
    // Column 2
    { src: '/Kyiv in Color/19 9911.png', width: 553, height: 368, top: 2289, left: 585 }
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
    'Kyiv in Color began during the full-scale invasion, documenting everyday life in the city. Hand-colored with markers, the photographs reveal Kyiv\'s resilience and vibrancy, turning ordinary scenes into reminders of endurance and the spirit of a city that refuses to fade.';

  const fullStoryText = `The photo project Kyiv in Color began when I was living in Kyiv during the full-scale invasion. Despite the chaos, I set out to document everyday life in the city. The photographs showed people in their natural state, but something was missing — color. By hand-coloring the images with markers, I brought out the vibrancy and diversity of Kyiv, highlighting its spirit even in times of conflict.

The series captures ordinary moments — people walking in the park, children playing, couples holding hands — made poignant by the crisis around them. It stands as a testament to the resilience of Kyiv's residents and the power of art to preserve memory.

Kyiv in Color is both a record of the city's endurance and a reminder of the challenges its people continue to overcome.`;
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] relative">
      <div className="mx-6 my-6 bg-transparent relative pr-[17rem]">
        {/* Header */}
        <Header title="KYIV IN COLOR" subtitle="anastasiia antonenko" />

        {/* Main content area */}
        <main className="py-8 pl-12 pr-8">
            {/* Intro block with meta, separator and text; separator should not span the gallery below */}
            <div className="grid grid-cols-[260px_1px_1fr] gap-6 items-start">
              {/* Left meta column */}
              <aside className="text-[#1A1A1A]">
                <div className="space-y-8 pr-6 -ml-6">
                  <div>
                    <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">year:</p>
                    <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">2022</p>
                  </div>
                  <div>
                    <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">medium:</p>
                    <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">analog photography, hand-colored with marker</p>
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
            <div className="-ml-12 -mr-8 mt-6 relative" style={{ height: '2677px' }}>
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
                    alt={`Kyiv in Color ${index + 1}`} 
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
              alt={`Kyiv in Color ${selectedImage + 1}`}
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


'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ContactForm from '@/components/ContactForm';
import NavigationButton, { CloseButton } from '@/components/NavigationButton';

export default function PhantomPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'full'>('overview');
  // Modal state
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery images with absolute positioning based on provided coordinates
  const gap = 20;
  
  const galleryImages = [
    // ROW 1
    // Column 1
    { src: '/Phantom/Rectangle 74.png', width: 658, height: 430, top: 0, left: gap },
    // Column 2
    { src: '/Phantom/4 2.png', width: 450, height: 687, top: 0, left: 688 },
    
    // ROW 2
    // Column 1 - two images side by side
    { src: '/Phantom/22 3.png', width: 314, height: 460, top: 460, left: gap },
    { src: '/Phantom/22 2.png', width: 314, height: 460, top: 460, left: 344 },
    // Column 2
    { src: '/Phantom/4 3.png', width: 449, height: 686, top: 717, left: 688 },
    
    // ROW 3
    // Column 1
    { src: '/Phantom/15 2.png', width: 658, height: 938, top: 950, left: gap },
    // Column 2
    { src: '/Phantom/4 4.png', width: 450, height: 687, top: 1433, left: 688 },
    
    // ROW 4
    // Column 1
    { src: '/Phantom/Rectangle 75.png', width: 658, height: 430, top: 1918, left: gap },
    
    // ROW 5
    // Column 1 - two images side by side
    { src: '/Phantom/22 4.png', width: 314, height: 460, top: 2378, left: gap },
    { src: '/Phantom/22 5.png', width: 314, height: 460, top: 2378, left: 344 },
    // Column 2
    { src: '/Phantom/4 5.png', width: 450, height: 687, top: 2151, left: 688 }
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
    'This project reflects on loneliness as a universal yet painful emotion. The figure in black with a distorted face symbolizes alienation and the struggle of feeling out of place. Created during my own period of isolation, the series is both personal reflection and reminder of the need for empathy.';

  const fullStoryText = `This project explores the complex world of human emotions, focusing on the painful yet universal feeling of loneliness. Loneliness can overwhelm us, make us feel cut off from others, and create a deep sense of disconnection.

The visual image of a man dressed in black with a distorted face shows the inner struggle of feeling alienated and out of place. It reflects the conflict many people experience when they feel like outsiders. The act of pushing others away — often a reaction to pain and depression — is something many can relate to. When emotions become too heavy, people tend to withdraw, which only makes the loneliness stronger.

I created this series during a time when I was going through a similar experience myself. The work became both a reflection of my own feelings and a way to process them.

This project is also a reminder of the importance of empathy and support for those who may be struggling. It emphasizes that loneliness is something we all share, and even a small gesture of kindness can help someone move back toward connection and inner peace.`;
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] relative">
      <div className="mx-6 my-6 bg-transparent relative pr-[17rem]">
        {/* Header */}
        <Header title="PHANTOM" subtitle="anastasiia antonenko" />

        {/* Main content area */}
        <main className="py-8 pl-12 pr-8">
            {/* Intro block with meta, separator and text; separator should not span the gallery below */}
            <div className="grid grid-cols-[260px_1px_1fr] gap-6 items-start">
              {/* Left meta column */}
              <aside className="text-[#1A1A1A]">
                <div className="space-y-8 pr-6 -ml-6">
                  <div>
                    <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">year:</p>
                    <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">2023</p>
                  </div>
                  <div>
                    <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">medium:</p>
                    <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">Analog photography</p>
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
            <div className="-ml-12 -mr-8 mt-6 relative" style={{ height: '2868px' }}>
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
                    alt={`Phantom ${index + 1}`} 
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
              alt={`Phantom ${selectedImage + 1}`}
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


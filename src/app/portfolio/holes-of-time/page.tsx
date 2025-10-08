'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ContactForm from '@/components/ContactForm';
import NavigationButton, { CloseButton } from '@/components/NavigationButton';

export default function HolesOfTimePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'full'>('overview');
  // Modal state
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery images with equal spacing (gap = 20px)
  // Each column is independent - images flow sequentially with gaps
  const gap = 20;
  const col1Width = 658; // First column width
  const smallWidth = 319; // Small images width (2 images + gap = 658px: 319 + 20 + 319 = 658)
  const smallHeight = 489; // Small images height (proportional to 319/314 * 481)
  
  const galleryImages = [
    // COLUMN 1 (left column - 658px wide)
    // Rectangle 74.png: starts at 0, ends at 430
    { src: '/holes of time/Rectangle 74.png', width: 658, height: 430, top: 0, left: gap, row: 1 },
    // 19 97.png: starts at 430 + 20 = 450, ends at 880
    { src: '/holes of time/19 97.png', width: 658, height: 430, top: 450, left: gap, row: 2 },
    // 22 2.png + 22 3.png: start at 880 + 20 = 900, end at 1389
    { src: '/holes of time/22 2.png', width: smallWidth, height: smallHeight, top: 900, left: gap, row: 3 },
    { src: '/holes of time/22 3.png', width: smallWidth, height: smallHeight, top: 900, left: smallWidth + gap * 2, row: 3 },
    // 19 98.png: starts at 1389 + 20 = 1409, ends at 1839
    { src: '/holes of time/19 98.png', width: 658, height: 430, top: 1409, left: gap, row: 4 },
    // 22 4.png + 22 5.png: start at 1839 + 20 = 1859, end at 2348
    { src: '/holes of time/22 4.png', width: smallWidth, height: smallHeight, top: 1859, left: gap, row: 5 },
    { src: '/holes of time/22 5.png', width: smallWidth, height: smallHeight, top: 1859, left: smallWidth + gap * 2, row: 5 },
    
    // COLUMN 2 (right column - 427px wide, aligned top and bottom with column 1)
    // 1 997.png: starts at 0, ends at 408 (427x408)
    { src: '/holes of time/1 997.png', width: 427, height: 408, top: 0, left: col1Width + gap * 2, row: 1 },
    // 4 2.png: starts at 408 + 20 = 428, ends at 1082 (427x654)
    { src: '/holes of time/4 2.png', width: 427, height: 654, top: 428, left: col1Width + gap * 2, row: 2 },
    // 1 998.png: starts at 1082 + 20 = 1102, ends at 1381 (427x279)
    { src: '/holes of time/1 998.png', width: 427, height: 279, top: 1102, left: col1Width + gap * 2, row: 3 },
    // 15 2.png: starts at 1381 + 20 = 1401, ends at 2056 (427x655)
    { src: '/holes of time/15 2.png', width: 427, height: 655, top: 1401, left: col1Width + gap * 2, row: 4 },
    // 1 999.png: starts at 2056 + 20 = 2076, ends at 2348 (427x272)
    { src: '/holes of time/1 999.png', width: 427, height: 272, top: 2076, left: col1Width + gap * 2, row: 5 }
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
    'Holes of Time is a series of damaged negatives I found after leaving my home country. Stripped of faces and details, they reflect fragmented memory and collective erasure. These images stand as quiet monuments to what endures when so much is lost.';

  const fullStoryText = `I discovered a forgotten roll of negatives in an abandoned apartment I moved into after leaving my home country. The images belonged to a family I never met, people whose names, lives, and stories I'll never know. And yet, their traces remained — silent, undeveloped, almost erased by time.

I chose to keep these photographs. But since I could not access the truth behind them, I began to interpret them through my own lens — emotionally, historically, intuitively. The film had already been damaged by chemical reactions, leaving behind black voids and white burns. I didn't try to repair these traces. I embraced them.

Holes of Time is a visual meditation on the right to remember — even when memory is borrowed, fragmented, or incomplete. The missing faces and distorted bodies speak not only of personal loss but of collective erasure. These "holes" become symbols of the many stories we never hear: lives consumed by war, migration, neglect, or historical violence.

In a time when truth is increasingly fragile, I see these damaged images as quiet monuments — not to what is known, but to what refuses to disappear.`;
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] relative">
      <div className="mx-6 my-6 bg-transparent relative pr-[17rem]">
        {/* Header */}
        <Header title="HOLES OF TIME" subtitle="anastasiia antonenko" />

        {/* Main content area */}
        <main className="py-8 pl-12 pr-8">
            {/* Intro block with meta, separator and text; separator should not span the gallery below */}
            <div className="grid grid-cols-[260px_1px_1fr] gap-6 items-start">
              {/* Left meta column */}
              <aside className="text-[#1A1A1A]">
                <div className="space-y-8 pr-6 -ml-6">
                  <div>
                    <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">years:</p>
                    <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">2024–2025</p>
                  </div>
                  <div>
                    <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">medium:</p>
                    <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">hand-burned film negative using matches</p>
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

            {/* Gallery: exact Figma layout with absolute positioning */}
            <div className="-ml-12 -mr-8 mt-6 relative" style={{ height: '2348px' }}>
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
                    alt={`Holes of Time ${index + 1}`} 
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
              alt={`Holes of Time ${selectedImage + 1}`}
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

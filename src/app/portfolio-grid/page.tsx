'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ContactForm from '@/components/ContactForm';
import NavigationButton, { CloseButton } from '@/components/NavigationButton';

export default function PortfolioGridPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const router = useRouter();

  // Gallery images with equal spacing (gap = 40px)
  // Each column is independent - images flow sequentially with gaps
  // Gap includes space for text captions
  const gap = 40;
  const col1Width = 400; // First column width (smaller)
  const col2Width = 620; // Second column width (larger) - slightly increased for single images
  const smallWidth = 290; // Small images width for second column (2 small images = 290 + 20 + 290 = 600)
  
  const portfolioItems = [
    // COLUMN 1 (left column - 400px wide)
    // 2 3.png: starts at 0, ends at 560
    {
      id: 'fragile-traces',
      title: 'FRAGILE TRACES',
      year: '2025',
      image: '/portfolio/2 3.png',
      width: col1Width,
      height: 560,
      top: 0,
      left: gap,
      row: 1,
      description: 'A series exploring the delicate nature of memory and time.',
      link: '/portfolio/fragile-traces'
    },
    // Rectangle 741.png: starts at 560 + 80 = 640, ends at 950
    {
      id: 'from-headlines-to-reality',
      title: 'FROM HEADLINES TO REALITY',
      year: '2023–2024',
      image: '/portfolio/Rectangle 741.png',
      width: col1Width,
      height: 310,
      top: 640,
      left: gap,
      row: 2,
      description: 'Collage work examining the intersection of news and personal experience.',
      link: '/portfolio/from-headlines-to-reality'
    },
    // 2 32.png: starts at 950 + 80 = 1030, ends at 1590
    {
      id: 'phantom',
      title: 'PHANTOM',
      year: '2023',
      image: '/portfolio/2 32.png',
      width: col1Width,
      height: 560,
      top: 1030,
      left: gap,
      row: 3,
      description: 'Ghostly figures in urban landscapes.',
      link: '/portfolio/phantom'
    },
    // Rectangle 742.png: starts at 1590 + 80 = 1670, ends at 2010 + 42 = 2052
    {
      id: 'kyiv-in-color',
      title: 'KYIV IN COLOR',
      year: '2022',
      image: '/portfolio/Rectangle 742.png',
      width: col1Width,
      height: 340,
      top: 1712,
      left: gap,
      row: 4,
      description: 'Early exploration of selective color in urban photography.',
      link: '/portfolio/kyiv-in-color'
    },

    // COLUMN 2 (right column - 600px wide, aligned top and bottom with column 1)
    // Rectangle 74.png: starts at 0, ends at 440
    {
      id: 'holes-of-time',
      title: 'HOLES OF TIME',
      year: '2024–2025',
      image: '/portfolio/Rectangle 74.png',
      width: col2Width,
      height: 440,
      top: 0,
      left: col1Width + gap * 2,
      row: 1,
      description: 'Damaged negatives reflecting fragmented memory and collective erasure.',
      link: '/portfolio/holes-of-time'
    },
    // Rectangle 72.png + 2 31.png: start at 440 + 80 = 520, end at 925
    {
      id: 'in-the-eyes-of-others',
      title: 'IN THE EYES OF OTHERS',
      year: '2025',
      image: '/portfolio/Rectangle 72.png',
      width: smallWidth,
      height: 405,
      top: 520,
      left: col1Width + gap * 2,
      row: 2,
      description: 'A study of perception and identity through portraiture.',
      link: '/portfolio/in-the-eyes-of-others'
    },
    {
      id: 'washed-memories',
      title: 'WASHED MEMORIES',
      year: '2024',
      image: '/portfolio/2 31.png',
      width: smallWidth,
      height: 405,
      top: 520,
      left: col1Width + gap * 2 + smallWidth + gap,
      row: 2,
      description: 'Exploration of memory through water and time.',
      link: '/portfolio/washed-memories'
    },
    // Rectangle 721.png: starts at 925 + 80 = 1005, ends at 1583
    {
      id: 'air-alarm',
      title: 'AIR ALARM',
      year: '2023',
      image: '/portfolio/Rectangle 721.png',
      width: col2Width,
      height: 578,
      top: 1005,
      left: col1Width + gap * 2,
      row: 3,
      description: 'Visual response to conflict and its impact on daily life.',
      link: '/portfolio/air-alarm'
    },
    // Rectangle 723.png + 2 33.png: start at 1583 + 80 = 1663, end at 2052
    {
      id: 'kyiv-in-color-polaroid',
      title: 'KYIV IN COLOR. POLAROID EDITION',
      year: '2022–2023',
      image: '/portfolio/Rectangle 723.png',
      width: smallWidth,
      height: 389,
      top: 1663,
      left: col1Width + gap * 2,
      row: 4,
      description: 'Polaroid documentation of Kyiv with selective color highlighting.',
      link: '/portfolio/kyiv-in-color-polaroid'
    },
    {
      id: 'down-in-flames',
      title: 'DOWN IN FLAMES',
      year: '2022',
      image: '/portfolio/2 33.png',
      width: smallWidth,
      height: 389,
      top: 1663,
      left: col1Width + gap * 2 + smallWidth + gap,
      row: 4,
      description: 'Metaphorical exploration of destruction and rebirth.',
      link: '/portfolio/down-in-flames'
    }
  ];

  const handleItemClick = (item: typeof portfolioItems[number], index: number) => {
    if (item.link) {
      router.push(item.link);
    } else {
      setSelectedImage(index);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % portfolioItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + portfolioItems.length) % portfolioItems.length);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] relative">
      <div className="mx-6 my-6 bg-transparent relative pr-[17rem]">
        {/* Header */}
        <Header title="PORTFOLIO" subtitle="anastasiia antonenko" />

        {/* Main content area */}
        <main className="py-8 pl-12 pr-8">
          {/* Portfolio Grid with absolute positioning */}
          <div className="-ml-12 -mr-8 relative" style={{ height: '2200px' }}>
            {portfolioItems.map((item, index) => (
              <div key={item.id} className="absolute" style={{ top: `${item.top}px`, left: `${item.left}px` }}>
                {/* Image */}
                <div 
                  className="overflow-hidden bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  style={{
                    width: `${item.width}px`,
                    height: `${item.height}px`
                  }}
                  onClick={() => handleItemClick(item, index)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                {/* Caption */}
                <div className="mt-2 mb-20" style={{ width: `${item.width}px` }}>
                  <h3 className="text-[18.2px] font-normal leading-[150%] tracking-[-0.01em] text-[#1A1A1A] uppercase" style={{ fontFamily: 'Work Sans' }}>
                    {item.title}
                  </h3>
                  <p className="text-[16px] font-normal leading-[150%] tracking-[-0.01em] text-[#515151] mt-1" style={{ fontFamily: 'Work Sans' }}>
                    {item.year}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="mt-0 pt-0">
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
          {/* Close button */}
          <CloseButton
            onClick={closeModal}
            className="fixed top-8 right-8"
          />

          <div className="relative mx-4 flex items-center justify-center">
            {/* Image */}
            <img
              src={portfolioItems[selectedImage].image}
              alt={portfolioItems[selectedImage].title}
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

          {/* Image info */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white">
            <h3 className="text-[18px] font-normal tracking-[0.03em] uppercase">
              {portfolioItems[selectedImage].title}
            </h3>
            <p className="text-[14px] font-normal tracking-[0.03em] opacity-80">
              {portfolioItems[selectedImage].year}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

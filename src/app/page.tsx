'use client';

import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import NavigationButton from '@/components/NavigationButton';

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Масив пар фото (вертикальне + горизонтальне)
  const slides = [
    {
      vertical: "/gallery/2 1.png",
      horizontal: "/gallery/Frame 458.png",
    },
    {
      vertical: "/gallery/2 11.png",
      horizontal: "/gallery/Frame 4581.png",
    },
    {
      vertical: "/gallery/2 12.png",
      horizontal: "/gallery/Frame 4582.png",
    },
    {
      vertical: "/gallery/2 13.png",
      horizontal: "/gallery/Frame 4583.png",
    },
    {
      vertical: "/gallery/2 14.png",
      horizontal: "/gallery/Frame 4584.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance every 10 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col relative">
      {/* Header */}
      <header className="bg-transparent relative">
        <div className="px-12 py-8">
          <h1 className="text-[45px] font-normal tracking-[0.03em] text-[#1A1A1A]">
            ANASTASIIA ANTONENKO
          </h1>
        </div>
        {/* Horizontal line that ends where the sidebar starts */}
        <div className="absolute bottom-0 left-0 right-[17rem] h-px bg-gray-300" />
      </header>

      {/* Main Content */}
      <div className="flex-1">
        {/* Gallery Section */}
        <main className="py-8 pr-[17rem] pl-12">
          <div>
            <div className="relative">
              {/* Two Photos Layout */}
              <div className="flex gap-6">
                {/* Vertical Photo */}
                <div className="w-[35%] relative">
                  <div className="aspect-[3/4] overflow-hidden bg-transparent">
                    <img
                      src={slides[currentSlide].vertical}
                      alt="Vertical photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Horizontal Photo */}
                <div className="w-[58%] relative mt-8">
                  <div className="aspect-[4/3] overflow-hidden bg-transparent">
                    <img
                      src={slides[currentSlide].horizontal}
                      alt="Horizontal photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Email below images */}
              <div className="text-right mt-16 pr-12">
                <p className="text-[16px] tracking-[0.03em] text-[#515151]">stushaphotofilm@gmail.com</p>
              </div>

              {/* Navigation Buttons */}
              <NavigationButton
                direction="left"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                variant="carousel"
              />
              
              <NavigationButton
                direction="right"
                onClick={nextSlide}
                className="absolute left-[calc(35%+1.5rem+58%-4rem)] top-1/2 -translate-y-1/2"
                variant="carousel"
              />
            </div>
          </div>
        </main>
      </div>

      {/* Sidebar Navigation - fixed positioned */}
      <div className="fixed top-0 bottom-0 right-0 w-[17rem]">
        <Sidebar />
      </div>
    </div>
  );
}
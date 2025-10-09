'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ContactForm from '@/components/ContactForm';
import BurgerMenu from '@/components/BurgerMenu';

export default function ProcessPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const processImages = {
    chemical: '/process/Frame 645.png',
    instant: '/process/Frame 6451.png',
    material: '/process/Frame 6452.png',
    embroidery: '/process/Frame 6453.png',
    bookmaking: '/process/Frame 6454.png'
  };


  return (
    <div className="min-h-screen bg-[#F5F5F5] relative overflow-x-hidden">
      {/* Burger Menu - mobile only */}
      <div className="md:hidden">
        <BurgerMenu 
          isOpen={isMobileMenuOpen} 
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        />
      </div>
      
      {/* Mobile Header - only shows on mobile screens */}
      <header className="md:hidden bg-transparent relative">
        <div className="px-5 pt-4 pb-4 flex items-center justify-between">
          <h1 
            className="text-[22px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] uppercase"
            style={{ fontFamily: 'Work Sans' }}
          >
            PROCESS
          </h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-6 bg-black transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-black transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
        {/* Horizontal line */}
        <div className="absolute bottom-0 left-5 right-0 h-px bg-gray-300" />
      </header>

      {/* Author name under horizontal line - right aligned, clickable */}
      <div className="md:hidden px-5 pt-3 pb-2 flex justify-end">
        <button
          onClick={() => window.location.href = '/'}
          className="text-[16px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] lowercase hover:opacity-70 transition-opacity"
          style={{ fontFamily: 'Work Sans' }}
        >
          anastasiia antonenko
        </button>
      </div>
      
      <div className="md:mx-3 lg:mx-6 md:my-3 lg:my-6 bg-transparent relative pr-0 md:pr-[17rem]">
        {/* Desktop/Tablet Header */}
        <div className="hidden md:block">
          <Header title="PROCESS" subtitle="anastasiia antonenko" />
        </div>

        <main className="py-2 md:py-4 lg:py-8 px-5 md:px-2 lg:pl-12 lg:pr-8">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            
            {/* Top Section - Overview and Handmade Techniques */}
            <div className="relative grid grid-cols-[1fr_1fr] gap-6 mb-8">
              {/* Vertical line between sections */}
              <div className="absolute left-[40%] w-px bg-gray-300" style={{ top: '-32px', bottom: '-32px' }} />
              {/* Left Column - Overview */}
              <div className="text-[#1A1A1A]">
                <h2 
                  className="text-[22px] font-medium leading-[150%] tracking-[-0.01em] text-[#1A1A1A] lowercase mb-4"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  overview:
                </h2>
                <div 
                  className="text-[16px] font-normal leading-[150%] tracking-[-0.01em] text-[#1A1A1A] lowercase"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  <div>film soup, bleach,</div>
                  <div>altered negatives,</div>
                  <div>hand-painted photographs, acetone transfer,</div>
                  <div>material experiments, embroidery, zines & books</div>
                </div>
              </div>

              {/* Right Column - Handmade Techniques */}
              <div className="text-[#1A1A1A]">
                <h3 
                  className="text-[45px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] lowercase mb-6"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  handmade techniques
                </h3>
                <div className="space-y-4 text-[18px] font-normal leading-[150%] tracking-[-0.01em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                  <p>
                    Since childhood, I have been engaged in creative practices, and I have always loved working with my hands: cutting, burning, gluing, embroidering. For me, this process is not only about the final result, but also about the act itself — sometimes it becomes meditative.
                  </p>
                  <p>
                    In my artistic practice, handwork is a way to add something deeply personal, to step beyond the frame, and to reveal a part of the process that usually remains &quot;behind the scenes.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom horizontal line */}
            <div className="absolute left-5 right-[15.5rem] h-px bg-gray-300 mb-8" />

            {/* Bottom Section - Image and Chemical Intervention */}
            <div className="grid grid-cols-[1fr_1fr] gap-1 mt-8">
              {/* Left Column - Chemical Intervention Image */}
              <div className="relative">
                <div className="relative overflow-hidden">
                  <img 
                    src={processImages.chemical} 
                    alt="Chemical Intervention Process" 
                    className="w-3/4 h-auto object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Chemical Intervention */}
              <div className="text-[#1A1A1A]">
                <h3 
                  className="text-[45px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] lowercase mb-6"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  chemical intervention
                </h3>
                <div className="space-y-4 text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                  <p>
                    One of my methods of working with negatives begins with a so-called film soup, after which the film is developed. Later, I might burn it slightly, or draw on top of it with any kind of material.
                  </p>
                  <p>
                    A printed photograph altered with bleach to create unpredictable visual effects through chemical intervention.
                  </p>
                  <p>
                    One of my favorite techniques: drawing directly on negatives with markers. It is a very intimate way of interacting with the material, giving the photograph a new life.
                  </p>
                  <p className="text-[14px] font-medium text-[#666666] mt-4" style={{ fontFamily: 'Work Sans' }}>
                    used in project: Air Alarm
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Sections */}
            <div className="mt-12 space-y-12">
              {/* Instant Photo-painting */}
              <div className="grid grid-cols-[1fr_1fr] gap-1">
                {/* Left Column - Instant Photo-painting Image */}
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <img 
                      src={processImages.instant} 
                      alt="Instant Photo-painting Process" 
                      className="w-3/4 h-auto object-cover"
                    />
                  </div>
                </div>
                
                {/* Right Column - Instant Photo-painting Text */}
                <div className="text-[#1A1A1A]">
                  <h3 
                    className="text-[45px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] lowercase mb-6"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    instant photo-painting
                  </h3>
                  <div className="space-y-4 text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                    <p>
                      Working with instant photography: a black-and-white instant image hand-painted with acrylics. This process merges the documentary nature of the photograph with the expressiveness of painting.
                    </p>
                    <p>
                      Hand-painting on top of instant photographs. This technique allows me to create a different mood from the original image.
                    </p>
                    <p>
                      Hand-painting an instant photograph with paints, where color becomes an added layer of meaning.
                    </p>
                    <p className="text-[14px] font-medium text-[#666666] mt-4" style={{ fontFamily: 'Work Sans' }}>
                      used in projects: Kyiv in Color, Air Alarm
                    </p>
                  </div>
                </div>
              </div>

              {/* Material Experiments */}
              <div className="grid grid-cols-[1fr_1fr] gap-1">
                {/* Left Column - Material Experiments Image */}
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <img 
                      src={processImages.material} 
                      alt="Material Experiments Process" 
                      className="w-3/4 h-auto object-cover"
                    />
                  </div>
                </div>
                
                {/* Right Column - Material Experiments Text */}
                <div className="text-[#1A1A1A]">
                  <h3 
                    className="text-[45px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] lowercase mb-6"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    material experiments
                  </h3>
                  <div className="space-y-4 text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                    <p>
                      The acetone transfer technique, which I used to transfer my photographs onto thick paper. This method became a way of preparing material for a future artist book.
                    </p>
                    <p>
                      In my home studio I often experiment with unconventional materials. In this series, I used receipt paper colored with markers, which later became part of the project Alien Chronicles.
                    </p>
                    <p className="text-[14px] font-medium text-[#666666] mt-4" style={{ fontFamily: 'Work Sans' }}>
                      used in projects: Air Alarm, Holes of Time, From Headlines to Reality, Down in Flames
                    </p>
                  </div>
                </div>
              </div>

              {/* Embroidery on photography */}
              <div className="grid grid-cols-[1fr_1fr] gap-1">
                {/* Left Column - Embroidery Image */}
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <img 
                      src={processImages.embroidery} 
                      alt="Embroidery on Photography Process" 
                      className="w-3/4 h-auto object-cover"
                    />
                  </div>
                </div>
                
                {/* Right Column - Embroidery Text */}
                <div className="text-[#1A1A1A]">
                  <h3 
                    className="text-[45px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] lowercase mb-6"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    embroidery on photography
                  </h3>
                  <div className="space-y-4 text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                    <p>
                      Embroidery on photography: a hand-stitched image created directly on photographs. I use different types of paper surfaces and various embroidery techniques with threads to enhance the mood or emphasize an idea.
                    </p>
                    <p>
                      Threads have become a part of my series such as Kyiv in Color Polaroids and the separate series Connection and Rupture.
                    </p>
                    <p className="text-[14px] font-medium text-[#666666] mt-4" style={{ fontFamily: 'Work Sans' }}>
                      used in project: Kyiv in Color version Polaroids
                    </p>
                  </div>
                </div>
                <div></div>
              </div>

              {/* Book-making */}
              <div className="grid grid-cols-[1fr_1fr] gap-1">
                {/* Left Column - Book-making Image */}
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <img 
                      src={processImages.bookmaking} 
                      alt="Book-making Process" 
                      className="w-3/4 h-auto object-cover"
                    />
                  </div>
                </div>
                
                {/* Right Column - Book-making Text */}
                <div className="text-[#1A1A1A]">
                  <h3 
                    className="text-[45px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] lowercase mb-6"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    book-making
                  </h3>
                  <div className="space-y-4 text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                    <p>
                      Currently, I create various artist books using instant photographs. I cut out parts of the images and assemble them together, forming unique handmade art books. My art books are often inspired by different exhibitions, and through this practice, I have developed various collaborations, such as Yagallery and Voitok Gallery.
                    </p>
                    <p>
                      Each book becomes a space to experiment, combine visual ideas, and create a tactile experience that extends beyond traditional photography.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden">
            {/* Overview Section */}
            <div className="mb-8">
              <h2 
                className="text-[20px] md:text-[22px] font-medium leading-[150%] tracking-[-0.01em] text-[#1A1A1A] lowercase mb-4"
                style={{ fontFamily: 'Work Sans' }}
              >
                overview:
              </h2>
              <div 
                className="text-[16px] md:text-[18px] font-normal leading-[150%] tracking-[-0.01em] text-[#1A1A1A] lowercase"
                style={{ fontFamily: 'Work Sans' }}
              >
                <div>film soup, bleach,</div>
                <div>altered negatives,</div>
                <div>hand-painted photographs, acetone transfer,</div>
                <div>material experiments, embroidery, zines & books</div>
              </div>
            </div>

            {/* Handmade Techniques */}
            <div className="mb-8">
              <h3 
                className="text-[28px] md:text-[36px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] lowercase mb-6"
                style={{ fontFamily: 'Work Sans' }}
              >
                handmade techniques
              </h3>
              <div className="space-y-4 text-[16px] md:text-[18px] font-normal leading-[150%] tracking-[-0.01em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                <p>
                  Since childhood, I have been engaged in creative practices, and I have always loved working with my hands: cutting, burning, gluing, embroidering. For me, this process is not only about the final result, but also about the act itself — sometimes it becomes meditative.
                </p>
                <p>
                  In my artistic practice, handwork is a way to add something deeply personal, to step beyond the frame, and to reveal a part of the process that usually remains &quot;behind the scenes.&quot;
                </p>
              </div>
              
              {/* Horizontal line separator */}
              <div className="h-px bg-gray-300 mt-8" />
            </div>

            {/* Chemical Intervention */}
            <div className="mb-8">
              {/* Chemical Intervention Image */}
              <div className="mb-6">
                <img 
                  src={processImages.chemical} 
                  alt="Chemical Intervention Process" 
                  className="w-3/4 h-auto object-cover"
                />
              </div>
              <h3 
                className="text-[28px] md:text-[36px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] lowercase mb-6"
                style={{ fontFamily: 'Work Sans' }}
              >
                chemical intervention
              </h3>
              <div className="space-y-4 text-[16px] md:text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                <p>
                  One of my methods of working with negatives begins with a so-called film soup, after which the film is developed. Later, I might burn it slightly, or draw on top of it with any kind of material.
                </p>
                <p>
                  A printed photograph altered with bleach to create unpredictable visual effects through chemical intervention.
                </p>
                <p>
                  One of my favorite techniques: drawing directly on negatives with markers. It is a very intimate way of interacting with the material, giving the photograph a new life.
                </p>
                <p className="text-[12px] md:text-[14px] font-medium text-[#666666] mt-4" style={{ fontFamily: 'Work Sans' }}>
                  used in project: Air Alarm
                </p>
              </div>
            </div>

            {/* Instant Photo-painting */}
            <div className="mb-8">
              {/* Instant Photo-painting Image */}
              <div className="mb-6">
                <img 
                  src={processImages.instant} 
                  alt="Instant Photo-painting Process" 
                  className="w-3/4 h-auto object-cover"
                />
              </div>
              <h3 
                className="text-[28px] md:text-[36px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] lowercase mb-6"
                style={{ fontFamily: 'Work Sans' }}
              >
                instant photo-painting
              </h3>
              <div className="space-y-4 text-[16px] md:text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                <p>
                  Working with instant photography: a black-and-white instant image hand-painted with acrylics. This process merges the documentary nature of the photograph with the expressiveness of painting.
                </p>
                <p>
                  Hand-painting on top of instant photographs. This technique allows me to create a different mood from the original image.
                </p>
                <p>
                  Hand-painting an instant photograph with paints, where color becomes an added layer of meaning.
                </p>
                <p className="text-[12px] md:text-[14px] font-medium text-[#666666] mt-4" style={{ fontFamily: 'Work Sans' }}>
                  used in projects: Kyiv in Color, Air Alarm
                </p>
              </div>
            </div>

            {/* Material Experiments */}
            <div className="mb-8">
              {/* Material Experiments Image */}
              <div className="mb-6">
                <img 
                  src={processImages.material} 
                  alt="Material Experiments Process" 
                  className="w-3/4 h-auto object-cover"
                />
              </div>
              <h3 
                className="text-[28px] md:text-[36px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] lowercase mb-6"
                style={{ fontFamily: 'Work Sans' }}
              >
                material experiments
              </h3>
              <div className="space-y-4 text-[16px] md:text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                <p>
                  The acetone transfer technique, which I used to transfer my photographs onto thick paper. This method became a way of preparing material for a future artist book.
                </p>
                <p>
                  In my home studio I often experiment with unconventional materials. In this series, I used receipt paper colored with markers, which later became part of the project Alien Chronicles.
                </p>
                <p className="text-[12px] md:text-[14px] font-medium text-[#666666] mt-4" style={{ fontFamily: 'Work Sans' }}>
                  used in projects: Air Alarm, Holes of Time, From Headlines to Reality, Down in Flames
                </p>
              </div>
            </div>

            {/* Embroidery on photography */}
            <div className="mb-8">
              {/* Embroidery Image */}
              <div className="mb-6">
                <img 
                  src={processImages.embroidery} 
                  alt="Embroidery on Photography Process" 
                  className="w-3/4 h-auto object-cover"
                />
              </div>
              <h3 
                className="text-[28px] md:text-[36px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] lowercase mb-6"
                style={{ fontFamily: 'Work Sans' }}
              >
                embroidery on photography
              </h3>
              <div className="space-y-4 text-[16px] md:text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                <p>
                  Embroidery on photography: a hand-stitched image created directly on photographs. I use different types of paper surfaces and various embroidery techniques with threads to enhance the mood or emphasize an idea.
                </p>
                <p>
                  Threads have become a part of my series such as Kyiv in Color Polaroids and the separate series Connection and Rupture.
                </p>
                <p className="text-[12px] md:text-[14px] font-medium text-[#666666] mt-4" style={{ fontFamily: 'Work Sans' }}>
                  used in project: Kyiv in Color version Polaroids
                </p>
              </div>
            </div>

            {/* Book-making */}
            <div className="mb-8">
              {/* Book-making Image */}
              <div className="mb-6">
                <img 
                  src={processImages.bookmaking} 
                  alt="Book-making Process" 
                  className="w-3/4 h-auto object-cover"
                />
              </div>
              <h3 
                className="text-[28px] md:text-[36px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] lowercase mb-6"
                style={{ fontFamily: 'Work Sans' }}
              >
                book-making
              </h3>
              <div className="space-y-4 text-[16px] md:text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                <p>
                  Currently, I create various artist books using instant photographs. I cut out parts of the images and assemble them together, forming unique handmade art books. My art books are often inspired by different exhibitions, and through this practice, I have developed various collaborations, such as Yagallery and Voitok Gallery.
                </p>
                <p>
                  Each book becomes a space to experiment, combine visual ideas, and create a tactile experience that extends beyond traditional photography.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-8 md:mt-12 lg:mt-16">
            <ContactForm />
          </div>
        </main>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed top-0 bottom-0 right-0 w-[17rem]">
        <Sidebar />
      </div>
    </div>
  );
}

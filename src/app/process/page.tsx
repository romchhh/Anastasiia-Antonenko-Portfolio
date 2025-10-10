'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ContactForm from '@/components/ContactForm';
import BurgerMenu from '@/components/BurgerMenu';
import NavigationButton from '@/components/NavigationButton';

export default function ProcessPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [chemicalIndex, setChemicalIndex] = useState(0);
  const [instantIndex, setInstantIndex] = useState(0);
  const [materialIndex, setMaterialIndex] = useState(0);
  const [embroideryIndex, setEmbroideryIndex] = useState(0);
  const [bookmakingIndex, setBookmakingIndex] = useState(0);

  const processImages = {
    chemical: [
      '/process/4 7.png',
      '/process/4 71.png',
      '/process/4 72.png'
    ],
    instant: [
      '/process/27 2.png',
      '/process/27 21.png',
      '/process/27 22.png'
    ],
    material: [
      '/process/8 3.png',
      '/process/8 31.png',
      '/process/8 32.png'
    ],
    embroidery: [
      '/process/8 2.png',
      '/process/8 21.png',
      '/process/8 22.png'
    ],
    bookmaking: [
      '/process/8 4.png',
      '/process/8 41.png',
      '/process/8 42.png'
    ]
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
            <div className="relative grid grid-cols-[1fr_1fr] gap-4 md:gap-6 mb-8">
              {/* Vertical line between sections */}
              <div className="absolute left-[40%] w-px bg-gray-300" style={{ top: '-32px', bottom: '-32px' }} />
              {/* Left Column - Overview */}
              <div className="text-[#1A1A1A] pr-4 md:pr-6 lg:pr-8">
                <h2 
                  className="text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-[150%] tracking-[-0.01em] text-[#1A1A1A] lowercase mb-3 md:mb-4"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  overview:
                </h2>
                <div 
                  className="text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[150%] tracking-[-0.01em] text-[#1A1A1A] lowercase break-words"
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
                  className="text-[32px] md:text-[38px] lg:text-[45px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] lowercase mb-4 md:mb-5 lg:mb-6"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  handmade techniques
                </h3>
                <div className="space-y-3 md:space-y-4 text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-[150%] tracking-[-0.01em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
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
            <div className="flex gap-4 md:gap-6 lg:gap-8 mt-16">
              {/* Left Column - Chemical Intervention Image Carousel */}
              <div className="relative flex-shrink-0 w-[45%] lg:w-[35%]">
                <div className="relative overflow-hidden group">
                  <img 
                    src={processImages.chemical[chemicalIndex]} 
                    alt="Chemical Intervention Process" 
                    className="w-full h-auto object-cover"
                  />
                  {/* Navigation buttons */}
                  {processImages.chemical.length > 1 && (
                    <>
                      <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <NavigationButton 
                          direction="left"
                          onClick={() => setChemicalIndex((prev) => 
                            prev === 0 ? processImages.chemical.length - 1 : prev - 1
                          )}
                        />
                      </div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <NavigationButton 
                          direction="right"
                          onClick={() => setChemicalIndex((prev) => 
                            prev === processImages.chemical.length - 1 ? 0 : prev + 1
                          )}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Right Column - Chemical Intervention */}
              <div className="text-[#1A1A1A] flex-1">
                <h3 
                  className="text-[32px] md:text-[38px] lg:text-[45px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] lowercase mb-4 md:mb-5 lg:mb-6"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  chemical intervention
                </h3>
                <div className="space-y-3 md:space-y-4 text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                  <p>
                    One of my methods of working with negatives begins with a so-called film soup, after which the film is developed. Later, I might burn it slightly, or draw on top of it with any kind of material.
                  </p>
                  <p>
                    A printed photograph altered with bleach to create unpredictable visual effects through chemical intervention.
                  </p>
                  <p>
                    One of my favorite techniques: drawing directly on negatives with markers. It is a very intimate way of interacting with the material, giving the photograph a new life.
                  </p>
                  <p className="text-[12px] md:text-[13px] lg:text-[14px] font-medium text-[#666666] mt-3 md:mt-4" style={{ fontFamily: 'Work Sans' }}>
                    used in project: Air Alarm
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Sections */}
            <div className="mt-12 space-y-12">
              {/* Instant Photo-painting */}
              <div className="flex gap-4 md:gap-6 lg:gap-8">
                {/* Left Column - Instant Photo-painting Image Carousel */}
                <div className="relative flex-shrink-0 w-[45%] lg:w-[35%]">
                  <div className="relative overflow-hidden group">
                    <img 
                      src={processImages.instant[instantIndex]} 
                      alt="Instant Photo-painting Process" 
                      className="w-full h-auto object-cover"
                    />
                    {/* Navigation buttons */}
                    {processImages.instant.length > 1 && (
                      <>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                          <NavigationButton 
                            direction="left"
                            onClick={() => setInstantIndex((prev) => 
                              prev === 0 ? processImages.instant.length - 1 : prev - 1
                            )}
                          />
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <NavigationButton 
                            direction="right"
                            onClick={() => setInstantIndex((prev) => 
                              prev === processImages.instant.length - 1 ? 0 : prev + 1
                            )}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Right Column - Instant Photo-painting Text */}
                <div className="text-[#1A1A1A] flex-1">
                  <h3 
                    className="text-[32px] md:text-[38px] lg:text-[45px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] lowercase mb-4 md:mb-5 lg:mb-6"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    instant photo-painting
                  </h3>
                  <div className="space-y-3 md:space-y-4 text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                    <p>
                      Working with instant photography: a black-and-white instant image hand-painted with acrylics. This process merges the documentary nature of the photograph with the expressiveness of painting.
                    </p>
                    <p>
                      Hand-painting on top of instant photographs. This technique allows me to create a different mood from the original image.
                    </p>
                    <p>
                      Hand-painting an instant photograph with paints, where color becomes an added layer of meaning.
                    </p>
                    <p className="text-[12px] md:text-[13px] lg:text-[14px] font-medium text-[#666666] mt-3 md:mt-4" style={{ fontFamily: 'Work Sans' }}>
                      used in projects: Kyiv in Color, Air Alarm
                    </p>
                  </div>
                </div>
              </div>

              {/* Material Experiments */}
              <div className="flex gap-4 md:gap-6 lg:gap-8">
                {/* Left Column - Material Experiments Image Carousel */}
                <div className="relative flex-shrink-0 w-[45%] lg:w-[35%]">
                  <div className="relative overflow-hidden group">
                    <img 
                      src={processImages.material[materialIndex]} 
                      alt="Material Experiments Process" 
                      className="w-full h-auto object-cover"
                    />
                    {/* Navigation buttons */}
                    {processImages.material.length > 1 && (
                      <>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                          <NavigationButton 
                            direction="left"
                            onClick={() => setMaterialIndex((prev) => 
                              prev === 0 ? processImages.material.length - 1 : prev - 1
                            )}
                          />
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <NavigationButton 
                            direction="right"
                            onClick={() => setMaterialIndex((prev) => 
                              prev === processImages.material.length - 1 ? 0 : prev + 1
                            )}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Right Column - Material Experiments Text */}
                <div className="text-[#1A1A1A] flex-1">
                  <h3 
                    className="text-[32px] md:text-[38px] lg:text-[45px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] lowercase mb-4 md:mb-5 lg:mb-6"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    material experiments
                  </h3>
                  <div className="space-y-3 md:space-y-4 text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                    <p>
                      The acetone transfer technique, which I used to transfer my photographs onto thick paper. This method became a way of preparing material for a future artist book.
                    </p>
                    <p>
                      In my home studio I often experiment with unconventional materials. In this series, I used receipt paper colored with markers, which later became part of the project Alien Chronicles.
                    </p>
                    <p className="text-[12px] md:text-[13px] lg:text-[14px] font-medium text-[#666666] mt-3 md:mt-4" style={{ fontFamily: 'Work Sans' }}>
                      used in projects: Air Alarm, Holes of Time, From Headlines to Reality, Down in Flames
                    </p>
                  </div>
                </div>
              </div>

              {/* Embroidery on photography */}
              <div className="flex gap-4 md:gap-6 lg:gap-8">
                {/* Left Column - Embroidery Image Carousel */}
                <div className="relative flex-shrink-0 w-[45%] lg:w-[35%]">
                  <div className="relative overflow-hidden group">
                    <img 
                      src={processImages.embroidery[embroideryIndex]} 
                      alt="Embroidery on Photography Process" 
                      className="w-full h-auto object-cover"
                    />
                    {/* Navigation buttons */}
                    {processImages.embroidery.length > 1 && (
                      <>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                          <NavigationButton 
                            direction="left"
                            onClick={() => setEmbroideryIndex((prev) => 
                              prev === 0 ? processImages.embroidery.length - 1 : prev - 1
                            )}
                          />
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <NavigationButton 
                            direction="right"
                            onClick={() => setEmbroideryIndex((prev) => 
                              prev === processImages.embroidery.length - 1 ? 0 : prev + 1
                            )}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Right Column - Embroidery Text */}
                <div className="text-[#1A1A1A] flex-1">
                  <h3 
                    className="text-[32px] md:text-[38px] lg:text-[45px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] lowercase mb-4 md:mb-5 lg:mb-6"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    embroidery on photography
                  </h3>
                  <div className="space-y-3 md:space-y-4 text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                    <p>
                      Embroidery on photography: a hand-stitched image created directly on photographs. I use different types of paper surfaces and various embroidery techniques with threads to enhance the mood or emphasize an idea.
                    </p>
                    <p>
                      Threads have become a part of my series such as Kyiv in Color Polaroids and the separate series Connection and Rupture.
                    </p>
                    <p className="text-[12px] md:text-[13px] lg:text-[14px] font-medium text-[#666666] mt-3 md:mt-4" style={{ fontFamily: 'Work Sans' }}>
                      used in project: Kyiv in Color version Polaroids
                    </p>
                  </div>
                </div>
                <div></div>
              </div>

              {/* Book-making */}
              <div className="flex gap-4 md:gap-6 lg:gap-8">
                {/* Left Column - Book-making Image Carousel */}
                <div className="relative flex-shrink-0 w-[45%] lg:w-[35%]">
                  <div className="relative overflow-hidden group">
                    <img 
                      src={processImages.bookmaking[bookmakingIndex]} 
                      alt="Book-making Process" 
                      className="w-full h-auto object-cover"
                    />
                    {/* Navigation buttons */}
                    {processImages.bookmaking.length > 1 && (
                      <>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                          <NavigationButton 
                            direction="left"
                            onClick={() => setBookmakingIndex((prev) => 
                              prev === 0 ? processImages.bookmaking.length - 1 : prev - 1
                            )}
                          />
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <NavigationButton 
                            direction="right"
                            onClick={() => setBookmakingIndex((prev) => 
                              prev === processImages.bookmaking.length - 1 ? 0 : prev + 1
                            )}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Right Column - Book-making Text */}
                <div className="text-[#1A1A1A] flex-1">
                  <h3 
                    className="text-[32px] md:text-[38px] lg:text-[45px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] lowercase mb-4 md:mb-5 lg:mb-6"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    book-making
                  </h3>
                  <div className="space-y-3 md:space-y-4 text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
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
            <div className="mb-8 mt-12">
              {/* Chemical Intervention Image Carousel */}
              <div className="mb-4 relative">
                <img 
                  src={processImages.chemical[chemicalIndex]} 
                  alt="Chemical Intervention Process" 
                  className="w-full h-auto object-cover"
                />
                {/* Navigation buttons */}
                {processImages.chemical.length > 1 && (
                  <>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <NavigationButton 
                        direction="left"
                        onClick={() => setChemicalIndex((prev) => 
                          prev === 0 ? processImages.chemical.length - 1 : prev - 1
                        )}
                      />
                    </div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <NavigationButton 
                        direction="right"
                        onClick={() => setChemicalIndex((prev) => 
                          prev === processImages.chemical.length - 1 ? 0 : prev + 1
                        )}
                      />
                    </div>
                  </>
                )}
              </div>
              {/* Dots Navigation */}
              {processImages.chemical.length > 1 && (
                <div className="flex justify-center gap-2 mb-6">
                  {processImages.chemical.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setChemicalIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === chemicalIndex ? 'bg-[#1A1A1A] w-6' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
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
              {/* Instant Photo-painting Image Carousel */}
              <div className="mb-4 relative">
                <img 
                  src={processImages.instant[instantIndex]} 
                  alt="Instant Photo-painting Process" 
                  className="w-full h-auto object-cover"
                />
                {/* Navigation buttons */}
                {processImages.instant.length > 1 && (
                  <>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <NavigationButton 
                        direction="left"
                        onClick={() => setInstantIndex((prev) => 
                          prev === 0 ? processImages.instant.length - 1 : prev - 1
                        )}
                      />
                    </div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <NavigationButton 
                        direction="right"
                        onClick={() => setInstantIndex((prev) => 
                          prev === processImages.instant.length - 1 ? 0 : prev + 1
                        )}
                      />
                    </div>
                  </>
                )}
              </div>
              {/* Dots Navigation */}
              {processImages.instant.length > 1 && (
                <div className="flex justify-center gap-2 mb-6">
                  {processImages.instant.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setInstantIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === instantIndex ? 'bg-[#1A1A1A] w-6' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
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
              {/* Material Experiments Image Carousel */}
              <div className="mb-4 relative">
                <img 
                  src={processImages.material[materialIndex]} 
                  alt="Material Experiments Process" 
                  className="w-full h-auto object-cover"
                />
                {/* Navigation buttons */}
                {processImages.material.length > 1 && (
                  <>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <NavigationButton 
                        direction="left"
                        onClick={() => setMaterialIndex((prev) => 
                          prev === 0 ? processImages.material.length - 1 : prev - 1
                        )}
                      />
                    </div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <NavigationButton 
                        direction="right"
                        onClick={() => setMaterialIndex((prev) => 
                          prev === processImages.material.length - 1 ? 0 : prev + 1
                        )}
                      />
                    </div>
                  </>
                )}
              </div>
              {/* Dots Navigation */}
              {processImages.material.length > 1 && (
                <div className="flex justify-center gap-2 mb-6">
                  {processImages.material.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setMaterialIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === materialIndex ? 'bg-[#1A1A1A] w-6' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
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
              {/* Embroidery Image Carousel */}
              <div className="mb-4 relative">
                <img 
                  src={processImages.embroidery[embroideryIndex]} 
                  alt="Embroidery on Photography Process" 
                  className="w-full h-auto object-cover"
                />
                {/* Navigation buttons */}
                {processImages.embroidery.length > 1 && (
                  <>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <NavigationButton 
                        direction="left"
                        onClick={() => setEmbroideryIndex((prev) => 
                          prev === 0 ? processImages.embroidery.length - 1 : prev - 1
                        )}
                      />
                    </div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <NavigationButton 
                        direction="right"
                        onClick={() => setEmbroideryIndex((prev) => 
                          prev === processImages.embroidery.length - 1 ? 0 : prev + 1
                        )}
                      />
                    </div>
                  </>
                )}
              </div>
              {/* Dots Navigation */}
              {processImages.embroidery.length > 1 && (
                <div className="flex justify-center gap-2 mb-6">
                  {processImages.embroidery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setEmbroideryIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === embroideryIndex ? 'bg-[#1A1A1A] w-6' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
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
              {/* Book-making Image Carousel */}
              <div className="mb-4 relative">
                <img 
                  src={processImages.bookmaking[bookmakingIndex]} 
                  alt="Book-making Process" 
                  className="w-full h-auto object-cover"
                />
                {/* Navigation buttons */}
                {processImages.bookmaking.length > 1 && (
                  <>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <NavigationButton 
                        direction="left"
                        onClick={() => setBookmakingIndex((prev) => 
                          prev === 0 ? processImages.bookmaking.length - 1 : prev - 1
                        )}
                      />
                    </div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <NavigationButton 
                        direction="right"
                        onClick={() => setBookmakingIndex((prev) => 
                          prev === processImages.bookmaking.length - 1 ? 0 : prev + 1
                        )}
                      />
                    </div>
                  </>
                )}
              </div>
              {/* Dots Navigation */}
              {processImages.bookmaking.length > 1 && (
                <div className="flex justify-center gap-2 mb-6">
                  {processImages.bookmaking.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setBookmakingIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === bookmakingIndex ? 'bg-[#1A1A1A] w-6' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
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

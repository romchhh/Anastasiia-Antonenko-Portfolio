'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ContactForm from '@/components/ContactForm';
import BurgerMenu from '@/components/BurgerMenu';

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<{ src: string; width: number; height: number; top: number } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (hoveredItem) {
        setHoveredItem(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hoveredItem]);

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
            ABOUT
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
          <Header title="ABOUT" subtitle="anastasiia antonenko" />
        </div>

        <main className="py-2 md:py-4 lg:py-8 px-5 md:px-2 lg:pl-12 lg:pr-8">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Main Content */}
            <div className="text-[#1A1A1A]">
              {/* Portrait Image and Artist Statement */}
              <div className="flex gap-6 mb-8">
                {/* Portrait Image */}
                <div className="flex-shrink-0">
                  <img 
                    src="/about/2 2.jpg" 
                    alt="Anastasiia Antonenko" 
                    className="w-[300px] h-auto object-cover"
                  />
                </div>
                
                {/* Artist Statement */}
                <div className="flex-1">
                  <h2 
                    className="text-[35px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] lowercase mb-4"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    artist statement
                  </h2>
                  <div className="space-y-6 text-[16px] font-normal leading-[155%] tracking-[-0.01em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                    <p>
                      My artistic practice revolves around exploring the fragile intersections of memory, identity, and the body. Working with analog and instant photography allows me to embrace imperfection, accident, and temporality, turning them into essential parts of the image.
                    </p>
                    <p>
                      I am interested in how personal and collective histories are layered, fragmented, and reshaped over time. Through abstraction and documentary approaches, I attempt to reveal what usually remains unseen: the silent weight of memory, the instability of belonging, and the intimacy of vulnerability.
                    </p>
                    <p>
                      By shifting between the visible and the intangible, I create spaces where the viewer can connect their own experiences with mine. Photography for me is not only a way of preserving the moment but also a process of transformation — where fragility becomes a form of strength.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Bio Section */}
              <div className="mt-8" style={{ marginLeft: '324px' }}>
                <h3 
                  className="text-[35px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] lowercase mb-6"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  bio
                </h3>
                <div className="space-y-4 text-[16px] leading-[155%] tracking-[-0.01em] text-[#1A1A1A] lowercase" style={{ fontFamily: 'Work Sans' }}>
                  <div className="relative">
                    <span className="font-medium absolute -left-[120px] w-[110px] text-right">1996 —</span>
                    <span className="font-normal">Born in Luhansk, Ukraine.</span>
                  </div>
                  <div className="relative">
                    <span className="font-medium absolute -left-[120px] w-[110px] text-right">2014–2019 —</span>
                    <span className="font-normal">Studied at Kyiv National Linguistic University, Department of Oriental Studies (Linguistics, Oriental Studies). Alongside her academic studies, she began searching for her own language in photography.</span>
                  </div>
                  <div className="relative">
                    <span className="font-medium absolute -left-[120px] w-[110px] text-right">2014–2015 —</span>
                    <span className="font-normal">Completed courses at the Kyiv School of Photography, which became her first step into the medium and awakened an interest in the documentary image.</span>
                  </div>
                  <div className="relative">
                    <span className="font-medium absolute -left-[120px] w-[110px] text-right">2021–2022 —</span>
                    <span className="font-normal">Studied at the School of Conceptual and Art Photography (MYPH). During this period she developed her artistic voice, moving from documentary observation toward more conceptual, poetic, and abstract approaches.</span>
                  </div>
                  <div className="relative">
                    <span className="font-medium absolute -left-[120px] w-[110px] text-right">2023 —</span>
                    <span className="font-normal">In 2023, she took part in an artist residency in Nuremberg, Germany, where she worked on projects that reflected her personal experience of displacement and the fragile intersections between private and collective memory.</span>
                  </div>
                  <div className="relative">
                    <span className="font-medium absolute -left-[120px] w-[110px] text-right">2024 —</span>
                    <span className="font-normal">Since 2024, she has been living and working in Austria, continuing to explore themes of memory, identity, and the body through analog and instant photography.</span>
                  </div>
                  <div>
                    <span className="font-normal">Her works have been exhibited internationally in Germany, Italy, France, Greece, Sweden, Denmark, the Netherlands, the USA, and Ukraine.</span>
                  </div>
                </div>
              </div>

              {/* Exhibitions Section */}
              <div className="mt-12 relative" style={{ marginLeft: '324px' }}>
                <h3 
                  className="text-[35px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] lowercase mb-6"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  exhibitions
                </h3>
                
                {/* Hover Image Container */}
                {hoveredItem && (
                  <div 
                    className="hidden lg:block fixed left-8 pointer-events-none z-10 transition-all duration-300 ease-in-out opacity-100 -translate-y-1/2" 
                    style={{ top: `${hoveredItem.top}px` }}
                  >
                    <div className="shadow-lg">
                      <Image
                        src={hoveredItem.src}
                        alt="Exhibition preview"
                        width={hoveredItem.width}
                        height={hoveredItem.height}
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
                
                <div className="space-y-3 text-[16px] leading-[155%] tracking-[-0.01em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                  <div className="relative"><span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">Jun 2025 —</span> <span className="lowercase">The &quot;Faces&quot; exhibition by Art Icon, Arles, France</span></div>
                  <div 
                    className="relative cursor-pointer transition-colors hover:text-gray-600" 
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setHoveredItem({ src: '/about/7 1.png', width: 199, height: 265, top: rect.top + rect.height / 2 });
                    }}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">Nov 2024 —</span> <span className="lowercase">Corporeality Exhibition, Art-Icon, Paris</span>
                  </div>
                  <div className="relative"><span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">Sep 2024 —</span> <span className="lowercase">Imagenation Milan, exhibition Just Women</span></div>
                  <div className="relative"><span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">Apr 2024 —</span> <span className="lowercase">Exhibition at Decode Gallery, Tucson, Arizona</span></div>
                  <div 
                    className="relative cursor-pointer transition-colors hover:text-gray-600"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setHoveredItem({ src: '/about/1 5.png', width: 199, height: 133, top: rect.top + rect.height / 2 });
                    }}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">Mar 2024 —</span> <span className="lowercase">Depths of Psyche, Korsak Museum of Contemporary Ukrainian Art</span>
                  </div>
                  <div className="relative"><span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">Jan 2024 —</span> <span className="lowercase">One day, Ukrainian Culture Center in Stockholm and Ukrainian School of Conceptual and Art Photography (MYPH)</span></div>
                  <div 
                    className="relative cursor-pointer transition-colors hover:text-gray-600"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setHoveredItem({ src: '/about/1 51.png', width: 199, height: 133, top: rect.top + rect.height / 2 });
                    }}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">Oct – Nov 2023 —</span> <span className="lowercase">Photopolis Festival, Greece</span>
                  </div>
                  <div className="relative"><span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">Oct 2023 —</span> <span className="lowercase">Fresh Eyes Selection, GUP Magazine, Amsterdam, Netherlands</span></div>
                  <div 
                    className="relative cursor-pointer transition-colors hover:text-gray-600"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setHoveredItem({ src: '/about/1 53.png', width: 199, height: 133, top: rect.top + rect.height / 2 });
                    }}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">Sep – Oct 2023 —</span> <span className="lowercase">Cutout Festival, Kyiv, Ukraine</span>
                  </div>
                  <div className="relative"><span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">Sep 2023 —</span> <span className="lowercase">Exhibition at Sklad 5, Cherkasy, Ukraine</span></div>
                  <div 
                    className="relative cursor-pointer transition-colors hover:text-gray-600"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setHoveredItem({ src: '/about/1 3.png', width: 199, height: 133, top: rect.top + rect.height / 2 });
                    }}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">Jul – Aug 2023 —</span> <span className="lowercase">If You Look Into the Void Too Long, Ivano-Frankivsk, Ukraine</span>
                  </div>
                  <div 
                    className="relative cursor-pointer transition-colors hover:text-gray-600"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setHoveredItem({ src: '/about/1 54.png', width: 199, height: 133, top: rect.top + rect.height / 2 });
                    }}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">Jul 2023 —</span> <span className="lowercase">New Mythology, Ermilov Center, Kharkiv, Ukraine</span>
                  </div>
                  <div className="relative"><span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">Jun – Jul 2023 —</span> <span className="lowercase">&quot;And will be silence&quot;, Zaporizhzhia, Ukraine</span></div>
                  <div className="relative"><span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">May 2023 —</span> <span className="lowercase">Online exhibition Baroque application – Myph 5 years anniversary</span></div>
                  <div className="relative"><span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">Mar 2023 —</span> <span className="lowercase">War Exhibition, Mainz, Germany</span></div>
                  <div className="relative"><span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">Feb 2023 —</span> <span className="lowercase">Fotodok, Whispers and Shouts. Voices of Ukrainian Women Photographers</span></div>
                  <div 
                    className="relative cursor-pointer transition-colors hover:text-gray-600"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setHoveredItem({ src: '/about/7 15.png', width: 199, height: 265, top: rect.top + rect.height / 2 });
                    }}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">Jan 2023 —</span> <span className="lowercase">Exhibition opening in Berlin, Kyiv Emerging</span>
                  </div>
                  <div className="relative"><span className="font-medium absolute -left-[170px] w-[160px] text-right normal-case">2022 —</span> <span className="lowercase">MyArt – Memory, Online & Offline Exhibition</span></div>
                </div>
              </div>

              {/* Publications Section */}
              <div className="mt-12 relative" style={{ marginLeft: '324px' }}>
                <h3 
                  className="text-[35px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] lowercase mb-6"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  publications
                </h3>
                
                <div className="mb-6">
                  <h4 
                    className="text-[22px] font-medium leading-[150%] tracking-[0.03em] text-[#1A1A1A] uppercase mb-4"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    MAGAZINES
                  </h4>
                  <div className="space-y-2 text-[16px] leading-[155%] tracking-[-0.01em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                    <div className="relative"><span className="font-medium absolute -left-[110px] w-[100px] text-right normal-case">2025 —</span> <span className="lowercase">Pamplemousse Magazine, Issue #11</span></div>
                    <div className="relative"><span className="font-medium absolute -left-[110px] w-[100px] text-right normal-case">2025 —</span> <span className="lowercase">Bilkis Magazine #1</span></div>
                    <div 
                      className="relative cursor-pointer transition-colors hover:text-gray-600"
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setHoveredItem({ src: '/about/7 16.png', width: 199, height: 265, top: rect.top + rect.height / 2 });
                      }}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span className="font-medium absolute -left-[110px] w-[100px] text-right normal-case">2024 —</span> <span className="lowercase">Art House #11</span>
                    </div>
                    <div className="relative"><span className="font-medium absolute -left-[110px] w-[100px] text-right normal-case">2023 —</span> <span className="lowercase">Plivka and People</span></div>
                    <div className="relative"><span className="font-medium absolute -left-[110px] w-[100px] text-right normal-case">2022 —</span> <span className="lowercase">Zaborona: &quot;Our Worst Six Months&quot;</span></div>
                    <div className="relative"><span className="font-medium absolute -left-[110px] w-[100px] text-right normal-case">2022 —</span> <span className="lowercase">Nakid Magazine, Ukraine</span></div>
                  </div>
                </div>

                <div>
                  <h4 
                    className="text-[22px] font-medium leading-[150%] tracking-[0.03em] text-[#1A1A1A] uppercase mb-4"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    BOOKS
                  </h4>
                  <div className="space-y-2 text-[16px] leading-[155%] tracking-[-0.01em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                    <div 
                      className="relative cursor-pointer transition-colors hover:text-gray-600"
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setHoveredItem({ src: '/about/9 1.png', width: 199, height: 265, top: rect.top + rect.height / 2 });
                      }}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span className="font-medium absolute -left-[110px] w-[100px] text-right normal-case">2024 —</span> <span className="lowercase">Conceptual Photography, CP Publishing</span>
                    </div>
                    <div 
                      className="relative cursor-pointer transition-colors hover:text-gray-600"
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setHoveredItem({ src: '/about/1 4.png', width: 199, height: 133, top: rect.top + rect.height / 2 });
                      }}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span className="font-medium absolute -left-[110px] w-[100px] text-right normal-case">2023 —</span> <span className="lowercase">GUP Magazine – Fresh Eyes</span>
                    </div>
                    <div 
                      className="relative cursor-pointer transition-colors hover:text-gray-600"
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setHoveredItem({ src: '/about/1 42.png', width: 199, height: 133, top: rect.top + rect.height / 2 });
                      }}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span className="font-medium absolute -left-[110px] w-[100px] text-right normal-case">2022 —</span> <span className="lowercase">MYPH – published works</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements Section */}
              <div className="mt-12" style={{ marginLeft: '324px' }}>
                <h3 
                  className="text-[35px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] lowercase mb-6"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  achievements
                </h3>
                
                <div className="mb-6">
                  <h4 
                    className="text-[22px] font-medium leading-[150%] tracking-[0.03em] text-[#1A1A1A] uppercase mb-4"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    RESIDENCIES
                  </h4>
                  <div className="space-y-2 text-[16px] leading-[155%] tracking-[-0.01em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                    <div className="relative"><span className="font-medium absolute -left-[190px] w-[180px] text-right normal-case">Apr – May 2023 —</span> <span className="lowercase">Residency in Nuremberg, Germany</span></div>
                  </div>
                </div>

                <div>
                  <h4 
                    className="text-[22px] font-medium leading-[150%] tracking-[0.03em] text-[#1A1A1A] uppercase mb-4"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    AWARDS
                  </h4>
                  <div className="space-y-2 text-[16px] leading-[155%] tracking-[-0.01em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                    <div className="relative"><span className="font-medium absolute -left-[110px] w-[100px] text-right normal-case">2025 —</span> <span className="lowercase">Myph Prize, Longlist</span></div>
                    <div className="relative"><span className="font-medium absolute -left-[110px] w-[100px] text-right normal-case">2024 —</span> <span className="lowercase">Myph Prize, Longlist</span></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden">
            {/* Portrait Image */}
            <div className="mb-6">
              <img 
                src="/about/2 2.jpg" 
                alt="Anastasiia Antonenko" 
                className="w-full max-w-[300px] h-auto object-cover mx-auto"
              />
            </div>

            {/* Artist Statement */}
            <div className="mb-8">
              <h2 
                className="text-[28px] md:text-[35px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] lowercase mb-4"
                style={{ fontFamily: 'Work Sans' }}
              >
                artist statement
              </h2>
              <div className="space-y-6 text-[16px] font-normal leading-[155%] tracking-[-0.01em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                <p>
                  My artistic practice revolves around exploring the fragile intersections of memory, identity, and the body. Working with analog and instant photography allows me to embrace imperfection, accident, and temporality, turning them into essential parts of the image.
                </p>
                <p>
                  I am interested in how personal and collective histories are layered, fragmented, and reshaped over time. Through abstraction and documentary approaches, I attempt to reveal what usually remains unseen: the silent weight of memory, the instability of belonging, and the intimacy of vulnerability.
                </p>
                <p>
                  By shifting between the visible and the intangible, I create spaces where the viewer can connect their own experiences with mine. Photography for me is not only a way of preserving the moment but also a process of transformation — where fragility becomes a form of strength.
                </p>
              </div>
            </div>
            
            {/* Bio Section */}
            <div className="mb-8">
              <h3 
                className="text-[28px] md:text-[35px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] lowercase mb-6"
                style={{ fontFamily: 'Work Sans' }}
              >
                bio
              </h3>
              <div className="space-y-4 text-[14px] md:text-[16px] leading-[155%] tracking-[-0.01em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                <div className="lg:relative">
                  <span className="font-medium lg:absolute lg:-left-[120px] lg:w-[110px] lg:text-right normal-case">1996 —</span> <span className="font-normal lowercase">Born in Luhansk, Ukraine.</span>
                </div>
                <div className="lg:relative">
                  <span className="font-medium lg:absolute lg:-left-[120px] lg:w-[110px] lg:text-right normal-case">2014–2019 —</span> <span className="font-normal lowercase">Studied at Kyiv National Linguistic University, Department of Oriental Studies (Linguistics, Oriental Studies). Alongside her academic studies, she began searching for her own language in photography.</span>
                </div>
                <div className="lg:relative">
                  <span className="font-medium lg:absolute lg:-left-[120px] lg:w-[110px] lg:text-right normal-case">2014–2015 —</span> <span className="font-normal lowercase">Completed courses at the Kyiv School of Photography, which became her first step into the medium and awakened an interest in the documentary image.</span>
                </div>
                <div className="lg:relative">
                  <span className="font-medium lg:absolute lg:-left-[120px] lg:w-[110px] lg:text-right normal-case">2021–2022 —</span> <span className="font-normal lowercase">Studied at the School of Conceptual and Art Photography (MYPH). During this period she developed her artistic voice, moving from documentary observation toward more conceptual, poetic, and abstract approaches.</span>
                </div>
                <div className="lg:relative">
                  <span className="font-medium lg:absolute lg:-left-[120px] lg:w-[110px] lg:text-right normal-case">2023 —</span> <span className="font-normal lowercase">In 2023, she took part in an artist residency in Nuremberg, Germany, where she worked on projects that reflected her personal experience of displacement and the fragile intersections between private and collective memory.</span>
                </div>
                <div className="lg:relative">
                  <span className="font-medium lg:absolute lg:-left-[120px] lg:w-[110px] lg:text-right normal-case">2024 —</span> <span className="font-normal lowercase">Since 2024, she has been living and working in Austria, continuing to explore themes of memory, identity, and the body through analog and instant photography.</span>
                </div>
                <div>
                  <span className="font-normal lowercase">Her works have been exhibited internationally in Germany, Italy, France, Greece, Sweden, Denmark, the Netherlands, the USA, and Ukraine.</span>
                </div>
              </div>
            </div>

            {/* Exhibitions Section */}
            <div className="mb-8">
              <h3 
                className="text-[28px] md:text-[35px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] lowercase mb-6"
                style={{ fontFamily: 'Work Sans' }}
              >
                exhibitions
              </h3>
              <div className="space-y-3 text-[14px] md:text-[16px] leading-[155%] tracking-[-0.01em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                <div><span className="font-medium normal-case">Jun 2025 —</span> <span className="lowercase">The &quot;Faces&quot; exhibition by Art Icon, Arles, France</span></div>
                <div><span className="font-medium normal-case">Nov 2024 —</span> <span className="lowercase">Corporeality Exhibition, Art-Icon, Paris</span></div>
                <div><span className="font-medium normal-case">Sep 2024 —</span> <span className="lowercase">Imagenation Milan, exhibition Just Women</span></div>
                <div><span className="font-medium normal-case">Apr 2024 —</span> <span className="lowercase">Exhibition at Decode Gallery, Tucson, Arizona</span></div>
                <div><span className="font-medium normal-case">Mar 2024 —</span> <span className="lowercase">Exhibition at Decode Gallery, Tucson, Arizona</span></div>
                <div><span className="font-medium normal-case">Jan 2024 —</span> <span className="lowercase">One day, Ukrainian Culture Center in Stockholm and Ukrainian School of Conceptual and Art Photography (MYPH)</span></div>
                <div><span className="font-medium normal-case">Oct – Nov 2023 —</span> <span className="lowercase">Photopolis Festival, Greece</span></div>
                <div><span className="font-medium normal-case">Oct 2023 —</span> <span className="lowercase">Fresh Eyes Selection, GUP Magazine, Amsterdam, Netherlands</span></div>
                <div><span className="font-medium normal-case">Sep – Oct 2023 —</span> <span className="lowercase">Cutout Festival, Kyiv, Ukraine</span></div>
                <div><span className="font-medium normal-case">Sep 2023 —</span> <span className="lowercase">Exhibition at Sklad 5, Cherkasy, Ukraine</span></div>
                <div><span className="font-medium normal-case">Jul – Aug 2023 —</span> <span className="lowercase">If You Look Into the Void Too Long, Ivano-Frankivsk, Ukraine</span></div>
                <div><span className="font-medium normal-case">Jul 2023 —</span> <span className="lowercase">New Mythology, Ermilov Center, Kharkiv, Ukraine</span></div>
                <div><span className="font-medium normal-case">Jun – Jul 2023 —</span> <span className="lowercase">&quot;And will be silence&quot;, Zaporizhzhia, Ukraine</span></div>
                <div><span className="font-medium normal-case">May 2023 —</span> <span className="lowercase">Online exhibition Baroque application – Myph 5 years anniversary</span></div>
                <div><span className="font-medium normal-case">Mar 2023 —</span> <span className="lowercase">War Exhibition, Mainz, Germany</span></div>
                <div><span className="font-medium normal-case">Feb 2023 —</span> <span className="lowercase">Fotodok, Whispers and Shouts. Voices of Ukrainian Women Photographers</span></div>
                <div><span className="font-medium normal-case">Jan 2023 —</span> <span className="lowercase">Exhibition opening in Berlin, Kyiv Emerging</span></div>
                <div><span className="font-medium normal-case">2022 —</span> <span className="lowercase">MyArt – Memory, Online & Offline Exhibition</span></div>
              </div>
            </div>

            {/* Publications Section */}
            <div className="mb-8">
              <h3 
                className="text-[28px] md:text-[35px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] lowercase mb-6"
                style={{ fontFamily: 'Work Sans' }}
              >
                publications
              </h3>
              
              <div className="mb-6">
                <h4 
                  className="text-[20px] md:text-[22px] font-medium leading-[150%] tracking-[0.03em] text-[#1A1A1A] uppercase mb-4"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  MAGAZINES
                </h4>
                <div className="space-y-2 text-[14px] md:text-[16px] leading-[155%] tracking-[-0.01em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                  <div><span className="font-medium normal-case">2025 —</span> <span className="lowercase">Pamplemousse Magazine, Issue #11</span></div>
                  <div><span className="font-medium normal-case">2025 —</span> <span className="lowercase">Bilkis Magazine #1</span></div>
                  <div><span className="font-medium normal-case">2024 —</span> <span className="lowercase">Art House #11</span></div>
                  <div><span className="font-medium normal-case">2023 —</span> <span className="lowercase">Plivka and People</span></div>
                  <div><span className="font-medium normal-case">2022 —</span> <span className="lowercase">Zaborona: &quot;Our Worst Six Months&quot;</span></div>
                  <div><span className="font-medium normal-case">2022 —</span> <span className="lowercase">Nakid Magazine, Ukraine</span></div>
                </div>
              </div>

              <div>
                <h4 
                  className="text-[20px] md:text-[22px] font-medium leading-[150%] tracking-[0.03em] text-[#1A1A1A] uppercase mb-4"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  BOOKS
                </h4>
                <div className="space-y-2 text-[14px] md:text-[16px] leading-[155%] tracking-[-0.01em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                  <div><span className="font-medium normal-case">2024 —</span> <span className="lowercase">Conceptual Photography, CP Publishing</span></div>
                  <div><span className="font-medium normal-case">2023 —</span> <span className="lowercase">GUP Magazine – Fresh Eyes</span></div>
                  <div><span className="font-medium normal-case">2022 —</span> <span className="lowercase">MYPH – published works</span></div>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="mb-8">
              <h3 
                className="text-[28px] md:text-[35px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] lowercase mb-6"
                style={{ fontFamily: 'Work Sans' }}
              >
                achievements
              </h3>
              
              <div className="mb-6">
                <h4 
                  className="text-[20px] md:text-[22px] font-medium leading-[150%] tracking-[0.03em] text-[#1A1A1A] uppercase mb-4"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  RESIDENCIES
                </h4>
                <div className="space-y-2 text-[14px] md:text-[16px] leading-[155%] tracking-[-0.01em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                  <div><span className="font-medium normal-case">Apr – May 2023 —</span> <span className="lowercase">Residency in Nuremberg, Germany</span></div>
                </div>
              </div>

              <div>
                <h4 
                  className="text-[20px] md:text-[22px] font-medium leading-[150%] tracking-[0.03em] text-[#1A1A1A] uppercase mb-4"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  AWARDS
                </h4>
                <div className="space-y-2 text-[14px] md:text-[16px] leading-[155%] tracking-[-0.01em] text-[#1A1A1A]" style={{ fontFamily: 'Work Sans' }}>
                  <div><span className="font-medium normal-case">2025 —</span> <span className="lowercase">Myph Prize, Longlist</span></div>
                  <div><span className="font-medium normal-case">2024 —</span> <span className="lowercase">Myph Prize, Longlist</span></div>
                </div>
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

'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';

export default function PortfolioGridPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'full'>('overview');
  // Contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [formState, setFormState] = useState<'idle' | 'submitted'>('idle');
  // Modal state
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Simple email mask/validator: keeps only allowed chars and auto-lowers, also checks pattern
  const emailRegex = useMemo(() => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    []);

  const onEmailChange = (value: string) => {
    const sanitized = value
      .replace(/[^a-zA-Z0-9@._%+\-]/g, '') // allow common email chars only
      .replace(/@{2,}/g, '@')
      .toLowerCase();
    setEmail(sanitized);
  };

  const isEmailValid = email.length > 0 && emailRegex.test(email);
  const isNameValid = name.trim().length > 1;
  const isMessageValid = message.trim().length > 3;
  const isFormValid = isEmailValid && isNameValid && isMessageValid;

  // Gallery images with equal spacing (gap = 20px)
  // Each column is independent - images flow sequentially with gaps
  const gap = 20;
  const col1Width = 658; // First column width
  const col2Width = 427; // Second column width (increased to align top and bottom)
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
        <header className="bg-transparent relative">
          <div className="px-12 py-8">
            <div className="flex items-baseline justify-between">
              <h1 className="text-[45px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] uppercase -ml-6">HOLES OF TIME</h1>
              <Link href="/" className="text-[22px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] lowercase hover:opacity-70 transition-opacity">anastasiia antonenko</Link>
            </div>
          </div>
          <div className="absolute left-0 h-px bg-gray-300" style={{ width: '102%', bottom: '5.5%' }} />
        </header>

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
              {formState === 'idle' ? (
                <>
                  <h3 className="text-[45px] font-normal leading-[100%] tracking-[0.03em] text-[#1A1A1A] lowercase">interested in prints<br />or collaborations?</h3>
                  <p className="mt-2 text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#515151] lowercase w-[477px]">leave your message below and I&apos;ll get back to you soon</p>

                  <form
                    className="mt-4 space-y-3"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setTouched({ name: true, email: true, message: true });
                      if (!isFormValid) return;
                      
                      // Simulate form submission
                      setFormState('submitted');
                      
                      // For now just open the email client. Later can be wired to API.
                      const subject = encodeURIComponent('Portfolio contact');
                      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
                      window.location.href = `mailto:stushaphotofilm@gmail.com?subject=${subject}&body=${body}`;
                    }}
                  >
                    <textarea
                      className={`w-[500px] h-[117px] border border-gray-300 bg-transparent px-3 py-2 text-[12px] outline-none focus:border-gray-300 resize-none ${touched.message && !isMessageValid ? 'placeholder-red-500' : 'placeholder-gray-500'}`}
                      placeholder={touched.message && !isMessageValid ? "Please write your message here" : "Your message here"}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                      style={{ 
                        color: touched.message && !isMessageValid ? '#ef4444' : '#999'
                      }}
                    />
                    <div className="flex gap-5 items-end">
                      <input
                        className={`w-[240px] h-[29px] bg-transparent border-0 border-b border-gray-300 px-0 py-0 text-[12px] outline-none focus:border-gray-300 ${touched.name && !isNameValid ? 'placeholder-red-500' : 'placeholder-gray-500'}`}
                        placeholder={touched.name && !isNameValid ? "Please enter your name" : "Name"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                        style={{ 
                          color: touched.name && !isNameValid ? '#ef4444' : '#999'
                        }}
                      />
                      <input
                        className={`w-[240px] h-[29px] bg-transparent border-0 border-b border-gray-300 px-0 py-0 text-[12px] outline-none focus:border-gray-300 ${touched.email && !isEmailValid ? 'placeholder-red-500' : 'placeholder-gray-500'}`}
                        placeholder={touched.email && !isEmailValid ? "Please write your email here" : "Email"}
                        inputMode="email"
                        value={email}
                        onChange={(e) => onEmailChange(e.target.value)}
                        onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                        style={{ 
                          color: touched.email && !isEmailValid ? '#ef4444' : '#999'
                        }}
                      />
                      <button
                        type="submit"
                        className="h-[40px] px-10 bg-[#1A1A1A] text-white text-[12px] hover:bg-[#333] transition-colors border border-[#1A1A1A] whitespace-nowrap"
                      >
                        get in touch
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <h3 className="text-[45px] font-normal leading-[100%] tracking-[0.03em] text-[#1A1A1A] lowercase">thank you<br />for your interest!</h3>
                  <div className="mt-2 w-[395px]">
                    <p className="text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#515151] lowercase">your message has been sent.</p>
                    <p className="text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#515151] lowercase">I look forward to continuing the conversation.</p>
                  </div>
                </>
              )}
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
          <button
            onClick={closeModal}
            className="fixed top-8 right-8 z-60 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative mx-4 flex items-center justify-center">
            {/* Image */}
            <img
              src={galleryImages[selectedImage].src}
              alt={`Holes of Time ${selectedImage + 1}`}
              className="h-[85vh] w-auto max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
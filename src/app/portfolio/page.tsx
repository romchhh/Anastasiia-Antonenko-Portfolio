'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

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

  // Gallery images from holes of time folder
  const galleryImages = [
    '/holes of time/1 997.png',
    '/holes of time/1 998.png',
    '/holes of time/1 999.png',
    '/holes of time/15 2.png',
    '/holes of time/19 97.png',
    '/holes of time/19 98.png',
    '/holes of time/22 2.png',
    '/holes of time/22 3.png',
    '/holes of time/22 4.png',
    '/holes of time/22 5.png',
    '/holes of time/4 2.png',
    '/holes of time/Rectangle 74.png',
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
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="mx-6 my-6 border-t border-gray-300 bg-transparent relative">
        {/* Header */}
        <header className="bg-transparent relative">
          <div className="px-12 py-8">
            <div className="flex items-baseline justify-between pr-[17rem]">
              <h1 className="text-[44px] font-normal tracking-wide text-[#1A1A1A] uppercase">HOLES OF TIME</h1>
              <p className="text-[14px] text-[#1A1A1A]">anastasiia antonenko</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-[17rem] h-px bg-gray-300" />
        </header>

        {/* Main area with right sidebar column */}
        <div className="grid grid-cols-[1fr_17rem]">
          {/* Content column (has right border to split from sidebar) */}
          <main className="py-8 pl-12 pr-8">
            {/* Intro block with meta, separator and text; separator should not span the gallery below */}
            <div className="grid grid-cols-[260px_1px_1fr] gap-6 items-start">
              {/* Left meta column */}
              <aside className="text-[14px] text-[#1A1A1A]">
                <div className="space-y-8 pr-6">
                  <div>
                    <p className="uppercase text-[#515151]">years:</p>
                    <p className="mt-2">2024–2025</p>
                  </div>
                  <div>
                    <p className="uppercase text-[#515151]">medium:</p>
                    <p className="mt-2 leading-snug">hand-burned film negative using matches</p>
                  </div>
                </div>
              </aside>
              {/* Vertical separator only for the intro block height */}
              <div className="bg-gray-300 w-px self-stretch" />

              {/* Right content */}
              <section>
                <div className="flex items-baseline gap-8 pb-4">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={"text-[28px] transition-colors " + (activeTab === 'overview' ? 'text-[#1A1A1A]' : 'text-[#515151] hover:text-[#1A1A1A]')}
                  >
                    overview
                  </button>
                  <button
                    onClick={() => setActiveTab('full')}
                    className={"text-[28px] transition-colors " + (activeTab === 'full' ? 'text-[#1A1A1A]' : 'text-[#515151] hover:text-[#1A1A1A]')}
                  >
                    full story
                  </button>
                </div>

                <p className="mt-3 text-[16px] leading-7 text-[#1A1A1A] w-[680px] whitespace-pre-line">
                  {activeTab === 'overview' ? overviewText : fullStoryText}
                </p>

                {/* Horizontal line spanning full width with vertical separator */}
                <div className="relative mt-8">
                  {/* Full-width horizontal line from left edge to sidebar */}
                  <div className="absolute top-0 h-px bg-gray-300" style={{ left: 'calc(-2rem - 260px - 1.5rem - 1px - 1.5rem)', right: 'calc(-2rem)' }} />
                  {/* Vertical line extending down from the horizontal line */}
                  <div className="absolute top-0" style={{ left: '680px' }}>
                    <div className="w-px h-20 bg-gray-300" />
                  </div>
                </div>
              </section>
            </div>

            {/* Gallery: from left page edge to sidebar boundary - 2 columns layout */}
            <div className="-ml-12 -mr-8 mt-6">
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="overflow-hidden bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openModal(index)}
                  >
                    <img 
                      src={image} 
                      alt={`Holes of Time ${index + 1}`} 
                      className="w-full h-auto object-cover" 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Contact card */}
            <div className="mt-10 pt-6">
              {formState === 'idle' ? (
                <>
                  <h3 className="text-[18px] text-[#1A1A1A] leading-tight">interested in prints<br />or collaborations?</h3>
                  <p className="mt-2 text-[12px] text-[#515151]">leave your message below and I&apos;ll get back to you soon</p>

                  <form
                    className="mt-4 max-w-xl space-y-3"
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
                    <div className="flex">
                      <div className="flex-[5] pr-3">
                        <textarea
                          className="w-full h-24 border border-gray-300 bg-transparent px-3 py-2 text-[12px] text-gray-500 outline-none focus:border-gray-300 resize-none placeholder-gray-500"
                          placeholder={touched.message && !isMessageValid ? "Please write your message here" : "Your message here"}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                          style={{ 
                            color: touched.message && !isMessageValid ? '#ef4444' : '#999'
                          }}
                        />
                        {touched.message && !isMessageValid && (
                          <p className="text-red-500 text-[10px] mt-1">Please write your message here</p>
                        )}
                      </div>
                      <div className="flex-1"></div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="flex-1">
                        <input
                          className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-2 text-[12px] text-gray-500 outline-none focus:border-gray-300 placeholder-gray-500"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                          style={{ 
                            color: '#999'
                          }}
                        />
                        {touched.name && !isNameValid && (
                          <p className="text-red-500 text-[10px] mt-1">Please enter your name</p>
                        )}
                      </div>
                      <div className="flex-1">
                        <input
                          className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-2 text-[12px] text-gray-500 outline-none focus:border-gray-300 placeholder-gray-500"
                          placeholder={touched.email && !isEmailValid ? "Please write your email here" : "Email"}
                          inputMode="email"
                          value={email}
                          onChange={(e) => onEmailChange(e.target.value)}
                          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                          style={{ 
                            color: touched.email && !isEmailValid ? '#ef4444' : '#999'
                          }}
                        />
                        {touched.email && !isEmailValid && (
                          <p className="text-red-500 text-[10px] mt-1">Please write your email here</p>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#1A1A1A] text-white text-[12px] hover:bg-[#333] transition-colors mt-2"
                      >
                        get in touch
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <h3 className="text-[18px] text-[#1A1A1A] leading-tight">thank you<br />for your interest!</h3>
                  <p className="mt-2 text-[12px] text-[#515151]">your message has been sent.</p>
                  <p className="text-[12px] text-[#515151]">I look forward to continuing the conversation.</p>
                </>
              )}
            </div>
          </main>

          {/* Sidebar column (inside bordered container) */}
          <aside className="bg-transparent flex flex-col">
            <nav className="p-8 pt-36">
              <ul className="space-y-6 text-[20px]">
                <li>
                  <Link href="/#about" className="text-[#515151] tracking-wide hover:text-[#1A1A1A] transition-colors">ABOUT</Link>
                </li>
                <li>
                  <Link href="/portfolio" className="tracking-wide" style={{ color: '#080808' }}>PORTFOLIO</Link>
                </li>
                <li>
                  <Link href="/#process" className="text-[#515151] tracking-wide hover:text-[#1A1A1A] transition-colors">PROCESS</Link>
                </li>
              </ul>
            </nav>

            <div className="border-t border-gray-300" />

            <div className="flex-1 p-8 flex flex-col justify-end text-[#515151]">
              <p className="text-[14px] font-light">design by eva holts</p>
            </div>
          </aside>
        </div>
        {/* Full-height divider before sidebar (same as on homepage) */}
        <div className="absolute top-0 bottom-0 right-[17rem] w-px bg-gray-300" />
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

          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            {/* Image */}
            <img
              src={galleryImages[selectedImage]}
              alt={`Holes of Time ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
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
"use client";

import React, { useCallback, useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ContactForm from "@/components/ContactForm";
import NavigationButton, { CloseButton } from "@/components/NavigationButton";
import BurgerMenu from "@/components/BurgerMenu";

export default function HolesOfTimePage() {
  const [activeTab, setActiveTab] = useState<"overview" | "full">("overview");
  // Modal state
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scale, setScale] = useState(1);

  // Заборона скролінгу при відкритому мобільному меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function для відновлення скролінгу при unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Calculate scale based on available width
  React.useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      const gridWidth = 1105; // Fixed grid width (max right edge of gallery)

      let availableWidth;
      let scaleFactor = 0.95;

      if (windowWidth >= 1280) {
        const sidebarWidth = 272;
        const margins = 48;
        const padding = 80;
        availableWidth = windowWidth - sidebarWidth - margins - padding;
        scaleFactor = 0.92;
      } else if (windowWidth >= 1024) {
        const sidebarWidth = 272;
        const margins = 48;
        const padding = 48;
        const safetyBuffer = 20;
        availableWidth =
          windowWidth - sidebarWidth - margins - padding - safetyBuffer;
        scaleFactor = 0.95;
      } else if (windowWidth >= 768) {
        const sidebarWidth = 272;
        const margins = 32; // smaller margin on tablets
        const padding = 32;
        const safetyBuffer = 20;
        availableWidth =
          windowWidth - sidebarWidth - margins - padding - safetyBuffer;
        scaleFactor = 0.93;
      } else {
        return;
      }

      let calculatedScale = (availableWidth * scaleFactor) / gridWidth;

      let maxScale = 1.0;
      const minScale = 0.25;

      if (windowWidth < 1280 && windowWidth >= 1024) {
        maxScale = 0.85;
      } else if (windowWidth >= 768 && windowWidth < 1024) {
        maxScale = 0.78;
      }

      calculatedScale = Math.max(minScale, Math.min(maxScale, calculatedScale));

      setScale(calculatedScale);
    };

    const timeoutId = setTimeout(calculateScale, 100);
    calculateScale();

    window.addEventListener("resize", calculateScale);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", calculateScale);
    };
  }, []);

  // Gallery images with equal spacing (gap = 20px)
  // Each column is independent - images flow sequentially with gaps
  const gap = 20;
  const col1Width = 658; // First column width
  const smallWidth = 319; // Small images width (2 images + gap = 658px: 319 + 20 + 319 = 658)
  const smallHeight = 489; // Small images height (proportional to 319/314 * 481)

  const galleryImages = [
    // COLUMN 1 (left column - 658px wide)
    // Rectangle 74.png: starts at 0, ends at 430
    {
      src: "/holes of time/Rectangle 74.png",
      width: 658,
      height: 430,
      top: 0,
      left: gap,
      row: 1,
    },
    // 19 97.png: starts at 430 + 20 = 450, ends at 880
    {
      src: "/holes of time/19 97.png",
      width: 658,
      height: 430,
      top: 450,
      left: gap,
      row: 2,
    },
    // 22 2.png + 22 3.png: start at 880 + 20 = 900, end at 1389
    {
      src: "/holes of time/22 2.png",
      width: smallWidth,
      height: smallHeight,
      top: 900,
      left: gap,
      row: 3,
    },
    {
      src: "/holes of time/22 3.png",
      width: smallWidth,
      height: smallHeight,
      top: 900,
      left: smallWidth + gap * 2,
      row: 3,
    },
    // 19 98.png: starts at 1389 + 20 = 1409, ends at 1839
    {
      src: "/holes of time/19 98.png",
      width: 658,
      height: 430,
      top: 1409,
      left: gap,
      row: 4,
    },
    // 22 4.png + 22 5.png: start at 1839 + 20 = 1859, end at 2348
    {
      src: "/holes of time/22 4.png",
      width: smallWidth,
      height: smallHeight,
      top: 1859,
      left: gap,
      row: 5,
    },
    {
      src: "/holes of time/22 5.png",
      width: smallWidth,
      height: smallHeight,
      top: 1859,
      left: smallWidth + gap * 2,
      row: 5,
    },

    // COLUMN 2 (right column - 427px wide, aligned top and bottom with column 1)
    // 1 997.png: starts at 0, ends at 408 (427x408)
    {
      src: "/holes of time/1 997.png",
      width: 427,
      height: 408,
      top: 0,
      left: col1Width + gap * 2,
      row: 1,
    },
    // 4 2.png: starts at 408 + 20 = 428, ends at 1082 (427x654)
    {
      src: "/holes of time/4 2.png",
      width: 427,
      height: 654,
      top: 428,
      left: col1Width + gap * 2,
      row: 2,
    },
    // 1 998.png: starts at 1082 + 20 = 1102, ends at 1381 (427x279)
    {
      src: "/holes of time/1 998.png",
      width: 427,
      height: 279,
      top: 1102,
      left: col1Width + gap * 2,
      row: 3,
    },
    // 15 2.png: starts at 1381 + 20 = 1401, ends at 2056 (427x655)
    {
      src: "/holes of time/15 2.png",
      width: 427,
      height: 655,
      top: 1401,
      left: col1Width + gap * 2,
      row: 4,
    },
    // 1 999.png: starts at 2056 + 20 = 2076, ends at 2348 (427x272)
    {
      src: "/holes of time/1 999.png",
      width: 427,
      height: 272,
      top: 2076,
      left: col1Width + gap * 2,
      row: 5,
    },
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
      setSelectedImage(
        (selectedImage - 1 + galleryImages.length) % galleryImages.length
      );
    }
  }, [selectedImage, galleryImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
      }
    };

    if (selectedImage !== null) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage, nextImage, prevImage]);

  const overviewText =
    "Holes of Time is a series of damaged negatives I found after leaving my home country. Stripped of faces and details, they reflect fragmented memory and collective erasure. These images stand as quiet monuments to what endures when so much is lost.";

  const fullStoryText = `I discovered a forgotten roll of negatives in an abandoned apartment I moved into after leaving my home country. The images belonged to a family I never met, people whose names, lives, and stories I'll never know. And yet, their traces remained — silent, undeveloped, almost erased by time.

I chose to keep these photographs. But since I could not access the truth behind them, I began to interpret them through my own lens — emotionally, historically, intuitively. The film had already been damaged by chemical reactions, leaving behind black voids and white burns. I didn't try to repair these traces. I embraced them.

Holes of Time is a visual meditation on the right to remember — even when memory is borrowed, fragmented, or incomplete. The missing faces and distorted bodies speak not only of personal loss but of collective erasure. These "holes" become symbols of the many stories we never hear: lives consumed by war, migration, neglect, or historical violence.

In a time when truth is increasingly fragile, I see these damaged images as quiet monuments — not to what is known, but to what refuses to disappear.`;

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
          <h1 className="text-[22px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] uppercase font-sans">
            HOLES OF TIME
          </h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-black transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-black transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
        <div className="absolute bottom-0 left-5 right-0 h-px bg-gray-300 " />
      </header>

      {/* Author name under horizontal line - right aligned, clickable */}
      {/* <div className="md:hidden px-5 pt-3 pb-2 flex justify-end">
        <button
          onClick={() => (window.location.href = "/")}
          className="text-[16px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] lowercase hover:opacity-70 transition-opacity"
          style={{ fontFamily: "Work Sans" }}
        >
          anastasiia antonenko
        </button>
      </div> */}

      <div className="md:mx-3 lg:mx-6 md:my-3 lg:my-6 bg-transparent relative pr-0 md:pr-[17rem]">
        {/* Desktop/Tablet Header */}
        <div className="hidden md:block">
          <Header title="HOLES OF TIME" subtitle="anastasiia antonenko"/>
        </div>

        {/* Main content area */}
        <main className="py-2 md:py-4 lg:py-8 px-5 md:px-2 lg:pl-12 lg:pr-8">
          {/* Intro block with meta, separator and text; separator should not span the gallery below */}
          <div className="hidden lg:grid grid-cols-[260px_1px_1fr] gap-6 items-start">
            {/* Left meta column */}
            <aside className="text-[#1A1A1A]">
              <div className="space-y-8 pr-6 -ml-6">
                <div>
                  <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">
                    years:
                  </p>
                  <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">
                    2024–2025
                  </p>
                </div>
                <div>
                  <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">
                    medium:
                  </p>
                  <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">
                    hand-burned film negative using matches
                  </p>
                </div>
              </div>
            </aside>
            {/* Vertical separator - extends to horizontal line above */}
            <div className="bg-gray-300 w-px self-stretch -mt-8" />

            {/* Right content */}
            <section>
              <div className="flex items-baseline gap-8 pb-4">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={
                    "text-[45px] font-normal leading-[110%] tracking-[0.03em] lowercase transition-colors cursor-pointer " +
                    (activeTab === "overview"
                      ? "text-[#1A1A1A]"
                      : "text-[#515151] hover:text-[#1A1A1A]")
                  }
                  style={{ fontFamily: 'Work Sans' }}
                >
                  overview
                </button>
                <button
                  onClick={() => setActiveTab("full")}
                  className={
                    "text-[45px] font-normal leading-[110%] tracking-[0.03em] lowercase transition-colors cursor-pointer " +
                    (activeTab === "full"
                      ? "text-[#1A1A1A]"
                      : "text-[#515151] hover:text-[#1A1A1A]")
                  }
                  style={{ fontFamily: 'Work Sans' }}
                >
                  full story
                </button>
              </div>

              <p className="mt-3 text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A] max-w-[680px] whitespace-pre-line" style={{ fontFamily: 'Work Sans' }}>
                {activeTab === "overview" ? overviewText : fullStoryText}
              </p>

              {/* Horizontal line spanning full width */}
              <div className="relative mt-8">
                {/* Full-width horizontal line from left edge to sidebar */}
                <div
                  className="absolute top-0 h-px bg-gray-300"
                  style={{
                    left: "calc(-2rem - 260px - 1.5rem - 1px - 1.5rem)",
                    right: "calc(-2rem - 3%)",
                  }}
                />
              </div>
            </section>
          </div>

          {/* Mobile/Tablet Intro - simplified version */}
          <div className="lg:hidden mb-6">
            <div className="flex items-baseline mt-2 gap-4 md:gap-6 pb-3">
              <button
                onClick={() => setActiveTab("overview")}
                className={
                  "text-[28px] md:text-[36px] font-normal leading-[110%] tracking-[0.03em] lowercase transition-colors cursor-pointer " +
                  (activeTab === "overview"
                    ? "text-[#1A1A1A]"
                    : "text-[#515151] hover:text-[#1A1A1A]")
                }
                style={{ fontFamily: 'Work Sans' }}
              >
                overview
              </button>
              <button
                onClick={() => setActiveTab("full")}
                className={
                  "text-[28px] md:text-[36px] font-normal leading-[110%] tracking-[0.03em] lowercase transition-colors cursor-pointer " +
                  (activeTab === "full"
                    ? "text-[#1A1A1A]"
                    : "text-[#515151] hover:text-[#1A1A1A]")
                }
                style={{ fontFamily: 'Work Sans' }}
              >
                full story
              </button>
            </div>

            <p className="text-[14px] md:text-[16px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A] whitespace-pre-line pr-4 mb-4" style={{ fontFamily: 'Work Sans' }}>
              {activeTab === "overview" ? overviewText : fullStoryText}
            </p>

            {/* Meta info with proper lines structure */}
            <div className="mb-6 text-[#1A1A1A] relative">
              {/* Top horizontal line - extends to the right edge */}
              <div
                className="h-px bg-gray-300 mb-4"
                style={{ marginRight: "-20px" }}
              />

              {/* Years and Medium with vertical separator */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
                {/* Vertical line in the middle - from top line to bottom line */}
                <div
                  className="absolute left-1/2 w-px bg-gray-300 transform -translate-x-1/2"
                  style={{ top: "-16px", bottom: "-16px" }}
                />

                {/* Years column */}
                <div className="pr-4">
                  <p
                    className="text-[16px] font-medium leading-[150%] tracking-[-0.01em] lowercase"
                    style={{ fontFamily: "Work Sans" }}
                  >
                    years:
                  </p>
                  <p
                    className="mt-1 text-[16px] font-normal leading-[150%] tracking-[-0.01em] lowercase"
                    style={{ fontFamily: "Work Sans" }}
                  >
                    2024–2025
                  </p>
                </div>

                {/* Medium column */}
                <div className="pl-4">
                  <p
                    className="text-[16px] font-medium leading-[150%] tracking-[-0.01em] lowercase"
                    style={{ fontFamily: "Work Sans" }}
                  >
                    medium:
                  </p>
                  <p
                    className="mt-1 text-[16px] font-normal leading-[150%] tracking-[-0.01em] lowercase"
                    style={{ fontFamily: "Work Sans" }}
                  >
                    hand-burned film negative using matches
                  </p>
                </div>
              </div>

              {/* Bottom horizontal line - extends to the right edge */}
              <div
                className="h-px bg-gray-300 mt-4"
                style={{ marginRight: "-20px" }}
              />
            </div>
          </div>

          {/* Tablet and Desktop: Gallery with absolute positioning */}
          <div className="hidden mt-7.5 md:flex gap-5 lg:gap-7.5 w-full origin-top-left transition-transform duration-200 ease-out lg:-ml-7.5">
            <div className="flex w-3/5 flex-col gap-5 lg:gap-7.5">
              <img
                src={galleryImages[0].src}
                className="h-[calc(20%-6px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                alt=""
                onClick={() => openModal(0)}
              />
              <img
                src={galleryImages[1].src}
                className="h-[calc(20%-6px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                alt=""
                onClick={() => openModal(1)}
              />
              <div className="flex w-full h-[calc(20%-6px)] gap-5 lg:gap-7.5">
                <img
                  src={galleryImages[2].src}
                  className="w-[calc(50%-15px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  alt=""
                  onClick={() => openModal(2)}
                />
                <img
                  src={galleryImages[3].src}
                  className="w-[calc(50%-15px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  alt=""
                  onClick={() => openModal(3)}
                />
              </div>
              <img
                src={galleryImages[4].src}
                className="h-[calc(20%-6px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                alt=""
                onClick={() => openModal(4)}
              />
              <div className="flex w-full h-[calc(20%-6px)] gap-5 lg:gap-7.5">
                <img
                  src={galleryImages[5].src}
                  className="w-[calc(50%-15px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  alt=""
                  onClick={() => openModal(5)}
                />
                <img
                  src={galleryImages[6].src}
                  className="w-[calc(50%-15px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  alt=""
                  onClick={() => openModal(6)}
                />
              </div>
            </div>
            <div className="flex flex-col w-2/5 gap-5 lg:gap-7.5">
              <img
                src={galleryImages[7].src}
                className="w-full h-auto  bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                alt=""
                onClick={() => openModal(7)}
              />
              <img
                src={galleryImages[8].src}
                className="h-auto bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                alt=""
                onClick={() => openModal(8)}
              />
              <img
                src={galleryImages[9].src}
                className="h-auto bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                alt=""
                onClick={() => openModal(9)}
              />
              <img
                src={galleryImages[10].src}
                className="h-auto bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                alt=""
                onClick={() => openModal(10)}
              />
              <img
                src={galleryImages[11].src}
                className="h-[calc(20%-6px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                alt=""
                onClick={() => openModal(11)}
              />
            </div>
          </div>
          {/* <div
            className="hidden md:block w-full origin-top-left transition-transform duration-200 ease-out md:-ml-3 md:-mr-6 lg:-ml-12 lg:-mr-8 mt-6"
            style={{
              transform: `scale(${scale})`,
              height: `${2348 * scale}px`,
            }}
          >
            <div
              className="relative"
              style={{ width: "1105px", height: "2348px" }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="absolute overflow-hidden bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  style={{
                    width: `${image.width}px`,
                    height: `${image.height}px`,
                    top: `${image.top}px`,
                    left: `${image.left}px`,
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
          </div> */}

          {/* Mobile: Grid with 2 columns */}
          <div className="md:hidden w-full max-w-full mt-6 space-y-3">
            {/* Row 1 */}
            <div className="flex gap-3">
              <img
                src={galleryImages[0].src}
                className="w-[calc(50%-6px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity aspect-[162/106] object-cover"
                onClick={() => openModal(0)}
              />
              <img
                src={galleryImages[7].src}
                className="w-[calc(50%-6px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity aspect-[161/105] object-cover"
                onClick={() => openModal(7)}
              />
            </div>

            {/* Row 2 */}
            <div className="flex gap-3">
              <div className="flex flex-col gap-3 w-[calc(50%-6px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity">
                <img
                  src={galleryImages[1].src}
                  alt=""
                  className="aspect-[162/106] object-cover"
                  onClick={() => openModal(1)}
                />
                <img
                  src={galleryImages[2].src}
                  alt=""
                  className="aspect-[162/248] object-cover"
                  onClick={() => openModal(2)}
                />
                <img
                  src={galleryImages[9].src}
                  alt=""
                  className="aspect-[162/106] object-cover"
                  onClick={() => openModal(9)}
                />
              </div>
              <div className="flex flex-col gap-3 w-[calc(50%-6px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity">
                <img
                  src={galleryImages[8].src}
                  alt=""
                  className="aspect-[161/236] object-cover"
                  onClick={() => openModal(8)}
                />
                <img
                  src={galleryImages[3].src}
                  alt=""
                  className="aspect-[161/237] object-cover"
                  onClick={() => openModal(3)}
                />
              </div>
            </div>

            {/* Row 3: full width image */}
            <img
              src={galleryImages[4].src}
              alt=""
              className="w-full aspect-[335/219] object-cover"
              onClick={() => openModal(4)}
            />

            {/* Row 4: two images side by side */}
            <div className="flex gap-3">
              <img
                src={galleryImages[5].src}
                className="w-[calc(50%-6px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity aspect-[162/246] object-cover"
                onClick={() => openModal(5)}
              />
              <img
                src={galleryImages[6].src}
                className="w-[calc(50%-6px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity aspect-[161/246] object-cover"
                onClick={() => openModal(6)}
              />
            </div>

            {/* Row 5: stacked side-by-side */}
            <div className="flex gap-3">
              <img
                src={galleryImages[10].src}
                className="w-[calc(30%-4px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity aspect-[99/146] object-cover"
                onClick={() => openModal(10)}
              />
              <img
                src={galleryImages[11].src}
                className="w-[calc(70%-4px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity aspect-[223/146] object-cover"
                onClick={() => openModal(11)}
              />
            </div>
          </div>

          {/* Contact card */}
          <div className="mt-4 md:mt-6 lg:mt-10 pt-0 px-2 sm:px-4 md:px-0">
            <ContactForm />
          </div>
        </main>
      </div>

      {/* Sidebar - fixed positioned relative to viewport, hidden only on mobile */}
      <div className="hidden md:block fixed top-0 bottom-0 right-0 w-[17rem]">
        <Sidebar />
      </div>

      {/* Modal for image viewing */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Close button - fixed to top-right corner of viewport */}
          <CloseButton onClick={closeModal} className="fixed top-8 right-8" />

          <div 
            className="relative mx-4 flex items-center justify-center"
            onClick={closeModal}
          >
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

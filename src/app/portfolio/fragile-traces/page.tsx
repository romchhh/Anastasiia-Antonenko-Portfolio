"use client";

import React, { useCallback, useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ContactForm from "@/components/ContactForm";
import NavigationButton, { CloseButton } from "@/components/NavigationButton";
import BurgerMenu from "@/components/BurgerMenu";

export default function FragileTracesPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "full">("overview");
  // Modal state
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scale, setScale] = useState(1);

  // Calculate scale based on available width
  React.useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      const gridWidth = 1138; // Fixed grid width (max right edge of gallery)

      // Calculate available width based on screen size
      let availableWidth;
      let scaleFactor = 0.95;

      if (windowWidth >= 1280) {
        // Large Desktop with sidebar
        const sidebarWidth = 272;
        const margins = 48;
        const padding = 80;
        availableWidth = windowWidth - sidebarWidth - margins - padding;
        scaleFactor = 0.92;
      } else if (windowWidth >= 1024) {
        // Desktop with sidebar
        const sidebarWidth = 272;
        const margins = 48;
        const padding = 48;
        const safetyBuffer = 20;
        availableWidth =
          windowWidth - sidebarWidth - margins - padding - safetyBuffer;
        scaleFactor = 0.95;
      } else if (windowWidth >= 768) {
        // Tablet - will use grid layout instead
        return;
      } else {
        // Mobile - will use custom layout instead
        return;
      }

      // Calculate scale to fit available width
      let calculatedScale = (availableWidth * scaleFactor) / gridWidth;

      // Set minimum and maximum scale limits
      let maxScale = 1.0;
      const minScale = 0.25;

      if (windowWidth < 1280 && windowWidth >= 1024) {
        maxScale = 0.85;
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

  // Gallery images with absolute positioning based on provided coordinates
  const gap = 20;

  const galleryImages = [
    // ROW 1
    // Column 1
    {
      src: "/fragile traces/Anastasiia_Antonenko_Fragile Traces_06 2.png",
      width: 650,
      height: 940,
      top: 0,
      left: gap,
    },
    // Column 2
    {
      src: "/fragile traces/Anastasiia_Antonenko_Fragile Traces_06 3.png",
      width: 438,
      height: 615,
      top: 0,
      left: 700,
    },

    // ROW 2
    // Column 1 - two images side by side
    {
      src: "/fragile traces/Anastasiia_Antonenko_Fragile Traces_06 8.png",
      width: 320,
      height: 449,
      top: 972,
      left: gap,
    },
    {
      src: "/fragile traces/Anastasiia_Antonenko_Fragile Traces_06 9.png",
      width: 320,
      height: 449,
      top: 972,
      left: 350,
    },
    // Column 2
    {
      src: "/fragile traces/Anastasiia_Antonenko_Fragile Traces_06 10.png",
      width: 438,
      height: 615,
      top: 645,
      left: 700,
    },

    // ROW 3
    // Column 1 - two images side by side
    {
      src: "/fragile traces/Anastasiia_Antonenko_Fragile Traces_06 12.png",
      width: 320,
      height: 449,
      top: 1453,
      left: gap,
    },
    {
      src: "/fragile traces/Anastasiia_Antonenko_Fragile Traces_06 13.png",
      width: 320,
      height: 449,
      top: 1453,
      left: 350,
    },
    // Column 2
    {
      src: "/fragile traces/Anastasiia_Antonenko_Fragile Traces_06 11.png",
      width: 438,
      height: 615,
      top: 1290,
      left: 700,
    },

    // ROW 4
    // Column 1
    {
      src: "/fragile traces/Anastasiia_Antonenko_Fragile Traces_06 14.png",
      width: 533,
      height: 776,
      top: 1934,
      left: gap,
    },
    // Column 2
    {
      src: "/fragile traces/Anastasiia_Antonenko_Fragile Traces_06 15.png",
      width: 553,
      height: 776,
      top: 1934,
      left: 585,
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
    "Fragile Traces is a photographic series made with the Polaroid lift technique on glass. Shot in Ukraine, it reflects on fragile memory, ruins, and absence. Cracks and distortions in the emulsion echo fragmented recollections, evoking what remains after devastation and the subtle presence of the past.";

  const fullStoryText = `Fragile Traces is a photographic series created using the Polaroid lift technique on glass.

The project reflects on the fragility of memory, the remnants of loss, and the presence that lingers within absence. Shot in Ukraine, the images depict ruined buildings, memorial spaces, and symbols of personal and collective memory. Transferring them onto glass evokes the instability of recollections—easily fractured or fading, leaving only subtle imprints of what once was.

Cracks and distortions in the emulsion mirror the fragmentation of lived experience. The series explores what remains after devastation, how we remember, and what it means to live with the invisible traces of the past.`;

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
            FRAGILE TRACES
          </h1>
          {/* Burger Menu Button */}
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
        {/* Horizontal line */}
        <div className="absolute bottom-0 left-5 right-0 h-px bg-gray-300" />
      </header>

      {/* Author name under horizontal line - right aligned, clickable */}
      <div className="md:hidden px-5 pt-3 pb-2 flex justify-end">
        <button
          onClick={() => (window.location.href = "/")}
          className="text-[16px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] lowercase hover:opacity-70 transition-opacity"
          style={{ fontFamily: "Work Sans" }}
        >
          anastasiia antonenko
        </button>
      </div>

      <div className="md:mx-3 lg:mx-6 md:my-3 lg:my-6 bg-transparent relative pr-0 md:pr-[17rem]">
        {/* Desktop/Tablet Header - uses original Header component */}
        <div className="hidden md:block">
          <Header title="FRAGILE TRACES" subtitle="anastasiia antonenko" />
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
                    2025
                  </p>
                </div>
                <div>
                  <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">
                    medium:
                  </p>
                  <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">
                    Polaroid lift on glass
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
                    "text-[45px] font-normal leading-[110%] tracking-[0.03em] lowercase transition-colors " +
                    (activeTab === "overview"
                      ? "text-[#1A1A1A]"
                      : "text-[#515151] hover:text-[#1A1A1A]")
                  }
                >
                  overview
                </button>
                <button
                  onClick={() => setActiveTab("full")}
                  className={
                    "text-[45px] font-normal leading-[110%] tracking-[0.03em] lowercase transition-colors " +
                    (activeTab === "full"
                      ? "text-[#1A1A1A]"
                      : "text-[#515151] hover:text-[#1A1A1A]")
                  }
                >
                  full story
                </button>
              </div>

              <p className="mt-3 text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A] max-w-[680px] whitespace-pre-line">
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
            {/* Tabs */}
            <div className="flex items-baseline gap-4 md:gap-6 pb-3">
              <button
                onClick={() => setActiveTab("overview")}
                className={
                  "text-[28px] md:text-[36px] font-normal leading-[110%] tracking-[0.03em] lowercase transition-colors " +
                  (activeTab === "overview"
                    ? "text-[#1A1A1A]"
                    : "text-[#515151] hover:text-[#1A1A1A]")
                }
              >
                overview
              </button>
              <button
                onClick={() => setActiveTab("full")}
                className={
                  "text-[28px] md:text-[36px] font-normal leading-[110%] tracking-[0.03em] lowercase transition-colors " +
                  (activeTab === "full"
                    ? "text-[#1A1A1A]"
                    : "text-[#515151] hover:text-[#1A1A1A]")
                }
              >
                full story
              </button>
            </div>

            {/* Text content */}
            <p className="text-[14px] md:text-[16px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A] whitespace-pre-line pr-4 mb-4">
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
                    2025
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
                    Polaroid lift on glass
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

          {/* Desktop: Gallery with absolute positioning - scales responsively */}
          <div
            className="hidden lg:block w-full origin-top-left transition-transform duration-200 ease-out -ml-12 -mr-8 mt-6"
            style={{
              transform: `scale(${scale})`,
              height: `${2740 * scale}px`,
            }}
          >
            <div
              className="relative"
              style={{ width: "1138px", height: "2740px" }}
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
                    alt={`Fragile Traces ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tablet: Grid with 2 columns */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => openModal(index)}
              >
                <div className="overflow-hidden bg-white/0">
                  <img
                    src={image.src}
                    alt={`Fragile Traces ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Grid with 2 columns */}
          <div className="md:hidden w-full max-w-full mt-6 flex flex-col gap-3 mx-auto">
            <div className="flex gap-3 w-full">
              <img className="w-[calc(50%-6px)] h-auto" src={galleryImages[0].src} />
              <img className="w-[calc(50%-6px)] h-auto" src={galleryImages[1].src} />
            </div>
            <div className="flex gap-3 w-full">
              <div className="flex flex-col gap-3 w-2/5">
                <img className="w-full h-auto" src={galleryImages[2].src} />
                <img className="w-full h-auto" src={galleryImages[5].src} />
                <img className="w-full h-auto" src={galleryImages[6].src} />
              </div>
              <div className="flex flex-col gap-3 w-3/5">
                <img className="w-full h-auto" src={galleryImages[4].src} />
                <img className="w-full h-auto" src={galleryImages[7].src} />
              </div>
            </div>
            <div className="flex gap-3 w-full">
              <img className="w-[calc(50%-6px)] h-auto" src={galleryImages[8].src} />
              <img className="w-[calc(50%-6px)] h-auto" src={galleryImages[9].src} />
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

          <div className="relative mx-4 flex items-center justify-center">
            {/* Image */}
            <img
              src={galleryImages[selectedImage].src}
              alt={`Fragile Traces ${selectedImage + 1}`}
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

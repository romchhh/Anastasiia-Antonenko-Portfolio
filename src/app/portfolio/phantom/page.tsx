"use client";

import React, { useCallback, useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ContactForm from "@/components/ContactForm";
import NavigationButton, { CloseButton } from "@/components/NavigationButton";
import BurgerMenu from "@/components/BurgerMenu";

export default function PhantomPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "full">("overview");
  // Modal state
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scale, setScale] = useState(1);

  // Calculate scale based on available width
  React.useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      const gridWidth = 1138; // Fixed grid width

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

  // Gallery images with absolute positioning based on provided coordinates
  const gap = 20;

  const galleryImages = [
    // ROW 1
    // Column 1
    {
      src: "/Phantom/Rectangle 74.png",
      width: 658,
      height: 430,
      top: 0,
      left: gap,
    },
    // Column 2
    { src: "/Phantom/4 2.png", width: 450, height: 687, top: 0, left: 688 },

    // ROW 2
    // Column 1 - two images side by side
    { src: "/Phantom/22 3.png", width: 314, height: 460, top: 460, left: gap },
    { src: "/Phantom/22 2.png", width: 314, height: 460, top: 460, left: 344 },
    // Column 2
    { src: "/Phantom/4 3.png", width: 449, height: 686, top: 717, left: 688 },

    // ROW 3
    // Column 1
    { src: "/Phantom/15 2.png", width: 658, height: 938, top: 950, left: gap },
    // Column 2
    { src: "/Phantom/4 4.png", width: 450, height: 687, top: 1433, left: 688 },

    // ROW 4
    // Column 1
    {
      src: "/Phantom/Rectangle 75.png",
      width: 658,
      height: 430,
      top: 1918,
      left: gap,
    },

    // ROW 5
    // Column 1 - two images side by side
    { src: "/Phantom/22 4.png", width: 314, height: 460, top: 2378, left: gap },
    { src: "/Phantom/22 5.png", width: 314, height: 460, top: 2378, left: 344 },
    // Column 2
    { src: "/Phantom/4 5.png", width: 450, height: 687, top: 2151, left: 688 },
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
    "This project reflects on loneliness as a universal yet painful emotion. The figure in black with a distorted face symbolizes alienation and the struggle of feeling out of place. Created during my own period of isolation, the series is both personal reflection and reminder of the need for empathy.";

  const fullStoryText = `This project explores the complex world of human emotions, focusing on the painful yet universal feeling of loneliness. Loneliness can overwhelm us, make us feel cut off from others, and create a deep sense of disconnection.

The visual image of a man dressed in black with a distorted face shows the inner struggle of feeling alienated and out of place. It reflects the conflict many people experience when they feel like outsiders. The act of pushing others away — often a reaction to pain and depression — is something many can relate to. When emotions become too heavy, people tend to withdraw, which only makes the loneliness stronger.

I created this series during a time when I was going through a similar experience myself. The work became both a reflection of my own feelings and a way to process them.

This project is also a reminder of the importance of empathy and support for those who may be struggling. It emphasizes that loneliness is something we all share, and even a small gesture of kindness can help someone move back toward connection and inner peace.`;

  return (
    <div className="min-h-screen bg-[#F5F5F5] relative overflow-x-hidden">
      {/* Burger Menu - mobile only */}
      <div className="md:hidden">
        <BurgerMenu
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {/* Mobile Header */}
      <header className="md:hidden bg-transparent relative">
        <div className="px-5 pt-4 pb-4 flex items-center justify-between">
          <h1 className="text-[22px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] uppercase font-sans">
            PHANTOM
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
        {/* Desktop/Tablet Header */}
        <div className="hidden md:block">
          <Header title="PHANTOM" subtitle="anastasiia antonenko" />
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
                    year:
                  </p>
                  <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">
                    2023
                  </p>
                </div>
                <div>
                  <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">
                    medium:
                  </p>
                  <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">
                    Analog photography
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

          {/* Mobile/Tablet Intro */}
          <div className="lg:hidden mb-6">
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
                    year:
                  </p>
                  <p
                    className="mt-1 text-[16px] font-normal leading-[150%] tracking-[-0.01em] lowercase"
                    style={{ fontFamily: "Work Sans" }}
                  >
                    2023
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
                    Analog photography
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
            className="hidden md:block w-full origin-top-left transition-transform duration-200 ease-out -ml-2 lg:-ml-12 -mr-8 mt-6"
            style={{
              transform: `scale(${scale})`,
              height: `${2868 * scale}px`,
            }}
          >
            <div
              className="relative"
              style={{ width: "1138px", height: "2868px" }}
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
                    alt={`Phantom ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Grid with 2 columns */}
          <div className="md:hidden w-full max-w-full mt-6 flex flex-col gap-3 mx-auto">
            <img src={galleryImages[0].src} className="mx-auto" alt="" />
            <div className="flex gap-3 w-full ">
              <img
                className="w-[calc(50%-6px)] h-auto"
                src={galleryImages[2].src}
              />
              <img
                className="w-[calc(50%-6px)] h-auto"
                src={galleryImages[3].src}
              />
            </div>
            <div className="flex gap-3 w-full">
              <div className="flex flex-col gap-3 w-2/5">
                <img className="w-full h-auto" src={galleryImages[4].src} />
                <img className="w-full h-auto" src={galleryImages[6].src} />
                <img className="w-full h-auto" src={galleryImages[1].src} />
              </div>
              <div className="flex flex-col gap-3 w-3/5">
                <img className="w-full h-auto" src={galleryImages[5].src} />
                <img className="w-full h-auto" src={galleryImages[10].src} />
              </div>
            </div>
            <div className="flex gap-3 w-full">
              <img
                className="w-[calc(50%-6px)] h-auto"
                src={galleryImages[9].src}
              />
              <img
                className="w-[calc(50%-6px)] h-auto"
                src={galleryImages[8].src}
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

          <div className="relative mx-4 flex items-center justify-center">
            {/* Image */}
            <img
              src={galleryImages[selectedImage].src}
              alt={`Phantom ${selectedImage + 1}`}
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

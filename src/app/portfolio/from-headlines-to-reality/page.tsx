"use client";

import React, { useCallback, useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ContactForm from "@/components/ContactForm";
import NavigationButton, { CloseButton } from "@/components/NavigationButton";
import BurgerMenu from "@/components/BurgerMenu";

export default function FromHeadlinesToRealityPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "full">("overview");
  // Modal state
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scale, setScale] = useState(1);

  // Calculate scale based on available width
  // React.useEffect(() => {
  //   const calculateScale = () => {
  //     const windowWidth = window.innerWidth;
  //     const gridWidth = 1138;
  //     let availableWidth;
  //     let scaleFactor = 0.95;
  //     if (windowWidth >= 1280) {
  //       const sidebarWidth = 272;
  //       const margins = 48;
  //       const padding = 80;
  //       availableWidth = windowWidth - sidebarWidth - margins - padding;
  //       scaleFactor = 0.92;
  //     } else if (windowWidth >= 1024) {
  //       const sidebarWidth = 272;
  //       const margins = 48;
  //       const padding = 48;
  //       const safetyBuffer = 20;
  //       availableWidth =
  //         windowWidth - sidebarWidth - margins - padding - safetyBuffer;
  //       scaleFactor = 0.95;
  //     } else if (windowWidth >= 768) {
  //       const sidebarWidth = 272;
  //       const margins = 32; // smaller margin on tablets
  //       const padding = 32;
  //       const safetyBuffer = 20;
  //       availableWidth =
  //         windowWidth - sidebarWidth - margins - padding - safetyBuffer;
  //       scaleFactor = 0.93;
  //     } else {
  //       return;
  //     }
  //     let calculatedScale = (availableWidth * scaleFactor) / gridWidth;
  //     let maxScale = 1.0;
  //     const minScale = 0.25;
  //     if (windowWidth < 1280 && windowWidth >= 1024) {
  //       maxScale = 0.85;
  //     } else if (windowWidth >= 768 && windowWidth < 1024) {
  //       maxScale = 0.78;
  //     }
  //     calculatedScale = Math.max(minScale, Math.min(maxScale, calculatedScale));
  //     setScale(calculatedScale);
  //   };
  //   const timeoutId = setTimeout(calculateScale, 100);
  //   calculateScale();
  //   window.addEventListener("resize", calculateScale);
  //   return () => {
  //     clearTimeout(timeoutId);
  //     window.removeEventListener("resize", calculateScale);
  //   };
  // }, []);

  // Gallery images with absolute positioning based on provided coordinates
  const gap = 20;

  const galleryImages = [
    // ROW 1
    // Column 1
    {
      src: "/from headlines to reality/Anastasiia_Antonenko_Fragile Traces_06 2.png",
      width: 650,
      height: 932,
      top: 0,
      left: gap,
    },
    // Column 2
    {
      src: "/from headlines to reality/Anastasiia_Antonenko_Fragile Traces_06 3.png",
      width: 438,
      height: 615,
      top: 0,
      left: 700,
    },

    // ROW 2
    // Column 1
    {
      src: "/from headlines to reality/Rectangle 76.png",
      width: 650,
      height: 466,
      top: 962,
      left: gap,
    },
    // Column 2
    {
      src: "/from headlines to reality/Anastasiia_Antonenko_Fragile Traces_06 10.png",
      width: 438,
      height: 615,
      top: 645,
      left: 700,
    },

    // ROW 3
    // Column 1 - two images side by side
    {
      src: "/from headlines to reality/Anastasiia_Antonenko_Fragile Traces_06 12.png",
      width: 320,
      height: 444,
      top: 1458,
      left: gap,
    },
    {
      src: "/from headlines to reality/Anastasiia_Antonenko_Fragile Traces_06 13.png",
      width: 320,
      height: 444,
      top: 1458,
      left: 350,
    },
    // Column 2
    {
      src: "/from headlines to reality/Anastasiia_Antonenko_Fragile Traces_06 11.png",
      width: 437,
      height: 612,
      top: 1290,
      left: 700,
    },

    // ROW 4
    // Column 1
    {
      src: "/from headlines to reality/Anastasiia_Antonenko_Fragile Traces_06 14.png",
      width: 533,
      height: 776,
      top: 1932,
      left: gap,
    },
    // Column 2
    {
      src: "/from headlines to reality/Anastasiia_Antonenko_Fragile Traces_06 15.png",
      width: 553,
      height: 776,
      top: 1932,
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
    "This project reflects on how war reshapes urban space and emotional life. Cityscapes with tanks, ruins, and daily routines form a quiet archive of endurance, while collages of cut-out headlines reveal fractures between lived experience and public language.";

  const fullStoryText = `This project reflects on how war reshapes urban space and emotional experience, blending personal memory with documentary attention. At its core are cityscapes where ruins and everyday life coexist — tanks in squares, children passing wrecked machinery, civilians pausing at sites of destruction. Over months these scenes became a quiet archive of presence and endurance.

Research also explored how public language responds to trauma, focusing on Ukrainian headlines as markers of transition and fracture. Cut-out texts in collages act not as commentary but as ruptures and reminders, revealing how memory and meaning are rebuilt under pressure.

Born in Luhansk, I carry loss as both personal and generational, making this work not only about war but about presence and the human effort to hold on to meaning.`;

  return (
    <div className="min-h-screen bg-[#F5F5F5] relative overflow-x-hidden">
      <div className="md:hidden">
        <BurgerMenu
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>
      <header className="md:hidden bg-transparent relative">
        <div className="px-5 pt-4 pb-4 flex items-center justify-between">
          <h1 className="text-[22px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] uppercase font-sans">
            FROM HEADLINES TO REALITY
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
        <div className="hidden md:block">
          <Header
            title="FROM HEADLINES TO REALITY"
            subtitle="anastasiia antonenko"
          />
        </div>
        <main className="py-2 md:py-4 lg:py-8 px-5 md:px-2 lg:pl-12 lg:pr-8">
          <div className="hidden lg:grid grid-cols-[260px_1px_1fr] gap-6 items-start">
            {/* Left meta column */}
            <aside className="text-[#1A1A1A]">
              <div className="space-y-8 pr-6 -ml-6">
                <div>
                  <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">
                    years:
                  </p>
                  <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">
                    2023–2024
                  </p>
                </div>
                <div>
                  <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">
                    medium:
                  </p>
                  <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">
                    collage of newspaper prints and analog photography on heavy
                    paper, tea-dyed
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
                  style={{ fontFamily: "Work Sans" }}
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
                  style={{ fontFamily: "Work Sans" }}
                >
                  full story
                </button>
              </div>

              <p
                className="mt-3 text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A] w-[680px] whitespace-pre-line"
                style={{ fontFamily: "Work Sans" }}
              >
                {activeTab === "overview" ? overviewText : fullStoryText}
              </p>

              {/* Horizontal line spanning full width */}
              <div className="relative mt-16">
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
          <div className="lg:hidden mb-6">
            <div className="flex items-baseline gap-4 md:gap-6 pb-3">
              <button
                onClick={() => setActiveTab("overview")}
                className={
                  "text-[28px] md:text-[36px] font-normal leading-[110%] tracking-[0.03em] lowercase transition-colors cursor-pointer " +
                  (activeTab === "overview"
                    ? "text-[#1A1A1A]"
                    : "text-[#515151] hover:text-[#1A1A1A]")
                }
                style={{ fontFamily: "Work Sans" }}
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
                style={{ fontFamily: "Work Sans" }}
              >
                full story
              </button>
            </div>
            <p
              className="text-[14px] md:text-[16px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A] whitespace-pre-line pr-4 mb-4"
              style={{ fontFamily: "Work Sans" }}
            >
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
                    2023–2024
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
                    collage of newspaper prints and analog photography on heavy
                    paper, tea-dyed
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
          <div className="hidden mt-7.5 md:flex flex-col gap-5 lg:gap-7.5 w-full origin-top-left transition-transform duration-200 ease-out lg:-ml-7.5">
            <div className="flex gap-5 lg:gap-7.5 w-full">
              <div className="flex w-3/5 flex-col gap-5 lg:gap-7.5">
                <img
                  src={galleryImages[0].src}
                  className="h-[calc(50%-15px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  alt=""
                  onClick={() => openModal(0)}
                />
                <img
                  src={galleryImages[2].src}
                  className="h-[calc(50%-15px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  alt=""
                  onClick={() => openModal(2)}
                />
                <div className="flex w-full gap-5 lg:gap-7.5">
                  <img
                    src={galleryImages[4].src}
                    className="w-[calc(50%-15px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                    alt=""
                    onClick={() => openModal(4)}
                  />
                  <img
                    src={galleryImages[5].src}
                    className="w-[calc(50%-15px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                    alt=""
                    onClick={() => openModal(5)}
                  />
                </div>
              </div>
              <div className="flex flex-col w-2/5 gap-5 lg:gap-7.5">
                <img
                  src={galleryImages[1].src}
                  className="h-[calc(33%-10px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  alt=""
                  onClick={() => openModal(1)}
                />
                <img
                  src={galleryImages[3].src}
                  className="h-[calc(33%-10px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  alt=""
                  onClick={() => openModal(0)}
                />
                <img
                  src={galleryImages[6].src}
                  className="h-[calc(33%-10px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  alt=""
                  onClick={() => openModal(6)}
                />
              </div>
            </div>
            <div className="flex w-full gap-5 lg:gap-7.5">
              <img
                src={galleryImages[7].src}
                className="w-[calc(50%-15px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                alt=""
                onClick={() => openModal(7)}
              />
              <img
                src={galleryImages[8].src}
                className="w-[calc(50%-15px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                alt=""
                onClick={() => openModal(8)}
              />
            </div>
          </div>
          {/* <div
            className="hidden md:block w-full origin-top-left transition-transform duration-200 ease-out -ml-2 lg:-ml-12 -mr-8 mt-6"
            style={{
              transform: `scale(${scale})`,
              height: `${2738 * scale}px`,
            }}
          >
            <div
              className="relative"
              style={{ width: "1138px", height: "2738px" }}
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
                    alt={`From Headlines to Reality ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div> */}
          {/* Mobile: Grid with 2 columns */}
          <div className="md:hidden w-full max-w-full mt-6 flex flex-col gap-3 mx-auto">
            <div className="flex gap-3 w-full">
              <img
                className="w-[calc(50%-6px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity h-auto"
                src={galleryImages[0].src}
                onClick={() => openModal(0)}
              />
              <img
                className="w-[calc(50%-6px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity h-auto"
                src={galleryImages[1].src}
                onClick={() => openModal(1)}
              />
            </div>
            <div className="flex gap-3 w-full">
              <div className="flex flex-col gap-3 w-2/5">
                <img
                  className="w-full h-[calc(33%-4px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  src={galleryImages[3].src}
                  onClick={() => openModal(3)}
                />
                <img
                  className="w-full h-[calc(33%-4px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  src={galleryImages[6].src}
                  onClick={() => openModal(6)}
                />
                <img
                  className="w-full h-[calc(33%-4px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  src={galleryImages[5].src}
                  onClick={() => openModal(5)}
                />
              </div>
              <div className="flex flex-col gap-3 w-3/5">
                <img
                  className="w-full h-[calc(50%-6px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  src={galleryImages[7].src}
                  onClick={() => openModal(7)}
                />
                <img
                  className="w-full h-[calc(50%-6px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  src={galleryImages[8].src}
                  onClick={() => openModal(8)}
                />
              </div>
            </div>
            <img
              className="w-full h-auto"
              src={galleryImages[2].src}
              onClick={() => openModal(2)}
            />
          </div>
          <div className="mt-4 md:mt-6 lg:mt-10 pt-0 px-2 sm:px-4 md:px-0">
            <ContactForm />
          </div>
        </main>
      </div>
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
              alt={`From Headlines to Reality ${selectedImage + 1}`}
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

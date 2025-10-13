"use client";

import React, { useCallback, useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ContactForm from "@/components/ContactForm";
import NavigationButton, { CloseButton } from "@/components/NavigationButton";
import BurgerMenu from "@/components/BurgerMenu";

export default function InTheEyesOfOthersPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "full">("overview");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scale, setScale] = useState(1);

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

  const gap = 20;
  const galleryImages = [
    {
      src: "/In the Eyes of Others/Anastasiia_Antonenko_Fragile Traces_06 14.png",
      width: 637,
      height: 800,
      top: 0,
      left: 1 + gap,
    },
    {
      src: "/In the Eyes of Others/Anastasiia_Antonenko_Fragile Traces_06 12.png",
      width: 450,
      height: 523,
      top: 0,
      left: 688,
    },
    {
      src: "/In the Eyes of Others/Anastasiia_Antonenko_Fragile Traces_06 15.png",
      width: 450,
      height: 523,
      top: 554,
      left: 688,
    },
    {
      src: "/In the Eyes of Others/Anastasiia_Antonenko_Fragile Traces_06 8.png",
      width: 637,
      height: 800,
      top: 831,
      left: gap,
    },
    {
      src: "/In the Eyes of Others/Anastasiia_Antonenko_Fragile Traces_06 16.png",
      width: 450,
      height: 523,
      top: 1108,
      left: 688,
    },
    {
      src: "/In the Eyes of Others/Anastasiia_Antonenko_Fragile Traces_06 17.png",
      width: 533,
      height: 673,
      top: 1661,
      left: gap,
    },
    {
      src: "/In the Eyes of Others/Anastasiia_Antonenko_Fragile Traces_06 18.png",
      width: 553,
      height: 673,
      top: 1661,
      left: 583,
    },
  ];

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);
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
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage, nextImage, prevImage]);

  const overviewText =
    'This series explores the boundary between humans and animals, inspired by John Berger\'s idea of animals as "the other." The yellow tone filters perception, while animal motifs reveal a primal essence within us. The work asks if we can see animals not as separate, but as an extension of ourselves.';
  const fullStoryText = `This series of photographs was born from reflections on the relationship between humans and animals—how we look at them and how they might look back at us. It was inspired by John Berger's Ways of Seeing, where animals are described as "the other," alienated in our consciousness yet inseparable from who we are.

Through these works, I wanted to explore not just how we perceive animals, but also how they can reveal something profound about ourselves. The yellow tone in the series serves as a metaphor for altered perception, a filter we place over reality to make it more palatable or comprehensible. The animal motifs symbolize the primal, natural essence within us—an essence we often overlook in daily life, yet one that persists quietly beneath the surface.

This project examines the fragile boundary between two worlds: the human and the animal. It seeks to dissolve that boundary, asking whether we can view ourselves through the eyes of nature. Can we see animals not as "the other," but as an extension of ourselves? And if we do, how might it transform the way we engage with the world around us?`;

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
            IN THE EYES OF OTHERS
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
        <div className="hidden md:block">
          <Header
            title="IN THE EYES OF OTHERS"
            subtitle="anastasiia antonenko"
          />
        </div>
        <main className="py-2 md:py-4 lg:py-8 px-5 md:px-2 lg:pl-12 lg:pr-8">
          <div className="hidden lg:grid grid-cols-[260px_1px_1fr] gap-6 items-start">
            <aside className="text-[#1A1A1A]">
              <div className="space-y-8 pr-6 -ml-6">
                <div>
                  <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">
                    year:
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
                    multiple exposure on instant camera
                  </p>
                </div>
              </div>
            </aside>
            <div className="bg-gray-300 w-px self-stretch -mt-8" />
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
              <p className="mt-3 text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A] w-[680px] whitespace-pre-line">
                {activeTab === "overview" ? overviewText : fullStoryText}
              </p>
              <div className="relative mt-8">
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
                    multiple exposure on instant camera
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
                  src={galleryImages[3].src}
                  className="h-[calc(50%-15px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  alt=""
                  onClick={() => openModal(3)}
                />
              </div>
              <div className="flex flex-col w-2/5 gap-5 lg:gap-7.5">
                <img
                  src={galleryImages[1].src}
                  className="h-[calc(33%-10px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  alt=""
                  onClick={() => openModal(1)}
                />
                <img
                  src={galleryImages[2].src}
                  className="h-[calc(33%-10px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  alt=""
                  onClick={() => openModal(2)}
                />
                <img
                  src={galleryImages[4].src}
                  className="h-[calc(33%-10px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  alt=""
                  onClick={() => openModal(4)}
                />
              </div>
            </div>
            <div className="flex w-full gap-5 lg:gap-7.5">
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
          {/* <div
            className="hidden md:block w-full origin-top-left transition-transform duration-200 ease-out -ml-2 lg:-ml-12 -mr-8 mt-6"
            style={{
              transform: `scale(${scale})`,
              height: `${2354 * scale}px`,
            }}
          >
            <div
              className="relative"
              style={{ width: "1138px", height: "2354px" }}
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
                    alt={`In the Eyes of Others ${index + 1}`}
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
              />
              <img
                className="w-[calc(50%-6px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity h-auto"
                src={galleryImages[1].src}
              />
            </div>
            <div className="flex gap-3 w-full">
              <div className="flex flex-col gap-3 w-3/5">
                <img
                  className="w-full h-[calc(50%-6px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  src={galleryImages[3].src}
                />
                <img
                  className="w-full h-[calc(50%-6px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  src={galleryImages[5].src}
                />
              </div>
              <div className="flex flex-col gap-3 w-2/5">
                <img
                  className="w-full h-[calc(33%-4px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  src={galleryImages[4].src}
                />
                <img
                  className="w-full h-[calc(33%-4px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  src={galleryImages[2].src}
                />
                <img
                  className="w-full h-[calc(33%-4px)] bg-white/0 cursor-pointer hover:opacity-80 transition-opacity"
                  src={galleryImages[6].src}
                />
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-6 lg:mt-10 pt-0 px-2 sm:px-4 md:px-0">
            <ContactForm />
          </div>
        </main>
      </div>
      <div className="hidden md:block fixed top-0 bottom-0 right-0 w-[17rem]">
        <Sidebar />
      </div>
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <CloseButton onClick={closeModal} className="fixed top-8 right-8" />
          <div className="relative mx-4 flex items-center justify-center">
            <img
              src={galleryImages[selectedImage].src}
              alt={`In the Eyes of Others ${selectedImage + 1}`}
              className="h-[85vh] w-auto max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
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

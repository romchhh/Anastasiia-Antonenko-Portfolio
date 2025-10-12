"use client";

import React, { useCallback, useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ContactForm from "@/components/ContactForm";
import NavigationButton, { CloseButton } from "@/components/NavigationButton";
import BurgerMenu from "@/components/BurgerMenu";

export default function KyivInColorPolaroidPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scale, setScale] = useState(1);

  React.useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      const gridWidth = 1136;
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

  const gap = 20;
  const galleryImages = [
    {
      src: "/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 14.png",
      width: 637,
      height: 800,
      top: 0,
      left: gap,
    },
    {
      src: "/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 12.png",
      width: 450,
      height: 523,
      top: 0,
      left: 688,
    },
    {
      src: "/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 8.png",
      width: 637,
      height: 798,
      top: 831,
      left: gap,
    },
    {
      src: "/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 19.png",
      width: 450,
      height: 523,
      top: 553,
      left: 688,
    },
    {
      src: "/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 20.png",
      width: 450,
      height: 523,
      top: 1106,
      left: 687,
    },
    {
      src: "/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 17.png",
      width: 533,
      height: 673,
      top: 1659,
      left: gap,
    },
    {
      src: "/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 18.png",
      width: 553,
      height: 673,
      top: 1659,
      left: 583,
    },
    {
      src: "/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 141.png",
      width: 637,
      height: 800,
      top: 2362,
      left: gap,
    },
    {
      src: "/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko_Fragile Traces_06 121.png",
      width: 450,
      height: 523,
      top: 2362,
      left: 688,
    },
    {
      src: "/Kyiv in Color. Polaroid edition/Anastasiia_A1111ntonenko_Fragile Traces_06 19.png",
      width: 450,
      height: 523,
      top: 2915,
      left: 688,
    },
    {
      src: "/Kyiv in Color. Polaroid edition/Anastasiia_Antonenko11_Fragile Traces_06 8.png",
      width: 637,
      height: 798,
      top: 3193,
      left: gap,
    },
    {
      src: "/Kyiv in Color. Polaroid edition/Anastasi1212ia_Antonenko_Fragile Traces_06 20.png",
      width: 450,
      height: 523,
      top: 3468,
      left: 687,
    },
    {
      src: "/Kyiv in Color. Polaroid edition/Anastasiia_Antone2121nko_Fragile Traces_06 17.png",
      width: 533,
      height: 673,
      top: 4021,
      left: gap,
    },
    {
      src: "/Kyiv in Color. Polaroid edition/Anastasiia_Antone2121nko_Fragile Traces_06 18.png",
      width: 553,
      height: 673,
      top: 4021,
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

  const fullStoryText = `This series presents Kyiv through Polaroid photography, each image a unique document of everyday life shaped by the unpredictability of instant film. Unlike the analog series, it captures spontaneous encounters with the city, preserving fleeting moments in raw, unrepeatable form.`;

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
            KYIV IN COLOR. POLAROID EDITION
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
            title="KYIV IN COLOR. POLAROID EDITION"
            subtitle="anastasiia antonenko"
          />
        </div>
        <main className="py-2 md:py-4 lg:py-8 px-5 md:px-2 lg:pl-12 lg:pr-8">
          <div className="hidden lg:grid grid-cols-[260px_1px_1fr] gap-6 items-start">
            <aside className="text-[#1A1A1A]">
              <div className="space-y-8 pr-6 -ml-6">
                <div>
                  <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">
                    years:
                  </p>
                  <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">
                    2022–2023
                  </p>
                </div>
                <div>
                  <p className="text-[22px] font-medium leading-[150%] tracking-[0.03em] lowercase">
                    medium:
                  </p>
                  <p className="mt-2 text-[16px] font-normal leading-[150%] tracking-[0.03em]">
                    Polaroid photography
                  </p>
                </div>
              </div>
            </aside>
            <div className="bg-gray-300 w-px self-stretch -mt-8" />
            <section>
              <p className="text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A] max-w-[680px] whitespace-pre-line">
                {fullStoryText}
              </p>
              <div className="relative mt-20">
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
            <p className="text-[14px] md:text-[16px] font-normal leading-[150%] tracking-[0.03em] text-[#1A1A1A] whitespace-pre-line pr-4 mb-4">
              {fullStoryText}
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
                    2022–2023
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
                    Polaroid photography
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
          <div
            className="hidden md:block w-full origin-top-left transition-transform duration-200 ease-out -ml-2 lg:-ml-12 -mr-8 mt-6"
            style={{
              transform: `scale(${scale})`,
              height: `${4724 * scale}px`,
            }}
          >
            <div
              className="relative"
              style={{ width: "1136px", height: "4724px" }}
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
                    alt={`Kyiv in Color Polaroid ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden w-full max-w-full mt-6 flex flex-col gap-3 mx-auto">
            <div className="flex gap-3 w-full">
              <img
                className="w-[calc(50%-6px)] h-auto"
                src={galleryImages[5].src}
              />
              <img
                className="w-[calc(50%-6px)] h-auto"
                src={galleryImages[6].src}
              />
            </div>
            <div className="flex gap-3 w-full">
              <div className="flex flex-col gap-3 w-3/5">
                <img className="w-full h-auto" src={galleryImages[0].src} />
                <img className="w-full h-auto" src={galleryImages[2].src} />
              </div>
              <div className="flex flex-col gap-3 w-2/5">
                <img className="w-full h-auto" src={galleryImages[4].src} />
                <img className="w-full h-auto" src={galleryImages[1].src} />
                <img className="w-full h-auto" src={galleryImages[3].src} />
              </div>
            </div>
            <div className="flex gap-3 w-full">
              <img
                className="w-[calc(50%-6px)] h-auto"
                src={galleryImages[12].src}
              />
              <img
                className="w-[calc(50%-6px)] h-auto"
                src={galleryImages[13].src}
              />
            </div>
            <div className="flex gap-3 w-full">
              <div className="flex flex-col gap-3 w-3/5">
                <img className="w-full h-auto" src={galleryImages[7].src} />
                <img className="w-full h-auto" src={galleryImages[10].src} />
              </div>
              <div className="flex flex-col gap-3 w-2/5">
                <img className="w-full h-auto" src={galleryImages[8].src} />
                <img className="w-full h-auto" src={galleryImages[9].src} />
                <img className="w-full h-auto" src={galleryImages[11].src} />
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
              alt={`Kyiv in Color Polaroid ${selectedImage + 1}`}
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

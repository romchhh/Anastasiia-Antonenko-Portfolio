"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import NavigationButton, { CloseButton } from "@/components/NavigationButton";
import BurgerMenu from "@/components/BurgerMenu";

interface PortfolioItem {
  id: string;
  title: string;
  year: string;
  image: string;
  mobileImage?: string;
  width: number;
  height: number;
  top: number;
  left: number;
  row: number;
  mobileOrder?: number;
  tabletOrder?: number;
  description: string;
  link: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  imageScale?: number;
}

export default function PortfolioGridPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const router = useRouter();

  // Calculate scale based on available width
  React.useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      const gridWidth = 1100; // Fixed grid width

      // Calculate available width based on screen size
      let availableWidth;
      let scaleFactor = 0.95; // Conservative factor to prevent overlap

      if (windowWidth >= 1280) {
        // Large Desktop with sidebar
        const sidebarWidth = 272; // lg:pr-[17rem] = 17 * 16 = 272px
        const margins = 48; // lg:mx-6 = 24px * 2
        const padding = 80; // lg:pl-12 + lg:pr-8 = 48 + 32
        availableWidth = windowWidth - sidebarWidth - margins - padding;
        scaleFactor = 0.92;
      } else if (windowWidth >= 1024) {
        // Desktop with sidebar - more generous for better photo display
        const sidebarWidth = 272;
        const margins = 48;
        const padding = 48;
        const safetyBuffer = 20;
        availableWidth =
          windowWidth - sidebarWidth - margins - padding - safetyBuffer;
        scaleFactor = 0.95; // More generous for better display
      } else if (windowWidth >= 768) {
        // Tablet with sidebar - account for sidebar
        const sidebarWidth = 272; // md:pr-[17rem] = 17 * 16 = 272px
        const margins = 24; // md:mx-3 = 12px * 2 = 24px
        const padding = 32; // md:px-2 + some extra
        const safetyBuffer = 20; // Minimal safety buffer
        availableWidth =
          windowWidth - sidebarWidth - margins - padding - safetyBuffer;
        scaleFactor = 0.95; // More aggressive for tablets
      } else if (windowWidth >= 640) {
        // Small tablets / large phones - no sidebar
        const padding = 20;
        availableWidth = windowWidth - padding;
        scaleFactor = 0.9;
      } else {
        // Mobile - no sidebar
        const padding = 8; // px-1
        availableWidth = windowWidth - padding;
        scaleFactor = 0.95;
      }

      // Calculate scale to fit available width
      let calculatedScale = (availableWidth * scaleFactor) / gridWidth;

      // Set minimum and maximum scale limits based on screen size
      let maxScale = 1.0;
      let minScale = 0.25;

      if (windowWidth < 1280 && windowWidth >= 1024) {
        maxScale = 0.85; // Larger for smaller desktop screens with sidebar
      } else if (windowWidth >= 768 && windowWidth < 1024) {
        maxScale = 0.75; // Larger for tablets with sidebar
        minScale = 0.4;
      } else if (windowWidth >= 640 && windowWidth < 768) {
        maxScale = 0.95; // Allow more zoom for small tablets
        minScale = 0.4;
      } else if (windowWidth < 640) {
        maxScale = 1.0; // Full scale for mobile
        minScale = 0.3;
      }

      calculatedScale = Math.max(minScale, Math.min(maxScale, calculatedScale));

      // Debug logging
      console.log(
        `Window: ${windowWidth}px, Available: ${availableWidth}px, Scale: ${calculatedScale.toFixed(
          3
        )}, Range: ${minScale}-${maxScale}`
      );

      setScale(calculatedScale);
    };

    // Small delay to ensure proper calculation after layout
    const timeoutId = setTimeout(calculateScale, 100);
    calculateScale();

    window.addEventListener("resize", calculateScale);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", calculateScale);
    };
  }, []);

  // Gallery images with equal spacing (gap = 40px)
  // Each column is independent - images flow sequentially with gaps
  // Gap includes space for text captions
  const gap = 40;
  const col1Width = 400; // First column width (smaller)
  const col2Width = 620; // Second column width (larger) - slightly increased for single images
  const smallWidth = 290; // Small images width for second column (2 small images = 290 + 20 + 290 = 600)

  const portfolioItems: PortfolioItem[] = [
    // COLUMN 1 (left column - 400px wide)
    // 2 3.png: starts at 0, ends at 560
    {
      id: "fragile-traces",
      title: "FRAGILE TRACES",
      year: "2025",
      image: "/portfolio/2 3.png",
      width: col1Width,
      height: 560,
      top: 0,
      left: gap,
      row: 1,
      mobileOrder: 2,
      tabletOrder: 2,
      description: "A series exploring the delicate nature of memory and time.",
      link: "/portfolio/fragile-traces",
    },
    // Rectangle 741.png: starts at 560 + 80 = 640, ends at 950
    {
      id: "from-headlines-to-reality",
      title: "FROM HEADLINES TO REALITY",
      year: "2023–2024",
      image: "/portfolio/Rectangle 741.png",
      width: col1Width,
      height: 310,
      top: 640,
      left: gap,
      row: 2,
      mobileOrder: 3,
      tabletOrder: 4,
      description:
        "Collage work examining the intersection of news and personal experience.",
      link: "/portfolio/from-headlines-to-reality",
      objectPosition: "left center",
    },
    // Rectangle 72.png: moved up for mobile reordering
    {
      id: "in-the-eyes-of-others",
      title: "IN THE EYES OF OTHERS",
      year: "2025",
      image: "/portfolio/Rectangle 72.png",
      width: smallWidth,
      height: 405,
      top: 520,
      left: col1Width + gap * 2,
      row: 2,
      mobileOrder: 4,
      tabletOrder: 5,
      description: "A study of perception and identity through portraiture.",
      link: "/portfolio/in-the-eyes-of-others",
      objectFit: "contain",
      objectPosition: "center bottom",
      imageScale: 0.85,
    },
    // 2 32.png: starts at 950 + 80 = 1030, ends at 1590
    {
      id: "phantom",
      title: "PHANTOM",
      year: "2023",
      image: "/portfolio/2 32.png",
      width: col1Width,
      height: 560,
      top: 1030,
      left: gap,
      row: 3,
      mobileOrder: 4,
      tabletOrder: 8,
      description: "Ghostly figures in urban landscapes.",
      link: "/portfolio/phantom",
    },
    // Rectangle 721.png: moved up for mobile reordering
    {
      id: "air-alarm",
      title: "AIR ALARM",
      year: "2023",
      image: "/portfolio/Rectangle 721.png",
      width: col2Width,
      height: 578,
      top: 1005,
      left: col1Width + gap * 2,
      row: 3,
      mobileOrder: 6,
      tabletOrder: 9,
      description: "Visual response to conflict and its impact on daily life.",
      link: "/portfolio/air-alarm",
      objectFit: "contain",
      objectPosition: "center bottom",
      imageScale: 0.83,
    },
    // Rectangle 742.png: starts at 1590 + 80 = 1670, ends at 2010 + 42 = 2052
    {
      id: "kyiv-in-color",
      title: "KYIV IN COLOR",
      year: "2022",
      image: "/portfolio/Rectangle 742.png",
      mobileImage: "/portfolio/2 34.png",
      width: col1Width,
      height: 340,
      top: 1712,
      left: gap,
      row: 4,
      mobileOrder: 6,
      tabletOrder: 6,
      description: "Early exploration of selective color in urban photography.",
      link: "/portfolio/kyiv-in-color",
    },

    // COLUMN 2 (right column - 600px wide, aligned top and bottom with column 1)
    // Rectangle 74.png: starts at 0, ends at 440
    {
      id: "holes-of-time",
      title: "HOLES OF TIME",
      year: "2024–2025",
      image: "/portfolio/Rectangle 74.png",
      width: col2Width,
      height: 440,
      top: 0,
      left: col1Width + gap * 2,
      row: 1,
      mobileOrder: 1,
      tabletOrder: 1,
      description:
        "Damaged negatives reflecting fragmented memory and collective erasure.",
      link: "/portfolio/holes-of-time",
    },
    {
      id: "washed-memories",
      title: "WASHED MEMORIES",
      year: "2024",
      image: "/portfolio/2 31.png",
      width: smallWidth,
      height: 405,
      top: 520,
      left: col1Width + gap * 2 + smallWidth + gap,
      row: 2,
      mobileOrder: 2,
      tabletOrder: 3,
      description: "Exploration of memory through water and time.",
      link: "/portfolio/washed-memories",
    },
    // Rectangle 723.png + 2 33.png: start at 1583 + 80 = 1663, end at 2052
    {
      id: "kyiv-in-color-polaroid",
      title: "KYIV IN COLOR. POLAROID EDITION",
      year: "2022–2023",
      image: "/portfolio/Rectangle 723.png",
      width: smallWidth,
      height: 389,
      top: 1663,
      left: col1Width + gap * 2,
      row: 4,
      mobileOrder: 5,
      tabletOrder: 7,
      description:
        "Polaroid documentation of Kyiv with selective color highlighting.",
      link: "/portfolio/kyiv-in-color-polaroid",
      objectFit: "contain",
      objectPosition: "center bottom",
      imageScale: 0.85,
    },
    {
      id: "down-in-flames",
      title: "DOWN IN FLAMES",
      year: "2022",
      image: "/portfolio/2 33.png",
      mobileImage: "/portfolio/23flames.png",
      width: smallWidth,
      height: 389,
      top: 1663,
      left: col1Width + gap * 2 + smallWidth + gap,
      row: 4,
      mobileOrder: 5,
      tabletOrder: 10,
      description: "Metaphorical exploration of destruction and rebirth.",
      link: "/portfolio/down-in-flames",
    },
  ];

  const handleItemClick = (item: PortfolioItem, index: number) => {
    if (item.link) {
      router.push(item.link);
    } else {
      setSelectedImage(index);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % portfolioItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + portfolioItems.length) % portfolioItems.length
      );
    }
  };

  function ImageTemplate({ id }: { id: number }) {
    return (
      <div
        key={portfolioItems[id].id}
        className="cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() =>
          handleItemClick(
            portfolioItems[id],
            portfolioItems.indexOf(portfolioItems[id])
          )
        }
      >
        <div className="overflow-hidden bg-white/0">
          <img
            src={portfolioItems[id].mobileImage || portfolioItems[id].image}
            alt={portfolioItems[id].title}
            className={`w-full h-auto ${
              portfolioItems[id].objectFit === "contain"
                ? "object-contain"
                : "object-cover"
            }`}
            style={
              portfolioItems[id].objectPosition
                ? { objectPosition: portfolioItems[id].objectPosition }
                : {}
            }
          />
        </div>
        <div
          className="flex flex-col mt-2 mb-4"
          style={{
            width: "201px",
            height: "62px",
            gap: "3px",
            opacity: 1,
          }}
        >
          <h3
            className="text-[14px] font-normal leading-[150%] tracking-[-0.01em] text-[#1A1A1A] uppercase"
            style={{ fontFamily: "Work Sans" }}
          >
            {portfolioItems[id].title}
          </h3>
          <p
            className="text-[12px] font-normal leading-[150%] tracking-[-0.01em] text-[#515151]"
            style={{ fontFamily: "Work Sans" }}
          >
            {portfolioItems[id].year}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#F5F5F5] relative overflow-x-hidden"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Burger Menu - mobile only */}
      <div className="md:hidden">
        <BurgerMenu
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {/* Mobile Header - only shows on mobile screens */}
      <header
        className="md:hidden bg-transparent relative"
        style={{ margin: 0, padding: 0 }}
      >
        <div
          className="px-5 pt-5 pb-4 flex items-center justify-between"
          style={{ margin: 0 }}
        >
          <h1
            style={{
              fontFamily:
                'var(--font-work-sans), "Work Sans", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 400,
              fontSize: "22px",
              lineHeight: "110%",
              letterSpacing: "-0.01em",
              textTransform: "uppercase" as const,
              color: "#1A1A1A",
              margin: 0,
              padding: 0,
            }}
          >
            PORTFOLIO
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
        <div className="absolute bottom-0 left-5 right-0 h-px bg-gray-300 " />
      </header>

      {/* Author name under horizontal line - right aligned, clickable */}
      {/* <div className="md:hidden px-2 pt-3 pb-2 flex justify-end">
        <button 
          onClick={() => window.location.href = '/'}
          className="text-[16px] font-normal leading-[110%] tracking-[-0.01em] text-[#1A1A1A] lowercase hover:opacity-70 transition-opacity"
          style={{ fontFamily: 'Work Sans' }}
        >
          anastasiia antonenko
        </button>
      </div> */}

      <div className="md:mx-3 lg:mx-6 md:my-3 lg:my-6 bg-transparent relative pr-0 md:pr-[17rem]">
        {/* Desktop/Tablet Header - uses original Header component */}
        <div className="hidden md:block">
          <Header title="PORTFOLIO" subtitle="anastasiia antonenko" />
        </div>

        {/* Main content area */}
        <main className="py-0 md:py-4 lg:py-8 px-5 md:px-2 lg:pl-12 lg:pr-8">
          {/* Desktop: Portfolio Grid with absolute positioning - scales responsively */}
          <div
            className="hidden lg:block w-full origin-top-left transition-transform duration-200 ease-out"
            style={{
              transform: `scale(${scale})`,
              height: `${2200 * scale}px`,
              marginBottom: `${scale < 0.5 ? "10px" : "0px"}`,
            }}
          >
            <div
              className="relative"
              style={{ width: "1100px", height: "2200px" }}
            >
              {portfolioItems.map((item, index) => (
                <div
                  key={item.id}
                  className="absolute"
                  style={{ top: `${item.top}px`, left: `${item.left}px` }}
                >
                  {/* Image */}
                  <div
                    className={`overflow-hidden bg-white/0 cursor-pointer hover:opacity-80 transition-opacity ${
                      item.objectFit === "contain"
                        ? "flex items-end justify-center"
                        : ""
                    }`}
                    style={{
                      width: `${item.width}px`,
                      height: `${item.height}px`,
                    }}
                    onClick={() => handleItemClick(item, index)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className={
                        item.objectFit === "contain"
                          ? "object-contain"
                          : "w-full h-full object-cover"
                      }
                      style={{
                        ...(item.objectPosition && item.objectFit !== "contain"
                          ? { objectPosition: item.objectPosition }
                          : {}),
                        ...(item.imageScale && item.objectFit === "contain"
                          ? {
                              height: `${item.height * item.imageScale}px`,
                              width: "auto",
                              maxWidth: "100%",
                            }
                          : {}),
                      }}
                    />
                  </div>

                  {/* Caption */}
                  <div
                    className="mt-2 mb-20"
                    style={{ width: `${item.width}px` }}
                  >
                    <h3
                      className="text-[18.2px] font-normal leading-[150%] tracking-[-0.01em] text-[#1A1A1A] uppercase"
                      style={{ fontFamily: "Work Sans" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[16px] font-normal leading-[150%] tracking-[-0.01em] text-[#515151] mt-1"
                      style={{ fontFamily: "Work Sans" }}
                    >
                      {item.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet: Grid with 2 columns */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
            {[...portfolioItems]
              .sort((a, b) => (a.tabletOrder || 0) - (b.tabletOrder || 0))
              .map((item, index) => (
                <div
                  key={item.id}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => handleItemClick(item, index)}
                >
                  <div className="overflow-hidden bg-white/0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-auto ${
                        item.objectFit === "contain"
                          ? "object-contain"
                          : "object-cover"
                      }`}
                      style={
                        item.objectPosition
                          ? { objectPosition: item.objectPosition }
                          : {}
                      }
                    />
                  </div>
                  <div className="mt-2 mb-4">
                    <h3
                      className="text-[16px] md:text-[18.2px] font-normal leading-[150%] tracking-[-0.01em] text-[#1A1A1A] uppercase"
                      style={{ fontFamily: "Work Sans" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[14px] md:text-[16px] font-normal leading-[150%] tracking-[-0.01em] text-[#515151] mt-1"
                      style={{ fontFamily: "Work Sans" }}
                    >
                      {item.year}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Mobile: Custom layout */}
          {/* <div className="md:hidden flex flex-col gap-4">
            {[...portfolioItems]
              .sort((a, b) => (a.mobileOrder || 0) - (b.mobileOrder || 0))
              .reduce((rows: PortfolioItem[][], item, index, arr) => {
                const prevItem = arr[index - 1];
                const currentOrder = item.mobileOrder || 0;
                const prevOrder = prevItem?.mobileOrder || 0;

                // Групуємо елементи з однаковим mobileOrder в один рядок
                if (prevItem && currentOrder === prevOrder) {
                  rows[rows.length - 1].push(item);
                } else {
                  rows.push([item]);
                }
                return rows;
              }, [])
              .map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={
                    row.length === 1 ? "w-full" : "grid grid-cols-2 gap-2"
                  }
                >
                  {row.map((item: PortfolioItem) => (
                    <div
                      key={item.id}
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() =>
                        handleItemClick(item, portfolioItems.indexOf(item))
                      }
                    >
                      <div className="overflow-hidden bg-white/0">
                        <img
                          src={item.mobileImage || item.image}
                          alt={item.title}
                          className={`w-full h-auto ${
                            item.objectFit === "contain"
                              ? "object-contain"
                              : "object-cover"
                          }`}
                          style={
                            item.objectPosition
                              ? { objectPosition: item.objectPosition }
                              : {}
                          }
                        />
                      </div>
                      <div
                        className="flex flex-col mt-2 mb-4"
                        style={{
                          width: "201px",
                          height: "62px",
                          gap: "3px",
                          opacity: 1,
                        }}
                      >
                        <h3
                          className="text-[14px] font-normal leading-[150%] tracking-[-0.01em] text-[#1A1A1A] uppercase"
                          style={{ fontFamily: "Work Sans" }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-[12px] font-normal leading-[150%] tracking-[-0.01em] text-[#515151]"
                          style={{ fontFamily: "Work Sans" }}
                        >
                          {item.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div> */}

          <div className="md:hidden flex flex-col gap-3.75">
            <ImageTemplate id={6} />
            <div className="flex gap-3.75">
              <div className="w-[calc(50%-7.5px)] h-auto">
                <ImageTemplate id={0} />
              </div>
              <div className="w-[calc(50%-7.5px)] h-auto">
                <ImageTemplate id={7} />
              </div>
            </div>
            <ImageTemplate id={1} />
            <div className="flex gap-3.75">
              <div className="flex flex-col gap-3.75 w-[calc(60%-7.5px)]">
                <div className="w-full h-[calc(33%-5px)]">
                  <ImageTemplate id={2} />
                </div>
                <div className="w-auto h-auto">
                  <ImageTemplate id={8} />
                </div>
                <div className="w-auto h-auto">
                  <ImageTemplate id={4} />
                </div>
              </div>
              <div className="flex flex-col gap-3.75 w-[calc(40%-7.5px)]">
                <div className="w-auto h-auto">
                  <ImageTemplate id={3} />
                </div>
                <div className="w-auto h-auto">
                  <ImageTemplate id={9} />
                </div>
                <div className="w-auto h-auto">
                  <ImageTemplate id={5} />
                </div>
              </div>
            </div>
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
          {/* Close button */}
          <CloseButton onClick={closeModal} className="fixed top-8 right-8" />

          {/* Image */}
          <img
            src={portfolioItems[selectedImage].image}
            alt={portfolioItems[selectedImage].title}
            className="h-[85vh] w-auto max-w-[90vw] object-contain mx-4"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Navigation arrows */}
          <NavigationButton
            direction="left"
            onClick={(e) => {
              e?.stopPropagation();
              prevImage();
            }}
            className="fixed left-4 top-1/2 -translate-y-1/2"
            variant="lightbox"
          />

          <NavigationButton
            direction="right"
            onClick={(e) => {
              e?.stopPropagation();
              nextImage();
            }}
            className="fixed right-4 top-1/2 -translate-y-1/2"
            variant="lightbox"
          />

          {/* Image info */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white">
            <h3 className="text-[18px] font-normal tracking-[0.03em] uppercase">
              {portfolioItems[selectedImage].title}
            </h3>
            <p className="text-[14px] font-normal tracking-[0.03em] opacity-80">
              {portfolioItems[selectedImage].year}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

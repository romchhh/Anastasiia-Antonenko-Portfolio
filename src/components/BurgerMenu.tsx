'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BurgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function BurgerMenu({ isOpen, onToggle }: BurgerMenuProps) {
  const pathname = usePathname();
  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed h-full inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Background Blur and Dark Overlay */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: '#393838CC',
            backdropFilter: 'blur(4px)'
          }}
          onClick={onToggle}
        />

        {/* Top horizontal line - extends to screen edge */}
        <div 
          className="absolute z-50"
          style={{
            top: '62px',
            left: '20px',
            right: '0',
            height: '0.5px',
            backgroundColor: 'white'
          }}
        />

        {/* Vertical line - full height, creating square in top right corner */}
        <div 
          className="absolute z-50"
          style={{
            top: '0',
            bottom: '0',
            right: '62px',
            width: '0.5px',
            backgroundColor: 'white'
          }}
        />

        {/* Close button (X) - positioned in top right area */}
        <button
          onClick={onToggle}
          className="absolute z-50 text-white hover:opacity-70 transition-opacity"
          aria-label="Close menu"
          style={{
            top: '21px',
            right: '21px',
            width: '20px',
            height: '20px'
          }}
        >
          <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-white transform -translate-y-1/2 rotate-45"></span>
          <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-white transform -translate-y-1/2 -rotate-45"></span>
        </button>

        {/* Menu Panel */}
        <div
          className={`absolute left-0 top-0 h-full bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{
            width: '315px'
          }}
        >
          {/* Menu Content */}
          <div className="h-full flex flex-col" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px' }}>
            {/* Name */}
            <div style={{ marginBottom: '20px' }}>
              <h1 
                className="text-white uppercase whitespace-nowrap"
                style={{
                  fontFamily: 'Work Sans',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '110%',
                  letterSpacing: '-0.2%',
                  width: '264px',
                  height: '24px'
                }}
              >
                <Link href="/" className="text-white uppercase hover:opacity-70 transition-opacity">
                  ANASTASIIA ANTONENKO
                </Link>
              </h1>
            </div>

            {/* Spacer to position nav at top: 82px */}
            <div style={{ height: '20px' }} />

            {/* Navigation Links */}
            <nav style={{ marginBottom: '20px' }}>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li>
                  <Link
                    href="/about"
                    className={`uppercase transition-opacity ${
                      pathname === '/about' ? 'text-[#080808]' : 'text-white hover:opacity-70'
                    }`}
                    style={{
                      fontFamily: 'Work Sans',
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '110%',
                      letterSpacing: '-0.2%'
                    }}
                    onClick={onToggle}
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className={`uppercase transition-opacity ${
                      pathname === '/portfolio' ? 'text-[#080808]' : 'text-white hover:opacity-70'
                    }`}
                    style={{
                      fontFamily: 'Work Sans',
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '110%',
                      letterSpacing: '-0.2%'
                    }}
                    onClick={onToggle}
                  >
                    PORTFOLIO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/process"
                    className={`uppercase transition-opacity ${
                      pathname === '/process' ? 'text-[#080808]' : 'text-white hover:opacity-70'
                    }`}
                    style={{
                      fontFamily: 'Work Sans',
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '110%',
                      letterSpacing: '-0.2%'
                    }}
                    onClick={onToggle}
                  >
                    PROCESS
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Second horizontal line - extends to vertical line */}
            <div 
              style={{
                width: 'calc(100vw - 82px)',
                height: '0.5px',
                backgroundColor: 'white',
                marginBottom: '20px'
              }}
            />

            {/* Email */}
            <div className="mb-8">
              <a 
                href="mailto:stushaphotofilm@gmail.com"
                className="text-white text-base tracking-wide hover:opacity-70 transition-opacity block"
              >
                stushaphotofilm@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://www.facebook.com/stushafilm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/stusha_film"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/436604266037"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>

            {/* Design Credit */}
            <div>
              <a
                href="https://www.instagram.com/evaholts/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity block"
                style={{
                  fontFamily: 'Work Sans',
                  fontWeight: 300,
                  fontSize: '16px',
                  lineHeight: '110%',
                  letterSpacing: '-0.2%',
                  textTransform: 'lowercase'
                }}
              >
                design by eva holts
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
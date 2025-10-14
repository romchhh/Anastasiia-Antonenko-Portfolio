import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationButtonProps {
  direction: 'left' | 'right';
  onClick: (e?: React.MouseEvent) => void;
  className?: string;
  variant?: 'carousel' | 'lightbox';
}

export default function NavigationButton({ 
  direction, 
  onClick, 
  className = '', 
  variant = 'carousel' 
}: NavigationButtonProps) {
  const Icon = direction === 'left' ? ArrowLeft : ArrowRight;
  
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 hover:scale-110 hover:bg-[#1A1A1A] cursor-pointer ${className}`}
      style={{ backgroundColor: '#A6A3A3B2' }}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
    >
      <Icon className="w-5 h-5 text-white" />
    </button>
  );
}

// Close button component for lightbox
interface CloseButtonProps {
  onClick: (e?: React.MouseEvent) => void;
  className?: string;
}

export function CloseButton({ onClick, className = '' }: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 z-60 hover:scale-110 hover:bg-[#1A1A1A] cursor-pointer ${className}`}
      style={{ backgroundColor: '#A6A3A3B2' }}
      aria-label="Close"
    >
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
}


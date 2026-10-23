import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { ConstructionImage, isProjectCompleted } from '../data/images';
import { ProjectStamp } from './ProjectStamp';

interface LightboxProps {
  images: ConstructionImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const touchStartX = useRef<number | null>(null);

  const currentImage = images[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !currentImage) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      // Swiped left -> next
      onNavigate((currentIndex + 1) % images.length);
    } else if (diff < -50) {
      // Swiped right -> prev
      onNavigate((currentIndex - 1 + images.length) % images.length);
    }
    touchStartX.current = null;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image showcase lightbox"
      className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between backdrop-blur-md"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar with Counter and Close Button */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 z-10">
        <div className="text-stone-300 text-xs font-mono tracking-wider">
          {currentIndex + 1} / {images.length}
        </div>
        <button
          onClick={onClose}
          className="p-2 text-stone-300 hover:text-white rounded-full hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#C8A24A]"
          aria-label="Close fullscreen lightbox (Escape)"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Area with Left/Right Navigation */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8">
        <button
          onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
          className="absolute left-4 z-10 p-3 rounded-full bg-black/40 text-white hover:bg-black/80 hover:text-[#C8A24A] transition-all backdrop-blur-sm border border-white/10"
          aria-label="Previous image (Left arrow)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="max-w-5xl max-h-[75vh] flex items-center justify-center relative">
          <img
            src={currentImage.src}
            srcSet={currentImage.srcSet}
            alt={currentImage.alt}
            className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl select-none"
            style={{
              backgroundImage: `url(${currentImage.blurDataUrl})`,
              backgroundSize: 'cover',
            }}
          />
          {/* Official Big Circular Stamp on Project Fullscreen View */}
          {currentImage.category !== 'people/team' && (
            <ProjectStamp className="bottom-4 right-4" size="lg" position="bottom-right" />
          )}
        </div>

        <button
          onClick={() => onNavigate((currentIndex + 1) % images.length)}
          className="absolute right-4 z-10 p-3 rounded-full bg-black/40 text-white hover:bg-black/80 hover:text-[#C8A24A] transition-all backdrop-blur-sm border border-white/10"
          aria-label="Next image (Right arrow)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div className="px-6 py-4 bg-[#081E1E]/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          <h3 className="text-white text-base font-bold font-display">
            {currentImage.title}
          </h3>
          <p className="text-xs text-stone-300 mt-0.5">{currentImage.alt}</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#C8A24A] shrink-0 font-medium">
          <MapPin className="w-3.5 h-3.5" />
          <span>{currentImage.location}</span>
        </div>
      </div>
    </div>
  );
};

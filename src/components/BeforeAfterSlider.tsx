import React, { useState, useRef, useCallback } from 'react';
import { ConstructionImage, isProjectCompleted } from '../data/images';
import { ProjectStamp } from './ProjectStamp';

interface BeforeAfterSliderProps {
  beforeImage: ConstructionImage;
  afterImage: ConstructionImage;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Under Construction (Slab & Masonry)',
  afterLabel = 'Completed Elevation',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const startDrag = () => {
    isDragging.current = true;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xl select-none shadow-xl border border-stone-300"
      onMouseMove={handleMouseMove}
      onMouseDown={startDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Full width background) */}
      <img
        src={afterImage.src}
        srcSet={afterImage.srcSet}
        alt={afterImage.alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* After Image Stamp */}
      <ProjectStamp className="bottom-4 right-4" size="md" position="bottom-right" />

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage.src}
          srcSet={beforeImage.srcSet}
          alt={beforeImage.alt}
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{
            width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
          }}
        />
        <div className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-bold text-white bg-[#A8452B]/90 rounded backdrop-blur-sm">
          {beforeLabel}
        </div>
      </div>

      {/* Draggable Divider Line */}
      <div
        className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-[#0C2B2B] shadow-lg flex items-center justify-center font-bold text-xs border-2 border-[#C8A24A]">
          ↔
        </div>
      </div>
    </div>
  );
};

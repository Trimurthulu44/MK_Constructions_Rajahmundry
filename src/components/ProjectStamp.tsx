import React from 'react';

interface ProjectStampProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'edge' | 'floating';
  position?: 'bottom-right' | 'top-right' | 'custom';
}

export const ProjectStamp: React.FC<ProjectStampProps> = ({
  className = '',
  size = 'md',
  variant = 'edge',
  position = 'bottom-right',
}) => {
  const stampSizes = {
    sm: 'w-11 h-11 sm:w-12 sm:h-12',
    md: 'w-13 h-13 sm:w-14 sm:h-14 md:w-16 md:h-16',
    lg: 'w-18 h-18 sm:w-22 sm:h-22',
  };

  if (variant === 'edge') {
    return (
      <div
        className={`shrink-0 select-none group/stamp transition-transform duration-300 ${className}`}
        aria-label="MK Constructions Official Seal"
        title="MK Constructions Verified Construction Seal"
      >
        <div
          className={`${stampSizes[size]} rounded-full p-0.5 bg-[#0B1320] shadow-[0_4px_16px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center`}
        >
          <img
            src="/images/logo-circle.png"
            alt="MK Constructions Official Seal"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    );
  }

  // Floating variant for fullscreen / image overlay
  const posClasses = {
    'bottom-right': 'bottom-3 right-3 sm:bottom-4 sm:right-4',
    'top-right': 'top-3 right-3 sm:top-4 sm:right-4',
    'custom': '',
  };

  return (
    <div
      className={`absolute ${posClasses[position]} z-20 pointer-events-none select-none ${className}`}
      aria-label="MK Constructions Official Circular Stamp"
    >
      <div
        className={`${stampSizes[size]} rounded-full p-0.5 bg-[#0B1320]/90 backdrop-blur-md shadow-[0_6px_24px_rgba(0,0,0,0.8)] transition-all duration-300 flex items-center justify-center`}
      >
        <img
          src="/images/logo-circle.png"
          alt="MK Constructions Official Stamp"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

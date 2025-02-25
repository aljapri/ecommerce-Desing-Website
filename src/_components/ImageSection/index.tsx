// components/ImageSection.tsx
import React, { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Image from 'next/image';

interface ImageSectionProps {
  imageSrc: string;
  altText: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ imageSrc, altText }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`h-screen w-full flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Image
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-cover"
        width={200}
        height={200}
      />
    </div>
  );
};

export default ImageSection;
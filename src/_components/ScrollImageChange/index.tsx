"use client"; // Required for using React hooks in Next.js

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ScrollImageChange = () => {
  const [imageSrc, setImageSrc] = useState<string>("/one.jpeg");

  useEffect(() => {
    const handleScroll = () => {
      // Change the image when the user scrolls past a certain point
      if (window.scrollY > 100) {
        setImageSrc("/tow.jpeg");
      } else {
        setImageSrc("/one.jpeg");
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Image
        src={imageSrc}
        alt="Dynamic Hero Image"
        fill // Makes the image cover the entire container
        className="object-cover transition-all duration-500" // Smooth transition
        />
    </div>
  );
};

export default ScrollImageChange;
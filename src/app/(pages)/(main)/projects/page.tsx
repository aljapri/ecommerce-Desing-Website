"use client"
import Image from "next/image";
import { SetStateAction, useState } from "react";

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const openLightbox = (src: SetStateAction<string>) => {
    setLightboxImage(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage("");
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-2.5 lg:pb-16 pb-10">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold leading-normal">
            مشاريعنا
          </h2>
          <div className="w-full text-center text-gray-600 text-lg leading-8">
          نقدم لكم عرضًا مميزًا لمشاريعنا التي تمثل إبداعًا، ابتكارًا، ودقة في التنفيذ          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery">
          <div className="flex flex-col mb-10">
            {/* First Row */}
            <div className="grid md:grid-cols-12 gap-8 lg:mb-11 mb-7">
              <div className="md:col-span-4 md:h-[404px] h-[277px] w-full rounded-3xl">
                <Image
                    width={200}
                    height={200}
                  src="/one.jpeg"
                  alt="Gallery image"
                  className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-4 md:col-span-6 w-full h-full cursor-pointer"
                  onClick={() =>
                    openLightbox("/one.jpeg")
                  }
                />
              </div>
              <div className="md:col-span-8 md:h-[404px] h-[277px] w-full rounded-3xl">
                <Image
                    width={200}
                    height={200}
                  src="/tow.jpeg"
                  alt="Gallery image"
                  className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-8 md:col-span-6 w-full h-full cursor-pointer"
                  onClick={() =>
                    openLightbox("/tow.jpeg")
                  }
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
              {[
                "/three.jpeg","/four.jpeg","/five.jpeg","/six.jpeg","/siven.jpeg","/eight.jpeg","/nign.jpeg","/ten.jpeg","/elve.jpeg","/tilve.jpeg","/threten.jpeg"
              ].map((src, index) => (
                <div
                  key={index}
                  className="h-[277px] w-full rounded-3xl"
                >
                  <Image
                    width={200}
                    height={200}
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full cursor-pointer"
                    onClick={() => openLightbox(src)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center"
          onClick={closeLightbox}
        >
          <span
            className="absolute top-4 right-8 text-white text-4xl cursor-pointer"
            onClick={closeLightbox}
          >
            &times;
          </span>
          <Image
                    width={400}
                    height={400}
            src={lightboxImage}
            alt="Lightbox"
            className="max-w-full max-h-full "
          />
        </div>
      )}
    </section>
  );
}

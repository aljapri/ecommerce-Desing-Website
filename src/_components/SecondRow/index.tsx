import Image from "next/image";
import React from "react";

export default function SecondRow() {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {[
          "/three.jpeg",
          "/four.jpeg",
          "/five.jpeg",
          "/six.jpeg",
          "/siven.jpeg",
          "/eight.jpeg",
          "/nign.jpeg",
          "/ten.jpeg",
          "/elve.jpeg",
          "/tilve.jpeg",
          "/threten.jpeg",
        ].map((src, index) => (
          <div key={index} className="h-[277px] w-full rounded-3xl">
            <Image
              width={200}
              height={200}
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

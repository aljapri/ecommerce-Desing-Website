"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, A11y } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const VerticalImageSlider = () => {
  const media = [
    { type: "video", src: "/video/one.mp4", title: " الرويلي لأنظمة الأمنيوم", description: "استكشف أحدث تصاميم الأبواب والنوافذ العصرية" },
    { type: "video", src: "/video/tow.mp4", title: "تصميم خارجي فاخر", description: "ديكورات خارجية أنيقة تعكس ذوقك الرفيع" },
    { type: "video", src: "/video/three.mp4", title: "نوافذ زجاجية حديثة", description: "نافذة بانورامية توفر إضاءة طبيعية وإطلالة رائعة" },
    { type: "image", src: "/three.jpeg", title: "تصميم منزل عصري", description: "منزل بتصميم حديث يجمع بين الجمال والراحة" },
  ];


  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any


  return (
    <div className="h-screen w-full relative">
      <Swiper
        direction={"vertical"}
        modules={[Mousewheel, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        mousewheel={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true} // Disable loop to detect the last slide properly
        effect={"fade"}
        className="h-full w-full"
      >
        {media.map((item, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <div className="h-full w-full relative transition-opacity duration-1000 ease-in-out">
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 z-10"></div>

              {item.type === "video" ? (
                <video autoPlay muted loop playsInline className="w-full h-full object-fill">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="relative w-full h-full">
                  <Image src={item.src} alt={`Slide ${index + 1}`} fill className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
              )}

              {/* Title and Description */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-20">
                <motion.h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4" variants={fadeIn("right", "spring", 0.5, 0.75)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                  {item.title}
                </motion.h1>
                <motion.p className="text-lg lg:text-xl mb-8" variants={fadeIn("left", "spring", 0.5, 0.75)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
                  {item.description}
                </motion.p>
                {index === 0 && (
                  <motion.div
                    className="flex flex-col lg:flex-row gap-4 lg:gap-6"
                    variants={fadeIn("right", "spring", 1, 0.75)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Link href={"/projects"}>
                      <button className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-400 transition">
                        المشاريع
                      </button>
                    </Link>
                    <Link href={"/contact"}>
                      <button className="bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
                        أتصل بنا
                      </button>
                    </Link>
                  </motion.div>
                )}
              </div>
              
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VerticalImageSlider;

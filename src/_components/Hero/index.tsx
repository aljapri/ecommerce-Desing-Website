"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { useRef } from "react"; // Import useRef to control the video element

const Hero = () => {
  const videoRef = useRef(null); // Create a ref for the video element

  // Function to handle the end of the video
  // const handleVideoEnd = () => {
  //   if (videoRef.current) {
  //     videoRef.current.pause(); // Pause the video when it ends
  //   }
  // };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef} // Attach the ref to the video element
        autoPlay
        muted
        // onEnded={handleVideoEnd} // Call handleVideoEnd when the video ends
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <source src="/video/one.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center lg:text-left px-6 flex flex-col justify-center items-center">
        <motion.h1
          className="text-4xl lg:text-6xl font-bold leading-tight mb-4 text-white"
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          مصنع الرويلي لأنظمة الألمنيوم
        </motion.h1>
        <p className="text-lg lg:text-xl mb-8 text-white">
          <Typewriter
            words={["اجعل ديكور منزلك مميزًا بأبواب ونوافذ فريدة"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
          />
        </p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col lg:flex-row gap-4 lg:gap-6"
          variants={fadeIn("right", "spring", 1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link href={"/projects"}>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
              المشاريع
            </button>
          </Link>
          <Link href={"/contact"}>
            <button className="bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
              أتصل بنا
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
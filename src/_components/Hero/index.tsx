"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/picture.webp')", // Add the background image here
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center lg:text-left px-6 flex flex-col justify-center items-center">
        <motion.h1
          className="text-4xl lg:text-6xl font-bold leading-tight mb-4"
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of element is in view
        >
          مصنع الرويلي لأنظمة الألمنيوم
        </motion.h1>
        <p className="text-lg lg:text-xl mb-8">
          <Typewriter
            words={["اجعل ديكور منزلك مميزًا بأبواب ونوافذ فريدة"]}
            loop={1} // Set to 1 to stop after finishing
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
        {/* Icons */}
      </div>
    </section>
  );
};

export default Hero;

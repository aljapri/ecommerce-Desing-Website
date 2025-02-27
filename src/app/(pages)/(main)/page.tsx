"use client";
import AboutUs from "@/_components/AboutUs";
import ContactUs from "@/_components/ContactUs";
import Features from "@/_components/Features";
import React, { useEffect, useState, useRef } from "react";
import ServicesSection from "./services/page";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import VerticalImageSlider from "@/_components/Slider";
import Timeline from "@/_components/TimeLine";

export default function Page() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const prevScrollY = useRef(0); // Track the previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      // Check if the user is scrolling up and the distance from the top is 200px or less
      if (currentScrollY < prevScrollY.current && currentScrollY <= 800) {
        // Scroll to the top smoothly
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      // Update the previous scroll position
      prevScrollY.current = currentScrollY;
      setScrollPosition(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <VerticalImageSlider />
      <Timeline />
      <AboutUs message=" مصنع الرويلي لأنظمة الألمنيوم تأسس مصنعنا في عام ١٩٩٠ م ومنذ انطلاقتنا كان هدفنا إرضاء زبائننا بجودة إنتاجنا والمصداقية في التعامل ودقة المواعيد، وهذا ما أكسبنا ثقتهم خبرتنا الطويلة أنتجت لدينا فريق عمل متخصص ومتكامل ومع تطور مجال المقاولات والعمل في المملكة كان لابد من مواكبة هذه التطورات" />
      <Features />
      <ServicesSection />
      <motion.div
        className="flex flex-col lg:flex-row gap-4 lg:gap-6"
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bg-white w-full px-5">
          <ContactUs />
        </div>
      </motion.div>
      {/* Add the Vertical Image Slider here */}
    </div>
  );
}
"use client";
// import AboutUs from "@/_components/AboutUs";
// import ContactUs from "@/_components/ContactUs";
// import Features from "@/_components/Features";
import React from "react";
// import ServicesSection from "./services/page";
// import { motion } from "framer-motion";
// import { fadeIn } from "@/utils/motion";
import VerticalImageSlider from "@/_components/Slider";
// import Timeline from "@/_components/TimeLine";

export default function Page() {


  return (
    <div>
      <VerticalImageSlider />
      {/* <Timeline />
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
      </motion.div> */}
      {/* Add the Vertical Image Slider here */}
    </div>
  );
}
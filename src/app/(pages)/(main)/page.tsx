"use client";
import { lazy, Suspense, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { debounce } from "lodash";

const LazyAboutUs = lazy(() => import("@/_components/AboutUs"));
const LazyContactUs = lazy(() => import("@/_components/ContactUs"));
const LazyFeatures = lazy(() => import("@/_components/Features"));
const LazyServicesSection = lazy(() => import("./services/page"));
const LazyVerticalImageSlider = lazy(() => import("@/_components/Slider"));
const LazyTimeline = lazy(() => import("@/_components/TimeLine"));

export default function Page() {
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY < prevScrollY.current && currentScrollY <= 800) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      prevScrollY.current = currentScrollY;
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyVerticalImageSlider />
        <LazyTimeline />
        <LazyAboutUs message="مصنع الرويلي لأنظمة الألمنيوم تأسس مصنعنا في عام ١٩٩٠ م ومنذ انطلاقتنا كان هدفنا إرضاء زبائننا بجودة إنتاجنا والمصداقية في التعامل ودقة المواعيد، وهذا ما أكسبنا ثقتهم خبرتنا الطويلة أنتجت لدينا فريق عمل متخصص ومتكامل ومع تطور مجال المقاولات والعمل في المملكة كان لابد من مواكبة هذه التطورات" />
        <LazyFeatures />
        <LazyServicesSection />
        <motion.div
          className="flex flex-col lg:flex-row gap-4 lg:gap-6"
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-white w-full px-5">
            <LazyContactUs />
          </div>
        </motion.div>
      </Suspense>
    </div>
  );
}
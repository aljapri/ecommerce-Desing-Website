import AboutUs from "@/_components/AboutUs";
import ContactUs from "@/_components/ContactUs";
import Features from "@/_components/Features";
import Hero from "@/_components/Hero";
import Offerings from "@/_components/Offerings";
// import SecondRow from "@/_components/SecondRow";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero />
      <AboutUs message=" مصنع الرويلي لأنظمة الألمنيوم تأسس مصنعنا في عام ١٩٩٠ م ومنذ انطلاقتنا كان هدفنا إرضاء زبائننا بجودة إنتاجنا والمصداقية في التعامل ودقة المواعيد، وهذا ما أكسبنا ثقتهم خبرتنا الطويلة أنتجت لدينا فريق عمل متخصص ومتكامل ومع تطور مجال المقاولات والعمل في المملكة كان لابد من مواكبة هذه التطورات"/>
      {/* <SecondRow/> */}
      <Features />
      <Offerings />
      <ContactUs/>
    </div>
  );
}

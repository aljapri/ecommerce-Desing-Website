"use client";

import { features } from "@/constant";
import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Features: FC = () => {
  return (
    <div className=" font-sans" dir="rtl">
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-gray-800 text-4xl font-extrabold text-center mb-16">
           ميزاتنا الحصرية
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto ">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of element is in view
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all py-5">
                <div className="p-8">
                  <feature.icon className="w-8 h-8 mb-6 text-blue-500" />
                  <h3 className="text-gray-800 text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-xl">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

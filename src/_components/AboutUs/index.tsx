"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const AboutUs = ({ message }: { message: string }) => {
  return (
    <section className="py-24 relative" dir="rtl">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          {/* Images Section */}
          <div className="flex justify-center items-start gap-6 sm:grid sm:grid-cols-2 grid-cols-1  lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex ">
              <motion.div
                className="flex flex-col lg:flex-row gap-4 lg:gap-6"
                variants={fadeIn("up", "spring", 0.5, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  width={200}
                  height={200}
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717741205.png"
                  alt="About Us"
                />
              </motion.div>
            </div>
            <motion.div
              className="flex flex-col lg:flex-row gap-4 lg:gap-6"
              variants={fadeIn("up", "spring", 1, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                width={200}
                height={200}
                className="sm:ml-0 ml-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717741215.png"
                alt="About Us"
              />
            </motion.div>
          </div>

          {/* Text Content Section */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              {/* Title and Description */}
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <motion.h2
                  variants={fadeIn("right", "spring", 1, 0.75)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-gray-900 text-4xl font-bold leading-normal lg:text-start text-center"
                >
                  نحن نحقق النجاح معًا
                </motion.h2>
                <p className="text-gray-500 text-xl   leading-relaxed lg:text-justify text-center">
                  <Typewriter
                    words={[message]}
                    loop={1} // Set to 1 to stop after finishing
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={50}
                  />
                </p>
              </div>

              {/* Statistics */}
              <motion.div
                variants={fadeIn("left", "spring", 1, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex"
              >
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-gray-900 text-4xl font-bold leading-normal">
                    33+
                  </h3>
                  <h6 className="text-gray-500 text-base leading-relaxed">
                    سنة من الخبرة
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold leading-normal">
                    125+
                  </h4>
                  <h6 className="text-gray-500 text-base leading-relaxed">
                    مشروع ناجح
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold leading-normal">
                    52+
                  </h4>
                  <h6 className="text-gray-500 text-base leading-relaxed">
                    عملاء سعداء
                  </h6>
                </div>
              </motion.div>
            </div>

            <motion.div
            variants={fadeIn("left", "spring", 1, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            >
            <div className="flex flex-row w-full justify-center items-center lg:justify-start">
            <Link
                href="/contact"
                className=" text-white sm:w-fit w-full px-3.5 py-2 mr-4 bg-blue-500 hover:bg-blue-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
              >
                اتصل بنا
              </Link>
              <Link
                href="/projects"
                className=" text-white sm:w-fit w-full px-3.5 py-2 mr-4 bg-blue-500 hover:bg-blue-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
              >
            
                المشاريع
              </Link>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

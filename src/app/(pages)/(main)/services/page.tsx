"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "door-design",
    title: "تصميم الأبواب",
    description:
      "نقدم تصميم أبواب مبتكرة وعصرية تناسب جميع الأذواق. من الأبواب الخشبية التقليدية إلى الأبواب الزجاجية الحديثة، لدينا ما يناسب كل منزل.",
    image: "one.jpg", // صورة الأبواب
  },
  {
    id: "house-design",
    title: "تصميم المنازل",
    description:
      "نحن نقدم حلول تصميم داخلي وخارجي تحقق التوازن بين الجمال والوظيفة. من منازل أحلامك إلى المساحات التجارية، نحن نجعل كل تفاصيل مهمة.",
    image: "three.jpg", // صورة المنزل
  },
  {
    id: "decor-design",
    title: "تصميم المنافذ",
    description:
    "نحن نقدم حلول تصميم داخلي وخارجي تحقق التوازن بين الجمال والوظيفة. من منازل أحلامك إلى المساحات التجارية، نحن نجعل كل تفاصيل مهمة.",
    image: "two.jpg", // صورة الديكور
  },
  {
    id: "installation",
    title: "تركيب الأبواب والنوافذ",
    description:
      "نقوم بتركيب الأبواب والنوافذ بكل احترافية وسرعة. فريقنا المتخصص يضمن لك تركيباً دقيقاً وآمناً.",
    image: "four.jpg", // صورة التركيب
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
        خدماتنا المتميزة
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-xs"
          >
            <Image
              src={"/service/"+service.image}
              alt={service.title}
              width={200}
              height={200}
              className="w-full h-48 object-cover rounded-md mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-700">{service.title}</h3>
            <p className="text-gray-600 text-sm mt-2 mb-4">{service.description}</p>
            <Link
              href={`/services/${service.id}`}
              className="inline-block text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-center"
            >
              استفسر عن الخدمة
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
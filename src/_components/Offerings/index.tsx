"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
const Offerings = () => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of element is in view
    >
      <div className="mt-28 p-10" dir="rtl">
        <div className="md:text-center max-w-2xl mx-auto">
          <h2 className="md:text-4xl text-3xl font-bold mb-6">
            استكشاف عروضنا الفريدة
          </h2>
          <p>
            اكتشف مجموعة من الميزات الحصرية المصممة لرفع تجربة منزلك. تعرّف على
            كيفية تقديمنا لمنتجات وخدمات فريدة تضفي لمسة من الجمال والوظيفية
            لمنزلك.
          </p>
        </div>
        <div className="mt-14">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div>
              <Image
                src="https://readymadeui.com/image-1.webp"
                alt="صورة عرض فريدة 1"
                width={600} // استبدل بالقيمة الفعلية لعرض الصورة
                height={400} // استبدل بالقيمة الفعلية لارتفاع الصورة
                className="w-full object-contain rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]"
              />
            </div>
            <div className="max-w-lg">
              <h3 className="text-xl font-semibold mb-4">تخصيص حسب الطلب</h3>
              <p>
                استمتع بخيارات تخصيص غير مسبوقة مصممة لتلائم احتياجاتك الفريدة.
                نوفر لك مجموعة واسعة من الميزات، مما يتيح لك مرونة عالية في
                تخصيص ديكور منزلك.
              </p>
            </div>
            {/* ------------------------------ */}

            <div className="max-md:order-1 max-w-lg">
              <h3 className="text-xl font-semibold mb-4">أداء محسّن</h3>
              <p>
                احصل على أداء عالي مع تقنياتنا المتقدمة في تحسين الأداء. نحن
                نولي اهتمامًا خاصًا للسرعة والكفاءة والموثوقية لضمان تجربة سلسة
                تلبي احتياجاتك المختلفة.
              </p>
            </div>
            <div>
              <Image
                src="https://readymadeui.com/contact.webp"
                alt="صورة عرض فريدة 2"
                width={600} // استبدل بالقيمة الفعلية لعرض الصورة
                height={400} // استبدل بالقيمة الفعلية لارتفاع الصورة
                className="w-full object-contain rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Offerings;

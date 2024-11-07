import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="font-sans max-w-6xl max-md:max-w-md mx-auto">
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
        <div className="max-md:order-1 max-md:text-center">
          <p className="text-sm font-bold text-blue-600 mb-2">
            <span className="rotate-90 inline-block mr-2">|</span> الحل الشامل
            لتجديد ديكور منزلك
          </p>
          <h2 className="text-gray-800 md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">
            اجعل ديكور منزلك مميزًا بأبواب ونوافذ فريدة
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            اكتشف تشكيلتنا من الأبواب والنوافذ المصممة بعناية لتلائم جميع أنماط
            الديكور. أضف لمسة من الجمال والأمان لمنزلك.
          </p>
          <div className="mt-8 space-x-4 flex flex-row">
            <Link
              href={"/contact"}
              className="bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold tracking-wide text-sm rounded-full px-6 py-2.5"
            >
              تواصل معنا
            </Link>
            <Link
              href="/products"
              type="button"
              className="bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 transition-all text-blue-600 font-semibold tracking-wide text-sm rounded-full px-6 py-2.5"
            >
              منتجاتنا
            </Link>
          </div>

          <hr className="mt-8 border-gray-300" />
        </div>
        <div className="lg:h-[650px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-blue-200 before:h-full before:w-3/4 before:right-0 before:z-0">
          <Image
            src="https://readymadeui.com/photo.webp"
            alt="أبواب ونوافذ منزلية"
            className="rounded-md lg:w-3/4 md:w-11/12 z-10 relative"
            layout="intrinsic"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

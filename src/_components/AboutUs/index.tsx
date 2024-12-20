import Image from 'next/image';
import React from 'react';
import ContuctUsButton from '../ContactUsButton';
import Link from 'next/link';

const AboutUs: React.FC = () => {
  return (
    <section className="py-24 relative" dir='rtl'>
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          
          {/* Images Section */}
          <div className="flex justify-center items-start gap-6 sm:grid sm:grid-cols-2 grid-cols-1  lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex ">
              <Image
                width={200}
                height={200}
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717741205.png"
                alt="About Us"
              />
            </div>
            <Image
                width={200}
                height={200}
              className="sm:ml-0 ml-auto rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1717741215.png"
              alt="About Us"
            />
          </div>

          {/* Text Content Section */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              
              {/* Title and Description */}
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold leading-normal lg:text-start text-center">
                  نحن نحقق النجاح معًا
                </h2>
                <p className="text-gray-500 text-xl   leading-relaxed lg:text-justify text-center">
                مصنع الرويلي لأنظمة الألمنيوم تأسس مصنعنا في عام ١٩٩٠ م ومنذ انطلاقتنا كان هدفنا إرضاء زبائننا بجودة إنتاجنا والمصداقية في التعامل ودقة المواعيد، وهذا ما أكسبنا ثقتهم خبرتنا الطويلة أنتجت لدينا فريق عمل متخصص ومتكامل ومع تطور مجال المقاولات والعمل في المملكة كان لابد من مواكبة هذه التطورات. طورنا عملنا في مجال الواجهات الزجاجية و الستراكتشر وتكسيات الألمنيوم ( الكلادينك ) و القبب الزجاجية بالإضافة لفريق عمل مختص في تصنيع وتركيب قواطع الحمامات والشاورات الزجاجية وواجهات السيكوريت و مؤخراً تم إنشاء مصنع رديف مختص بأعمال البخ الحراري و البودر كوتنج ( خبير الألوان ) و أتبعناه بمصنع كبير متخصص بأعمال تخشيب الألمنيوم بكافة أشكاله بأحدث التقنيات ( مصنع خبراء الألوان المتحدة ) طموحنا لا يتوقف وهدفنا دائماً إرضاء عملائنا وتحدث بصمة في مجال العمل وتحقيق رؤى المملكة                </p>
              </div>

              {/* Statistics */}
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-gray-900 text-4xl font-bold leading-normal">33+</h3>
                  <h6 className="text-gray-500 text-base leading-relaxed">سنة من الخبرة</h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold leading-normal">125+</h4>
                  <h6 className="text-gray-500 text-base leading-relaxed">مشروع ناجح</h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold leading-normal">52+</h4>
                  <h6 className="text-gray-500 text-base leading-relaxed">عملاء سعداء</h6>
                </div>
              </div>
            </div>

            <div className='flex flex-row w-full justify-start items-center '>
            <ContuctUsButton content='تواصل معنا' classes=' text-white sm:w-fit w-full px-3.5 py-2 bg-blue-500 hover:bg-blue-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex'/>
            <Link href="https://www.instagram.com/alrowaily_factory/" className=' text-white sm:w-fit w-full px-3.5 py-2 mr-4 bg-blue-500 hover:bg-blue-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex' > المشاريع </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
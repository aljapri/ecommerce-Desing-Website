"use client";
import Link from "next/link";
import React from "react";

const certificates = [
    { id: "one", name: "شهادة هيئة الزكاة والضريبة والجمارك" },
    { id: "two", name: "شهادة التوطين" },
    { id: "three", name: "شهادة تسجيل في ضريبة القيمة المضافة" },
    { id: "four", name: "شهادة تسجيل مؤسسة فردية" },
    { id: "five", name: "شهادة مؤسسة مساعد صلاب الرويلي للمقاولات" },
    { id: "six", name: "شهادة سابقة أعمال عالم الشتر الحديث" },
    { id: "seven", name: "شهادة سابقة أعمال بوبابة التطوير للمقاولات" },
    { id: "eight", name: "شهادة سابقة أعمال شركة العمارة الميزى للمقاولات المحدودة" },
    { id: "nine", name: "شهادة سابقة أعمال محمد عبدالله الفرج للمقاولات" },
    { id: "ten", name: "شهادة سابقة أعمال مجموعة صالح سعيد الغامدي للمقاولات" }
  ]
  

const Certificates: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" dir="rtl">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg border border-gray-300 p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          الشهادات
        </h1>
        
        <div className="space-y-6">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="p-4 bg-gray-50 border-l-4 border-blue-500 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            >
                <Link             href={`/cer/${certificate.id}.pdf`}
                >
                <p className="text-xl font-medium text-gray-700">{certificate.name}</p>

                </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;

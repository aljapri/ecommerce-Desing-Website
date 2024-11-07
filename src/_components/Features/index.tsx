import { features } from "@/constant";
import { FC } from "react";

const Features: FC = () => {
    return (
      <div className="bg-[#F7F7F7] font-sans" dir="rtl">
        <div className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-gray-800 text-4xl font-extrabold text-center mb-16">
          اكتشف ميزاتنا الحصرية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="p-8">
                  <feature.icon className="w-8 h-8 mb-6 text-blue-500"/>
                  <h3 className="text-gray-800 text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;
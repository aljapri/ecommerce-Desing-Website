"use client";


const Hero = () => {
  return (
<section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/picture.webp')", // Add the background image here
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center lg:text-left px-6 flex flex-col justify-center items-center">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
        مصنع الرويلي لأنظمة الألمنيوم        </h1>
        <p className="text-lg lg:text-xl mb-8">
        اجعل ديكور منزلك مميزًا بأبواب ونوافذ فريدة


        </p>
        {/* Buttons */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
            اكتشف المزيد
          </button>
          <button className="bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
            أتصل بنا
          </button>
        </div>
        {/* Icons */}
        
      </div>
    </section>
  );
};

export default Hero;

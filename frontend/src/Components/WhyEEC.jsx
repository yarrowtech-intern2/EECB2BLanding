import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import service from "../assets/service.jpg";

import { FaChalkboardTeacher, FaBrain, FaSchool, FaHeart } from "react-icons/fa";

const features = [
  {
    icon: FaChalkboardTeacher,
    title: "LMS (Learning Management System)",
    desc: "Personalized study journeys for every class (3-10) with smart, adaptive content.",
  },
  {
    icon: FaBrain,
    title: "AI & ML Intelligence",
    desc: "Track student progress, recommend what to study next, and highlight weak areas instantly.",
  },
  {
    icon: FaSchool,
    title: "ERP System",
    desc: "End-to-end school operations from fees and HR to health records.",
  },
];

const WhyEEC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* ✅ FULL BACKGROUND IMAGE (CLEAR) */}
      <div className="absolute inset-0">
        <img
          src={service}
          alt="EEC Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ✅ LIGHT OVERLAY (so image stays visible) */}
      <div className="absolute inset-0 bg-black/25" />

      {/* OPTIONAL: slight color tone (very light) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2b2f4c]/30 via-transparent to-[#2b2f4c]/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT SPACE (image visible) */}
          <div className="hidden lg:block" />

          {/* RIGHT CONTENT */}
          <div>
            {/* Heading */}
            <div className="mb-8" data-aos="fade-up">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                Why <span className="text-[#fbbf24]">EEC</span>?
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
                The First Choice for{" "}
                <span className="font-extrabold text-white">
                  AI-Powered ERP & LMS Solutions
                </span>{" "}
                in Education. EEC transforms institutions from{" "}
                <span className="font-extrabold text-[#fde047]">
                  good to the best.
                </span>
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 120}
                    className="
                      rounded-2xl
                      bg-[#50577a]/70
                      border border-white/15
                      shadow-[0_18px_45px_rgba(0,0,0,0.28)]
                      p-6
                      min-h-[190px]
                      transition-all duration-300
                      hover:-translate-y-1 hover:bg-[#565e86]/80
                    "
                  >
                    {/* Top row */}
                    <div className="flex items-start gap-4">
                      <div
                        className="
                          w-12 h-12 rounded-xl
                          flex items-center justify-center
                          text-[#fbbf24]
                          bg-white/10
                          border border-white/10
                        "
                      >
                        <Icon className="text-2xl" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-white font-extrabold text-base sm:text-lg leading-snug">
                          {item.title}
                        </h3>

                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-white/85 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEEC;

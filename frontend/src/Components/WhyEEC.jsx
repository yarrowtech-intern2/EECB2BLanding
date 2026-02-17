import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import service from "../assets/service.jpg";

import {
  FaChalkboardTeacher,
  FaBrain,
  FaSchool,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: FaChalkboardTeacher,
    title: "LMS (Learning Management System)",
    desc: "Personalized study journeys for every class (3-10) with smart, adaptive content.",
    color: "from-yellow-400 to-amber-500",
    lightColor: "bg-yellow-400",
  },
  {
    icon: FaBrain,
    title: "AI & ML Intelligence",
    desc: "Track student progress, recommend what to study next, and highlight weak areas instantly.",
    color: "from-amber-400 to-orange-500",
    lightColor: "bg-amber-400",
  },
  {
    icon: FaSchool,
    title: "ERP System",
    desc: "End-to-end school operations from fees and HR to health records.",
    color: "from-orange-400 to-red-400",
    lightColor: "bg-orange-400",
  },
];

const stats = [
  // { value: "100+", label: "Institutions" },
  // { value: "50K+", label: "Students" },
  // { value: "99%", label: "Uptime" },
  // { value: "24/7", label: "Support" },
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
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={service}
          alt="EEC Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ==================== LEFT — Stats & Headline ==================== */}
          <div data-aos="fade-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-bold text-yellow-400 mb-6">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              Why Choose Us
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
              Why{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400">
                EEC
              </span>
              ?
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-lg mb-8">
              The First Choice for{" "}
              <span className="font-extrabold text-white">
                AI-Powered ERP & LMS Solutions
              </span>{" "}
              in Education. EEC transforms institutions from{" "}
              <span className="font-extrabold text-yellow-400">
                good to the best.
              </span>
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <p className="text-2xl sm:text-3xl font-black text-yellow-400">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-white/60 font-semibold mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) {
                  const offset = el.getBoundingClientRect().top + window.scrollY - 90;
                  window.scrollTo({ top: offset, behavior: "smooth" });
                }
              }}
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-400 px-7 py-3.5 font-extrabold text-black shadow-[0_8px_30px_rgba(251,191,36,0.3)] hover:from-yellow-300 hover:to-amber-300 hover:shadow-[0_12px_40px_rgba(251,191,36,0.4)] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Get Started
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* ==================== RIGHT — Feature Cards ==================== */}
          <div className="space-y-5">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={index * 150}
                  className="group relative rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.12] hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden"
                >
                  {/* Left accent bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.color} rounded-l-2xl`}
                  />

                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-lg ring-4 ring-white/5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="text-xl text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-extrabold text-lg leading-snug mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEEC;

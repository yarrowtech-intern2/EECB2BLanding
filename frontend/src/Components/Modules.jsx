import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import modulesBg from "../assets/modules.jpg";

import {
  FaSchool,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUsers,
  FaBook,
} from "react-icons/fa";

const MODULES = {
  ERP: [
    {
      title: "School Administration",
      icon: <FaSchool />,
      points: [
        "Paperless Smart Administration",
        "Centralized Analytics",
        "Fees Management",
      ],
    },
    {
      title: "Students",
      icon: <FaUserGraduate />,
      points: [
        "Academic progress Tracking",
        "Assignment view",
        "Attendance Tracking",
      ],
    },
    {
      title: "Teachers",
      icon: <FaChalkboardTeacher />,
      points: [
        "Student Progress Tracking",
        "Student Health Insights",
        "Academic Performance Analytics",
      ],
    },
    {
      title: "Parents",
      icon: <FaUsers />,
      points: [
        "Student Progress Dashboard",
        "Health Observation Tools",
        "Attendance Tracking",
      ],
    },
  ],

  LMS: [
    {
      title: "Everyday Essentials",
      icon: <FaBook />,
      points: [
        "Digital assignments & homework hub",
        "Notes & study materials",
        "Subject-wise progress tracking",
      ],
    },
    {
      title: "Advanced Learning Experience",
      icon: <FaBook />,
      points: [
        "Interactive e-books",
        "Adaptive tests & smart quizzes",
        "Auto-grading & instant results",
      ],
    },
  ],
};

export default function EECModules() {
  const [activeModule, setActiveModule] = useState("ERP");

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section id="modules" className="relative overflow-hidden bg-white">
      {/* ===================== */}
      {/* TOP IMAGE BANNER PART */}
      {/* ===================== */}
      <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] w-full overflow-hidden">
        <img
          src={modulesBg}
          alt="Modules Background"
          className="absolute inset-0 w-full h-full object-cover"
          draggable="false"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Right side text */}
        <div className="absolute inset-0 flex items-center justify-end px-6 sm:px-10 lg:px-20">
          <h2
            className="text-white text-lg sm:text-2xl lg:text-3xl font-black drop-shadow-lg"
            data-aos="fade-left"
          >
            Modules of EEC
          </h2>
        </div>
      </div>

      {/* ===================== */}
      {/* WHITE SECTION + CARDS */}
      {/* ===================== */}
      <div className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
        {/* Soft background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-orange-100 blur-[120px]" />
          <div className="absolute -right-40 bottom-10 h-[520px] w-[520px] rounded-full bg-yellow-100 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4">
              Our <span className="text-yellow-400">Modules</span>
            </h2>
          </div>

          {/* MODULE BUTTONS (ERP / LMS) */}
          <div
            className="flex items-center justify-center gap-3 flex-wrap mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {[
              { key: "ERP", label: "ERP" },
              { key: "LMS", label: "LMS" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveModule(item.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold border transition-all duration-300
                  ${
                    activeModule === item.key
                      ? "bg-yellow-400 text-black border-yellow-400 shadow-md"
                      : "bg-white text-slate-800 border-slate-200 hover:border-yellow-400 hover:bg-yellow-50"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CARDS GRID */}
          <div
            className={`grid grid-cols-1 ${
              activeModule === "ERP"
                ? "md:grid-cols-2 lg:grid-cols-3"
                : "md:grid-cols-2 lg:grid-cols-3"
            } gap-8`}
          >
            {MODULES[activeModule].map((mod, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="
                  relative bg-white rounded-[26px]
                  border border-[#f5d8b8]
                  shadow-[0_18px_40px_rgba(15,23,42,0.10)]
                  overflow-hidden
                  min-h-[250px]
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(15,23,42,0.16)]
                "
              >
                {/* LEFT DIAGONAL STRIP */}
                <div className="absolute inset-y-0 left-0 w-[90px]">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#ffd6a8] to-[#f5f3ff]" />
                  <div
                    className="absolute -right-12 top-0 h-full w-24 bg-white"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 0 100%)",
                      opacity: 0.7,
                    }}
                  />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 p-7 pl-9">
                  {/* Icon */}
                  <div className="mb-5">
                    <div
                      className="
                        w-12 h-12 rounded-2xl
                        bg-orange-500
                        shadow-md
                        flex items-center justify-center
                        ring-4 ring-orange-100
                      "
                    >
                      <span className="text-white text-xl">{mod.icon}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3">
                    {mod.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-2 text-sm text-slate-600 font-medium">
                    {mod.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

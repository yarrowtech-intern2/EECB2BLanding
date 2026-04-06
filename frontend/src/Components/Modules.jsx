import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


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

    // Refresh AOS when module changes
    AOS.refresh();
  }, [activeModule]);

  return (
    <section id="modules" className="relative overflow-hidden bg-white">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {MODULES[activeModule].map((mod, index) => {
              // Alternate animations: even index = fade-right (from left), odd index = fade-left (from right)
              const animationDirection = index % 2 === 0 ? "fade-right" : "fade-left";

              return (
                <div
                  key={index}
                  data-aos={animationDirection}
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  data-aos-delay={index * 100}
                  className="
                    group relative bg-white rounded-[26px]
                    border border-yellow-200
                    shadow-[0_18px_40px_rgba(15,23,42,0.10)]
                    overflow-hidden
                    transition-all duration-500
                    hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(15,23,42,0.16)]
                  "
                >
                  {/* LEFT DIAGONAL STRIP */}
                  <div className="absolute inset-y-0 left-0 w-[78px] pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-100 to-orange-50" />
                    <div
                      className="absolute -right-10 top-0 h-full w-20 bg-white"
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
                          w-14 h-14 rounded-2xl
                          bg-yellow-400
                          shadow-md
                          flex items-center justify-center
                          ring-4 ring-yellow-100
                          group-hover:scale-110
                          transition-transform duration-300
                        "
                      >
                        <span className="text-white text-2xl">{mod.icon}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3 group-hover:text-yellow-500 transition-colors">
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
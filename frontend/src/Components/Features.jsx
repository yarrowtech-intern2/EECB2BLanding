import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import {
  FaBrain,
  FaHeart,
  FaChalkboardTeacher,
  FaLayerGroup,
  FaHome,
  FaUserGraduate,
  FaLeaf,
} from "react-icons/fa";

const features = [
  {
    icon: FaBrain,
    title: "AI-Powered Personalization",
    desc:
      "Learning paths are tailored using AI, ensuring every child gets content, quizzes, and support that match their pace and strengths.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Adapts to Each Child's Learning Style",
    desc:
      "Lessons and assessments adapt dynamically for visual, auditory, and hands-on learners.",
  },
  {
    icon: FaLayerGroup,
    title: "One App for Everything",
    desc:
      "Academic, administrative, and communication tools unified into a single secure platform.",
  },
  {
    icon: FaHome,
    title: "Bridge Between School & Home",
    desc:
      "Parents stay updated in real time on progress, assignments, and emotional well-being.",
  },
  {
    icon: FaUserGraduate,
    title: "Reduced Need for Private Tutors",
    desc:
      "Personalized learning and built-in doubt resolution reduce dependency on tuition.",
  },
  {
    icon: FaLeaf,
    title: "Paperless & Eco-Friendly",
    desc:
      "Digital-first workflows minimize paper usage and promote sustainable learning.",
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1100,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section id="features" className="relative overflow-hidden bg-gradient-to-b from-white via-yellow-50/40 to-white m-0 p-0" style={{ margin: 0, padding: 0 }}>
      {/* ===================== */}
      {/* WHITE SECTION + CARDS */}
      {/* ===================== */}
      <div className="relative w-full py-14 sm:py-20 md:py-24 lg:py-28 m-0 px-0" style={{ margin: 0, paddingLeft: 0, paddingRight: 0 }}>
        {/* soft background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-48 top-20 h-[600px] w-[600px] rounded-full bg-yellow-200/30 blur-[160px]" />
          <div className="absolute -right-48 bottom-20 h-[600px] w-[600px] rounded-full bg-orange-200/30 blur-[160px]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-amber-100/20 blur-[120px]" />
        </div>

        <div className="relative max-w-[88rem] mx-auto px-6 sm:px-8 lg:px-12 z-10">
          {/* Heading */}
          <div className="text-center mb-14" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4">
              <span className="text-slate-900">Our </span>
              <span className="text-yellow-400">Features</span>
            </h1>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {features.map((item, index) => {
              const Icon = item.icon;
              // Alternate animations: even index = fade-right (from left), odd index = fade-left (from right)
              const animationDirection = index % 2 === 0 ? "fade-right" : "fade-left";

              return (
                <div
                  key={index}
                  data-aos={animationDirection}
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  data-aos-delay={index * 80}
                  className="
                    group relative bg-white
                    border border-yellow-200
                    rounded-[26px] p-8
                    shadow-[0_18px_40px_rgba(15,23,42,0.10)]
                    hover:shadow-[0_22px_55px_rgba(15,23,42,0.16)]
                    hover:-translate-y-2
                    transition-all duration-500
                    overflow-hidden
                  "
                >
                  {/* left strip */}
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

                  <div className="relative z-10">
                    {/* icon */}
                    <div className="mb-6">
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
                        <Icon className="text-white text-2xl" />
                      </div>
                    </div>

                    {/* title */}
                    <h3 className="text-lg font-black text-slate-900 mb-3 group-hover:text-yellow-500 transition-colors">
                      {item.title}
                    </h3>

                    {/* desc */}
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      {item.desc}
                    </p>
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

export default Features;
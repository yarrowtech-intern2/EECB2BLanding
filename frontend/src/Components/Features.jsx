import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import featuresBg from "../assets/features.jpg";

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
    icon: FaHeart,
    title: "Emotional Well-being Integration",
    desc:
      "Built-in tools for mindfulness, stress tracking, and counseling support help nurture happier and more balanced students.",
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
    <section id="features" className="relative overflow-hidden bg-white">
      {/* ===================== */}
      {/* TOP IMAGE BANNER PART */}
      {/* ===================== */}
      <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] w-full overflow-hidden">
        {/* background image */}
        <img
          src={featuresBg}
          alt="Features Background"
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
            Features of EEC
          </h2>
        </div>
      </div>

      {/* ===================== */}
      {/* WHITE SECTION + CARDS */}
      {/* ===================== */}
      <div className="relative py-20 sm:py-24">
        {/* soft background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-yellow-100 blur-[140px]" />
          <div className="absolute -right-40 bottom-10 h-[520px] w-[520px] rounded-full bg-orange-100 blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          {/* Heading */}
          <div className="text-center mb-14" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4">
              <span className="text-slate-900">Our </span>
              <span className="text-yellow-400">Features</span>
            </h1>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="
                    group relative bg-white
                    border border-yellow-200
                    rounded-[26px] p-8
                    min-h-[380px]
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

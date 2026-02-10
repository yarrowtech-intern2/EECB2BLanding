import React, { useEffect, useState } from "react";
import rocketImg from "../assets/plane.jpg";
import lmsImg from "../assets/LMS.jpg";
import erpImg from "../assets/ERP.jpg";

const rotatingTexts = [
  "Learning Management System",
  "Smart Learning with ML Insights",
  "Learning Management Software",
  "AI-Driven LMS & ERP Solution",
  "Automated Exam Software",
  "Real-Time Visibility for Partners",
  "Futuristic AI-Driven LMS & ERP Solution",
];

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [prevText, setPrevText] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setPrevText(currentText);
        setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
      }, 350);

      setTimeout(() => {
        setIsAnimating(false);
      }, 700);
    }, 3200);

    return () => clearInterval(interval);
  }, [currentText]);

  const scrollToGallery = () => {
    const section = document.getElementById("gallery");
    if (!section) return;

    const headerOffset = 90;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full overflow-hidden pb-20 pt-0">
      {/* ✅ Background (Only 2 Corner Glow + White) */}
      <div className="absolute inset-0">
        {/* Pure white base */}
        <div className="absolute inset-0 bg-white" />

        {/* Top-left glow */}
        <div className="absolute -top-32 -left-32 h-[380px] w-[380px] rounded-full bg-yellow-400 blur-3xl" />

        {/* Bottom-right glow */}
        <div className="absolute -bottom-32 -right-32 h-[380px] w-[380px] rounded-full bg-amber-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-[#fef3c7] px-5 py-2 text-sm font-semibold text-[#92400e] shadow-sm border border-[#fde047]/40">
              <span>Trusted by partners</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black leading-[1.08]">
                EEC — Educate.
                <br />
                Empower. Connect
              </h1>

              {/* ROTATING TEXT */}
              <div className="relative h-[52px] overflow-hidden">
                {/* Previous text */}
                <h2
                  className={`absolute left-0 top-0 w-full text-lg sm:text-xl md:text-2xl font-bold text-[#c2410c] transition-all duration-500 ${
                    isAnimating
                      ? "opacity-0 -translate-y-4"
                      : "opacity-0 -translate-y-4"
                  }`}
                >
                  {rotatingTexts[prevText]}
                </h2>

                {/* Current text */}
                <h2
                  className={`absolute left-0 top-0 w-full text-lg sm:text-xl md:text-2xl font-bold text-[#c2410c] transition-all duration-500 ${
                    isAnimating
                      ? "opacity-0 translate-y-4"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  {rotatingTexts[currentText]}
                </h2>
              </div>
            </div>

            <p className="max-w-xl text-base sm:text-lg text-gray-700 leading-relaxed">
              Where learning is not memorized, but truly lived — adaptive modules,
              holistic growth, and smart school solutions
            </p>

            {/* CTA */}
<div className="pt-2">
  <button
    onClick={scrollToGallery}
    className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-bold text-black shadow-md hover:bg-amber-500 transition-all duration-200"
  >
    <span>Explore More</span>
    <span className="text-lg">→</span>
  </button>
</div>

          </div>

          {/* RIGHT IMAGES GRID */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Tall image */}
              <div className="md:row-span-2 rounded-3xl border-4 border-white bg-white shadow-lg overflow-hidden ring-1 ring-[#fde047]/30">
                <img
                  src={rocketImg}
                  alt="EEC"
                  className="h-[420px] md:h-[520px] w-full object-cover object-center"
                />
              </div>

              {/* LMS */}
              <div className="rounded-3xl border-4 border-white bg-white shadow-lg overflow-hidden ring-1 ring-[#fde047]/30">
                <img
                  src={lmsImg}
                  alt="LMS"
                  className="h-[250px] w-full object-cover object-center"
                />
              </div>

              {/* ERP */}
              <div className="rounded-3xl border-4 border-white bg-white shadow-lg overflow-hidden ring-1 ring-[#fde047]/30">
                <img
                  src={erpImg}
                  alt="ERP"
                  className="h-[250px] w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

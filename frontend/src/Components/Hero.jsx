import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import b2bImg from "../assets/b2b.png";
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
  // ✅ Typing Effect States
  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // ✅ Flip states (only one open at a time)
  const [activeFlip, setActiveFlip] = useState(null); // "lms" | "erp" | null

  const toggleFlip = (key) => {
    setActiveFlip((prev) => (prev === key ? null : key));
  };

  // ✅ AOS init
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);

  // ✅ Typing effect
  useEffect(() => {
    const fullText = rotatingTexts[textIndex];
    const typingSpeed = isDeleting ? 35 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = fullText.substring(0, typedText.length + 1);
        setTypedText(next);

        if (next === fullText) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        const next = fullText.substring(0, typedText.length - 1);
        setTypedText(next);

        if (next === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, textIndex]);

  // ✅ Explore More → Features
  const scrollToFeatures = () => {
    const section = document.getElementById("features");
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
    <section id="home" className="relative w-full overflow-hidden pb-20 pt-0">
      {/* ✅ Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute -top-32 -left-32 h-[380px] w-[380px] rounded-full bg-yellow-400 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[380px] w-[380px] rounded-full bg-amber-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6" data-aos="fade-right">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-[#fef3c7] px-5 py-2 text-sm font-semibold text-[#92400e] shadow-sm border border-[#fde047]/40">
              <span>Trusted by partners</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black leading-[1.08]">
                EEC — Electronic
                <br />
                Educare
              </h1>

              {/* Typing */}
              <div className="min-h-[70px] sm:min-h-[85px]">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-yellow-700">
                  {typedText}
                  <span className="ml-1 inline-block w-[10px] animate-pulse text-[#c2410c]">
                    |
                  </span>
                </h2>
              </div>
            </div>

            <p className="max-w-xl text-base sm:text-lg text-gray-700 font-bold leading-relaxed">
              Where learning is not memorized, but truly lived — adaptive
              modules, holistic growth, and smart school solutions.
            </p>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={scrollToFeatures}
                className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-bold text-black shadow-md hover:bg-amber-500 transition-all duration-200"
              >
                <span>Learn More</span>
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full" data-aos="fade-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Tall image (B2B) */}
              <div
                className="md:row-span-2 rounded-3xl border-4 border-white bg-white shadow-lg overflow-hidden ring-1 ring-[#fde047]/30"
                data-aos="zoom-in"
              >
                <img
                  src={b2bImg}
                  alt="EEC B2B"
                  className="h-[420px] md:h-[520px] w-full object-cover object-center"
                />
              </div>

              {/* LMS FLIP CARD */}
              <div
                onClick={() => toggleFlip("lms")}
                className="cursor-pointer [perspective:1200px]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  className={`relative h-[250px] w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    activeFlip === "lms" ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 rounded-3xl border-4 border-white bg-white shadow-lg overflow-hidden ring-1 ring-[#fde047]/30 [backface-visibility:hidden]">
                    <img
                      src={lmsImg}
                      alt="LMS"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-extrabold text-white">LMS</h3>
                      <p className="text-white/90 font-semibold text-sm">
                        Click to view →
                      </p>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 rounded-3xl border-4 border-white bg-gradient-to-br from-yellow-50 to-white shadow-lg ring-1 ring-[#fde047]/30 p-5 flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h3 className="text-lg sm:text-xl font-extrabold text-black">
                      LMS (Learning Management System)
                    </h3>
                    <p className="mt-2 text-gray-700 font-semibold leading-relaxed text-sm">
                      Personalized study journeys for every class (3-10) with
                      smart, adaptive content.
                    </p>
                  </div>
                </div>
              </div>

              {/* ERP FLIP CARD */}
              <div
                onClick={() => toggleFlip("erp")}
                className="cursor-pointer [perspective:1200px]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div
                  className={`relative h-[250px] w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    activeFlip === "erp" ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 rounded-3xl border-4 border-white bg-white shadow-lg overflow-hidden ring-1 ring-[#fde047]/30 [backface-visibility:hidden]">
                    <img
                      src={erpImg}
                      alt="ERP"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-extrabold text-white">ERP</h3>
                      <p className="text-white/90 font-semibold text-sm">
                        Click to view →
                      </p>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 rounded-3xl border-4 border-white bg-gradient-to-br from-yellow-50 to-white shadow-lg ring-1 ring-[#fde047]/30 p-5 flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h3 className="text-lg sm:text-xl font-extrabold text-black">
                      ERP System
                    </h3>
                    <p className="mt-2 text-gray-700 font-semibold leading-relaxed text-sm">
                      End-to-end school operations from fees and HR to health
                      records.
                    </p>
                  </div>
                </div>
              </div>

              {/* ✅ AI removed */}
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

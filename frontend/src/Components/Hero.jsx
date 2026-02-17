import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaArrowRight,
  FaPlay,
  FaCheckCircle,
  FaStar,
  FaSchool,
  FaChartLine,
} from "react-icons/fa";

import b2bImg from "../assets/b2b.png";
import lmsImg from "../assets/LMS.jpg";
import erpImg from "../assets/ERP.jpg";

const rotatingTexts = [
  "Learning Management System",
  "Smart Learning with ML Insights",
  "AI-Driven LMS & ERP Solution",
  "Automated Exam Software",
  "Futuristic EdTech Platform",
];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeFlip, setActiveFlip] = useState(null);

  const toggleFlip = (key) => {
    setActiveFlip((prev) => (prev === key ? null : key));
  };

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);

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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    const headerOffset = 90;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full overflow-hidden pb-20 pt-0">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50/30 to-white" />
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-yellow-300/40 blur-[160px]" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-amber-400/30 blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-orange-200/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* ==================== LEFT CONTENT ==================== */}
          <div className="space-y-7" data-aos="fade-right">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold text-yellow-700 border border-yellow-200/60">
              <FaStar className="text-yellow-500 text-xs" />
              {/* Trusted by 100+ Institutions */}
              Trusted by parteners
            </div>

            {/* Main heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]">
                EEC —{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500">
                  Electronic
                </span>
                <br />
                Educare
              </h1>

              {/* Typing effect */}
              <div className="min-h-[60px] sm:min-h-[72px]">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-amber-600">
                  {typedText}
                  <span className="ml-1 inline-block w-[3px] h-[1em] bg-amber-500 animate-pulse align-middle rounded-full" />
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-lg text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Where learning is not memorized, but truly lived — adaptive
              modules, holistic growth, and smart school solutions powered by AI.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: FaCheckCircle, text: "AI-Powered Learning" },
                { icon: FaSchool, text: "Complete ERP" },
                { icon: FaChartLine, text: "Real-Time Analytics" },
              ].map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-bold text-slate-700 border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.05)]"
                >
                  <Icon className="text-yellow-500 text-xs" />
                  {text}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-400 px-7 py-3.5 font-extrabold text-black shadow-[0_8px_30px_rgba(251,191,36,0.3)] hover:from-yellow-300 hover:to-amber-300 hover:shadow-[0_12px_40px_rgba(251,191,36,0.4)] hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Get Started
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={() => scrollToSection("features")}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-700 border-2 border-slate-200 hover:border-yellow-300 hover:text-yellow-700 hover:bg-yellow-50 transition-all duration-200 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                  <FaPlay className="text-yellow-600 text-[10px] ml-0.5" />
                </div>
                Explore Features
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-3">
              <div className="flex -space-x-2.5">
                {["#fbbf24", "#f59e0b", "#d97706", "#b45309"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: color }}
                    >
                      {["S", "A", "R", "P"][i]}
                    </div>
                  )
                )}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xs" />
                  ))}
                </div>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                  Loved by educators & partners
                </p>
              </div>
            </div>
          </div>

          {/* ==================== RIGHT CONTENT ==================== */}
          <div className="w-full" data-aos="fade-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Tall B2B image */}
              <div
                className="md:row-span-2 rounded-3xl border-4 border-white bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)] overflow-hidden ring-1 ring-yellow-200/40 group"
                data-aos="zoom-in"
              >
                <div className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
                  <img
                    src={b2bImg}
                    alt="EEC B2B"
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                        <FaStar className="text-white text-xs" />
                      </div>
                      <div>
                        <p className="text-sm font-extrabold text-slate-900">
                          B2B Platform
                        </p>
                        <p className="text-[11px] text-slate-500 font-semibold">
                          Partner ecosystem
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LMS Flip Card */}
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
                  <div className="absolute inset-0 rounded-3xl border-4 border-white bg-white shadow-[0_15px_40px_rgba(15,23,42,0.10)] overflow-hidden ring-1 ring-yellow-200/40 [backface-visibility:hidden] group">
                    <img
                      src={lmsImg}
                      alt="LMS"
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-black text-white">LMS</h3>
                          <p className="text-white/80 font-semibold text-xs">
                            Tap to explore
                          </p>
                        </div>
                        <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <FaArrowRight className="text-white text-xs" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 rounded-3xl border-4 border-white bg-gradient-to-br from-yellow-50 via-white to-amber-50 shadow-[0_15px_40px_rgba(15,23,42,0.10)] ring-1 ring-yellow-200/40 p-6 flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center mb-3">
                      <FaSchool className="text-white text-sm" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900">
                      Learning Management System
                    </h3>
                    <p className="mt-2 text-slate-600 font-medium leading-relaxed text-sm">
                      Personalized study journeys for every class (3-10) with
                      smart, adaptive content.
                    </p>
                  </div>
                </div>
              </div>

              {/* ERP Flip Card */}
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
                  <div className="absolute inset-0 rounded-3xl border-4 border-white bg-white shadow-[0_15px_40px_rgba(15,23,42,0.10)] overflow-hidden ring-1 ring-yellow-200/40 [backface-visibility:hidden] group">
                    <img
                      src={erpImg}
                      alt="ERP"
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-black text-white">ERP</h3>
                          <p className="text-white/80 font-semibold text-xs">
                            Tap to explore
                          </p>
                        </div>
                        <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <FaArrowRight className="text-white text-xs" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 rounded-3xl border-4 border-white bg-gradient-to-br from-yellow-50 via-white to-amber-50 shadow-[0_15px_40px_rgba(15,23,42,0.10)] ring-1 ring-yellow-200/40 p-6 flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-3">
                      <FaChartLine className="text-white text-sm" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900">
                      ERP System
                    </h3>
                    <p className="mt-2 text-slate-600 font-medium leading-relaxed text-sm">
                      End-to-end school operations from fees and HR to health
                      records — all in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

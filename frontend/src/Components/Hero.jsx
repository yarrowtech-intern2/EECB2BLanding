import React, { useEffect, useState } from "react";
import student from "../assets/student.webp";
import google from "../assets/google.webp";
import trophy from "../assets/trophy.webp";
import book from "../assets/book.webp";
import right from "../assets/right.webp";
import { FiPlus, FiMinus, FiX, FiDivide, FiBookOpen, FiZap, FiSettings, FiCpu, FiCheck, FiFilter } from "react-icons/fi";
import { TbMathIntegral, TbMathFunction, TbMathSymbols, TbSquareRoot, TbVariable, TbFlask, TbFlask2 } from "react-icons/tb";


const Hero = () => {
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const rotatingTexts = [
    "Futuristic EdTech Platform",
    "Automated Exam Software",
    "Electronic Educare Solution",
    "Smart School Management",
    "Modern Learning Platform",
  ];

  // Detect mobile devices
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentText = rotatingTexts[rotatingIndex];
    let typingTimer;

    if (!isDeleting) {
      // Typing in
      if (charIndex < currentText.length) {
        typingTimer = setTimeout(() => {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 80); // Typing speed
      } else {
        // Finished typing, wait before deleting
        typingTimer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Pause before deleting
      }
    } else {
      // Deleting
      if (charIndex > 0) {
        typingTimer = setTimeout(() => {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 40); // Deleting speed
      } else {
        // Move to next text
        setIsDeleting(false);
        setRotatingIndex((prev) => (prev + 1) % rotatingTexts.length);
        setCharIndex(0);
      }
    }

    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, rotatingIndex, rotatingTexts]);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-yellow-50/40 to-white"
      style={{
        paddingTop: "64px",
        paddingBottom: "40px",
        boxSizing: "border-box",
      }}
    >
      {/* Background glowing elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-48 top-20 h-[600px] w-[600px] rounded-full bg-yellow-200/30 blur-[120px]" />
        <div className="absolute -right-48 bottom-20 h-[600px] w-[600px] rounded-full bg-orange-200/30 blur-[120px]" />
        
        {/* Floating Rhombuses */}
        <div className="absolute top-[10%] left-[15%] w-10 h-10 md:w-16 md:h-16 border-2 border-yellow-400/40 rotate-45 animate-float-slow select-none pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-16 h-16 md:w-24 md:h-24 border-2 border-orange-400/40 rotate-45 animate-float-delayed select-none pointer-events-none" />
        <div className="absolute top-[40%] right-[25%] w-8 h-8 md:w-12 md:h-12 bg-yellow-300/20 rotate-45 animate-float select-none pointer-events-none" />
        <div className="absolute top-[5%] right-[40%] w-12 h-12 md:w-20 md:h-20 border border-blue-400/30 rotate-45 animate-float-slow select-none pointer-events-none" />
        <div className="absolute bottom-[35%] left-[10%] w-9 h-9 md:w-14 md:h-14 border border-purple-400/30 rotate-45 animate-float select-none pointer-events-none" />
        <div className="absolute top-[60%] left-[30%] w-7 h-7 md:w-10 md:h-10 border border-emerald-400/30 rotate-45 animate-float-delayed select-none pointer-events-none" />

        {/* Equations & Math Symbols - Reduced density for cleaner look */}
        <div className="absolute top-[15%] left-[10%] text-yellow-600/30 text-2xl md:text-3xl lg:text-4xl font-serif italic animate-float-slow select-none pointer-events-none">
          E = mc²
        </div>
        <div className="absolute bottom-[15%] left-[20%] text-orange-600/30 text-xl md:text-2xl lg:text-3xl font-serif italic animate-float select-none pointer-events-none">
          a² + b² = c²
        </div>
        <div className="absolute top-[25%] right-[15%] text-blue-600/30 text-2xl md:text-3xl lg:text-4xl animate-float-delayed select-none pointer-events-none">
          ∫ f(x) dx
        </div>
        <div className="absolute bottom-[30%] left-[5%] text-purple-600/30 text-3xl md:text-4xl lg:text-5xl animate-float select-none pointer-events-none">
          ∇ × B = μ₀J
        </div>
        <div className="absolute top-[50%] right-[5%] text-emerald-600/40 text-4xl md:text-5xl lg:text-6xl animate-float-slow select-none pointer-events-none">
          ∂u/∂t = α∇²u
        </div>

        {/* Chemistry Equations & Organic Formulas */}
        <div className="absolute top-[8%] left-[25%] text-rose-600/35 text-xl md:text-2xl lg:text-3xl font-serif italic animate-float-delayed select-none pointer-events-none">
          C₆H₁₂O₆
        </div>
        <div className="absolute bottom-[22%] right-[15%] text-cyan-600/35 text-2xl md:text-3xl lg:text-4xl font-serif italic animate-float-slow select-none pointer-events-none">
          CH₃CH₂OH
        </div>
        <div className="absolute top-[65%] left-[8%] text-amber-600/35 text-3xl md:text-4xl lg:text-5xl font-serif animate-float select-none pointer-events-none">
          H₂SO₄
        </div>
        
        {/* Benzene Ring SVG */}
        <div className="absolute top-1/2 left-[15%] opacity-20 text-emerald-600 animate-float-slow select-none pointer-events-none">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z" />
            <circle cx="50" cy="50" r="25" />
          </svg>
        </div>

        <div className="absolute top-[35%] right-[35%] text-teal-600/35 text-xl md:text-2xl lg:text-3xl font-serif italic animate-float-slow select-none pointer-events-none">
          C₆H₆
        </div>
        <div className="absolute bottom-[5%] left-[45%] text-indigo-500/25 text-2xl md:text-3xl lg:text-4xl font-serif italic animate-float-delayed select-none pointer-events-none">
          PV = nRT
        </div>
        <div className="absolute top-[75%] left-[22%] text-lime-600/30 text-xl md:text-2xl lg:text-3xl font-serif italic animate-float select-none pointer-events-none">
          NH₃ + HCl → NH₄Cl
        </div>
        
        {/* DNA/Molecular Icon */}
        <div className="absolute bottom-1/4 left-[35%] opacity-20 text-blue-500 animate-float-delayed select-none pointer-events-none">
          <FiCpu />
        </div>

        {/* Trigonometry & More Math */}
        <div className="absolute top-[22%] left-[45%] text-indigo-600/35 text-xl md:text-2xl lg:text-3xl font-serif italic animate-float-slow select-none pointer-events-none">
          sin(θ)
        </div>
        <div className="absolute bottom-[10%] right-[35%] text-pink-600/35 text-xl md:text-2xl lg:text-3xl font-serif italic animate-float select-none pointer-events-none">
          cos(x)
        </div>
        <div className="absolute top-[70%] left-[15%] text-yellow-700/35 text-lg md:text-xl lg:text-2xl font-serif italic animate-float-delayed select-none pointer-events-none">
          tan(α)
        </div>

        {/* Advanced Math & Physics - Moved away from text */}
        <div className="hidden 2xl:block absolute top-[45%] left-[2%] text-blue-500/20 text-2xl md:text-3xl lg:text-4xl font-serif italic animate-float select-none pointer-events-none">
          d/dx
        </div>
        <div className="absolute bottom-[20%] right-[15%] text-orange-500/35 text-3xl md:text-4xl lg:text-5xl font-serif italic animate-float-slow select-none pointer-events-none">
          ∑ n=1
        </div>
        <div className="absolute top-[8%] left-[30%] text-purple-500/35 text-2xl md:text-3xl lg:text-4xl font-serif italic animate-float-delayed select-none pointer-events-none">
          lim x→∞
        </div>
        <div className="absolute top-[85%] right-[10%] text-red-500/35 text-2xl md:text-3xl lg:text-4xl font-serif italic animate-float select-none pointer-events-none">
          eⁱπ + 1 = 0
        </div>
        <div className="absolute bottom-[35%] right-[25%] text-blue-700/35 text-xl md:text-2xl lg:text-3xl font-serif italic animate-float-slow select-none pointer-events-none">
          λ = h/p
        </div>

        {/* Chemistry Lab Elements - Moved lower/higher to avoid text */}
        <div className="absolute top-[10%] left-[40%] text-red-500/30 text-4xl md:text-5xl lg:text-6xl animate-float select-none pointer-events-none" title="Acid / Beaker">
          <TbFlask />
          <span className="absolute -top-4 -right-8 text-xs font-bold text-red-600/60 font-sans">ACID</span>
        </div>
        
        <div className="absolute bottom-[10%] left-[12%] text-blue-400/30 text-4xl md:text-5xl lg:text-6xl animate-float-slow select-none pointer-events-none" title="Chong Funnel">
          <FiFilter className="rotate-180" />
          <span className="absolute -bottom-4 -right-12 text-xs font-bold text-blue-600/60 font-sans whitespace-nowrap">FUNNEL</span>
        </div>

        <div className="absolute top-[75%] right-[20%] text-emerald-500/30 text-4xl md:text-5xl lg:text-6xl animate-float-delayed select-none pointer-events-none">
          <TbFlask2 />
        </div>

        {/* Floating Math Symbols */}
        <div className="absolute top-1/4 left-1/2 text-yellow-500/40 text-4xl md:text-5xl lg:text-6xl animate-float-slow select-none pointer-events-none">
          <FiPlus />
        </div>
        <div className="absolute bottom-1/3 left-1/4 text-purple-500/40 text-5xl md:text-6xl lg:text-7xl animate-float select-none pointer-events-none">
          <TbMathIntegral />
        </div>
        <div className="absolute top-1/3 right-[20%] text-orange-500/40 text-3xl md:text-4xl lg:text-5xl animate-float-delayed select-none pointer-events-none">
          <FiMinus />
        </div>
        <div className="absolute bottom-1/4 right-[30%] text-emerald-500/40 text-4xl md:text-5xl lg:text-6xl animate-float-slow select-none pointer-events-none">
          <span className="font-serif italic font-bold">∇</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-16 items-start lg:items-center">
            
            {/* LEFT TEXT SECTION */}
            <div className="flex flex-col justify-start lg:justify-center order-2 lg:order-1 w-full text-center lg:text-left mt-2 sm:mt-8 lg:mt-0">
              {/* Badge */}
              <div className="inline-block mb-4 sm:mb-5 self-center lg:self-start">
                <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-black px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold whitespace-nowrap border-2 border-yellow-400 inline-block shadow-sm">
                  Trusted by Partners
                </span>
              </div>

              {/* Heading */}
              <div className="mb-4 sm:mb-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[1.1] mb-1 text-black tracking-tight">
                  EEC
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-amber-600 leading-tight">
                  Electronic Educare
                </h2>
              </div>

              {/* Typing Effect Text */}
              <div className="mb-5 sm:mb-8 min-h-[1.5rem] sm:min-h-[2rem]">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl font-bold text-amber-700/80 tracking-wide">
                  {displayedText}
                  <span className="animate-pulse ml-1 text-yellow-500">|</span>
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Where learning is lived through adaptive modules, holistic growth, and smart AI school solutions.
              </p>

              {/* Button */}
              <div className="flex justify-center lg:justify-start gap-4">
                <button
                  onClick={scrollToContact}
                  className="group relative bg-yellow-400 text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-black hover:bg-yellow-500 active:scale-95 transition-all text-xs sm:text-sm shadow-xl shadow-yellow-200 overflow-hidden"
                  aria-label="Start Free Trial"
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
 
            {/* RIGHT VISUAL SECTION */}
            <div className="relative w-full flex items-center justify-center order-1 lg:order-2 min-h-[280px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[640px] mt-2 lg:mt-0 lg:-translate-y-5 transition-transform duration-700">
              {/* PERFECT CIRCULAR ORBITAL SYSTEM */}
              <div 
                className="hero-orbital-container absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                }}
              >
                {/* Rotating Layer */}
                <div 
                  className="w-full h-full relative flex items-center justify-center"
                  style={{
                    animation: "orbit 25s linear infinite",
                    pointerEvents: "auto",
                  }}
                >
                  {/* Icon 1 - Top - Right/Check */}
                  <div
                    className="hero-orbital-icon absolute bg-white/90 backdrop-blur-sm rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center border-2 border-yellow-400 hover:scale-110 transition-transform cursor-pointer active:scale-95 overflow-hidden p-2"
                    style={{
                      top: "0%",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <img src={right} alt="success" className="w-full h-full object-contain" />
                  </div>

                  {/* Icon 2 - Right - Google */}
                  <div
                    className="hero-orbital-icon absolute bg-white/90 backdrop-blur-sm rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center border-2 border-blue-400 hover:scale-110 transition-transform cursor-pointer active:scale-95 overflow-hidden p-2"
                    style={{
                      right: "0%",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <img src={google} alt="google" className="w-full h-full object-contain" />
                  </div>

                  {/* Icon 3 - Bottom - Trophy */}
                  <div
                    className="hero-orbital-icon absolute bg-white/90 backdrop-blur-sm rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center border-2 border-orange-400 hover:scale-110 transition-transform cursor-pointer active:scale-95 overflow-hidden p-2"
                    style={{
                      bottom: "0%",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <img src={trophy} alt="trophy" className="w-full h-full object-contain" />
                  </div>

                  {/* Icon 4 - Left - Books */}
                  <div
                    className="hero-orbital-icon absolute bg-white/90 backdrop-blur-sm rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center border-2 border-purple-400 hover:scale-110 transition-transform cursor-pointer active:scale-95 overflow-hidden p-2"
                    style={{
                      left: "0%",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <img src={book} alt="book" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Student Image - Center (z-20) */}
              <div className="hero-student-container relative z-20 group flex items-center justify-center">
                <div 
                  className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-orange-400 rounded-full blur-2xl opacity-40"
                  style={{ transform: "scale(1.2)", zIndex: -1 }}
                ></div>
                
                <img
                  src={student}
                  alt="student reading"
                  className="hero-student-image relative object-cover rounded-full border-[6px] sm:border-[8px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        :root {
          /* Mobile (< 640px) */
          --orbital-size: 236px;
          --track-size: 216px;
          --icon-size: 38px;
          --student-size: 150px;
        }

        @media (min-width: 640px) {
          /* Tablet (sm) */
          :root {
            --orbital-size: 330px;
            --track-size: 310px;
            --icon-size: 50px;
            --student-size: 220px;
          }
        }

        @media (min-width: 768px) {
          /* Laptop (md) */
          :root {
            --orbital-size: 410px;
            --track-size: 390px;
            --icon-size: 60px;
            --student-size: 280px;
          }
        }

        @media (min-width: 1024px) {
          /* Desktop (lg) */
          :root {
            --orbital-size: 490px;
            --track-size: 470px;
            --icon-size: 70px;
            --student-size: 340px;
          }
        }

        @media (min-width: 1280px) {
          /* Large Screen (xl) */
          :root {
            --orbital-size: 550px;
            --track-size: 530px;
            --icon-size: 80px;
            --student-size: 380px;
          }
        }

        @media (min-width: 1536px) {
          /* 2XL */
          :root {
            --orbital-size: 610px;
            --track-size: 590px;
            --icon-size: 90px;
            --student-size: 420px;
          }
        }

        .hero-orbital-container {
          width: var(--orbital-size);
          height: var(--orbital-size);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-orbital-track {
          width: var(--track-size);
          height: var(--track-size);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-orbital-icon {
          width: var(--icon-size);
          height: var(--icon-size);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-student-image {
          width: var(--student-size);
          height: var(--student-size);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes float {
          0%, 100% {
            transform: translate3d(0, 0px, 0) rotate(0deg);
          }
          33% {
            transform: translate3d(5px, -15px, 0) rotate(2deg);
          }
          66% {
            transform: translate3d(-5px, -25px, 0) rotate(-2deg);
          }
        }

        .animate-float {
          animation: float 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-float-slow {
          animation: float 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-float-delayed {
          animation: float 10s cubic-bezier(0.4, 0, 0.2, 1) infinite 2s;
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          h1 {
            letter-spacing: -0.02em;
          }
        }

        @media (max-width: 480px) {
          h1 {
            letter-spacing: -0.03em;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          button {
            padding: 1rem 1.5rem;
            font-size: 1rem;
          }

          div[role="button"] {
            padding: 0.5rem;
          }
        }

        /* Reduce animations on low-end devices */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Print styles */
        @media print {
          .animate-pulse,
          [style*="animation"] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
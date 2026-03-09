import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import student from "../assets/student.png";
import google from "../assets/google.png";

const Hero = () => {
  const mountRef = useRef(null);
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const rotatingTexts = [
    "Learning Management System",
    "Smart Learning with ML Insights",
    "AI-Driven LMS & ERP Solution",
    "Automated Exam Software",
    "Futuristic EdTech Platform",
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

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf3efe6);

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating 3D shapes
    const shapes = [];

    // Create icosahedron (geometric shape)
    const geometry1 = new THREE.IcosahedronGeometry(0.8, 4);
    const material1 = new THREE.MeshPhongMaterial({ color: 0x16a34a }); // Green
    const shape1 = new THREE.Mesh(geometry1, material1);
    shape1.position.set(-3, 2, 0);
    scene.add(shape1);
    shapes.push({ mesh: shape1, rotSpeed: 0.005 });

    // Create octahedron (orange shape)
    const geometry2 = new THREE.OctahedronGeometry(1, 2);
    const material2 = new THREE.MeshPhongMaterial({ color: 0xff6b35 }); // Orange
    const shape2 = new THREE.Mesh(geometry2, material2);
    shape2.position.set(3, -1.5, 0);
    scene.add(shape2);
    shapes.push({ mesh: shape2, rotSpeed: 0.007 });

    // Create tetrahedron (yellow shape)
    const geometry3 = new THREE.TetrahedronGeometry(1, 2);
    const material3 = new THREE.MeshPhongMaterial({ color: 0xfbbf24 }); // Yellow
    const shape3 = new THREE.Mesh(geometry3, material3);
    shape3.position.set(0, 3, -1);
    scene.add(shape3);
    shapes.push({ mesh: shape3, rotSpeed: 0.006 });

    // Lighting
    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xff6b35, 0.4);
    light2.position.set(-5, -5, 3);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      shapes.forEach((item, index) => {
        item.mesh.rotation.x += item.rotSpeed;
        item.mesh.rotation.y += item.rotSpeed * 1.3;
        item.mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.005;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "#f5f1eb",
        paddingTop: "64px",
        paddingBottom: "40px",
        boxSizing: "border-box",
      }}
    >
      {/* 3D Background Canvas - Hidden on very small screens for performance */}
      {!isMobile && (
        <div
          ref={mountRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.3, pointerEvents: "none" }}
        />
      )}

      {/* Fallback gradient background for mobile */}
      {isMobile && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            
            {/* LEFT TEXT SECTION */}
            <div className="flex flex-col justify-center order-2 lg:order-1 w-full">
              {/* Badge */}
              <div className="inline-block mb-4 sm:mb-6 self-start">
                <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap border-2 border-yellow-400 inline-block">
                  Trusted by Partners
                </span>
              </div>

              {/* Heading */}
              <div className="mb-6 sm:mb-8 mt-4 sm:mt-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight sm:leading-tight md:leading-tight lg:leading-none mb-1 sm:mb-2 text-black break-words">
                  EEC
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-yellow-500 leading-tight break-words">
                  Electronic Educare
                </h2>
              </div>

              {/* Typing Effect Text */}
              <div className="mb-6 sm:mb-8 mt-4 sm:mt-6 min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem] lg:min-h-[3.5rem] overflow-hidden">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-yellow-500 tracking-wide break-words">
                  {displayedText}
                  <span className="animate-pulse ml-1">|</span>
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-base lg:text-lg text-black mb-6 sm:mb-8 max-w-full leading-relaxed font-medium">
                Where learning is not memorized, but truly lived-- adaptive modules, holistic growth, and smart school solutions powered by AI.
              </p>

              {/* Button */}
              <div className="flex gap-3 sm:gap-4 items-center flex-wrap">
                <button
                  onClick={scrollToContact}
                  className="bg-yellow-400 text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-yellow-500 active:scale-95 transition-all text-sm sm:text-base border-2  w-full sm:w-auto text-center"
                  aria-label="Start Free Trial"
                >
                  Start Free Trial
                </button>
              </div>
            </div>

            {/* RIGHT VISUAL SECTION */}
            <div className="relative w-full flex items-start justify-center order-1 lg:order-2 min-h-[280px] sm:min-h-[380px] md:min-h-[480px] lg:min-h-[600px] mt-10 sm:mt-14 lg:mt-16 pt-4 sm:pt-6 lg:pt-10">
              {/* Decorative circles - Responsive */}
              <div 
                className="absolute rounded-full border-4 border-yellow-200 opacity-30"
                style={{
                  width: "clamp(180px, 70vw, 380px)",
                  height: "clamp(180px, 70vw, 380px)",
                }}
              ></div>
              <div 
                className="absolute rounded-full border-4 border-yellow-100 opacity-20"
                style={{
                  width: "clamp(240px, 85vw, 450px)",
                  height: "clamp(240px, 85vw, 450px)",
                }}
              ></div>

              {/* Green Shape - Top Right - Hidden on small mobile */}
              <div
                className="absolute rounded-3xl opacity-90 hidden sm:block"
                style={{
                  width: "clamp(140px, 45vw, 280px)",
                  height: "clamp(100px, 35vw, 220px)",
                  backgroundColor: "#16a34a",
                  right: "clamp(-20px, 5vw, 40px)",
                  top: "clamp(10px, 8vh, 60px)",
                  transform: "skewY(-5deg) rotate(15deg)",
                  animation: "float 5s ease-in-out infinite",
                }}
              ></div>

              {/* Orange Shape - Bottom Right - Hidden on small mobile */}
              <div
                className="absolute rounded-3xl opacity-90 hidden sm:block"
                style={{
                  width: "clamp(130px, 42vw, 260px)",
                  height: "clamp(100px, 35vw, 200px)",
                  backgroundColor: "#FF6B35",
                  right: "clamp(-30px, 2vw, 30px)",
                  bottom: "clamp(10px, 8vh, 50px)",
                  transform: "skewY(-5deg) rotate(8deg)",
                  animation: "float 6s ease-in-out infinite 0.3s",
                }}
              ></div>

              {/* Yellow Shape - Left - Hidden on small mobile */}
              <div
                className="absolute rounded-3xl opacity-95 hidden sm:block"
                style={{
                  width: "clamp(120px, 40vw, 220px)",
                  height: "clamp(140px, 45vw, 260px)",
                  backgroundColor: "#FBBF24",
                  left: "clamp(-30px, 2vw, 20px)",
                  top: "clamp(20px, 10vh, 80px)",
                  transform: "rotate(-12deg)",
                  animation: "float 5.5s ease-in-out infinite 0.1s",
                }}
              ></div>

              {/* ORBITAL CONTAINER - Icons rotating OUTSIDE student image */}
              <div 
                className="absolute flex items-center justify-center"
                style={{
                  width: "clamp(300px, 78vw, 580px)",
                  height: "clamp(300px, 78vw, 580px)",
                  animation: "orbit 25s linear infinite",
                }}
              >
                {/* Orbital track circle - dashed ring */}
                <div 
                  className="absolute rounded-full border-2 border-dashed border-yellow-300 opacity-30"
                  style={{
                    width: "clamp(280px, 74vw, 560px)",
                    height: "clamp(280px, 74vw, 560px)",
                  }}
                ></div>

                {/* Icon 1 - Top - Checkmark */}
                <div
                  className="absolute bg-white rounded-full shadow-lg flex items-center justify-center font-bold border-3 border-yellow-400 hover:scale-110 transition-transform cursor-pointer active:scale-95"
                  style={{
                    width: "clamp(40px, 10vw, 80px)",
                    height: "clamp(40px, 10vw, 80px)",
                    fontSize: "clamp(20px, 6vw, 40px)",
                    top: "0%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                  role="button"
                  tabIndex={0}
                >
                  ✓
                </div>

                {/* Icon 2 - Right - Google */}
                <div
                  className="absolute bg-white rounded-full shadow-lg flex items-center justify-center border-3 border-blue-400 hover:scale-110 transition-transform cursor-pointer active:scale-95 overflow-hidden"
                  style={{
                    width: "clamp(40px, 10vw, 80px)",
                    height: "clamp(40px, 10vw, 80px)",
                    padding: "clamp(6px, 1.5vw, 12px)",
                    right: "0%",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <img src={google} alt="google logo" className="w-full h-full object-contain" />
                </div>

                {/* Icon 3 - Bottom - Trophy */}
                <div
                  className="absolute bg-white rounded-full shadow-lg flex items-center justify-center border-3 border-orange-400 hover:scale-110 transition-transform cursor-pointer active:scale-95"
                  style={{
                    width: "clamp(40px, 10vw, 80px)",
                    height: "clamp(40px, 10vw, 80px)",
                    fontSize: "clamp(20px, 6vw, 40px)",
                    bottom: "0%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                  role="button"
                  tabIndex={0}
                >
                  🏆
                </div>

                {/* Icon 4 - Left - Books */}
                <div
                  className="absolute bg-white rounded-full shadow-lg flex items-center justify-center border-3 border-purple-400 hover:scale-110 transition-transform cursor-pointer active:scale-95"
                  style={{
                    width: "clamp(40px, 10vw, 80px)",
                    height: "clamp(40px, 10vw, 80px)",
                    fontSize: "clamp(20px, 6vw, 40px)",
                    left: "0%",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  role="button"
                  tabIndex={0}
                >
                  📚
                </div>
              </div>

              {/* Student Image - Center (z-20) - Responsive */}
              <img
                src={student}
                alt="student illustration"
                className="relative z-20 object-contain drop-shadow-xl"
                style={{
                  width: "clamp(200px, 65vw, 520px)",
                  height: "auto",
                  maxWidth: "95vw",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
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
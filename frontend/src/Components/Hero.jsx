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

  const rotatingTexts = [
    "Learning Management System",
    "Smart Learning with ML Insights",
    "AI-Driven LMS & ERP Solution",
    "Automated Exam Software",
    "Futuristic EdTech Platform",
  ];

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
      className="relative w-full min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-112px)] flex items-center overflow-hidden"
      style={{
        background: "#f5f1eb",
        marginTop: 0
      }}
    >
      {/* 3D Background Canvas */}
      <div
        ref={mountRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.3, pointerEvents: "none" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center py-8 sm:py-12 lg:py-20">
            
            {/* LEFT TEXT SECTION */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-block mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap border-2 border-yellow-400">
                  Trusted by Partners
                </span>
              </div>

              {/* Heading */}
              <div className="mb-6 sm:mb-8">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-2 text-black">
                  EEC
                </h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-500 leading-tight">
                  Electronic Educare
                </h2>
              </div>

              {/* Typing Effect Text */}
              <div className="mb-6 sm:mb-8 min-h-[1.5rem] sm:min-h-[2rem] md:min-h-[2.5rem] lg:min-h-[3rem] overflow-hidden">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-500 tracking-wider break-words">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-base text-black mb-6 sm:mb-8 max-w-full sm:max-w-2xl lg:max-w-lg leading-relaxed font-medium">
                Where learning is not memorized, but truly lived-- adaptive modules, holistic growth, and smart school solutions powered by AI.
              </p>

              {/* Button */}
              <div className="flex gap-3 sm:gap-4 items-center flex-wrap">
                <button
                  onClick={scrollToContact}
                  className="bg-yellow-400 text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start border-2 border-black"
                >
                  Start Free Trial
                </button>
              </div>
            </div>

            {/* RIGHT VISUAL SECTION */}
            <div className="relative w-full flex items-center justify-center order-1 lg:order-2 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
              {/* Decorative circles - Responsive */}
              <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-yellow-200 rounded-full opacity-30"></div>
              <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] border-4 border-yellow-100 rounded-full opacity-20"></div>

              {/* Green Shape - Top Right - Responsive */}
              <div
                className="absolute w-40 h-32 sm:w-56 sm:h-44 md:w-64 md:h-48 lg:w-72 lg:h-56 bg-[#16a34a] rounded-2xl sm:rounded-3xl lg:rounded-[40px] opacity-90 hidden sm:block"
                style={{
                  right: "10px",
                  top: "20px",
                  transform: "skewY(-5deg) rotate(15deg)",
                  animation: "float 5s ease-in-out infinite",
                }}
              ></div>

              {/* Orange Shape - Bottom Right - Responsive */}
              <div
                className="absolute w-36 h-28 sm:w-52 sm:h-40 md:w-60 md:h-48 lg:w-64 lg:h-52 bg-[#FF6B35] rounded-2xl sm:rounded-3xl lg:rounded-[40px] opacity-90 hidden sm:block"
                style={{
                  right: "-10px",
                  bottom: "20px",
                  transform: "skewY(-5deg) rotate(8deg)",
                  animation: "float 6s ease-in-out infinite 0.3s",
                }}
              ></div>

              {/* Yellow Shape - Left - Responsive */}
              <div
                className="absolute w-32 h-40 sm:w-48 sm:h-56 md:w-52 md:h-60 lg:w-56 lg:h-64 bg-[#FBBF24] rounded-2xl sm:rounded-3xl lg:rounded-[30px] opacity-95 hidden sm:block"
                style={{
                  left: "-15px",
                  top: "40px",
                  transform: "rotate(-12deg)",
                  animation: "float 5.5s ease-in-out infinite 0.1s",
                }}
              ></div>

              {/* ORBITAL CONTAINER - Icons rotating around student - Responsive */}
              <div 
                className="absolute flex items-center justify-center"
                style={{
                  width: "clamp(280px, 80vw, 600px)",
                  height: "clamp(280px, 80vw, 600px)",
                  animation: "orbit 25s linear infinite",
                }}
              >
                {/* Orbital track circle - subtle */}
                <div className="absolute rounded-full border-2 border-dashed border-gray-300 opacity-20"
                  style={{
                    width: "clamp(200px, 60vw, 400px)",
                    height: "clamp(200px, 60vw, 400px)",
                  }}
                ></div>

                {/* Icon 1 - Top - Checkmark */}
                <div
                  className="absolute w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg sm:shadow-xl lg:shadow-2xl flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl font-bold border-3 sm:border-4 border-yellow-400 hover:scale-110 sm:hover:scale-125 transition-transform cursor-pointer"
                  style={{
                    top: "0%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  ✓
                </div>

                {/* Icon 2 - Right - Google */}
                <div
                  className="absolute w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg sm:shadow-xl lg:shadow-2xl flex items-center justify-center border-3 sm:border-4 border-blue-400 hover:scale-110 sm:hover:scale-125 transition-transform cursor-pointer overflow-hidden p-1.5 sm:p-2"
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
                  className="absolute w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg sm:shadow-xl lg:shadow-2xl flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl border-3 sm:border-4 border-orange-400 hover:scale-110 sm:hover:scale-125 transition-transform cursor-pointer"
                  style={{
                    bottom: "0%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  🏆
                </div>

                {/* Icon 4 - Left - Books */}
                <div
                  className="absolute w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg sm:shadow-xl lg:shadow-2xl flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl border-3 sm:border-4 border-purple-400 hover:scale-110 sm:hover:scale-125 transition-transform cursor-pointer"
                  style={{
                    left: "0%",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  📚
                </div>
              </div>

              {/* Student Image - Center (z-20) - Responsive */}
              <img
                src={student}
                alt="student"
                className="relative z-20 w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[500px] drop-shadow-lg sm:drop-shadow-xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-20 sm:h-24 md:h-32 bg-gradient-to-t from-[#f5f1eb] to-transparent pointer-events-none" />

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

        /* Responsive text sizing */
        @media (max-width: 640px) {
          h1 {
            line-height: 1.2;
          }
        }

        @media (max-width: 480px) {
          h1 {
            line-height: 1.15;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
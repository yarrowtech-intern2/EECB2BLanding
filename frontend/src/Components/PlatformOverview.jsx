import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoSparkles, IoRocket, IoSchool, IoTrendingUp } from "react-icons/io5";
import { HiLightningBolt } from "react-icons/hi";

const rotatingTexts = [
  { text: "Learning Management System", icon: IoSchool },
  { text: "Smart Learning with ML Insights", icon: HiLightningBolt },
  { text: "Learning Management Software", icon: IoSchool },
  { text: "AI-Driven LMS & ERP Solution", icon: IoRocket },
  { text: "Automated Exam Software", icon: IoTrendingUp },
  { text: "Real-Time Visibility for Partners", icon: IoSparkles },
  { text: "Futuristic AI-Driven LMS & ERP Solution", icon: IoRocket },
];

const PlatformOverview = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
        setIsAnimating(false);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = rotatingTexts[currentText].icon;

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center">
          {/* MAIN TITLE */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-black">Empowering </span>
            <span className="text-yellow-500">Excellence</span>
            <span className="text-black">, Everywhere</span>
          </h1>

          {/* ROTATING TEXT (NO BOX) */}
          <div
            className="relative mt-8 mb-10 min-h-[4rem] flex items-center justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* ICON */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
              <div className="relative w-full h-full bg-yellow-500 rounded-2xl border-2 border-yellow-600 shadow-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <CurrentIcon
                    className={`text-white text-2xl sm:text-3xl relative z-10 transition-all duration-300 ${
                      isAnimating
                        ? "scale-75 opacity-0"
                        : "scale-100 opacity-100"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* ROTATING TEXT */}
            <div className="flex-1 overflow-hidden max-w-2xl relative h-16 flex items-center justify-center">
              <p
                className={`text-lg sm:text-xl md:text-2xl font-black tracking-wide uppercase text-yellow-500 transition-all duration-600 absolute ${
                  isAnimating
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {rotatingTexts[currentText].text}
              </p>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p
            className="text-base sm:text-lg md:text-xl text-slate-800 leading-relaxed max-w-4xl mx-auto font-medium"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            EEC simplifies school management, enhances learning experiences, and
            strengthens parent engagement. Our intelligent ERP ecosystem
            automates attendance, scheduling, assessments, and reporting—allowing
            institutions to focus on what truly matters: education. Students gain
            personalized learning journeys, while parents remain seamlessly
            connected through real-time insights and direct communication.
          </p>
        </div>
      </div>

      <style>{`
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .duration-600 {
          transition-duration: 600ms;
        }
      `}</style>
    </section>
  );
};

export default PlatformOverview;

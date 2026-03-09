import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutBg from "../assets/About Us.jpg"; 

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });

    AOS.refresh();
  }, []);

  return (
    <section id="about" className="w-full bg-white overflow-hidden m-0 p-0" style={{ margin: 0, padding: 0 }}>

      {/* ===================== */}
      {/* HERO IMAGE SECTION */}
      {/* ===================== */}

      <div className="relative w-full h-[300px] sm:h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden m-0 p-0" style={{ margin: 0, padding: 0 }}>

        <img
          src={aboutBg}
          alt="About EEC"
          className="absolute inset-0 w-full h-full object-cover"
          draggable="false"
        />

        <div className="absolute inset-0 bg-black/30" />

        {/* Right Text */}
        <div className="absolute inset-0 flex items-center justify-end px-6 sm:px-10 lg:px-20">

          <h2
            data-aos="fade-left"
            className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black drop-shadow-xl"
          >
            About EEC
          </h2>

        </div>
      </div>

      {/* ===================== */}
      {/* MAIN CONTENT */}
      {/* ===================== */}

      <div className="w-full py-14 sm:py-20 md:py-24 lg:py-28 m-0 px-0" style={{ margin: 0, paddingLeft: 0, paddingRight: 0 }}>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* Heading */}

          <div
            className="text-center mb-10 sm:mb-14 m-0"
            data-aos="fade-up"
            style={{ margin: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight m-0" style={{ margin: 0 }}>
              <span className="text-slate-900">About </span>
              <span className="text-yellow-400">EEC</span>
            </h1>
          </div>

          {/* Text Content */}

          <div className="max-w-5xl mx-auto m-0" style={{ margin: 0 }}>

            <div className="space-y-6 text-slate-700 text-[15px] sm:text-base leading-relaxed mb-14">

              <p data-aos="fade-up" data-aos-delay="100" className="m-0" style={{ margin: 0 }}>
                <span className="font-bold text-yellow-500">
                  Electronic Educare (EEC),
                </span>{" "}
                we believe education goes beyond textbooks and exams.
                Schools today need a partner that not only supports
                academic excellence but also nurtures emotional
                well-being and builds stronger connections between
                students, teachers, and parents.
              </p>

              <p data-aos="fade-up" data-aos-delay="200" className="m-0" style={{ margin: 0 }}>
                EEC is more than an LMS — it's a complete AI-powered
                school ecosystem. From classrooms to staff rooms,
                from parents to principals, EEC unites every stakeholder
                on one secure, paperless, and intelligent platform.
              </p>

              <p data-aos="fade-up" data-aos-delay="300" className="m-0" style={{ margin: 0 }}>
                Guided by our unique 4R Philosophy —
                <span className="font-semibold">
                  {" "}Reflect, Revise, Retrieve, Repeat
                </span>{" "}
                — EEC ensures learning is continuous, adaptive,
                and meaningful.
              </p>

            </div>

            {/* Vision + Mission */}

            <div className="space-y-8 sm:space-y-10 m-0" style={{ margin: 0 }}>

              {/* Vision */}

              <div
                data-aos="fade-up"
                className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg m-0"
                style={{ margin: 0 }}
              >

                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 m-0" style={{ margin: 0 }}>
                  Our Vision
                </h2>

                <p className="text-slate-700 text-[15px] sm:text-base leading-relaxed m-0" style={{ margin: 0 }}>
                  At EEC, we envision a future where education transcends
                  boundaries — a world where every learner, teacher,
                  and institution is empowered with technology that
                  makes learning smarter, seamless, and transformative.
                </p>

              </div>

              {/* Mission */}

              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg m-0"
                style={{ margin: 0 }}
              >

                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 m-0" style={{ margin: 0 }}>
                  Our Mission
                </h2>

                <p className="text-slate-700 mb-6 text-[15px] sm:text-base m-0" style={{ margin: 0 }}>
                  Our mission is to redefine learning and institutional
                  growth through an intelligent and integrated education ecosystem.
                </p>

                <ul className="space-y-3 text-slate-700 text-[15px] sm:text-base m-0" style={{ margin: 0 }}>

                  <li className="flex gap-3 m-0" style={{ margin: 0 }}>
                    <span className="mt-2 w-2 h-2 rounded-full bg-yellow-400 shrink-0"></span>
                    <span>
                      <span className="font-bold text-slate-900">
                        Empowering Institutions:
                      </span>{" "}
                      Powerful LMS & ERP solutions.
                    </span>
                  </li>

                  <li className="flex gap-3 m-0" style={{ margin: 0 }}>
                    <span className="mt-2 w-2 h-2 rounded-full bg-yellow-400 shrink-0"></span>
                    <span>
                      <span className="font-bold text-slate-900">
                        Seamless Collaboration:
                      </span>{" "}
                      Real-time school communication.
                    </span>
                  </li>

                  <li className="flex gap-3 m-0" style={{ margin: 0 }}>
                    <span className="mt-2 w-2 h-2 rounded-full bg-yellow-400 shrink-0"></span>
                    <span>
                      <span className="font-bold text-slate-900">
                        Holistic Education:
                      </span>{" "}
                      Creativity, wellness, and life skills.
                    </span>
                  </li>

                  <li className="flex gap-3 m-0" style={{ margin: 0 }}>
                    <span className="mt-2 w-2 h-2 rounded-full bg-yellow-400 shrink-0"></span>
                    <span>
                      <span className="font-bold text-slate-900">
                        Inclusive Innovation:
                      </span>{" "}
                      Affordable scalable technology.
                    </span>
                  </li>

                  <li className="flex gap-3 m-0" style={{ margin: 0 }}>
                    <span className="mt-2 w-2 h-2 rounded-full bg-yellow-400 shrink-0"></span>
                    <span>
                      <span className="font-bold text-slate-900">
                        Future-Driven Excellence:
                      </span>{" "}
                      Preparing learners for the digital world.
                    </span>
                  </li>

                </ul>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
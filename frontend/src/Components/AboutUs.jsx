import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye, FaBullseye } from "react-icons/fa";


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
    <section id="about" className="relative w-full overflow-hidden bg-gradient-to-b from-white via-yellow-50/40 to-white m-0 p-0" style={{ margin: 0, padding: 0 }}>

      <div className="relative w-full py-14 sm:py-20 md:py-24 lg:py-28 m-0 px-0" style={{ margin: 0, paddingLeft: 0, paddingRight: 0 }}>
        {/* soft background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-48 top-20 h-[600px] w-[600px] rounded-full bg-yellow-200/30 blur-[160px]" />
          <div className="absolute -right-48 bottom-20 h-[600px] w-[600px] rounded-full bg-orange-200/30 blur-[160px]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-amber-100/20 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* Heading */}

          <div
            className="text-center mb-10 sm:mb-14"
            data-aos="fade-up"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
              <span className="text-slate-900">About </span>
              <span className="text-yellow-400">EEC</span>
            </h1>
          </div>

          {/* Text Content */}

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 text-slate-700 text-[15px] sm:text-base leading-relaxed mb-14 text-center">
              <p data-aos="fade-up" data-aos-delay="100">
                <span className="font-bold text-yellow-500">
                  Electronic Educare (EEC),
                </span>{" "}
                we believe education goes beyond textbooks and exams.
                Schools today need a partner that not only supports
                academic excellence but also nurtures emotional
                well-being and builds stronger connections between
                students, teachers, and parents.
              </p>

              <p data-aos="fade-up" data-aos-delay="200">
                EEC is more than an LMS — it's a complete AI-powered
                school ecosystem. From classrooms to staff rooms,
                from parents to principals, EEC unites every stakeholder
                on one secure, paperless, and intelligent platform.
              </p>

              <p data-aos="fade-up" data-aos-delay="300">
                Guided by our unique 4R Philosophy —
                <span className="font-semibold">
                  {" "}Reflect, Revise, Retrieve, Repeat
                </span>{" "}
                — EEC ensures learning is continuous, adaptive,
                and meaningful.
              </p>

            </div>

            {/* Vision + Mission */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">

              {/* Vision - Slides from LEFT */}

              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1000"
                className="group relative bg-white border border-yellow-200 rounded-[26px] p-6 sm:p-8 md:p-10 shadow-[0_18px_40px_rgba(15,23,42,0.10)] m-0 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(15,23,42,0.16)]"
                style={{ margin: 0 }}
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
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-400 shadow-md flex items-center justify-center ring-4 ring-yellow-100 group-hover:scale-110 transition-transform duration-300">
                      <FaEye className="text-white text-2xl" />
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 group-hover:text-yellow-500 transition-colors">
                    Our Vision
                  </h2>

                  <p className="text-slate-700 text-[15px] sm:text-base leading-relaxed m-0" style={{ margin: 0 }}>
                    At EEC, we envision a future where education transcends
                    boundaries — a world where every learner, teacher,
                    and institution is empowered with technology that
                    makes learning smarter, seamless, and transformative.
                  </p>
                </div>
              </div>

              {/* Mission - Slides from RIGHT */}

              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="1000"
                className="group relative bg-white border border-yellow-200 rounded-[26px] p-6 sm:p-8 md:p-10 shadow-[0_18px_40px_rgba(15,23,42,0.10)] m-0 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(15,23,42,0.16)]"
                style={{ margin: 0 }}
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
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-400 shadow-md flex items-center justify-center ring-4 ring-yellow-100 group-hover:scale-110 transition-transform duration-300">
                      <FaBullseye className="text-white text-2xl" />
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 group-hover:text-yellow-500 transition-colors">
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
      </div>
    </section>
  );
};

export default AboutUs;
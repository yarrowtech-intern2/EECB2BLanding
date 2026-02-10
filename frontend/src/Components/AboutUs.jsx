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
      offset: 120,
    });
  }, []);

  return (
    <section id="about" className="relative w-full overflow-hidden bg-white">
      {/* ===================== */}
      {/* TOP IMAGE BANNER PART */}
      {/* ===================== */}
      <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] w-full overflow-hidden">
        <img
          src={aboutBg}
          alt="About Background"
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
            About EEC
          </h2>
        </div>
      </div>

      {/* ===================== */}
      {/* WHITE ABOUT SECTION */}
      {/* ===================== */}
      <div className="relative w-full py-20 sm:py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="text-slate-900">About </span>
              <span className="text-yellow-400">EEC</span>
            </h1>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto">
            {/* Paragraphs */}
            <div className="space-y-6 text-slate-700 leading-relaxed text-[15px] sm:text-base mb-14">
              <p data-aos="fade-up" data-aos-delay="100">
                <span className="font-bold text-yellow-500">
                  Electronic Educare (EEC),
                </span>{" "}
                we believe education goes beyond textbooks and exams. Schools
                today need a partner that not only supports academic excellence
                but also nurtures emotional well-being and builds stronger
                connections between students, teachers, and parents.
              </p>

              <p data-aos="fade-up" data-aos-delay="200">
                EEC is more than an LMS — it's a complete AI-powered school
                ecosystem. From classrooms to staff rooms, from parents to
                principals, EEC unites every stakeholder on one secure,
                paperless, and intelligent platform.
              </p>

              <p data-aos="fade-up" data-aos-delay="300">
                Guided by our unique 4R Philosophy —{" "}
                <span className="font-semibold">
                  Reflect, Revise, Retrieve, Repeat
                </span>{" "}
                — EEC ensures learning is continuous, adaptive, and meaningful.
                With features like personalized AI learning, smart
                administration, advanced LMS, and well-being monitoring, we help
                schools create confident learners, empowered teachers, and
                satisfied parents.
              </p>
            </div>

            {/* Vision + Mission Cards */}
            <div className="space-y-10">
              {/* Vision */}
              <div
                data-aos="fade-up"
                className="relative bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-slate-700 font-medium leading-relaxed text-[15px] sm:text-base">
                  At EEC, we envision a future where education transcends
                  boundaries — a world where every learner, every teacher, and
                  every institution is empowered with technology that makes
                  learning smarter, seamless, and truly transformative.
                  Our vision is to be the catalyst of chenge in the education ecosystem,
                  uniti schools and students through a platfrom that fosters knowledge, creativity, well-being,
                  and growth. We aim to shape a generation of learns who are not only 
                  academically excellent but also confident, emotionally strong, and future-ready.
                </p>
              </div>

              {/* Mission */}
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="relative bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                  Our Mission
                </h2>

                <p className="text-slate-700 font-medium mb-6 text-[15px] sm:text-base">
                  Our mission is to redefine learning and institutional growth
                  by building an intelligent, inclusive, and integrated
                  education ecosystem. We are committed to:
                </p>

                <ul className="space-y-3 text-slate-700 font-medium text-[15px] sm:text-base">
                  <li className="flex gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                    <span>
                      <span className="font-bold text-slate-900">
                        Empowering Institutions:
                      </span>{" "}
                      Delivering powerful LMS & ERP solutions that simplify
                      operations, enhance teaching, and optimize academic
                      outcomes.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                    <span>
                      <span className="font-bold text-slate-900">
                        Seamless Collaboration:
                      </span>{" "}
                      Bridging the gap between schools, teachers, parents, and
                      students with transparent communication and real-time
                      tracking.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                    <span>
                      <span className="font-bold text-slate-900">
                        Holistic Education:
                      </span>{" "}
                      Encouraging not just knowledge acquisition but also
                      critical thinking, creativity, mental wellness, and life
                      skills.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                    <span>
                      <span className="font-bold text-slate-900">
                        Scalable & Inclusive Innovation:
                      </span>{" "}
                      Offering solutions that are affordable, flexible, and
                      impactful, ensuring quality education forlearns across all backgounds.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                    <span>
                      <span className="font-bold text-slate-900">
                        Future-Driven Excellence:
                      </span>{" "}
                      Preparing institutions and learners to thrive in a rapidly
                      changing digital-first world, where education is not just taught but truly exprienced.
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

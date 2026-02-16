import React, { useEffect, useMemo, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import galleryBg from "../assets/gallery.jpg";

import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img9 from "../assets/img9.jpeg";
import img10 from "../assets/img10.jpeg";
import img11 from "../assets/img11.jpeg";
import img12 from "../assets/img12.jpeg";
import img13 from "../assets/img13.jpeg";

export default function Gallery() {
  const [isPaused, setIsPaused] = useState(false);

  const trackRef = useRef(null);
  const rafRef = useRef(null);

  const offsetRef = useRef(0);
  const lastRef = useRef(0);

  // ✅ Smooth speed
  const SPEED = 55;

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  const images = useMemo(
    () => [
      { src: img1 },
      { src: img2 },
      { src: img3 },
      { src: img4 },
      { src: img5 },
      { src: img6 },
      { src: img7 },
      { src: img9 },
      { src: img10 },
      { src: img11 },
      { src: img12 },
      { src: img13 },
    ],
    []
  );

  const loopImages = useMemo(() => [...images, ...images], [images]);

  // ✅ Slider Animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = (t) => {
      if (!lastRef.current) lastRef.current = t;

      const dt = (t - lastRef.current) / 1000;
      lastRef.current = t;

      if (!isPaused) {
        offsetRef.current += SPEED * dt;
      }

      const halfWidth = track.scrollWidth / 2;
      if (offsetRef.current >= halfWidth) {
        offsetRef.current = 0;
      }

      track.style.transform = `translateX(-${offsetRef.current}px)`;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused]);

  // ✅ Reset on resize
  useEffect(() => {
    const handleResize = () => {
      offsetRef.current = 0;
      lastRef.current = 0;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="gallery" className="relative w-full overflow-hidden bg-white">
      {/* ===================== */}
      {/* TOP IMAGE BANNER PART */}
      {/* ===================== */}
      <div className="relative h-[260px] xs:h-[320px] sm:h-[420px] md:h-[520px] lg:h-[640px] w-full overflow-hidden">
        <img
          src={galleryBg}
          alt="Gallery Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          draggable="false"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Right side text */}
        <div className="absolute inset-0 flex items-center justify-end px-4 xs:px-6 sm:px-10 lg:px-20">
          <h2
            className="text-white text-base xs:text-lg sm:text-2xl lg:text-3xl font-black drop-shadow-lg"
            data-aos="fade-left"
          >
            Our Gallery
          </h2>
        </div>
      </div>

      {/* ===================== */}
      {/* WHITE GALLERY SECTION */}
      {/* ===================== */}
      <div className="relative overflow-hidden py-14 xs:py-16 sm:py-20 md:py-24 bg-white">
        <div className="relative max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-10 xs:mb-12 sm:mb-14" data-aos="fade-up">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              <span className="text-black">Our </span>
              <span className="text-yellow-400">Gallery</span>
            </h2>
          </div>

          {/* Slider */}
          <div className="relative" data-aos="fade-up" data-aos-delay="150">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-10 xs:w-14 sm:w-16 bg-gradient-to-r from-white to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 xs:w-14 sm:w-16 bg-gradient-to-l from-white to-transparent z-20" />

            {/* Outer Box */}
            <div className="overflow-hidden rounded-[1.5rem] xs:rounded-[2rem] border-2 border-yellow-400 bg-white shadow-[0_20px_60px_rgba(234,179,8,0.18)]">
              {/* Track */}
              <div
                ref={trackRef}
                className="flex gap-5 xs:gap-6 sm:gap-8 p-4 xs:p-5 sm:p-7 w-max will-change-transform"
              >
                {loopImages.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                    onTouchCancel={() => setIsPaused(false)}
                    className="
                      relative
                      w-[230px] xs:w-[260px] sm:w-[360px] md:w-[480px] lg:w-[520px]
                      h-[160px] xs:h-[180px] sm:h-[240px] md:h-[300px] lg:h-[340px]
                      rounded-2xl xs:rounded-3xl overflow-hidden
                      border-2 border-yellow-400 bg-white
                      shadow-xl flex-shrink-0
                      select-none touch-manipulation
                      transition
                      md:hover:scale-[1.02]
                    "
                  >
                    {/* FULL IMAGE NO CROP */}
                    <img
                      src={item.src}
                      alt="Gallery"
                      className="w-full h-full object-contain bg-white"
                      draggable="false"
                    />

                    {/* Pause overlay */}
                    {isPaused && (
                      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FiPhoneCall, FiX, FiArrowUp } from "react-icons/fi";

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show arrow button after scrolling down past the Hero section
  useEffect(() => {
    const toggleVisibility = () => {
      // Show almost immediately as the user leaves the Hero section
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="
          fixed
          right-4 sm:right-6
          bottom-4 sm:bottom-6
          z-[1000]
          pointer-events-auto
        "
      >
        <div className="flex flex-col items-center gap-3">
          {/* Expandable Menu Items (WhatsApp & Email) */}
          <div 
            className={`
              flex flex-col gap-3 transition-all duration-300 ease-in-out
              ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-0 pointer-events-none"}
              max-sm:duration-0 max-sm:transition-none
            `}
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/919830590929?text=Hello%20I%20am%20interested%20in%20your%20ERP%20solutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="
                w-11 h-11 sm:w-12 sm:h-12
                rounded-full
                bg-green-500 text-white
                flex items-center justify-center
                shadow-[0_10px_25px_rgba(34,197,94,0.3)] hover:shadow-green-500/50
                transition-all duration-300
                hover:scale-110 active:scale-95 cursor-pointer
              "
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>

            {/* Email */}
            <a
              href="mailto:electroniceducaresales@yarrowtech.co.in"
              aria-label="Send Email"
              className="
                w-11 h-11 sm:w-12 sm:h-12
                rounded-full
                bg-blue-500 text-white
                flex items-center justify-center
                shadow-[0_10px_25px_rgba(59,130,246,0.3)] hover:shadow-blue-500/50
                transition-all duration-300
                hover:scale-110 active:scale-95 cursor-pointer
              "
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>

          {/* Back to Top Arrow Button - Only visible after scrolling past Hero (Why EEC) */}
          <button
            onClick={scrollToHero}
            aria-label="Scroll to Top"
            className={`
              w-11 h-11 sm:w-12 sm:h-12
              rounded-full
              bg-yellow-400 text-black
              flex items-center justify-center
              shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-yellow-400/50
              transition-all duration-500
              hover:scale-110 active:scale-95 cursor-pointer
              border-2 border-black/10
              ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-0 pointer-events-none"}
            `}
          >
            <FiArrowUp className="w-6 h-6" />
          </button>

          {/* Master Toggle Button (Button System) - Visible from Hero */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Contact Menu"
            className={`
              w-12 h-12 sm:w-14 sm:h-14
              rounded-full
              flex items-center justify-center
              text-white shadow-2xl
              transition-all duration-300
              ${isOpen ? "bg-red-500 rotate-90" : "bg-gradient-to-tr from-yellow-400 to-orange-500"}
              hover:scale-110 active:scale-95 cursor-pointer
              border-2 border-black/10 shadow-[0_15px_40px_rgba(0,0,0,0.25)]
              max-sm:duration-0 max-sm:transition-none
            `}
          >
            {isOpen ? (
              <FiX className="w-7 h-7 sm:w-8 sm:h-8" />
            ) : (
              <FiPhoneCall className="w-7 h-7 sm:w-8 sm:h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Background Overlay (Mobile only, instant) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[999] sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingActions;

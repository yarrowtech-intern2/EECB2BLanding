import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FiMessageCircle, FiX, FiArrowUp } from "react-icons/fi";

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div
      className="
        fixed
        right-4 sm:right-6
        bottom-4 sm:bottom-6
        z-[1000]
        flex flex-col items-center gap-3
        pointer-events-auto
      "
    >
      {/* Expandable Menu Items */}
      <div 
        className={`flex flex-col gap-3 transition-all duration-500 ease-in-out ${
          isOpen 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-10 scale-0 pointer-events-none"
        }`}
      >
        {/* Back to Top Arrow Button */}
        <button
          onClick={scrollToHome}
          aria-label="Scroll to Top"
          className="
            w-10 h-10 sm:w-12 sm:h-12
            rounded-full
            bg-yellow-400 text-black
            flex items-center justify-center
            shadow-xl hover:shadow-yellow-400/40
            transition-all duration-300
            hover:scale-110 active:scale-95
          "
        >
          <FiArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919830590929?text=Hello%20I%20am%20interested%20in%20your%20ERP%20solutions"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="
            w-10 h-10 sm:w-12 sm:h-12
            rounded-full
            bg-green-500 text-white
            flex items-center justify-center
            shadow-xl hover:shadow-green-500/40
            transition-all duration-300
            hover:scale-110 active:scale-95
          "
        >
          <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>

        {/* Email */}
        <a
          href="mailto:electroniceducaresales@yarrowtech.co.in"
          aria-label="Send Email"
          className="
            w-10 h-10 sm:w-12 sm:h-12
            rounded-full
            bg-blue-500 text-white
            flex items-center justify-center
            shadow-xl hover:shadow-blue-500/40
            transition-all duration-300
            hover:scale-110 active:scale-95
          "
        >
          <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>

      {/* Master Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Contact Menu"
        className={`
          w-12 h-12 sm:w-14 sm:h-14
          rounded-full
          flex items-center justify-center
          text-white shadow-2xl
          transition-all duration-500 
          ${isOpen ? "bg-red-500 rotate-90 scale-90" : "bg-gradient-to-tr from-yellow-400 to-orange-500 animate-pulse"}
          hover:scale-110 active:scale-95
          border-2 border-white/50 backdrop-blur-sm
        `}
      >
        {isOpen ? (
          <FiX className="w-6 h-6 sm:w-8 sm:h-8" />
        ) : (
          <FiMessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
        )}
      </button>

      {/* Background Overlay when open (optional, mobile only) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/5 backdrop-blur-[1px] -z-10 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default FloatingActions;

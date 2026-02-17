import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const TopBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const email = "electroniceducaresales@yarrowtech.co.in";
  const phoneDisplay = "+91 9830590929";
  const phoneCall = "+919830590929";

  const mailtoLink = `mailto:${email}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const smallScreen = window.innerWidth < 768;
      setIsMobile(userAgent || smallScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 border-b border-yellow-500 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between gap-2 py-2">
          {/* LEFT: Phone + Email */}
          <div className="flex items-center gap-2 min-w-0 overflow-hidden">
            {/* PHONE */}
            <a
              href={`tel:${phoneCall}`}
              className="flex items-center gap-2 font-extrabold text-black hover:opacity-80 transition shrink-0"
            >
              <div className="w-8 h-8 bg-white border border-yellow-600 rounded-full flex items-center justify-center shadow-sm shrink-0">
                <FaPhoneAlt className="text-yellow-700 text-xs" />
              </div>
              <span className="hidden sm:inline text-sm whitespace-nowrap">
                {phoneDisplay}
              </span>
            </a>

            {/* EMAIL */}
            <a
              href={isMobile ? mailtoLink : gmailLink}
              target={isMobile ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-extrabold text-black hover:opacity-80 transition min-w-0 overflow-hidden"
            >
              <div className="w-8 h-8 bg-white border border-yellow-600 rounded-full flex items-center justify-center shadow-sm shrink-0">
                <FaEnvelope className="text-yellow-700 text-xs" />
              </div>

              {/* ✅ Mobile: hide long email, show only icon */}
              <span className="hidden md:inline text-sm min-w-0 truncate">
                {email}
              </span>
            </a>
          </div>

          {/* RIGHT: Social */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://www.linkedin.com/in/electroniceducare-eec-413ba6328/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8"
            >
              <div className="w-full h-full bg-white border border-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-50 transition shadow-sm">
                <FaLinkedinIn className="text-yellow-700 text-xs" />
              </div>
            </a>

            <a
              href="https://www.instagram.com/its_eec_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8"
            >
              <div className="w-full h-full bg-white border border-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-50 transition shadow-sm">
                <FaInstagram className="text-yellow-700 text-xs" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

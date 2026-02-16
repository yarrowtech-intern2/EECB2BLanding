import React, { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import Logo from "../assets/eec.jpeg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeItem, setActiveItem] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const mobileMenuRef = useRef(null);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Modules", id: "modules" },
    { name: "Features", id: "features" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  // ✅ CORRECT EMAIL - Update this with your actual email
  const email = "electroniceducaresales@yarrowtech.co.in";
  const phone = "+91 9830590929";

  // ✅ Email links
  const mailtoLink = `mailto:${email}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  // ✅ Improved mobile detection with resize handler
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

  // ✅ Detect scroll for header shadow/styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // ✅ Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [mobileMenuOpen]);

  // ✅ Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!mobileMenuOpen) return;
      if (!mobileMenuRef.current) return;
      if (!mobileMenuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  // ✅ Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  // ✅ Smooth scroll to section
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = window.innerWidth < 768 ? 120 : 140;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, []);

  // ✅ Handle navigation click
  const handleNavClick = useCallback(
    (item) => {
      setMobileMenuOpen(false);

      if (item.route) {
        navigate(item.route);
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
        return;
      }

      if (item.id) {
        setActiveItem(item.id);
        scrollToSection(item.id);
      }
    },
    [navigate, scrollToSection]
  );

  // ✅ Update active item on scroll
  useEffect(() => {
    const sectionIds = navItems.map((i) => i.id);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      let current = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        if (section.offsetTop <= scrollPos) {
          current = id;
        }
      }

      setActiveItem(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[999]">
      {/* ===================== TOP BAR - FULLY RESPONSIVE ===================== */}
      <div className="bg-yellow-400 border-b border-yellow-500">
        <div className="w-full mx-auto px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3">
          
          {/* MOBILE & SMALL TABLETS (< 1024px) - Vertical Stack */}
          <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5 lg:hidden">
            
            {/* ROW 1: Phone & Email */}
            <div className="flex flex-col xs:flex-row xs:items-center gap-1.5 xs:gap-2 sm:gap-3 min-w-0">
              
              {/* PHONE */}
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-1.5 xs:gap-2 font-bold xs:font-extrabold text-black min-w-0 hover:opacity-80 transition flex-shrink-0"
              >
                <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 bg-white border border-yellow-600 rounded-md xs:rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                  <FaPhoneAlt className="text-yellow-700 text-[10px] xs:text-xs sm:text-sm" />
                </div>
                <span className="text-[11px] xs:text-xs sm:text-sm md:text-base leading-tight min-w-0 whitespace-nowrap">
                  {phone}
                </span>
              </a>

              {/* EMAIL */}
              <a
                href={isMobile ? mailtoLink : gmailLink}
                target={isMobile ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 xs:gap-2 font-bold xs:font-extrabold text-black min-w-0 hover:opacity-80 transition"
              >
                <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 bg-white border border-yellow-600 rounded-md xs:rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                  <FaEnvelope className="text-yellow-700 text-[10px] xs:text-xs sm:text-sm" />
                </div>
                <span className="text-[11px] xs:text-xs sm:text-sm md:text-base leading-tight min-w-0 break-all">
                  {email}
                </span>
              </a>
            </div>

            {/* ROW 2: Social Media */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="https://www.linkedin.com/in/electroniceducare-eec-413ba6328/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 shrink-0"
                aria-label="Visit our LinkedIn page"
              >
                <div className="w-full h-full bg-white border border-yellow-600 rounded-md xs:rounded-lg flex items-center justify-center hover:bg-yellow-50 transition shadow-sm">
                  <FaLinkedinIn className="text-yellow-700 text-[11px] xs:text-xs sm:text-sm md:text-base" />
                </div>
              </a>

              <a
                href="https://www.instagram.com/its_eec_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 shrink-0"
                aria-label="Visit our Instagram page"
              >
                <div className="w-full h-full bg-white border border-yellow-600 rounded-md xs:rounded-lg flex items-center justify-center hover:bg-yellow-50 transition shadow-sm">
                  <FaInstagram className="text-yellow-700 text-[11px] xs:text-xs sm:text-sm md:text-base" />
                </div>
              </a>
            </div>
          </div>

          {/* DESKTOP (>= 1024px) - Horizontal Layout */}
          <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-4">
            
            {/* LEFT SIDE - Contact Info */}
            <div className="flex items-center gap-4 xl:gap-6 min-w-0 flex-1">
              
              {/* PHONE */}
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 font-extrabold text-black min-w-0 hover:opacity-80 transition flex-shrink-0"
              >
                <div className="w-9 h-9 bg-white border border-yellow-600 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                  <FaPhoneAlt className="text-yellow-700 text-sm" />
                </div>
                <span className="text-sm xl:text-base leading-tight whitespace-nowrap">
                  {phone}
                </span>
              </a>

              {/* EMAIL */}
              <a
                href={isMobile ? mailtoLink : gmailLink}
                target={isMobile ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-extrabold text-black min-w-0 hover:opacity-80 transition"
              >
                <div className="w-9 h-9 bg-white border border-yellow-600 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                  <FaEnvelope className="text-yellow-700 text-sm" />
                </div>
                <span className="text-sm xl:text-base leading-tight min-w-0 break-all">
                  {email}
                </span>
              </a>
            </div>

            {/* RIGHT SIDE - Social Media */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://www.linkedin.com/in/electroniceducare-eec-413ba6328/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 xl:w-10 xl:h-10 shrink-0"
                aria-label="Visit our LinkedIn page"
              >
                <div className="w-full h-full bg-white border border-yellow-600 rounded-lg flex items-center justify-center hover:bg-yellow-50 transition shadow-sm">
                  <FaLinkedinIn className="text-yellow-700 text-base xl:text-lg" />
                </div>
              </a>

              <a
                href="https://www.instagram.com/its_eec_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 xl:w-10 xl:h-10 shrink-0"
                aria-label="Visit our Instagram page"
              >
                <div className="w-full h-full bg-white border border-yellow-600 rounded-lg flex items-center justify-center hover:bg-yellow-50 transition shadow-sm">
                  <FaInstagram className="text-yellow-700 text-base xl:text-lg" />
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ===================== MAIN NAVIGATION BAR ===================== */}
      <div
        className={`bg-white border-b border-neutral-200 transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 xs:h-16 sm:h-20 md:h-24">
            
            {/* LOGO */}
            <button
              onClick={() => handleNavClick({ id: "home" })}
              className="cursor-pointer flex items-center gap-1.5 xs:gap-2 sm:gap-3 hover:opacity-90 transition"
              aria-label="Go to home"
            >
              <div className="w-1 sm:w-1.5 h-8 xs:h-10 sm:h-12 md:h-14 bg-yellow-400 rounded-full"></div>
              <img
                src={Logo}
                alt="EEC Logo"
                className="h-8 xs:h-9 sm:h-11 md:h-14 lg:h-16 w-auto object-contain"
                draggable="false"
              />
            </button>

            {/* DESKTOP NAVIGATION MENU */}
            <nav className="hidden lg:flex items-center flex-shrink-0" role="navigation">
              {navItems.map((item, index) => {
                const isActive = activeItem === item.id;
                const isHover = hoveredItem === index;

                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <button
                      onClick={() => handleNavClick(item)}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative px-3 lg:px-4 xl:px-7 py-8 font-extrabold text-sm xl:text-base transition-colors whitespace-nowrap
                        ${
                          isActive
                            ? "text-yellow-600"
                            : "text-neutral-800 hover:text-yellow-600"
                        }`}
                    >
                      {/* Hover/Active Background */}
                      <span
                        className={`absolute inset-y-6 left-1 lg:left-2 right-1 lg:right-2 rounded-xl transition-colors duration-200
                          ${
                            isHover
                              ? "bg-neutral-100"
                              : isActive
                              ? "bg-yellow-50"
                              : "bg-transparent"
                          }`}
                      ></span>

                      <span className="relative z-10">{item.name}</span>

                      {/* Active/Hover Underline */}
                      <span
                        className={`absolute left-1/2 -translate-x-1/2 bottom-4 h-[3px] rounded-full transition-all duration-300
                          ${
                            isActive
                              ? "w-10 bg-yellow-500"
                              : isHover
                              ? "w-6 bg-yellow-300"
                              : "w-0 bg-transparent"
                          }`}
                      ></span>
                    </button>

                    {/* DOT SEPARATOR */}
                    {index < navItems.length - 1 && (
                      <BsDot
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-300 text-lg xl:text-2xl"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-full h-full bg-black hover:bg-neutral-800 active:bg-neutral-900 rounded-lg shadow-md flex items-center justify-center transition">
                <FaBars className="text-white text-base xs:text-lg sm:text-xl md:text-2xl" />
              </div>
            </button>
          </div>
        </div>

        {/* ===================== MOBILE MENU OVERLAY ===================== */}
        <div
          className={`lg:hidden fixed inset-0 z-[9999] transition-all duration-300 ${
            mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Backdrop Overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />

          {/* Slide-in Menu Panel */}
          <div
            ref={mobileMenuRef}
            className={`absolute right-0 top-0 h-full w-[85%] xs:w-[80%] sm:w-[75%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out
              ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between px-3 xs:px-4 sm:px-5 py-3 xs:py-4 sm:py-5 border-b border-neutral-200 bg-neutral-50">
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src={Logo}
                  alt="EEC Logo"
                  className="h-9 xs:h-10 sm:h-11 w-auto object-contain"
                  draggable="false"
                />
                <p className="font-black text-sm xs:text-base sm:text-lg text-neutral-900">
                  Menu
                </p>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 shrink-0"
                aria-label="Close navigation menu"
              >
                <div className="w-full h-full bg-black hover:bg-neutral-800 active:bg-neutral-900 rounded-lg shadow-md flex items-center justify-center transition">
                  <FaTimes className="text-white text-base xs:text-lg sm:text-xl" />
                </div>
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto p-3 xs:p-4 sm:p-5">
              <div className="grid gap-2 sm:gap-3">
                {navItems.map((item) => {
                  const isActive = activeItem === item.id;

                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item)}
                      aria-current={isActive ? "page" : undefined}
                      className={`h-12 xs:h-14 sm:h-16 rounded-lg xs:rounded-xl border-2 font-bold xs:font-extrabold transition-all text-left px-3 xs:px-4 sm:px-5 text-xs xs:text-sm sm:text-base
                        ${
                          isActive
                            ? "border-yellow-500 bg-yellow-50 text-yellow-700 shadow-sm"
                            : "border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 active:bg-neutral-100"
                        }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Menu Footer - Contact Info */}
            <div className="mt-auto p-3 xs:p-4 sm:p-5 border-t border-neutral-200 bg-neutral-50 space-y-2 xs:space-y-3 sm:space-y-4">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 xs:gap-3 font-bold xs:font-extrabold text-neutral-900 hover:text-yellow-700 transition"
              >
                <FaPhoneAlt className="text-yellow-600 text-sm xs:text-base sm:text-lg shrink-0" />
                <span className="break-words text-xs xs:text-sm sm:text-base">{phone}</span>
              </a>

              <a
                href={isMobile ? mailtoLink : gmailLink}
                target={isMobile ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-2 xs:gap-3 font-bold xs:font-extrabold text-neutral-900 hover:text-yellow-700 transition"
              >
                <FaEnvelope className="text-yellow-600 text-sm xs:text-base sm:text-lg shrink-0" />
                <span className="break-all text-xs xs:text-sm sm:text-base leading-tight">
                  {email}
                </span>
              </a>

              <div className="flex items-center gap-2 xs:gap-3 pt-1 xs:pt-2">
                <a
                  href="https://www.linkedin.com/in/electroniceducare-eec-413ba6328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11"
                  aria-label="Visit our LinkedIn page"
                >
                  <div className="w-full h-full bg-neutral-900 hover:bg-black rounded-lg flex items-center justify-center transition shadow">
                    <FaLinkedinIn className="text-white text-sm xs:text-base sm:text-lg" />
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/its_eec_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11"
                  aria-label="Visit our Instagram page"
                >
                  <div className="w-full h-full bg-neutral-900 hover:bg-black rounded-lg flex items-center justify-center transition shadow">
                    <FaInstagram className="text-white text-sm xs:text-base sm:text-lg" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
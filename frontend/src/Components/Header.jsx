import React, { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import Logo from "../assets/eec.jpeg";

import TopBar from "./TopBar"; // ✅ Import TopBar

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

  const email = "electroniceducaresales@yarrowtech.co.in";
  const phone = "+91 9830590929";

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll only when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!mobileMenuOpen) return;
      if (!mobileMenuRef.current) return;
      if (!mobileMenuRef.current.contains(e.target)) setMobileMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) setMobileMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

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

  useEffect(() => {
    const sectionIds = navItems.map((i) => i.id);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      let current = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (section.offsetTop <= scrollPos) current = id;
      }

      setActiveItem(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[999]">
      {/* ✅ Separate Top Bar */}
      <TopBar />

      {/* ===================== MAIN NAV ===================== */}
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
              className="cursor-pointer flex items-center gap-2 sm:gap-3 hover:opacity-90 transition"
            >
              <div className="w-1 sm:w-1.5 h-8 xs:h-10 sm:h-12 md:h-14 bg-yellow-500 rounded-full"></div>
              <img
                src={Logo}
                alt="EEC Logo"
                className="h-8 xs:h-9 sm:h-11 md:h-14 lg:h-16 w-auto object-contain"
                draggable="false"
              />
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center flex-shrink-0">
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
                      className={`relative px-3 xl:px-6 py-8 font-extrabold text-[13px] xl:text-sm transition-colors whitespace-nowrap
                        ${
                          isActive
                            ? "text-yellow-600"
                            : "text-neutral-800 hover:text-yellow-600"
                        }`}
                    >
                      <span
                        className={`absolute inset-y-6 left-1 right-1 rounded-xl transition-colors duration-200
                          ${
                            isHover
                              ? "bg-yellow-100"
                              : isActive
                              ? "bg-yellow-50"
                              : "bg-transparent"
                          }`}
                      ></span>

                      <span className="relative z-10">{item.name}</span>

                      <span
                        className={`absolute left-1/2 -translate-x-1/2 bottom-4 h-[3px] rounded-full transition-all duration-300
                          ${
                            isActive
                              ? "w-9 bg-yellow-400"
                              : isHover
                              ? "w-6 bg-yellow-300"
                              : "w-0 bg-transparent"
                          }`}
                      ></span>
                    </button>

                    {index < navItems.length - 1 && (
                      <BsDot className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-300 text-xl" />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 shrink-0"
            >
              <div className="w-full h-full bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 rounded-lg shadow-lg flex items-center justify-center transition">
                <FaBars className="text-black text-lg" />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden fixed inset-0 z-[9999] transition-all duration-300 ${
            mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div
            onClick={() => setMobileMenuOpen(false)}
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            ref={mobileMenuRef}
            className={`absolute right-0 top-0 h-full w-[85%] xs:w-[80%] sm:w-[75%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out
              ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-200 bg-yellow-50">
              <div className="flex items-center gap-2">
                <img
                  src={Logo}
                  alt="EEC Logo"
                  className="h-10 w-auto object-contain"
                  draggable="false"
                />
                <p className="font-black text-base text-neutral-900">Menu</p>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 shrink-0"
              >
                <div className="w-full h-full bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 rounded-lg shadow-lg flex items-center justify-center transition">
                  <FaTimes className="text-black text-lg" />
                </div>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="grid gap-2">
                {navItems.map((item) => {
                  const isActive = activeItem === item.id;

                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item)}
                      className={`h-12 rounded-xl border-2 font-extrabold transition-all text-left px-4 text-sm
                        ${
                          isActive
                            ? "border-yellow-500 bg-yellow-50 text-yellow-700 shadow-sm"
                            : "border-neutral-200 bg-white text-neutral-800 hover:bg-yellow-50 hover:border-yellow-300"
                        }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-auto p-4 border-t border-neutral-200 bg-yellow-50 space-y-3">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 font-extrabold text-neutral-900 hover:text-yellow-700 transition"
              >
                <FaPhoneAlt className="text-yellow-600 text-base shrink-0" />
                <span className="text-sm">{phone}</span>
              </a>

              <a
                href={isMobile ? mailtoLink : gmailLink}
                target={isMobile ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-extrabold text-neutral-900 hover:text-yellow-700 transition"
              >
                <FaEnvelope className="text-yellow-600 text-base shrink-0" />
                <span className="text-sm break-all">{email}</span>
              </a>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://www.linkedin.com/in/electroniceducare-eec-413ba6328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10"
                >
                  <div className="w-full h-full bg-yellow-500 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition shadow-lg">
                    <FaLinkedinIn className="text-black text-lg" />
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/its_eec_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10"
                >
                  <div className="w-full h-full bg-yellow-500 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition shadow-lg">
                    <FaInstagram className="text-black text-lg" />
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

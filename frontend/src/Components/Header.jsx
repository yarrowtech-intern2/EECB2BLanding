import React, { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
  FaChevronRight,
} from "react-icons/fa";
import Logo from "../assets/eec.jpeg";
// import Logo from "/logo.png";

import TopBar from "./TopBar";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeItem, setActiveItem] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const mobileMenuRef = useRef(null);
  const pendingScrollTargetRef = useRef(null);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Modules", id: "modules" },
    { name: "Features", id: "features" },
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
      if (pendingScrollTargetRef.current) {
        const targetId = pendingScrollTargetRef.current;
        pendingScrollTargetRef.current = null;
        window.requestAnimationFrame(() => scrollToSection(targetId));
      } else if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
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
      if (item.route) {
        setMobileMenuOpen(false);
        navigate(item.route);
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
        return;
      }

      if (item.id) {
        setActiveItem(item.id);
        if (mobileMenuOpen) {
          pendingScrollTargetRef.current = item.id;
          setMobileMenuOpen(false);
          return;
        }
        scrollToSection(item.id);
        setMobileMenuOpen(false);
      }
    },
    [mobileMenuOpen, navigate, scrollToSection]
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
      <TopBar />

      {/* ===================== MAIN NAV ===================== */}
      <div
        className={`bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${
          isScrolled
            ? "border-slate-200 shadow-[0_4px_20px_rgba(15,23,42,0.08)]"
            : "border-slate-100 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
            {/* LOGO */}
            <button
              onClick={() => handleNavClick({ id: "home" })}
              className="cursor-pointer flex items-center gap-2.5 sm:gap-3 hover:opacity-90 transition group"
            >
              <div className="w-1 sm:w-1.5 h-9 sm:h-12 md:h-14 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-full" />
              <img
                src={Logo}
                alt="EEC Logo"
                className="h-9 sm:h-11 md:h-14 lg:h-16 w-auto object-contain"
                draggable="false"
              />
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => {
                const isActive = activeItem === item.id;
                const isHover = hoveredItem === index;

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`relative px-4 xl:px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200
                      ${
                        isActive
                          ? "text-yellow-700 bg-yellow-50"
                          : isHover
                            ? "text-yellow-600 bg-yellow-50/60"
                            : "text-slate-700 hover:text-slate-900"
                      }`}
                  >
                    {item.name}

                    {/* Active indicator bar */}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 -bottom-[13px] h-[3px] rounded-full transition-all duration-300 ${
                        isActive
                          ? "w-8 bg-gradient-to-r from-yellow-400 to-amber-400"
                          : isHover
                            ? "w-5 bg-yellow-300"
                            : "w-0 bg-transparent"
                      }`}
                    />
                  </button>
                );
              })}

              {/* CTA Button */}
              <button
                onClick={() => handleNavClick({ id: "contact" })}
                className="ml-4 px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-black font-extrabold text-sm rounded-xl hover:from-yellow-300 hover:to-amber-300 hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_4px_15px_rgba(251,191,36,0.3)]"
              >
                Get Started
              </button>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-11 h-11 sm:w-12 sm:h-12 shrink-0"
            >
              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 active:scale-95 rounded-xl shadow-[0_4px_15px_rgba(251,191,36,0.3)] flex items-center justify-center transition-all duration-200">
                <FaBars className="text-black text-lg" />
              </div>
            </button>
          </div>
        </div>

      </div>

      {/* ===================== MOBILE MENU ===================== */}
      {/* Placed outside the backdrop-blur nav div to avoid stacking context issues */}
      <div
        className={`lg:hidden fixed inset-0 z-[9999] transition-all duration-300 ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <div
          ref={mobileMenuRef}
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out
            ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-yellow-50 to-amber-50">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="EEC Logo"
                className="h-10 w-auto object-contain"
                draggable="false"
              />
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 shrink-0"
            >
              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 rounded-xl shadow-md flex items-center justify-center transition-all duration-200">
                <FaTimes className="text-black text-base" />
              </div>
            </button>
          </div>

          {/* Nav items */}
          <div className="flex-1 overflow-y-auto px-5 py-5">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-1">
              Navigation
            </p>
            <div className="space-y-1.5">
              {navItems.map((item) => {
                const isActive = activeItem === item.id;

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-bold text-sm transition-all duration-200
                      ${
                        isActive
                          ? "bg-gradient-to-r from-yellow-400 to-amber-400 text-black shadow-[0_4px_15px_rgba(251,191,36,0.25)]"
                          : "bg-slate-50 text-slate-700 hover:bg-yellow-50 hover:text-yellow-700"
                      }`}
                  >
                    {item.name}
                    <FaChevronRight
                      className={`text-xs transition-colors ${
                        isActive ? "text-black/50" : "text-slate-300"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer — Contact info */}
          <div className="mt-auto p-5 border-t border-slate-100 bg-gradient-to-r from-yellow-50 to-amber-50 space-y-3">
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-3 text-slate-800 hover:text-yellow-700 transition"
            >
              <div className="w-9 h-9 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
                <FaPhoneAlt className="text-yellow-600 text-xs" />
              </div>
              <span className="text-sm font-bold">{phone}</span>
            </a>

            <a
              href={isMobile ? mailtoLink : gmailLink}
              target={isMobile ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-800 hover:text-yellow-700 transition"
            >
              <div className="w-9 h-9 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
                <FaEnvelope className="text-yellow-600 text-xs" />
              </div>
              <span className="text-sm font-bold break-all">{email}</span>
            </a>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.linkedin.com/in/electroniceducare-eec-413ba6328/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9"
              >
                <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 rounded-lg flex items-center justify-center transition shadow-md">
                  <FaLinkedinIn className="text-black text-sm" />
                </div>
              </a>

              <a
                href="https://www.instagram.com/its_eec_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9"
              >
                <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 rounded-lg flex items-center justify-center transition shadow-md">
                  <FaInstagram className="text-black text-sm" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

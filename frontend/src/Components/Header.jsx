import React, { useEffect, useRef, useState } from "react";
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

  // ✅ YOUR CORRECT EMAIL
  const email = "electroniceducaresales@yarrowtech.co.in";

  // ✅ mailto for mobile
  const mailtoLink = `mailto:${email}`;

  // ✅ gmail compose for desktop
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  // ✅ detect mobile
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // ✅ close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // ✅ body scroll lock
  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [mobileMenuOpen]);

  // ✅ close on outside click
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 140;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleNavClick = (item) => {
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
  };

  // ✅ active update on scroll
  useEffect(() => {
    const sectionIds = navItems.map((i) => i.id);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      let current = "home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        if (section.offsetTop <= scrollPos) current = id;
      });

      setActiveItem(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[999]">
      {/* ===================== TOP BAR ===================== */}
      <div className="bg-yellow-400 border-b border-yellow-500">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT */}
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-8 min-w-0">
              {/* PHONE */}
              <a
                href="tel:+919830590929"
                className="flex items-center gap-2 font-extrabold text-black min-w-0"
              >
                <div className="w-9 h-9 bg-white border border-yellow-600 rounded-lg flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="text-yellow-700 text-sm" />
                </div>

                <span className="text-sm md:text-base break-words leading-tight min-w-0">
                  +91 9830590929
                </span>
              </a>

              {/* ✅ EMAIL FIXED */}
              <a
                href={isMobile ? mailtoLink : gmailLink}
                target={isMobile ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-extrabold text-black min-w-0"
              >
                <div className="w-9 h-9 bg-white border border-yellow-600 rounded-lg flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-yellow-700 text-sm" />
                </div>

                <span className="text-sm md:text-base break-all leading-tight min-w-0">
                  {email}
                </span>
              </a>
            </div>

            {/* RIGHT SOCIAL */}
            <div className="flex items-center gap-2 md:gap-3 lg:justify-end shrink-0">
              {[
                {
                  icon: FaLinkedinIn,
                  href: "https://www.linkedin.com/in/electroniceducare-eec-413ba6328/",
                },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/its_eec_",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 shrink-0"
                >
                  <div className="w-full h-full bg-white border border-yellow-600 rounded-lg flex items-center justify-center hover:bg-yellow-50 transition">
                    <social.icon className="text-yellow-700 text-base md:text-lg" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===================== MAIN NAV ===================== */}
      <div className="bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-24 md:h-28">
            {/* LOGO */}
            <div
              className="cursor-pointer flex items-center gap-3"
              onClick={() => handleNavClick({ id: "home" })}
            >
              <div className="w-1.5 h-14 md:h-16 bg-yellow-400 rounded-full"></div>

              <img
                src={Logo}
                alt="EEC Logo"
                className="h-14 md:h-20 lg:h-24 w-auto object-contain"
                draggable="false"
              />
            </div>

            {/* DESKTOP MENU */}
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
                      className={`relative px-5 xl:px-7 py-8 font-extrabold text-sm xl:text-base transition whitespace-nowrap
                        ${
                          isActive
                            ? "text-yellow-600"
                            : "text-neutral-800 hover:text-yellow-600"
                        }`}
                    >
                      {/* hover bg */}
                      <span
                        className={`absolute inset-y-6 left-2 right-2 rounded-xl transition
                          ${
                            isHover
                              ? "bg-neutral-100"
                              : isActive
                              ? "bg-yellow-50"
                              : "bg-transparent"
                          }`}
                      ></span>

                      <span className="relative z-10">{item.name}</span>

                      {/* underline */}
                      <span
                        className={`absolute left-1/2 -translate-x-1/2 bottom-4 h-[3px] rounded-full transition
                          ${
                            isActive
                              ? "w-10 bg-yellow-500"
                              : isHover
                              ? "w-6 bg-yellow-300"
                              : "w-0 bg-transparent"
                          }`}
                      ></span>
                    </button>

                    {/* DOT */}
                    {index < navItems.length - 1 && (
                      <BsDot className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-300 text-xl xl:text-2xl" />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-12 h-12 md:w-14 md:h-14"
              aria-label="Open menu"
            >
              <div className="w-full h-full bg-black hover:bg-neutral-900 rounded-lg shadow flex items-center justify-center transition">
                <FaBars className="text-white text-xl md:text-2xl" />
              </div>
            </button>
          </div>
        </div>

        {/* ===================== MOBILE MENU ===================== */}
        <div
          className={`lg:hidden fixed inset-0 z-[9999] transition ${
            mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {/* overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className={`absolute inset-0 bg-black/50 transition duration-300 ${
              mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* slide panel */}
          <div
            ref={mobileMenuRef}
            className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300
              ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* top */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-neutral-200">
              <div className="flex items-center gap-3">
                <img
                  src={Logo}
                  alt="EEC Logo"
                  className="h-12 w-auto object-contain"
                  draggable="false"
                />
                <p className="font-black text-lg text-neutral-900">Menu</p>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-11 h-11"
                aria-label="Close menu"
              >
                <div className="w-full h-full bg-black hover:bg-neutral-900 rounded-lg shadow flex items-center justify-center transition">
                  <FaTimes className="text-white text-lg" />
                </div>
              </button>
            </div>

            {/* items */}
            <div className="p-5 grid gap-3">
              {navItems.map((item) => {
                const isActive = activeItem === item.id;

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`h-16 rounded-xl border font-extrabold transition text-left px-5
                      ${
                        isActive
                          ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                          : "border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50"
                      }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            {/* bottom */}
            <div className="mt-auto p-5 border-t border-neutral-200 space-y-3">
              <a
                href="tel:+919830590929"
                className="flex items-center gap-3 font-extrabold text-neutral-900"
              >
                <FaPhoneAlt className="text-yellow-600" />
                <span className="break-words text-sm">+91 9830590929</span>
              </a>

              {/* ✅ EMAIL FIXED */}
              <a
                href={isMobile ? mailtoLink : gmailLink}
                target={isMobile ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-extrabold text-neutral-900"
              >
                <FaEnvelope className="text-yellow-600" />
                <span className="break-all text-sm">{email}</span>
              </a>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/electroniceducare-eec-413ba6328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10"
                >
                  <div className="w-full h-full bg-neutral-900 hover:bg-black rounded-lg flex items-center justify-center transition">
                    <FaLinkedinIn className="text-white" />
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/its_eec_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10"
                >
                  <div className="w-full h-full bg-neutral-900 hover:bg-black rounded-lg flex items-center justify-center transition">
                    <FaInstagram className="text-white" />
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

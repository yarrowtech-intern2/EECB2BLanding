import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/eec.jpeg";

const HEADER_HEIGHT = 64;

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Modules", id: "modules" },
    { name: "Features", id: "features" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  /* -------- SCROLL TO SECTION -------- */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    const offsetPosition =
      section.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setMenuOpen(false);
  };

  /* -------- TRACK SCROLL FOR GLASSMORPHISM -------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + HEADER_HEIGHT + 10;
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------- CLOSE ON ESC -------- */
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-40 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(255, 255, 255, 0.65)"
          : "rgba(255, 255, 255, 0.35)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.4)"
          : "1px solid rgba(255,255,255,0.2)",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0, 0, 0, 0.08)"
          : "0 2px 12px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div
            className="flex items-center cursor-pointer flex-shrink-0"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={Logo}
              alt="EEC Logo"
              style={{ height: "48px", width: "auto", objectFit: "contain", display: "block" }}
            />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm lg:text-base transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-yellow-500"
                    : "text-gray-800 hover:text-yellow-500"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] rounded-full bg-yellow-400" />
                )}
              </button>
            ))}
          </nav>

          {/* GET STARTED BUTTON */}
          <div className="hidden md:block flex-shrink-0">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-yellow-400 hover:bg-yellow-500 active:scale-95 text-black font-bold px-5 py-2 rounded-full transition-all duration-200 text-sm shadow-md hover:shadow-lg"
            >
              Get Started
            </button>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-800 hover:bg-white/40 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU — also glassmorphism */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderTop: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          <div className="flex flex-col p-4 space-y-1 max-w-7xl mx-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left py-3 px-4 rounded-xl font-semibold transition-all ${
                  activeSection === item.id
                    ? "bg-yellow-100 text-yellow-600"
                    : "hover:bg-white/60 text-gray-800"
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-xl font-bold transition active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
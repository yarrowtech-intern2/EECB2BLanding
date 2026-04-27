import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/eec.webp";

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

  /* -------- TRACK SCROLL & CLOSE MENU -------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      // Automatically close menu when user scrolls
      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  /* -------- TRACK ACTIVE SECTION -------- */
  useEffect(() => {
    const handleActiveSection = () => {
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

    window.addEventListener("scroll", handleActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  /* -------- CLOSE ON ESC -------- */
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(255, 255, 255, 0.85)"
            : "rgba(255, 255, 255, 0.45)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.4)"
            : "1px solid rgba(255,255,255,0.2)",
          boxShadow: scrolled
            ? "0 10px 30px rgba(0, 0, 0, 0.08)"
            : "0 4px 12px rgba(0, 0, 0, 0.04)",
        }}
      >
        <div className="relative z-10 max-w-[88rem] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20 transition-all duration-300">

            {/* LOGO */}
            <div
              className="flex items-center cursor-pointer flex-shrink-0"
              onClick={() => {
                scrollToSection("home");
                setMenuOpen(false);
              }}
            >
              <img
                src={Logo}
                alt="EEC Logo"
                className="transition-all duration-300"
                style={{ 
                  height: scrolled ? "42px" : "52px", 
                  width: "auto", 
                  objectFit: "contain", 
                  display: "block" 
                }}
              />
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm lg:text-base transition-colors duration-200 cursor-pointer ${
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
                className="bg-yellow-400 hover:bg-yellow-500 active:scale-95 text-black font-bold px-6 py-2.5 rounded-full transition-all duration-200 text-sm shadow-md hover:shadow-lg cursor-pointer"
              >
                Get Started
              </button>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-900 bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm transition-all active:scale-90 cursor-pointer"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY — Full Screen Fixed */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="flex flex-col h-full pt-24 pb-10 px-6 space-y-2 overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMenuOpen(false);
                }}
                className={`text-left py-4 px-6 rounded-2xl font-bold text-xl transition-all active:scale-[0.98] cursor-pointer ${
                  activeSection === item.id
                    ? "bg-yellow-400 text-black shadow-lg shadow-yellow-200"
                    : "text-gray-800 hover:bg-gray-50 border border-transparent hover:border-gray-100"
                }`}
                style={{
                  transitionDelay: `${idx * 50}ms`
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
          
          <div className="mt-auto pt-10">
            <button
              onClick={() => {
                scrollToSection("contact");
                setMenuOpen(false);
              }}
              className="w-full bg-black text-white py-5 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              Get Started
              <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                <FaBars className="text-black text-xs rotate-90" />
              </span>
            </button>
            
            <p className="text-center text-gray-400 text-sm mt-8 font-medium">
              © {new Date().getFullYear()} Electronic Educare
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
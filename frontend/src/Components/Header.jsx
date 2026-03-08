import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/eec.jpeg";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Modules", id: "modules" },
    { name: "Features", id: "features" },
    { name: "Contact", id: "contact" },
  ];

  /* -------- SCROLL TO SECTION -------- */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = 80;

    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  /* -------- ACTIVE SECTION DETECTION -------- */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={Logo}
              alt="EEC Logo"
              className="h-10 object-contain"
            />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 font-medium">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition ${
                  activeSection === item.id
                    ? "text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                {item.name}

                {/* ACTIVE UNDERLINE */}
                {activeSection === item.id && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400"></span>
                )}
              </button>
            ))}

          </nav>

          {/* GET STARTED BUTTON */}
          <div className="hidden md:block">
            <button
              onClick={() => alert("Coming Soon")}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg transition"
            >
              Get Started
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">

          <div className="flex flex-col p-4 space-y-3">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left py-2 px-3 rounded ${
                  activeSection === item.id
                    ? "bg-yellow-100 text-yellow-600"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => alert("Coming Soon")}
              className="mt-2 bg-yellow-400 text-black text-center py-2 rounded-lg font-semibold"
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
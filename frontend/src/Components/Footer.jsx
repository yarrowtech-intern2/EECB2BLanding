import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  const email = "electroniceducaresales@yarrowtech.co.in";
  const phone = "+91 9830590929";

  // ✅ Exact Office Address
  const officeLocation = {
    address:
      "3A, Bertram St, Esplanade, Dharmatala, Taltala, Kolkata, West Bengal 700087",
  };

  // ✅ Mail Links
  const mailtoLink = `mailto:${email}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  // ✅ Google Maps Links
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    officeLocation.address
  )}`;

  const embedMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    officeLocation.address
  )}&z=16&output=embed`;

  // ✅ Mobile Detection
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
    <footer className="relative overflow-hidden py-10 xs:py-12 sm:py-16 md:py-20 bg-white">
      {/* Soft glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute -left-20 xs:-left-32 sm:-left-40 top-8 xs:top-12 sm:top-16 h-[300px] xs:h-[400px] sm:h-[520px] w-[300px] xs:w-[400px] sm:w-[520px] rounded-full bg-yellow-100 opacity-70 blur-[80px] xs:blur-[120px] sm:blur-[140px]" />
        <div className="absolute -right-20 xs:-right-32 sm:-right-40 bottom-5 xs:bottom-8 sm:bottom-10 h-[350px] xs:h-[500px] sm:h-[620px] w-[350px] xs:w-[500px] sm:w-[620px] rounded-full bg-orange-100 opacity-70 blur-[90px] xs:blur-[130px] sm:blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-3 xs:px-4 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 items-stretch">
          {/* LEFT CONTACT BOX */}
          <div className="bg-yellow-400 rounded-2xl xs:rounded-3xl p-6 xs:p-7 sm:p-8 md:p-10 text-black shadow-lg border-2 border-yellow-500 transition-shadow hover:shadow-xl">
            {/* Header */}
            <div className="mb-5 xs:mb-6">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-black leading-tight">
                Get In Touch With Us
              </h3>
              <div className="w-16 xs:w-20 h-0.5 xs:h-1 bg-black mt-2 xs:mt-3 rounded-full" />
            </div>

            {/* Phone */}
            <a
              href={`tel:${phone}`}
              className="flex gap-3 xs:gap-4 mb-5 xs:mb-6 underline-offset-4 transition-all hover:opacity-80 md:hover:underline group"
            >
              <FaPhoneAlt className="mt-0.5 xs:mt-1 flex-shrink-0 text-sm xs:text-base transition-transform group-hover:scale-110" />
              <div className="min-w-0">
                <p className="font-semibold text-sm xs:text-base mb-0.5 xs:mb-1">
                  Phone Number
                </p>
                <p className="text-sm xs:text-base break-words">{phone}</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={isMobile ? mailtoLink : gmailLink}
              target={isMobile ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex gap-3 xs:gap-4 mb-5 xs:mb-6 underline-offset-4 transition-all hover:opacity-80 md:hover:underline group"
            >
              <FaEnvelope className="mt-0.5 xs:mt-1 flex-shrink-0 text-sm xs:text-base transition-transform group-hover:scale-110" />
              <div className="min-w-0">
                <p className="font-semibold text-sm xs:text-base mb-0.5 xs:mb-1">
                  Email
                </p>
                <p className="text-sm xs:text-base break-all leading-tight">
                  {email}
                </p>
              </div>
            </a>

            {/* Address */}
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 xs:gap-4 mb-8 xs:mb-10 underline-offset-4 transition-all hover:opacity-80 md:hover:underline group"
            >
              <FaMapMarkerAlt className="mt-0.5 xs:mt-1 flex-shrink-0 text-sm xs:text-base transition-transform group-hover:scale-110" />
              <div className="min-w-0">
                <p className="font-semibold text-sm xs:text-base mb-0.5 xs:mb-1">
                  Office Address
                </p>
                <p className="text-sm xs:text-base leading-relaxed">
                  {officeLocation.address}
                </p>
              </div>
            </a>

            {/* Social */}
            <div>
              <p className="font-semibold mb-3 xs:mb-4 text-sm xs:text-base">
                Follow Us
              </p>

              <div className="flex items-center gap-2.5 xs:gap-3">
                {[
                  {
                    icon: FaLinkedinIn,
                    href: "https://www.linkedin.com/in/electroniceducare-eec-413ba6328/",
                    label: "LinkedIn",
                  },
                  {
                    icon: FaInstagram,
                    href: "https://www.instagram.com/its_eec_",
                    label: "Instagram",
                  },
                ].map(({ icon: Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11
                      rounded-full bg-black text-yellow-400
                      flex items-center justify-center
                      transition-all duration-300
                      hover:scale-110 hover:shadow-lg hover:bg-neutral-800
                      active:scale-95
                    "
                    aria-label={`Visit our ${label} page`}
                  >
                    <Icon className="text-sm xs:text-base" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT MAP (NO BUTTON) */}
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl xs:rounded-3xl overflow-hidden shadow-lg border-2 border-yellow-500 bg-white block"
            aria-label="Open location in Google Maps"
          >
            <iframe
              title="Electronic Educare Office Location - Dharmatala, Kolkata"
              src={embedMapUrl}
              className="w-full h-[280px] xs:h-[320px] sm:h-[360px] md:h-[420px] lg:h-full min-h-[280px] lg:min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 xs:mt-12 sm:mt-14 text-center">
          <p className="text-xs xs:text-sm font-medium text-slate-700">
            © {new Date().getFullYear()} Electronic Educare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

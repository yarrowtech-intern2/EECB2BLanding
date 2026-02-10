import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const email = "electroniceducaresales@yarrowtech.co.in";

  // ✅ Mailto for mobile
  const mailtoLink = `mailto:${email}`;

  // ✅ Gmail compose for desktop
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  // ✅ Detect mobile
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const mapsLink =
    "https://www.google.com/maps/search/?api=1&query=Citi+Mart+Dharmatala+Kolkata";

  return (
    <footer className="relative overflow-hidden py-20 bg-white">
      {/* Soft glow background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute -left-40 top-16 h-[520px] w-[520px] rounded-full bg-yellow-100 blur-[140px]" />
        <div className="absolute -right-40 bottom-10 h-[620px] w-[620px] rounded-full bg-orange-100 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT CONTACT BOX */}
          <div className="bg-yellow-400 rounded-3xl p-10 text-black shadow-lg select-none touch-manipulation border-2 border-yellow-500">
            <div className="mb-6">
              <h3 className="text-2xl font-black">Get In Touch With Us</h3>
              <div className="w-20 h-1 bg-black mt-3 rounded-full" />
            </div>

            {/* Phone */}
            <a
              href="tel:+919830590929"
              className="flex gap-4 mb-6 underline-offset-4 md:hover:underline"
            >
              <FaPhoneAlt className="mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Phone Number</p>
                <p>+91 9830590929</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={isMobile ? mailtoLink : gmailLink}
              target={isMobile ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex gap-4 mb-6 underline-offset-4 md:hover:underline"
            >
              <FaEnvelope className="mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="break-all">{email}</p>
              </div>
            </a>

            {/* Address */}
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 mb-10 underline-offset-4 md:hover:underline"
            >
              <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Office Address</p>
                <p className="leading-relaxed">
                  3A, Bertram St, Esplanade, Dharmatala, Taltala, Kolkata, West
                  Bengal 700087
                </p>
              </div>
            </a>

            {/* Social */}
            <div>
              <p className="font-semibold mb-4">Follow Us</p>

              <div className="flex items-center gap-2 md:gap-3">
                {[
                  {
                    icon: FaLinkedinIn,
                    href: "https://www.linkedin.com/in/electroniceducare-eec-413ba6328/",
                  },
                  {
                    icon: FaInstagram,
                    href: "https://www.instagram.com/its_eec_",
                  },
                  {
                    icon: FaFacebookF,
                    href: "#",
                  },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-10 h-10 rounded-full bg-black text-yellow-400
                      flex items-center justify-center
                      transition
                      touch-manipulation
                      md:hover:scale-110
                    "
                    aria-label="Social link"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="rounded-3xl overflow-hidden shadow-lg select-none touch-manipulation border-2 border-yellow-500 bg-white">
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <iframe
                title="CITI Mart Location"
                src="https://www.google.com/maps?q=Citi+Mart+Dharmatala+Kolkata&output=embed"
                className="w-full h-[420px] border-0 pointer-events-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 text-center text-sm font-medium text-slate-700">
          © {new Date().getFullYear()} Electronic Educare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

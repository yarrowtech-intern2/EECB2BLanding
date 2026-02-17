import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    institutionName: "",
    institutionAddress: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // ✅ show success
  //   setSubmitted(true);

  //   // ✅ clear form
  //   setFormData({
  //     name: "",
  //     phone: "",
  //     email: "",
  //     institutionName: "",
  //     institutionAddress: "",
  //   });

  //   // optional: auto hide success
  //   setTimeout(() => {
  //     setSubmitted(false);
  //   }, 3000);
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const payload = { ...formData };

    await fetch(
      "https://script.google.com/macros/s/AKfycbwTGN-QWyr2BPbV9NGUCWSTpcv9SO_PqQsiNxz-KSOQqoyhm3ZTVyYALMWg3fZYLWSX/exec",
      {
        method: "POST",
        mode: "no-cors", // ✅ avoids CORS blocking
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    // ✅ show success
    setSubmitted(true);

    // ✅ clear form
    setFormData({
      name: "",
      phone: "",
      email: "",
      institutionName: "",
      institutionAddress: "",
    });

    setTimeout(() => setSubmitted(false), 3000);
  } catch (err) {
    console.error("Submit error:", err);
    alert("Failed to submit. Check console.");
  }
};


  return (
    <section
      id="contact"
      className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-white"
    >
      {/* Soft white background glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-yellow-100 blur-[140px]" />
        <div className="absolute -right-40 bottom-10 h-[520px] w-[520px] rounded-full bg-orange-100 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-black">Contact </span>
            <span className="text-yellow-400">Us</span>
          </h1>
        </div>

        {/* MAIN FORM */}
        <div
          className="max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="relative bg-white border-2 border-yellow-400 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.10)] overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none">
              <div className="absolute inset-0 bg-yellow-100/40 rounded-tl-3xl" />
            </div>

            <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none">
              <div className="absolute inset-0 bg-orange-100/40 rounded-br-3xl" />
            </div>

            {/* ✅ SUCCESS MESSAGE */}
            {submitted && (
              <div className="mb-6 rounded-2xl border border-yellow-300 bg-yellow-50 px-5 py-4 text-center">
                <p className="font-extrabold text-slate-900 text-lg">
                  Submitted Successfully ✅
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  We will contact you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-medium focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-medium focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-medium focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              {/* Institution Name */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Institution Name *
                </label>
                <input
                  type="text"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-medium focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                  placeholder="Enter institution name"
                />
              </div>

              {/* Institution Address */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Institution Address *
                </label>
                <textarea
                  name="institutionAddress"
                  value={formData.institutionAddress}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-medium focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300 resize-none"
                  placeholder="Enter institution address"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-6 rounded-xl bg-yellow-400 text-black font-extrabold text-lg py-4 hover:bg-yellow-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
              >
                {submitted ? "Submitted ✅" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

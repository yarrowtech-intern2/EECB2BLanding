import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaHeadset,
} from "react-icons/fa";

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState("");

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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.institutionName.trim()) {
      newErrors.institutionName = "Institution name is required";
    }

    if (!formData.institutionAddress.trim()) {
      newErrors.institutionAddress = "Institution address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwTGN-QWyr2BPbV9NGUCWSTpcv9SO_PqQsiNxz-KSOQqoyhm3ZTVyYALMWg3fZYLWSX/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      toast.success("Form submitted successfully! We will contact you soon.");

      setFormData({
        name: "",
        phone: "",
        email: "",
        institutionName: "",
        institutionAddress: "",
      });
      setErrors({});
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const fields = [
    { name: "name", label: "Full Name", type: "text", icon: FaUser, placeholder: "John Doe" },
    { name: "phone", label: "Phone Number", type: "tel", icon: FaPhone, placeholder: "9876543210" },
    { name: "email", label: "Email Address", type: "email", icon: FaEnvelope, placeholder: "you@example.com" },
    { name: "institutionName", label: "Institution Name", type: "text", icon: FaBuilding, placeholder: "Your Institution" },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen pt-28 pb-24 overflow-hidden bg-gradient-to-b from-white via-yellow-50/40 to-white"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-48 top-20 h-[600px] w-[600px] rounded-full bg-yellow-200/30 blur-[160px]" />
        <div className="absolute -right-48 bottom-20 h-[600px] w-[600px] rounded-full bg-orange-200/30 blur-[160px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-amber-100/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 font-bold text-sm px-4 py-2 rounded-full mb-5">
            <FaHeadset className="text-base" />
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-slate-900">Contact </span>
            <span className="text-yellow-400">Us</span>
          </h1>
          <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
            Ready to transform your institution? Fill out the form and our team
            will get back to you shortly.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          {/* Left column — Info cards */}
          <div
            className="lg:col-span-2 space-y-6"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {/* Info card */}
            <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-400 to-amber-500 rounded-3xl p-8 text-black overflow-hidden shadow-[0_20px_50px_rgba(251,191,36,0.25)]">
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10" />
              <div className="absolute -left-6 -bottom-6 h-28 w-28 rounded-full bg-white/10" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-5 ring-4 ring-white/10">
                  <FaPaperPlane className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-black mb-3">
                  Let&apos;s Connect
                </h3>
                <p className="text-black/70 font-medium leading-relaxed">
                  We&apos;d love to hear from you. Share your details and
                  we&apos;ll reach out to discuss how EEC can empower your
                  institution.
                </p>
              </div>
            </div>

            {/* Feature highlights */}
            <div className="space-y-4">
              {[
                { title: "Quick Response", desc: "We respond within 24 hours", color: "bg-yellow-400" },
                { title: "Free Consultation", desc: "No obligation demo & walkthrough", color: "bg-orange-400" },
                { title: "Custom Solutions", desc: "Tailored to your institution's needs", color: "bg-amber-400" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 bg-white rounded-2xl p-4 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.1)] transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={200 + i * 100}
                >
                  <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center shrink-0`}>
                    <div className="w-2.5 h-2.5 bg-white rounded-full" />
                  </div>
                  <div>
                    <p className="font-extrabold text-slate-900 text-sm">{item.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Form */}
          <div className="lg:col-span-3" data-aos="fade-left" data-aos-delay="200">
            <div className="relative bg-white rounded-3xl p-7 sm:p-9 lg:p-10 shadow-[0_22px_55px_rgba(15,23,42,0.10)] border border-slate-100 overflow-hidden">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400" />

              {/* Corner glows */}
              <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-bl from-yellow-100/50 to-transparent rounded-tr-3xl" />
              </div>
              <div className="absolute bottom-0 left-0 w-40 h-40 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/50 to-transparent rounded-bl-3xl" />
              </div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                {/* 2-column grid for first 4 fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {fields.map(({ name, label, type, icon: Icon, placeholder }) => (
                    <div key={name}>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                        {label} <span className="text-yellow-500">*</span>
                      </label>
                      <div className="relative">
                        <div
                          className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                            focused === name
                              ? "text-yellow-500"
                              : errors[name]
                                ? "text-red-400"
                                : "text-slate-400"
                          }`}
                        >
                          <Icon className="text-sm" />
                        </div>
                        <input
                          type={type}
                          name={name}
                          value={formData[name]}
                          onChange={handleChange}
                          onFocus={() => setFocused(name)}
                          onBlur={() => setFocused("")}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 ${
                            errors[name]
                              ? "border-red-300 bg-red-50/50"
                              : focused === name
                                ? "border-yellow-400 bg-yellow-50/30"
                                : "border-slate-200 bg-slate-50/50"
                          } text-slate-900 font-medium text-sm focus:outline-none transition-all duration-300`}
                          placeholder={placeholder}
                        />
                      </div>
                      {errors[name] && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors[name]}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Institution Address — full width */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Institution Address <span className="text-yellow-500">*</span>
                  </label>
                  <div className="relative">
                    <div
                      className={`absolute left-3.5 top-4 transition-colors duration-300 ${
                        focused === "institutionAddress"
                          ? "text-yellow-500"
                          : errors.institutionAddress
                            ? "text-red-400"
                            : "text-slate-400"
                      }`}
                    >
                      <FaMapMarkerAlt className="text-sm" />
                    </div>
                    <textarea
                      name="institutionAddress"
                      value={formData.institutionAddress}
                      onChange={handleChange}
                      onFocus={() => setFocused("institutionAddress")}
                      onBlur={() => setFocused("")}
                      rows={3}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 ${
                        errors.institutionAddress
                          ? "border-red-300 bg-red-50/50"
                          : focused === "institutionAddress"
                            ? "border-yellow-400 bg-yellow-50/30"
                            : "border-slate-200 bg-slate-50/50"
                      } text-slate-900 font-medium text-sm focus:outline-none transition-all duration-300 resize-none`}
                      placeholder="Enter your institution's full address"
                    />
                  </div>
                  {errors.institutionAddress && (
                    <p className="text-red-500 text-xs mt-1 font-semibold">{errors.institutionAddress}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="group w-full mt-3 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-400 text-black font-extrabold text-base py-4 hover:from-yellow-300 hover:to-amber-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_8px_30px_rgba(251,191,36,0.3)] hover:shadow-[0_12px_40px_rgba(251,191,36,0.4)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-black/70"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit
                      <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

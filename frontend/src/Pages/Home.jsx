import Hero from "../Components/Hero";
import PlatformOverview from "../Components/PlatformOverview";
import WhyEEC from "../Components/WhyEEC";
import Contact from "../Components/Contact";
import Modules from "../Components/Modules";
import Features from "../Components/Features";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero already renders <section id="home"> internally */}
      <Hero />

      {/* Why EEC */}
      <section id="why-eec" className="scroll-mt-[64px]">
        <WhyEEC />
      </section>

      {/* Platform Overview */}
      <section id="platform" className="scroll-mt-[64px]">
        <PlatformOverview />
      </section>

      {/* Modules */}
      <section id="modules" className="scroll-mt-[64px]">
        <Modules />
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-[64px]">
        <Features />
      </section>

      {/* About Us */}
      <section id="about" className="scroll-mt-[64px]">
        <AboutUs />
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-[64px]">
        <Contact />
      </section>

      <Footer />
    </main>
  );
};

export default Home;

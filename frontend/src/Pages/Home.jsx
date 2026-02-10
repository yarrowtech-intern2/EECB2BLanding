import Hero from "../Components/Hero";
import PlatformOverview from "../Components/PlatformOverview";
import WhyEEC from "../Components/WhyEEC";
import Contact from "../Components/Contact";
import Modules from "../Components/Modules";
import Features from "../Components/Features";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
import Floating from "../Components/Floating";
import Gallary from "../Components/Gallery";

const Home = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <section id="home" className="scroll-mt-28">
        <Hero />
      </section>
      <section id="why-eec" className="scroll-mt-28">
        <WhyEEC />
           </section>
        <section id="platform" className="scroll-mt-28">
        <PlatformOverview />
      </section>
      <section id="modules" className="scroll-mt-28">
        <Modules />
      </section>
      <section id="gallery" className="scroll-mt-28">
        <Gallary />
      </section>
      <section id="features" className="scroll-mt-28">
        <Features />
      </section>
      <section id="about-us" className="scroll-mt-28">
        <AboutUs />
      </section>
      <section id="enquiry" className="scroll-mt-28">
        <Contact />
      </section>
      <Floating />
      <Footer />
    </main>
  );
};

export default Home;

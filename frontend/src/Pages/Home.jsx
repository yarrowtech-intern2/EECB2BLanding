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
      <WhyEEC />
      <PlatformOverview />
      <Modules />
      <Features />
      <AboutUs />
      <Contact />

      <Footer />
    </main>
  );
};

export default Home;

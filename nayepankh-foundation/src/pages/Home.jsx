import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Stats from "../components/Stats";
import Programs from "../components/Programs";
import Volunteer from "../components/Volunteer";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Stats />
      <Programs />
      <Volunteer />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
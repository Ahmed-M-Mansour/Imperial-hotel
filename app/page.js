import AboutSection from "./_components/AboutSection";
import Contacts from "./_components/Contacts";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import OurProjects from "./_components/OurProjects";
import OurRate from "./_components/OurRate";
import Services from "./_components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <AboutSection />
      <Services />
      <OurRate />
      <OurProjects />
      <Contacts />
      <Footer />
    </>
  );
}

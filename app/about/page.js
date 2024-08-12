import Services from "../_components/Services";
import OurRate from "../_components/OurRate";
import AboutGrid from "../_components/AboutGrid";
import Navbar from "../_components/Navbar";
import Offer from "../_components/offer";
import Team from "../_components/Team";

function AboutUs() {
  return (
    <>
      <Navbar
        isHome={false}
        isFullHeight={false}
        bgClassName="contact-bg"
        title="نبذة عنا"
        desc="الرئيســـية/نبذة عنا"
      />
      <AboutGrid />
      <Services />
      <OurRate />
      <Team />
      <Offer />
    </>
  );
}

export default AboutUs;

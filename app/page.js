import AboutSection from "./_components/AboutSection";
import Offer from "./_components/offer";
import Navbar from "./_components/Navbar";
import OurProjects from "./_components/OurProjects";
import OurRate from "./_components/OurRate";
import Services from "./_components/Services";

export default function Home() {
  return (
    <>
      <Navbar
        isHome={true}
        isFullHeight={true}
        bgClassName="home-bg"
        desc="تعد شركة إمبريال هوست من أرقي الشـــــــركات علي مستــوي العالم العربي
          التي تقدم خدمات ضيافة استثنائية لأصحاب العقارات والمسافرين"
        title={[
          <span className="text-gold" key={1}>
            {" "}
            إمبـريال هوست{" "}
          </span>,
          "للإرتقاء بخدمات الإيجار ",
        ]}
      />
      <AboutSection />
      <Services />
      <OurRate />
      <OurProjects />
      <Offer />
    </>
  );
}
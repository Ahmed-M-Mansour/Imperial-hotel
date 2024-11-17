import Services from "../_components/Services";
import OurRate from "../_components/OurRate";
import AboutGrid from "../_components/AboutGrid";
import Navbar from "../_components/Navbar";
import Offer from "../_components/offer";
import AboutCard from "../_components/AboutCard";
import Testimonials from "../_components/Testimonials";
import Timeline from "../_components/Timeline";
import Promises from "../_components/Promises";

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
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 my-10 mx-10">
        <AboutCard title="مهمتنا" imageUrl="/Rocket.svg" text="نسعي الي تحقيق ايرادات ملحوظة و معدلات حجز مرتفعة من خلال تقديم تجربة مميزة وراقية الي الضيوف والحفاظ علي الاستمرارية" />
        <AboutCard title="رؤيتنا" imageUrl="/topRated.svg" text="تخطي جميع المعايير لنصبح الشركة الأبرز لإدارة العقارات في الشرق الاوسط والتي تشتهر بالتزامها بالخدمة الممتازة والإبتكارات الرائدة" />
      </div>
      <Services />
      <Timeline />
      <Promises />
      <Testimonials />
      <Offer />
    </>
  );
}

export default AboutUs;

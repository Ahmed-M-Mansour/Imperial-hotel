import Navbar from "../_components/Navbar";
import Contacts from "../_components/Contacts";

function page() {
  return (
    <div className="bg-[#BBC1CE]">
      <Navbar
        isHome={false}
        isFullHeight={false}
        bgClassName="contact-bg"
        title="تواصل معنا"
        desc="الرئيســـية/تواصل معنا"
      />
      <Contacts />
    </div>
  );
}

export default page;

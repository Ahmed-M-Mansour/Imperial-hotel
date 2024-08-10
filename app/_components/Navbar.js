import Link from "next/link";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import leftArrow from "@/public/left-arrow.svg";
import NavStatistic from "./NavStatistic";
import stateIcon1 from "@/public/navstate1.svg";
import stateIcon2 from "@/public/navstate2.svg";
import stateIcon3 from "@/public/navstate3.svg";

const Navbar = () => {
  return (
    <nav className="p-6  home-bg  almarai relative hidden lg:block">
      <div className="flex items-center justify-around">
        <button className="flex items-center  bg-gold rounded-3xl text-white px-8 py-3 text-sm almarai-extrabold">
          <Link href="/contacts">تواصل معنا</Link>
        </button>
        <div className="flex space-x-10">
          <Link
            href="/about"
            className="text-white hover:text-gray-400 text-lg"
          >
            نبذة عنا
          </Link>
          <Link
            href="/projects"
            className="text-white hover:text-gray-400 text-lg"
          >
            مشاريعنا
          </Link>
          <Link href="/" className="text-white hover:text-gray-400 text-lg ">
            الرئيسية
          </Link>
        </div>
        <>
          <Image src={Logo} alt="Logo" width={160} height={64} />
        </>
      </div>
      <div className="flex justify-center items-center flex-col h-full">
        <h1 className=" text-white almarai font-bold text-5xl almarai-extrabold">
          <span className=" text-gold"> إمبـريال هوست </span> للإرتـــقاء
          بخـــدمات الإيـــجار
        </h1>
        <p className=" text-white font-normal text-xl text-center p-2 my-1 max-w-lg almarai-regular">
          تعد شركة إمبريال هوست من أرقي الشـــــــركات علي مستــوي العالم العربي
          التي تقدم خدمات ضيافة استثنائية لأصحاب العقارات والمسافرين
        </p>
        <button className="flex items-center  bg-gold rounded-3xl text-white px-8 py-3 my-2  font-bold text-xl almarai-extrabold">
          <Image src={leftArrow} alt="Arrow" width={24} height={24} />
          <Link href="/contacts"> إبدأ الأن مجاناً </Link>
        </button>
      </div>
      <div className=" absolute bottom-0 right-0  w-1/2 h-28 home-bg-bottom ">
        <div className="flex pl-4 justify-around items-center w-full h-full">
          <NavStatistic
            icon={stateIcon1}
            number="98%"
            title="نسبـة رضا الضيوف"
          />
          <NavStatistic
            icon={stateIcon2}
            number="97%"
            title="نسبــة رضا العملاء"
          />
          <NavStatistic icon={stateIcon3} number="300+" title="وحـــدة" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// <select name="medical_center" id="id_medical_center" style="" data-gtm-form-interact-field-id="3">
//   <option value="" selected="">Select Medical Center</option>
//   <option value="1878">Yanbu Medical Center</option>
//   <option value="732">The Specialty Hospital</option>
//   <option value="730">JoSante Medical Center</option>

// </select>

/*
<select name="medical_center" id="id_medical_center" style="" data-gtm-form-interact-field-id="3">
  <option value="" selected="">Select Medical Center</option>
  <option value="1878">Yanbu Medical Center</option>
  <option value="732">The Specialty Hospital</option>
  <option value="730">JoSante Medical Center</option>

</select>

<select name="medical_center" id="id_medical_center" style="" data-gtm-form-interact-field-id="3">
  <option value="" selected="">Select Medical Center</option>
  <option value="1877">Yanbu Medical Center</option>
  <option value="732">The Specialty Hospital</option>
  <option value="731">JoSante Medical Center</option>

</select>
*/

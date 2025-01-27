"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme, useMediaQuery } from "@mui/material";

import Logo from "@/public/logo.svg";
import Image from "next/image";
import leftArrow from "@/public/left-arrow.svg";
import NavStatistic from "./NavStatistic";
import stateIcon1 from "@/public/navstate1.svg";
import stateIcon2 from "@/public/navstate2.svg";
import stateIcon3 from "@/public/navstate3.svg";

const links = [
  {
    id: 1,
    path: "/about",
    text: "نبذه عنا",
  },
  {
    id: 2,
    path: "/distinations",
    text: "وجهاتنا",
  },
  {
    id: 3,
    path: "/projects",
    text: "مشاريعنا",
  },
  {
    id: 4,
    path: "/",
    text: "الرئيسية",
  },
];

const Navbar = ({ isHome, isFullHeight, bgClassName, bgUrl, title, desc }) => {
  const theme = useTheme();
  const lgScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const pathname = usePathname();
  return (
    <nav
      className={`p-6 almarai relative ${
        bgClassName && bgClassName
      } bg-cover bg-center bg-no-repeat ${
        isFullHeight ? "h-full" : "h-[450px]"
      }`}
      style={{
        background:
          bgUrl &&
          `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgUrl})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col-reverse sm:flex-row items-center justify-around">
        <button className="hidden sm:flex items-center bg-gold rounded-3xl text-white px-8 py-3 text-sm almarai-extrabold">
          <Link href="/contacts">تواصل معنا</Link>
        </button>
        <div className="flex space-x-7 sm:space-x-10">
          {links.map(({ id, text, path }) => (
            <Link
              href={path}
              key={id}
              className={`text-white hover:text-gray-400 text-lg ${
                path === pathname ? "almarai-extrabold" : "font-medium"
              }`}
            >
              {text}
            </Link>
          ))}
        </div>
        <>
          <Image src={Logo} alt="Logo" width={160} height={64} />
        </>
      </div>
      <div
        className={`flex justify-center items-center text-center flex-col ${
          isFullHeight ? "h-full" : "h-[300px]"
        } ${!isHome && "pb-9"}`}
      >
        <h1 className="text-white almarai font-bold text-3xl sm:text-5xl almarai-extrabold">
          {title}
        </h1>
        <p className="text-[#E1E1E1] font-normal text-sm text-center p-2 my-1 max-w-lg almarai-regular">
          {desc}
        </p>
        {isHome && (
          <button className="flex items-center  bg-gold rounded-3xl text-white px-8 py-3 my-2  font-bold text-xl almarai-extrabold">
            <Image src={leftArrow} alt="Arrow" width={24} height={24} />
            <Link href="/contacts"> إبدأ الأن مجاناً </Link>
          </button>
        )}
      </div>
      {isHome && lgScreen && (
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
      )}
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

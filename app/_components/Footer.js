"use client";

import Image from "next/image";
import Logo from "@/public/f-logo.svg";
import fLocation from "@/public/f-location.svg";
import fContacts from "@/public/f-contacts.svg";
import fEmail from "@/public/f-email.svg";
import fFacebook from "@/public/f-facebook.svg";
import fInstagram from "@/public/f-instagram.svg";
import fLinkedin from "@/public/f-linkedin.svg";
import Link from "next/link";
import { useMediaQuery, useTheme } from "@mui/material";

function Footer() {
  const theme = useTheme();
  const lgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <footer
      className={`p-6 ${
        lgScreen
          ? "grid grid-cols-12 gap-8"
          : "flex flex-col items-center text-center"
      }`}
    >
      <div
        className={`${
          lgScreen ? "col-span-12" : "mb-4"
        } flex justify-center lg:justify-end lg:mr-16`}
      >
        <Image src={Logo} alt="Logo" width={160} height={64} />
      </div>

      <div
        className={`${
          lgScreen ? "col-span-4" : "w-full mb-6"
        } flex flex-col text-right lg:text-left px-3`}
      >
        <h3 className="font-almarai almarai-extrabold text-lg leading-10 text-text1">
          يشترك
        </h3>
        <h6 className="font-almarai font-normal text-sm text-color4">
          انضم إلى مجتمعنا لتلقي التحديثات
        </h6>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-center space-y-3 lg:space-y-0 lg:space-x-3 my-3">
          <input
            className="w-full lg:w-2/4 text-right px-3 py-2 rounded-3xl h-10 bg-bg1 border-2 border-bgContacts focus:border-gold focus:outline-none font-almarai font-normal text-sm leading-4"
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
          />
          <button className="flex justify-center items-center bg-gold rounded-3xl text-white px-6 py-2 text-lg font-almarai almarai-extrabold">
            <Link href="/contacts"> اشتراك </Link>
          </button>
        </div>
        <h6 className="font-almarai font-normal text-sm text-color4 mt-2">
          بالاشتراك فإنك توافق على سياسة الخصوصية الخاصة بنا
        </h6>
      </div>

      <div
        className={`${
          lgScreen ? "col-span-4" : "w-full mb-6"
        } flex flex-col lg:flex-row justify-center lg:justify-between`}
      >
        <div className="flex flex-col text-right lg:text-left">
          <h3 className="font-almarai almarai-extrabold text-lg leading-10 text-text1">
            المشاريع المتاحة
          </h3>
          <h6 className="font-almarai font-normal text-sm text-text2">مصر</h6>
          <h6 className="font-almarai font-normal text-sm text-text2">
            المملكة العربية السعودية
          </h6>
          <h6 className="font-almarai font-normal text-sm text-text2">
            المملكة المتحدة
          </h6>
        </div>
        <div className="flex flex-col text-right lg:text-left mt-4 lg:mt-0">
          <h3 className="font-almarai almarai-extrabold text-lg leading-10 text-text1">
            روابط مفيدة
          </h3>
          <h6 className="font-almarai font-normal text-sm text-text2">
            معلومات عنا
          </h6>
          <h6 className="font-almarai font-normal text-sm text-text2">
            مشاريعنا
          </h6>
          <h6 className="font-almarai font-normal text-sm text-text2">
            تواصل معنا
          </h6>
        </div>
      </div>

      <div
        className={`${
          lgScreen ? "col-span-4" : "w-full mb-6"
        } flex flex-col items-center lg:items-end gap-y-3 mt-3 lg:mr-16`}
      >
        <div className="flex items-center space-x-2">
          <h5 className="font-almarai font-normal text-sm">
            المكتب : مول – القاهرة – مصر
          </h5>
          <span>
            <Image alt="icon" src={fLocation} width={20} height={20} />
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <h5 className="font-almarai font-normal text-sm">
            <span className="font-poppins font-semibold">+201044000729</span>{" "}
            أتصل بنا :
          </h5>
          <span>
            <Image alt="icon" src={fContacts} width={20} height={20} />
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <h5 className="font-almarai font-normal text-sm">
            <span className="font-poppins font-semibold">
              info@IMPERIAL.com
            </span>{" "}
            :البريد الإلكتروني
          </h5>
          <span>
            <Image alt="icon" src={fEmail} width={20} height={20} />
          </span>
        </div>
        <div className="flex items-center justify-center lg:justify-end space-x-2 mt-6">
          <Image alt="icon" src={fLinkedin} width={20} height={20} />
          <Image alt="icon" src={fInstagram} width={20} height={20} />
          <Image alt="icon" src={fFacebook} width={20} height={20} />
        </div>
      </div>

      <div
        className={`${
          lgScreen ? "col-span-12" : "w-full"
        } mx-auto mt-6 border border-border1 opacity-50`}
      ></div>

      <h6 className="col-span-12 text-center font-almarai font-normal text-sm text-color4 my-4">
        حقوق الطبع والنشر 2024 إمبريال هوست. كل الحقوق محفوظة ©
      </h6>
    </footer>
  );
}

export default Footer;

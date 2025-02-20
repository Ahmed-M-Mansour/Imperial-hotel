import Image from "next/image";
import Logo from "@/public/f-logo.svg";
import fLocation from "@/public/f-location.svg";
import fContacts from "@/public/f-contacts.svg";
import fEmail from "@/public/f-email.svg";
import fFacebook from "@/public/f-facebook.svg";
import fInstagram from "@/public/f-instagram.svg";
import fLinkedin from "@/public/f-linkedin.svg";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center sm:grid sm:grid-cols-12 gap-3 p-0 sm:p-12 w-full">
      <div className="col-span-12 h-20 flex justify-end items-center mb-3 lg:mr-16">
        <Image src={Logo} alt="Logo" width={160} height={64} />
      </div>
      <div className="col-span-4">
        <div className="flex flex-col text-right px-3">
          <h3 className=" font-almarai font-extrabold text-lg leading-10 text-text1">
            يشترك
          </h3>
          <h6 className=" font-almarai font-normal text-sm text-color4">
            انضم إلى مجتمعنا لتلقي التحديثات
          </h6>
          <div className="flex justify-end items-center space-x-3 my-3">
            <button className="flex justify-center items-center  bg-gold rounded-3xl text-white px-6 py-2 text-lg font-almarai font-extrabold ">
              <Link href="/contacts"> اشتراك </Link>
            </button>
            <input
              className=" w-2/4 mx-auto text-right px-3 py-2 rounded-3xl h-10  bg-bg1 border-2 border-bgContacts focus:border-gold focus:outline-none font-almarai font-normal text-sm leading-4"
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
            />
          </div>
          <h6 className=" font-almarai font-normal text-sm text-color4 mt-2">
            بالاشتراك فإنك توافق على سياسة الخصوصية الخاصة بنا{" "}
          </h6>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-4 w-full px-5">
        <div className="flex flex-col gap-2 justify-end w-full">
          <div className="flex flex-col text-right">
            <h3 className="font-almarai font-extrabold text-lg leading-10 text-text1">
              {" "}
              المشاريع المتاحة{" "}
            </h3>
            <Link className="font-almarai font-normal text-sm text-text2" href="/projects/misr">
              {" "}
              مصر{" "}
            </Link>
            <Link className="font-almarai font-normal text-sm text-text2" href="/projects/saudi">
              {" "}
              المملكة العربية السعودية{" "}
            </Link>
            <Link className="font-almarai font-normal text-sm text-text2" href="/projects/england">
              {" "}
              المملكة المتحدة{" "}
            </Link>
          </div>
          <div className="flex flex-col text-right">
            <h3 className="font-almarai font-extrabold text-lg leading-10 text-text1">
              روابط مفيدة{" "}
            </h3>
            <Link className="font-almarai font-normal text-sm text-text2" href="/about">
              {" "}
              معلومات عنا
            </Link>
            <Link href="/projects" className="font-almarai font-normal text-sm text-text2">
              {" "}
              مشاريعنا{" "}
            </Link>
            <Link href="/about" className="font-almarai font-normal text-sm text-text2">
              {" "}
              تواصل معنا{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-4 flex items-end flex-col gap-y-3 mt-3 w-full px-5">
        <div className="flex items-center space-x-2">
          <h5 className=" font-almarai font-normal text-sm">
            المكتب : مول – القاهرة – مصر
          </h5>
          <span>
            <Image alt="icon" src={fLocation} width={20} height={20} />
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <h5 className=" font-almarai font-normal text-sm">
            <span className=" font-poppins font-semibold"> +201044000729 </span>{" "}
            أتصل بنا :
          </h5>
          <span>
            <Image alt="icon" src={fContacts} width={20} height={20} />
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <h5 className=" font-almarai font-normal text-sm">
            <span className=" font-poppins font-semibold">
              {" "}
              info@IMPERIAL.com{" "}
            </span>{" "}
            :البريد الإلكتروني
          </h5>
          <span>
            <Image alt="icon" src={fEmail} width={20} height={20} />
          </span>
        </div>
        <div className="flex items-center justify-end space-x-2 mt-6">
          <Image alt="icon" src={fLinkedin} width={20} height={20} />
          <Image alt="icon" src={fInstagram} width={20} height={20} />
          <Image alt="icon" src={fFacebook} width={20} height={20} />
        </div>
      </div>
      <div
        style={{ width: "85%" }}
        className="col-span-12 mx-auto mt-8 border border-border1 opacity-50"
      ></div>
      <h6 className="col-span-12 text-center text font-almarai font-normal text-sm text-color4 my-4">
        حقوق الطبع والنشر 2024 إمبريال هوست. كل الحقوق محفوظة ©
      </h6>
    </footer>
  );
}

export default Footer;

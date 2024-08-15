import Image from "next/image";
import Link from "next/link";
import NavStatistic from "./NavStatistic";
import aboutImage from "@/public/about-s.svg";
import leftArrow from "@/public/left-arrow.svg";
import RightImage from "@/public/about-image-right.svg";
import stateIcon3 from "@/public/navstate3.svg";

function AboutSection() {
  return (
    <div className="bg-aboutS px-8 relative">
      <div className="flex justify-center items-center text-center py-16 m-auto">
        <div className="sm:flex flex-1 hidden relative">
          <div className="hidden sm:flex justify-center items-center">
            <Image
              src={aboutImage}
              alt="About Iamge"
              width={467}
              height={477}
            />
          </div>
          <div className="absolute hidden sm:block top-2/3 right-0 shadow-lg w-96">
            <NavStatistic
              icon={stateIcon3}
              number="إدارة تأجير العقارات "
              title="ادارة ايجــــار العقارات طويلة وقصيرة المدي "
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end text-center sm:text-right">
          <div className="absolute top-7 right-1">
            <Image src={RightImage} alt="About Iamge" />
          </div>
          <h1 className="text-2xl text-gold almarai-bold w-full">مـن نــحن</h1>
          <h2 className="text-3xl text-aboutTitle w-full almarai-extrabold">
            عن شركة إمبــــريال هوست لخدمات الإيجار
          </h2>
          <p className="text-base sm:text-lg text-right leading-10 my-3 almarai-regular">
            شركتنا إمبــــريال هوست شركة رائدة في إدارة العقارات، اذ نتخصص في
            تأجير مرافق الضيافة قصيرة الأجل وطويلة الأجل عبر الأسواق الإقليمية.
            هي حكاية ارث لافت ومثير يمتد لأكثر من 7 سنوات، وفي قلب مصر الدولة
            التي اشتهرت بقطاعها السياحي الجاذب، تمت رعاية رحلتنا في مجال الضيافة
          </p>
          <div className="my-2 w-full sm:w-fit sm:block flex items-center justify-center">
            <button className="flex items-center  bg-gold rounded-3xl text-white px-8 py-3  font-bold text-xl almarai-extrabold">
              <Image src={leftArrow} alt="Arrow" width={24} height={24} />
              <Link href="/contacts" className="pl-3">
                عن شركتنا
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

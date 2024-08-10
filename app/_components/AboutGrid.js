import Image from "next/image";
import Link from "next/link";
import NavStatistic from "./NavStatistic";
import aboutImage from "@/public/about-s.svg";
import leftArrow from "@/public/left-arrow.svg";
import RightImage from "@/public/about-image-right.svg";
import stateIcon3 from "@/public/navstate3.svg";

function AboutGrid() {
  return (
    <div className=" bg-aboutS px-8 relative pt-24">
      <div className="grid lg:grid-cols-2  gap-y-8 py-16  m-auto">
        <div className="flex-1 relative">
          <div className="flex justify-center items-center">
            <Image
              src={aboutImage}
              alt="About Iamge"
              width={467}
              height={477}
            />
          </div>
          <div className=" absolute top-2/3 right-0 shadow-lg lg:w-96 ">
            <NavStatistic
              icon={stateIcon3}
              number="إدارة تأجير العقارات "
              title="ادارة ايجــــار العقارات طويلة وقصيرة المدي دارة تأجير العقارات "
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end text-right ">
          <div className=" absolute top-1 right-1">
            <Image src={RightImage} alt="About Iamge" />
          </div>
          <h1 className="text-2xl text-gold almarai-bold text-center py-2">
            مـن نــحن
          </h1>
          <h2 className="text-3xl text-aboutTitle   almarai-extrabold">
            عن شركة إمبــــريال هوست لخدمات الإيجار
          </h2>
          <p className=" text-lg leading-10 my-3 almarai-regular">
            شركتنا إمبــــريال هوست شركة رائدة في إدارة العقارات، اذ نتخصص في
            تأجير مرافق الضيافة قصيرة الأجل وطويلة الأجل عبر الأسواق الإقليمية.
            هي حكاية ارث لافت ومثير يمتد لأكثر من 7 سنوات، وفي قلب مصر الدولة
            التي اشتهرت بقطاعها السياحي الجاذب، تمت رعاية رحلتنا في مجال الضيافة
          </p>
          <div className="my-2">
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

export default AboutGrid;

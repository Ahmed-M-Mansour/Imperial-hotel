// services-s
import Image from "next/image";
import ServiceItem from "./ServiceItem";
import servicesImage from "@/public/services-s.svg";

const services = [
  {
    title: "تغطية شاملة للوحدات التجارية",
    description:
      "تلبي خدماتنا جميع أنواع العقارات، بما في ذلك المنازل والشقق والمباني الكبيرة متعددة الوحدات",
  },
  {
    title: "الاعتماد علي أكثر من منصة",
    description:
      " VRBO و Booking.com و Airbnb نضمن أن تعرض الممتلكات الخاصة بك بسلاسة عبر منصات ",
  },
  {
    title: "استراتيجية ادارة الإيرادات",
    description:
      "يستخدم خبراؤنا خطط تسعير استراتيجية تتجاوز توقعات ايراداتك، مما يضمن ربحية الممتلكات الخاصة بك",
  },
  {
    title: "لأقامة فريدة",
    description:
      "نقوم بتحسين قائمة مرافق الضيافة الخاصة بك لإبراز ميزاتها الفريدة وجذب الزبائن",
  },
  {
    title: "فعالية و دقة التشغيل ",
    description:
      "نتولي مسئولية سير العملية التشغيلية بأمكملها، بدءاً من تسجيل الوصول والمغادرة وحتي اجراءات التنظيف المنظمة فإدارة المرفق الخاص بك في ايد قادرة وأمينة معاً",
  },
];

function Services() {
  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-12">
      <header className="bg-white text-black font-bold text-2xl p-4 text-center my-4">
        <h1 className="text-2xl text-gold almarai-bold">خدماتنا</h1>
        <p className="text-lg sm:text-xl leading-10 text-aboutTitle almarai-extrabold">
          الخدمات التي نوفرها في إمبــــــــريال هوست
        </p>
      </header>
      <div className="p-0 sm:p-6 w-full grid lg:grid-cols-5 md:grid-col-1">
        <div className="flex flex-col gap-6 lg:col-span-3 ">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <div className="lg:col-span-2 hidden sm:block">
          <div className="">
            <Image
              src={servicesImage}
              alt="Services Iamge"
              //   className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

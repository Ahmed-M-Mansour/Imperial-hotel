import Image from "next/image";

import ServiceItem from "./ServiceItem";
import PromisesImage from '@/public/promises-s.svg';

const promises = [
  {
    title:
      "أولاً: نضمن تشغيلاً فريد من نوعه و عالي الجودة لوحدتك السكنية مع تبني التميز في أبسط التفاصيل",
  },
  {
    title:
      "ثانياً: نلتزم بتقديم تجربة ضيافة تتفوق علي معايير السوق مما يضمن زيادة الايرادات ومعدلات الحجز",
  },
  {
    title:
      "أخيراً: اهتمامنا وحرصنا علي رضا العميل يظهر من خلال الخدمة المميزة والإستثنائية التي نقدمها  مع ضمانة حصوله علي تجربة لا تنسي",
  },
];

const Promises = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-12">
      <header className="bg-white text-black font-bold text-2xl p-4 text-center my-4">
        <h1 className="text-2xl text-gold almarai-bold">وعدنا</h1>
        <p className="text-lg sm:text-xl leading-10 text-aboutTitle almarai-extrabold">
          ثلاثة أهداف أساسية يتمحور حولها التزامنا وتجسد تعهدنا الثابت
        </p>
      </header>
      <div className="p-0 sm:p-6 w-full grid lg:grid-cols-5 md:grid-col-1 gap-3">
        <div className="lg:col-span-2 hidden sm:block">
          <div className="flex h-full w-full items-center justify-center">
            <Image src={PromisesImage} alt="Promises Image" />
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:col-span-3 ">
          <p className="text-[#42526E] font-normal text-base leading-8 text-right">
            تمثل هذه الاهداف الثلاثة بوصلة امبيريال هوست التي تسعي الي خلق تجربة
            ضيافة جديدة بمعايير مختلفة ولا مثيل لها
          </p>
          {promises.map((service, index) => (
            <ServiceItem key={index} title={service.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promises;

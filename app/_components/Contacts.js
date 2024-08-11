import Image from "next/image";
import Link from "next/link";
import leftArrow from "@/public/left-arrow.svg";

function Contacts() {
  return (
    <div className="p-6 contacts-bg flex justify-center items-center">
      <div className="max-w-4xl text-center">
        <h2 className=" font-almarai font-extrabold text-2xl py-2">
          إختبار أداء وحدتك مجاناً (بقيمة 500 ريال سعودي)
        </h2>
        <p className=" font-almarai font-normal text-sm w-3/4 mx-auto leading-6 mb-4">
          اسمح لفريقنا بإجراء سلسلة من الاختبارات حول الأسعار والصور وجودة
          القائمة وإعداد القناة ووقت الاستجابة وما إلى ذلك، لمنحك درجة من 100
          وتزويدك بقائمة من الاقتراحات القابلة للتنفيذ لتحسين قوائمك اليوم. وهو
          !<span> مجاني </span>{" "}
        </p>
        <form>
          <div className="p-2">
            <input
              className="w-3/4 mx-auto text-right px-2 py-1 h-10 rounded-lg bg-white border-2 border-bgContacts focus:border-gold focus:outline-none font-almarai font-normal text-sm leading-4"
              type="text"
              placeholder="أدخل الاسم الكامل"
            />
          </div>
          <div className="flex w-3/4 mx-auto gap-1 p-2">
            <input
              className="flex-1 text-right px-2 py-1 h-10 rounded-lg bg-white border-2 border-bgContacts focus:border-gold focus:outline-none font-almarai font-normal text-sm leading-4"
              type="email"
              placeholder=" البريد الإلكتروني"
            />
            <input
              className="flex-1 text-right px-2 py-1 h-10 rounded-lg bg-white border-2 border-bgContacts focus:border-gold focus:outline-none font-almarai font-normal text-sm leading-4"
              type="text"
              placeholder="رقم الهاتف"
            />
          </div>
          <div className="flex w-3/4 mx-auto gap-1 p-2">
            <input
              className="flex-1 text-right px-2 py-1 h-10 rounded-lg bg-white border-2 border-bgContacts focus:border-gold focus:outline-none font-almarai font-normal text-sm leading-4"
              type="text"
              placeholder=" اللغة المفضلة "
            />
            <input
              className="flex-1 text-right px-2 py-1 h-10 rounded-lg bg-white border-2 border-bgContacts focus:border-gold focus:outline-none font-almarai font-normal text-sm leading-4"
              type="text"
              placeholder="حجم المحفظة "
            />
          </div>
          <div className="p-2">
            <input
              className="w-3/4 mx-auto text-right px-2 py-1 h-10 rounded-lg bg-white border-2 border-bgContacts focus:border-gold focus:outline-none font-almarai font-normal text-sm leading-4"
              type="text"
              placeholder="عنوان URL الخاص بـ Airbnb للتدقيق"
            />
          </div>
          <div className="flex justify-center items-center my-6">
            <button className="flex justify-center items-center  bg-gold rounded-3xl text-white px-8 py-3 my-2 text-xl font-almarai font-extrabold w-40">
              <Image
                className="pt-2 mx-2"
                src={leftArrow}
                alt="Arrow"
                width={24}
                height={24}
              />
              <Link href="/contacts"> ارسال </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contacts;

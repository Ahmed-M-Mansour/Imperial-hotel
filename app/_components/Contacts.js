import Image from "next/image";
import Link from "next/link";
import leftArrow from "@/public/left-arrow.svg";

const Contacts = () => {
  return (
    <div className="flex flex-col gap-4 p-12 bg-white" style={{ direction: "rtl" }}>
      <h1 className="text-[#172B4D] font-extrabold text-3xl">تواصل معنا</h1>
      <p className="text-[#42526E] font-normal text-sm">
        يرجى ترك معلوماتك لنا، حتى نتمكن من بدء محادثتنا لتزويدك بمزيد من
        المعلومات
      </p>
      <form className="flex flex-col gap-5 items-center justify-center">
        <div className="flex flex-col gap-5 items-center justify-center w-[800px]">
          <div className="flex gap-[18px] items-center justify-center w-full">
            <input
              type="text"
              placeholder="أدخل الاسم الكامل"
              className="bg-[#FBFBFB] border-[#BBC1CE] border-[1px] rounded-lg px-4 py-5 placeholder:text-[#7A869A] w-full h-12"
            />
            <input
              type="text"
              placeholder="رقم الهاتف"
              className="bg-[#FBFBFB] border-[#BBC1CE] border-[1px] rounded-lg px-4 py-5 placeholder:text-[#7A869A] w-full h-12"
            />
          </div>
          <div className="flex gap-[18px] items-center justify-center w-full">
            <input
              type="text"
              placeholder="البريد الالكتروني"
              className="bg-[#FBFBFB] border-[#BBC1CE] border-[1px] rounded-lg px-4 py-5 placeholder:text-[#7A869A] w-full h-12"
            />
            <input
              type="text"
              placeholder="اسم الشركة"
              className="bg-[#FBFBFB] border-[#BBC1CE] border-[1px] rounded-lg px-4 py-5 placeholder:text-[#7A869A] w-full h-12"
            />
          </div>
          <textarea
            className="bg-[#FBFBFB] border-[#BBC1CE] border-[1px] rounded-lg px-4 py-5 placeholder:text-[#7A869A] w-full h-48"
            rows={30}
            cols={20}
            placeholder="اترك رسالتك"
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
  );
};

// const Input = ({ placeholder }) => {
//     return (
//         <input type="text" placeholder={placeholder} />
//     )
// }

export default Contacts;

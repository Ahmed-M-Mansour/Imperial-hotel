import Image from "next/image";
import { Members } from "@/constants";

const Team = () => {
  return (
    <div className="almarai bg-white p-10 flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="almarai-bold text-gold text-2xl">الفريق</h2>
        <h3 className="almarai-extrabold text-[#1A1313]">
          فريـــــــــــق امبيــــــريال هوســــــت
        </h3>
      </div>
      <div className="grid grid-cols-4 p-12 gap-6">
        {Members.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 p-3 rounded-xl shadow-xl"
          >
            <Image
              src={item.Image}
              alt={`Member ${item.id + 1} Image`}
              className="w-full h-48 rounded-md"
              width={268}
              height={198}
            />

            <div className="flex flex-col items-center justify-center text-center gap-2">
              <h4 className="almarai-extrabold text-base text-text1">
                {item.name}
              </h4>
              <h6 className="text-text2 text-xs almarai-regular">
                {item.type}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

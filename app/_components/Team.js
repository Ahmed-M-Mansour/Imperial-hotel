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
      <div className="flex items-center justify-center gap-6 w-full flex-nowrap">
        {Members.map((item) => {
          <div key={item.id} className="flex flex-col gap-3 p-3">
            <Image
              src={item.Image}
              alt={`Member ${item.id + 1} Image`}
              className="w-full h-48 rounded-md"
              width={268}
              height={198}
            />

            <div className="flex flex-col items-center justify-center text-center gap-2">
              <h4 className="almarai-extrabold text-base text-[#172B4D]">
                {item.name}
              </h4>
              <h6 className="text-[#42526E] text-xs almarai-regular">
                {item.type}
              </h6>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Team;

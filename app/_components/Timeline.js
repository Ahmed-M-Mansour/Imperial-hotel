import { timeline } from "@/constants";

const Timeline = () => {
  const topCards = timeline.filter((item) =>
    ["2023", "2021", "2019", "2017"].includes(item.year)
  );
  const bottomCards = timeline.filter((item) =>
    ["2022", "2020", "2018"].includes(item.year)
  );

  return (
    <div className="bg-gray-50 py-12 relative flex flex-col gap-11 items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#B7A580]">رحلتنا</h2>
        <p className="font-extrabold text-xl leading-[54px] text-[#1A1313]">
          رحلة تطور شركتنا عبر السنين
        </p>
      </div>
      <div className="relative w-full">
        <div className="flex items-center justify-center gap-20 mx-8">
          {topCards.map(({ year, description }) => (
            <div
              key={year}
              className="rounded-xl py-6 px-[14px] gap-3 bg-white flex flex-col items-center justify-center"
            >
              <h4 className="font-black text-base text-[#B7A580] leading-[9.04px]">
                {year}
              </h4>
              <p className="text-[#1A1313] font-extrabold text-sm leading-7 text-center">
                {description}
              </p>
            </div>
          ))}
        </div>
        <div className="relative my-8 flex items-center justify-center gap-44 w-full border-t border-[#DEDEE9]">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="w-[13.5px] h-[13.5px] rounded-full bg-[#B7A580] -mt-[7px]"
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-20 mx-8">
          {bottomCards.map(({ year, description }) => (
            <div
              key={year}
              className="rounded-xl py-6 px-[14px] gap-3 bg-white flex flex-col items-center justify-center"
            >
              <h4 className="font-black text-base text-[#B7A580] leading-[9.04px]">
                {year}
              </h4>
              <p className="text-[#1A1313] font-extrabold text-sm leading-7 text-center">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

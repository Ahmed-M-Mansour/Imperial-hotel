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
      <div className="text-center px-4">
        <h2 className="text-2xl almarai-bold text-[#B7A580]">رحلتنا</h2>
        <p className="almarai-extrabold text-xl leading-[54px] text-[#1A1313]">
          رحلة تطور شركتنا عبر السنين
        </p>
      </div>
      <div className="relative w-full px-3 flex flex-col gap-8">
        <div className="flex items-center justify-center gap-6 lg:gap-20 flex-wrap sm:flex-nowrap px-4 sm:gap-4">
          {topCards.map(({ year, description }) => (
            <div
              key={year}
              className="rounded-xl py-6 px-4 gap-3 bg-white flex flex-col items-center justify-center max-w-[200px] sm:max-w-full"
            >
              <h4 className="almarai-black text-base text-[#B7A580] leading-[9.04px]">
                {year}
              </h4>
              <p className="text-[#1A1313] almarai-extrabold text-sm leading-7 text-center">
                {description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="relative hidden sm:flex items-center justify-center sm:justify-evenly gap-8 lg:gap-10 sm:gap-2 w-full border-t border-[#DEDEE9]">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="w-[13.5px] h-[13.5px] rounded-full bg-[#B7A580] -mt-[7px]"
            />
          ))}
        </div>
        
        <div className="flex sm:flex-row flex-col items-center justify-evenly gap-6 sm:gap-0 flex-nowrap sm:flex-nowrap px-4">
          {bottomCards.map(({ year, description }) => (
            <div
              key={year}
              className="rounded-xl py-6 px-4 gap-3 sm:w-1/5 bg-white flex flex-col items-center justify-center max-w-[200px] sm:max-w-full"
            >
              <h4 className="almarai-black text-base text-[#B7A580] leading-[9.04px]">
                {year}
              </h4>
              <p className="text-[#1A1313] almarai-extrabold text-sm leading-7 text-center">
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
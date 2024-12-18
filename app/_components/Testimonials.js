"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/constants";
import Quotes from "@/public/quotes.svg";
import { useTheme, useMediaQuery } from "@mui/material";

const Testimonials = () => {
  const [slide, setSlide] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeDevice = useMediaQuery(theme.breakpoints.up("md"));

  let testimonialsPerSlide;
  if (isMobile) {
    testimonialsPerSlide = 1;
  } else if (isTablet) {
    testimonialsPerSlide = 2;
  } else {
    testimonialsPerSlide = 3;
  }

  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  return (
    <div
      style={{ direction: "rtl" }}
      className="flex almarai flex-col text-right items-center justify-center gap-12 p-12 w-full bg-[#F9F9F9]"
    >
      <div className="flex flex-col gap-2 items-center justify-center">
        <h3 className="almarai-bold text-gold text-lg">أراء العـــملاء</h3>
        <h2 className="almarai-extrabold text-[#1A1313] text-[32px] almarai-extrabold">
          ماذا يقــول عمــــلاؤنا عنا؟
        </h2>
      </div>
      <div className="relative w-full">
        <div
          className={`grid p-6 sm:p-12 gap-4 sm:gap-8 ${
            isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-3"
          }`}
        >
          {testimonials
            .slice(
              slide * testimonialsPerSlide,
              (slide + 1) * testimonialsPerSlide
            )
            .map(({ text, user }, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center p-4 sm:p-6 rounded-[12.8px] bg-white gap-3 w-full"
              >
                <div className="flex justify-around gap-10 w-full sm:gap-20 items-center">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-1">
                      <h4 className="text-text1 almarai-extrabold text-xs sm:text-base">
                        {user.name}
                      </h4>
                      <h6 className="text-text2 almarai-regular text-[8px] sm:text-xs">
                        {user.type}
                      </h6>
                    </div>
                  </div>
                  <Image src={Quotes} alt="Quotes" width={30} height={30} />
                </div>
                <p className="text-text2 almarai-regular text-xs sm:text-base w-full">
                  {text}
                </p>
              </div>
            ))}
        </div>
        <div className="flex justify-center items-center gap-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`h-2 w-8 rounded-full cursor-pointer transition-all ${
                slide === index ? "bg-gold w-20" : "bg-gray-300"
              }`}
              onClick={() => setSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

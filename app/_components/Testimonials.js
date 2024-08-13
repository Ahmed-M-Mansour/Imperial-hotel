"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/constants";
import Quotes from "@/public/quotes.svg";

const Testimonials = () => {
  const [slide, setSlide] = useState(0);
  const testimonialsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

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
        <div className="grid grid-cols-3 p-12 gap-8">
          {testimonials
            .slice(
              slide * testimonialsPerSlide,
              (slide + 1) * testimonialsPerSlide
            )
            .map(({ text, user }, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center p-6 rounded-[12.8px] bg-white gap-3 h-full"
              >
                <div className="flex justify-between gap-20 items-center">
                  <div className="flex gap-4">
                    <Image
                      src={user.image}
                      alt={`${user.name}'s Image`}
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-col items-center gap-1">
                      <h4 className="text-text1 almarai-extrabold text-base">
                        {user.name}
                      </h4>
                      <h6 className="text-text2 almarai-regular text-xs">
                        {user.type}
                      </h6>
                    </div>
                  </div>
                  <Image src={Quotes} alt="Quotes" width={50} height={50} />
                </div>
                <p className="text-text2 almarai-regular text-base w-[300px]">
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
                slide === index ? "bg-gold w-12" : "bg-gray-300"
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

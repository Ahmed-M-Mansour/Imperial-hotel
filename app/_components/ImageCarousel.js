"use client";

import { useState } from "react";
import Image from "next/image";

const ImageCarousel = ({ images }) => {
  const [slide, setSlide] = useState(0);

  const imagePerSlide = 1;

  const totalSlides = Math.ceil(images.length / imagePerSlide);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full">
        <div className="grid gap-4 grid-cols-1">
          {images
            .slice(slide * imagePerSlide, (slide + 1) * imagePerSlide)
            .map((url, index) => (
              <div
                key={index}
                className="flex justify-center items-center p-4 bg-white rounded-lg"
              >
                <Image
                  src={url}
                  alt={`Slide Image ${index}`}
                  width={800}
                  height={500}
                  className="object-contain"
                />
              </div>
            ))}
        </div>
        <div className="flex justify-center items-center gap-2 mt-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`h-2 w-8 rounded-full cursor-pointer transition-all ${
                slide === index ? "bg-gold w-[50px]" : "bg-gray-300"
              }`}
              onClick={() => setSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

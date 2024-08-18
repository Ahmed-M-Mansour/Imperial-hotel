"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const ImageCarousel = ({ images }) => {
  const theme = useTheme();
  const lgScreen = useMediaQuery(theme.breakpoints.up("lg"));
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      {lgScreen ? (
        <div className="flex items-center justify-center gap-3">
          {images.map((url, index) => (
            <div key={index}>
              <Image
                src={url}
                alt={`Project Image ${index}`}
                // width={"100%"}
                // height={300}
                className="w-full h-[300px]"
              />
            </div>
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {images.map((url, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={url}
                alt={`Project Image ${index+1}`}
                // width="100%"
                // height={300}
                className="w-full h-[300px]"
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ImageCarousel;

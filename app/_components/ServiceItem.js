import Image from "next/image";
import React from "react";
import serviceArrow from "@/public/service-arrow.svg";

function ServiceItem({ title, description }) {
  return (
    <div className="flex flex-col text-right px-2 mb-3 ">
      <div className="flex bg-aboutS px-3 py-2 rounded-xl">
        <h2 className="text-lg text-text1 leading-5 almarai-extrabold  w-full mx-2">
          {title}
        </h2>
        <Image src={serviceArrow} alt="About Iamge" width={15} height={15} />
      </div>
      <div className="flex justify-end py-1">
        <p className="text-sm text-aboutTitle  almarai-regular pr-3 lg:w-3/4">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ServiceItem;

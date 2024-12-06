import Image from "next/image";
import Link from "next/link";

import leftArrow from "@/public/left-arrow.svg";
import Facebook from "@/public/Facebook.svg";
import Instagram from "@/public/Instagram.svg";
import Linkedin from "@/public/Linkedin.svg";
import Twitter from "@/public/Twitter.svg";
import ImageCarousel from "./ImageCarousel";

const Project = ({ Project }) => {
  return (
    <div
      className="mr-8 almarai rounded-tr-3xl flex flex-col gap-7 p-4 sm:p-6 py-12 w-full"
      style={{
        direction: "rtl",
      }}
    >
      <h1 className="almarai-extrabold text-[32px]">{Project.name}</h1>
      <p className="text-text2 almarai-regular text-lg">
        {Project.description1}
      </p>
      <ImageCarousel images={Project.images} />
      <p className="text-text2 text-base">{Project.description2}</p>
      {Project.features && Project.features.length > 0 && (
        <>
          <p className="text-base almarai-regular text-text2">
            استرخاء وراحة لا مثيل لها:
          </p>
          <ul className="list-disc pr-5 space-y-2">
            {Project.features.map((text, index) => (
              <li
                key={index}
                className="text-text2 almarai-regular text-base flex items-center space-x-2 gap-2"
              >
                <span className="w-1 h-1 bg-black rounded-full"></span>
                {text}
              </li>
            ))}
          </ul>
        </>
      )}
      <p className="text-text2 text-base almarai-regular">
        {Project.description3}
      </p>
      {Project.description4 && (
        <p className="text-text2 text-base almarai-regular">
          {Project.description4}
        </p>
      )}
      <Link href="/contacts">
        <button className="flex justify-center items-center gap-4 text-center bg-gold rounded-3xl text-white px-8 py-3 my-2 text-xl font-almarai almarai-extrabold w-fit">
          <Link href="/contacts"> تواصل معنا </Link>
          <Image
            // className="pt-2 mx-2"
            src={leftArrow}
            alt="Arrow"
            width={24}
            height={24}
          />
        </button>
      </Link>
      <div className="flex items-center gap-2">
        <p className="almarai-extrabold text-lg">مشاركة :</p>
        <div className="flex items-center justify-center gap-2">
          <Link href="/contacts">
            <Image
              src={Facebook}
              alt="Facebook"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/contacts">
            <Image
              src={Twitter}
              alt="Twitter"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/contacts">
            <Image
              src={Instagram}
              alt="Instagram"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/contacts">
            <Image
              src={Linkedin}
              alt="Linkedin"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
      {/* TODO: Return This when get the main data/images */}
      {/* <Image 
        src={Project.coverUrl}
        alt="Project Cover"
        className="w-full h-full"
        width={800}
        height={400}
      /> */}
    </div>
  );
};

export default Project;

import Image from "next/image";

const AboutCard = ({ imageUrl, title, text }) => {
  return (
    <div className="flex w-fit sm:w-[605px] flex-col items-center shadow-custom rounded-2xl justify-center gap-2 py-9 px-3 bg-white">
      <div className="flex flex-col gap-2 items-center justify-center">
        <Image src={imageUrl} alt="Rocket Image" width={48} height={48} />
        <p className="almarai-extrabold text-base leading-10 text-[#1A1313]">
          {title}
        </p>
      </div>
      <p className="text-sm text-[#696984] leading-6 text-center almarai-normal sm:w-[400px]">
        {text}
      </p>
    </div>
  );
};

export default AboutCard;

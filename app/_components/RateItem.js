import Image from "next/image";

function RateItem({ icon, title, description }) {
  return (
    <div className=" rounded-[30px] py-5 px-3 gap-2 bg-white shadow-lg flex flex-col justify-center items-center text-center">
      <Image src={icon} alt={icon} width={50} height={50} />
      <h2> {title}</h2>
      <p> {description} </p>
    </div>
  );
}

export default RateItem;

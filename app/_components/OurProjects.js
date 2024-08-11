import Image from "next/image";
import project1 from "@/public/pr1.svg";
import project2 from "@/public/pr2.svg";
import project3 from "@/public/pr3.svg";
import Link from "next/link";

function OurProjects() {
  return (
    <div className="mr-8 rounded-tr-3xl flex flex-col justify-center items-center p-6 py-12">
      <h1 className="text-gold font-almarai text-2xl leading-8 font-bold">
        {" "}
        مشاريعنا{" "}
      </h1>
      <p className=" font-almarai font-extrabold text-xl leading-10 py-2">
        {" "}
        نحن مـــــــــــوجودون في امــــاكن مختــــلفة
      </p>
      <div className="grid grid-cols-2 gap-4 p-12 px-32">
        <div className="flex flex-col gap-y-4">
          <Link href="/projects/misr">
            <Image src={project2} alt="project2" />
          </Link>
          <Link href="/projects/england">
            <Image src={project3} alt="project3" />
          </Link>
        </div>

        <div className="">
          <Link href="/projects/saudi">
            <Image src={project1} alt="project1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurProjects;

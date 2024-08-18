import Navbar from "@/app/_components/Navbar";
import Projects from "@/app/_components/Projects";
import Offer from "@/app/_components/offer";
import { data } from "@/constants";

const page = ({ params: { id } }) => {
  return (
    <>
      <Navbar
        isHome={false}
        isFullHeight={false}
        bgClassName={`${id}-bg`}
        title={` مشاريع ${data[id]?.name}`}
        desc={`الرئيســـية/${data[id]?.name}`}
      />
      <Projects projects={data[id]?.projects} id={id} />
      <Offer />
    </>
  );
};

export default page;

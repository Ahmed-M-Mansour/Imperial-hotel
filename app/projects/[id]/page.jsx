import Navbar from "@/app/_components/Navbar";
import Projects from "@/app/_components/Projects";
import { data } from "@/constants";

const page = ({ params: { id } }) => {
  return (
    <>
      <Navbar
        isHome={false}
        isFullHeight={false}
        bgClassName="saudi-bg"
        title={` مشاريع ${data[id].name}`}
        desc={`الرئيســـية/${data[id].name}`}
      />
      <Projects projects={data[id]?.projects} id={id} />
    </>
  );
};

export default page;

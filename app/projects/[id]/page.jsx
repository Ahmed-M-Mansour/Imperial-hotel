import Navbar from "@/app/_components/Navbar";
import Projects from "@/app/_components/Projects";
import { data } from "@/constants";

const page = ({ params: { id } }) => {
  return (
    <>
      <Navbar isHome={false} isFullHeight={false} bgClassName="saudi-bg" title={" مشاريع المملكة العربية السعودية"} desc="الرئيســـية/المملكة العربية السعودية" />
      <Projects projects={data[id]?.projects} />
    </>
  )
}

export default page;

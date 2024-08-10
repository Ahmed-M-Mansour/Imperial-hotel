import Navbar from "@/app/_components/Navbar";
import { data } from "@/constants";

const page = ({ params: { id, projectId } }) => {
  const projectName = decodeURIComponent(projectId);
  const project = data[id].projects.find((item) => item.name === projectName);

  return (
    <>
        <Navbar 
            isHome={false}
            isFullHeight={false}
            bgClassName="badrany-bg"
            title={`مشاريع ${data[id].name}`}
            desc={`الرئيسيه/${data[id].name}`}
        />
    </>
  )
}

export default page;
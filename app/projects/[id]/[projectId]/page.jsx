import Navbar from "@/app/_components/Navbar";
import Project from "@/app/_components/Project";
import Offer from "@/app/_components/offer";
import { data } from "@/constants";

const page = ({ params: { id, projectId } }) => {
  const projectID = Number(projectId);
  const project = data[id]?.projects.find((item) => item["id"] === projectID);
  return (
    <>
      <Navbar
        isHome={false}
        isFullHeight={false}
        bgClassName="badrany-bg"
        title={project.name}
        desc={`الرئيسيه/${data[id].name}`}
      />
      <Project Project={project} />
      <Offer />
    </>
  );
};

export default page;

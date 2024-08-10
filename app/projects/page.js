import Navbar from "../_components/Navbar";
import OurProjects from "../_components/OurProjects";

function Projects() {
  return (
    <>
      <Navbar isHome={false} isFullHeight={false} bgClassName="projects-bg" title="مشاريع شركة إمبريال" desc="الرئيسيه/مشاريعنا" />
      <OurProjects />
    </>
  );
}

export default Projects;

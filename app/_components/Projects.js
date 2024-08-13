import Link from "next/link";
import Image from "next/image";

const Projects = ({ projects, id }) => {
  return (
    <div className="mr-8 almarai rounded-tr-3xl flex flex-col justify-center items-center p-6 py-12">
      <div className="grid grid-cols-2 gap-4 p-10 px-24">
        <div className="flex flex-col gap-y-4">
          {/* <Link href="/projects/misr">
            <Image src={project2} alt="project2" />
          </Link>
          <Link href="/projects/england">
            <Image src={project3} alt="project3" />
          </Link> */}
          {projects.map((item, index) => {
            if (index === 0) {
              return;
            } else {
              return (
                <Link href={`/projects/${id}/${item.id}`} key={index}>
                  <Image src={item.cover} alt={item.id} />
                </Link>
              );
            }
          })}
        </div>

        <div className="">
          <Link href={`/projects/${id}/${projects[0].id}`}>
            <Image src={projects[0].cover} alt={projects[0].name} width={600} height={300} />
          </Link>
        </div>
      </div>
    </div>
    // <div>1</div>
  );
};

export default Projects;

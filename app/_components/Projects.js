"use client";

import Link from "next/link";
import Image from "next/image";
import { useMediaQuery, useTheme } from "@mui/material";

const Projects = ({ projects, id }) => {
  const theme = useTheme();
  const lgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      {lgScreen ? (
        <div className="mr-8 almarai rounded-tr-3xl flex flex-col justify-center items-center p-6 py-12">
          <div className="grid grid-cols-2 gap-4 p-10 px-24">
            <div className="flex flex-col gap-y-4">
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
                <Image
                  src={projects[0].cover}
                  alt={projects[0].name}
                  width={600}
                  height={300}
                />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-y-4 items-center justify-center px-5 py-8">
          {projects.map((item, index) => {
            return (
              <Link href={`/projects/${id}/${item.id}`} key={index}>
                <Image
                  src={item.cover}
                  alt={item.id}
                  className="w-[600px] h-auto"
                  width={600}
                  height={302.221}
                />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Projects;

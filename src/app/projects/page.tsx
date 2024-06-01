import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { PersonalProject } from "../lib/types";
import Link from "next/link";
import Image from "next/image";

import { hygraphClient } from "../lib/client";
import { GET_PROJECTS } from "../lib/queries";

const ProjectsPage = async () => {
  const { personalProjects } = await hygraphClient.request<{
    personalProjects: PersonalProject[];
  }>(GET_PROJECTS);
  console.log(personalProjects);

  return (
    <div className="flex flex-col gap-10 items-center justify-between  max-w-[90%] max-h-[90%] text-white">
      <div className="flex flex-col gap-12 p-10 bg-[#3c414a] rounded-xl min-w-[200px] ">
        <div className="flex flex-row intems-center justify-between text-5xl font-header-2 text-center">
          <span className="w-full">Projects</span>
          <Link href="/">
            <FontAwesomeIcon
              icon={faHome}
              className="w-[40px] h-[40px] hover:text-blue-500 hover:cursor-pointer"
            />
          </Link>
        </div>
        <hr className="border-gray-300" />
        {personalProjects.map((p) => {
          return (
            <div
              key={p.id}
              className="flex flex-col gap-5 border-l-2 border-l-gray-400 pl-5 hover:border-amber-400"
            >
              <Link
                href={`/projects/${p.id}`}
                className="text-begin text-3xl font-bold hover:text-amber-400"
              >
                {p.name}
              </Link>
              <Image
                src={p.thumbnail.url}
                width="500"
                height="500"
                alt={p.name + " thumbnail"}
                className="rounded-xl"
              />
              <div>{p.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;

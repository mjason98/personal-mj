import { hygraphClient } from "@/app/lib/client";
import { GET_SINGLE_PROJECT } from "@/app/lib/queries";
import { PersonalProject } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";

type ProjectPageProps = {
  params: {
    projectId: string;
  };
};

const ProjectPage: React.FC<ProjectPageProps> = async ({
  params: { projectId },
}) => {
  const { personalProject } = await hygraphClient.request<{
    personalProject: PersonalProject;
  }>(GET_SINGLE_PROJECT, {
    id: projectId,
  });

  return (
    <div className="flex flex-col gap-10 items-center justify-between  max-w-[90%] max-h-[90%] text-white">
      <div className="flex flex-col gap-5 p-12 bg-[#3c414a] rounded-xl min-w-[200px] items-center max-w-[1000px]">
        <div className="flex flex-row gap-5 intems-center justify-between  justify-between text-center text-6xl font-header-2 w-full">
          <span className="w-full">{personalProject.name}</span>
          <Link href="/projects">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="w-[40px] h-[40px] hover:text-rose-500 hover:cursor-pointer"
            />
          </Link>
          <Link href="/">
            <FontAwesomeIcon
              icon={faHome}
              className="w-[40px] h-[40px] hover:text-blue-500 hover:cursor-pointer"
            />
          </Link>
        </div>
        <a
          className="flex flex-row gap-3 items-center hover:text-amber-500 text-center text-xl"
          href={personalProject.url}
        >
          <FontAwesomeIcon icon={faLink} className="h-[20px]" />
          <span> Project External Link</span>
        </a>
        <Image
          src={personalProject.thumbnail.url}
          alt={"portrait of " + personalProject.name}
          width={personalProject.thumbnail.width}
          height={personalProject.thumbnail.height}
          className="rounded-xl"
        />
        <div className="text-center text-xl">{personalProject.desc}</div>
        <hr className="border-gray-300 w-[80%] my-5" />
        <div className="flex flex-col gap-10 items-center justify-between">
          {personalProject.personalPosts?.map((post, index) => {
            return (
              <div key={post.id} className="items-center">
                <div className="text-3xl py-8 mb-3 text-begin w-full font-header-2">
                  {post.title}
                </div>
                <div className="flex flex-row gap-12 px-8 items-center justify-between">
                  <Image
                    src={post.image.url}
                    alt={"post iamge " + post.title}
                    width="300"
                    height="300"
                    className="rounded-lg"
                  />
                  <div className="w-[70%] text-xl">{post.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

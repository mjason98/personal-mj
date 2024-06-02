import { GET_GAMEDEV_POSTS } from "../lib/queries";
import { hygraphClient } from "../lib/client";
import { Post } from "../lib/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

const GameDevPage = async () => {
  const { personalPosts } = await hygraphClient.request<{
    personalPosts: Post[];
  }>(GET_GAMEDEV_POSTS, {
    tag: "gamedev",
  });

  console.log(personalPosts);

  return (
    <div className="flex flex-col gap-10 items-center justify-between  max-w-[90%] max-h-[90%] text-white">
      <div className="flex flex-col gap-12 items-center p-10 bg-[#3c414a] rounded-xl min-w-[200px]">
        <div className="flex flex-row intems-center justify-between text-5xl font-header-2 text-center w-full ">
          <span className="w-full">Game Dev Logs</span>
          <Link href="/">
            <FontAwesomeIcon
              icon={faHome}
              className="w-[40px] h-[40px] hover:text-blue-500 hover:cursor-pointer"
            />
          </Link>
        </div>
        <hr className="border-gray-300 w-[80%]" />
        <div className="w-[80%] text-center">
          This page is dedicated to showcasing some of my ideas about game
          development. In the future, this page will evolve to feature more
          serious content, and the game development section will be transformed
          into a full-fledged project.
        </div>
        {personalPosts.map((p) => {
          return (
            <div key={p.id} className="flex flex-col gap-5 pl-5 max-w-[90%]">
              <div className="text-3xl font-header-2 py-5">{p.title}</div>
              <div className="flex flex-row gap-10">
                <div className="text-xl text-center">{p.text}</div>
                <Image
                  src={p.image.url}
                  alt={"image of log " + p.id}
                  width="400"
                  height="400"
                  className="rounded-lg w-[80%]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameDevPage;

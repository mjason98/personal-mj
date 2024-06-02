import React from "react";
import PersonalInfoComponent from "./components/PersonalInfo";
import NewPage from "./components/NewPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { hygraphClient } from "./lib/client";
import { GET_RECIENT_POSTS } from "./lib/queries";
import { Post } from "./lib/types";

import Image from "next/image";

const HomePage = async () => {
  const { personalPosts } = await hygraphClient.request<{
    personalPosts: Post[];
  }>(GET_RECIENT_POSTS);

  return (
    <div className="flex flex-row gap-10 items-center justify-between  max-w-[90%] max-h-[90%] text-white">
      <div className="flex flex-col gap-8 p-5 bg-[#3c414a] rounded-xl min-w-[200px] ">
        <PersonalInfoComponent />
        <NewPage pageName="projects"/>
        <NewPage pageName="articles"/>
        <NewPage pageName="game-dev" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row p-5 gap-5 items-center justify-between bg-[#3c414a] rounded-xl">
          <FontAwesomeIcon icon={faStar} className="w-[30px] h-[30px]" />
          <div className="font-header-2 text-3xl text-center mt-2">
            Recient Posts
          </div>
          <FontAwesomeIcon icon={faStar} className="w-[30px] h-[30px]" />
        </div>
        {personalPosts.map((post) => {
          return (
            <div
              key={post.id}
              className="flex flex-col p-5 gap-5 items-center justify-between bg-[#3c414a] rounded-xl"
            >
              <div className="font-header-2 text-xl text-center mt-2">
                {post.title}
              </div>
              <Image
                src={post.image.url}
                alt={"recient " + post.id}
                width="200"
                height="200"
                className="rounded-xl"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faLink } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { PersonalProject } from "../lib/types";
import Link from "next/link";
import Image from "next/image";

import { Article } from "../lib/types";
import { hygraphClient } from "../lib/client";
import { GET_ARTICLES } from "../lib/queries";

const ArticlePage = async () => {
  const { personalArticles } = await hygraphClient.request<{
    personalArticles: Article[];
  }>(GET_ARTICLES);

  return (
    <div className="flex flex-col gap-10 items-center justify-between  max-w-[90%] max-h-[90%] text-white">
      <div className="flex flex-col gap-12 p-10 bg-[#3c414a] rounded-xl min-w-[200px] ">
        <div className="flex flex-row intems-center justify-between text-5xl font-header-2 text-center">
          <span className="w-full">Articles</span>
          <Link href="/">
            <FontAwesomeIcon
              icon={faHome}
              className="w-[40px] h-[40px] hover:text-blue-500 hover:cursor-pointer"
            />
          </Link>
        </div>
        <hr className="border-gray-300" />
        {personalArticles.map((a) => {
          return (
            <div key={a.id} className="flex flex-col gap-5 pl-5 max-w-[90%]">
              
              <a
                href={a.url}
                className="flex flex-row  gap-5 text-begin text-3xl font-bold hover:text-rose-400"
              >
                <FontAwesomeIcon icon={faLink} className="w-[30px] h-[30px]" />
                {a.title}
              </a>
              <div className="px-10 flex flex-row max-[90%] gap-6" >
                {a.keywords.split(',').map((k, index) => {
                    return(<div key={index} className="rounded-lg bg-gray-500 px-3 py-2 text-gray-100 font-bold">
                        {k}
                    </div>);
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticlePage;

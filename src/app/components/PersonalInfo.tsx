import { hygraphClient } from "../lib/client";
import { GET_LAST_PERSONAL_INFO } from "../lib/queries";
import { PersonalInfo } from "../lib/types";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";

const PersonalInfoComponent = async () => {
  const { personalInfos } = await hygraphClient.request<{
    personalInfos: PersonalInfo[];
  }>(GET_LAST_PERSONAL_INFO);

  if (personalInfos.length > 0)
    return (
      <div className="flex flex-row gap-5 p-5">
        <Image
          src={personalInfos[0].faceFoto.url}
          alt="Face Foto"
          width="200"
          height="200"
          className="w-[200px] h-[200px] rounded-full"
        />
        <div className="flex flex-col gap-6 items-center justify-center ">
          <div className="text-3xl w-full text-center font-header-2">
            {personalInfos[0].name}
          </div>
          <div className="text-lg w-grow max-w-[500px] text-center">
            {personalInfos[0].desc}
          </div>
          <div className="flex flex-row gap-10">
          <a href={personalInfos[0].linkedin}>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-[30px] h-[30px] hover:text-blue-400 hover:cursor-pointer"
            />{" "}
          </a>
          <a href={personalInfos[0].x}>
            <FontAwesomeIcon
              icon={faSquareXTwitter}
              className="w-[30px] h-[30px] hover:text-gray-300 hover:cursor-pointer"
            />{" "}
          </a>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="flex flex-row gap-2">
        <div>Personal Information not available :( </div>
      </div>
    );
};

export default PersonalInfoComponent;

import { hygraphClient } from "../lib/client";
import { GET_LAST_PERSONAL_INFO } from "../lib/queries";
import { PersonalInfo } from "../lib/types";
import Image from "next/image";

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
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="text-4xl w-full text-center" >{personalInfos[0].name}</div>
          <div className="text-lg w-full text-center">{personalInfos[0].desc}</div>
          <a href={personalInfos[0].linkedin} >lk</a>
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

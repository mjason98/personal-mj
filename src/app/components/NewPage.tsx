import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type NewPageProps = {
  pageName: string;
};

const NewPage = ({ pageName }: NewPageProps) => {
  return (
    <div className={"hover:ml-2 hover:bg-rose-600 hover:cursor-pointer ml-6 rounded-xl bg-gray-600 p-5 capitalize text-2xl"}>
      <Link href={`/${pageName}`} className="px-3 flex flex-row gap-3 items-center justify-between font-header-2">
        <div>{pageName} </div>
      <FontAwesomeIcon icon={faCaretRight} className="w-[25px] h-[25px]" />
      </Link>
    </div>
  );
};

export default NewPage;

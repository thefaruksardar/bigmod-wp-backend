import Applist from "@/components/applist";
import Image from "next/image";
import Link from "next/link";
import { HiHome, HiMiniArrowSmallLeft } from "react-icons/hi2";
import Pagination from "./pagination";

const Itemcategory = ({ Games, category, type, page, totalpost }) => {
  return (
    <>
      {Games.length ? (
        <Pagination
          data={Games}
          totalpost={totalpost}
          page={page}
          type={type}
        />
      ) : (
        <div className="flex mx-3 flex-col justify-center items-center my-5 bg-white px-1 py-6 rounded-2xl shadow border lg:max-w-6xl lg:mx-auto">
          <Image
            src="/pikachu.svg"
            alt="Game not Found"
            title="Game not Found"
            height={200}
            width={200}
            className="!m-0 h-40 w-40"
          />
          <h1 className="not-h1 capitalize text-xl my-3 font-semibold">
            {category} {type} Not Found
          </h1>
          <span className="flex justify-center items-center gap-2 my-4">
            <Link
              href={`/category/${type}`}
              className="flex justify-center items-center gap-1"
            >
              <HiMiniArrowSmallLeft className="text-lg" />
              Category
            </Link>
            <p className="not-p text-gray-600 text-xs">•</p>
            <Link href="/" className="flex justify-center items-center gap-1">
              <HiHome className="text-lg" />
              Home
            </Link>
          </span>
        </div>
      )}
    </>
  );
};
export default Itemcategory;

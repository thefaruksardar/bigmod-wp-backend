import Image from "next/image";
import Link from "next/link";
import { HiHome } from "react-icons/hi2";

const Pagenotfound = () => {
  return (
    <div className="flex mx-3 flex-col justify-center items-center my-5 bg-white px-1 py-6 rounded-2xl shadow border md:max-w-3xl md:mx-auto">
      <Image
        src="/pikachu.svg"
        alt="Game not Found"
        title="Game not Found"
        height={200}
        width={200}
        className="!m-0 h-40 w-40"
      />
      <h1 className="not-h1 capitalize text-xl my-3 font-semibold">
        Page Not Found
      </h1>
      <span className="flex justify-center items-center gap-3 my-2">
        <Link href="/" className="flex justify-center items-center gap-1">
          <HiHome className="text-lg" />
          Home
        </Link>
        <p className="not-p text-gray-600 text-xs">•</p>
        <Link
          href={`/category/games`}
          className="flex justify-center items-center gap-1"
        >
          Games
        </Link>
        <p className="not-p text-gray-600 text-xs">•</p>
        <Link
          href="/category/apps"
          className="flex justify-center items-center gap-1"
        >
          App
        </Link>
      </span>
    </div>
  );
};
export default Pagenotfound;

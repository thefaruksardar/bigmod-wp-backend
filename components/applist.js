import Image from "next/image";
import Link from "next/link";
import { HiMiniChevronRight, HiOutlineArrowSmallRight } from "react-icons/hi2";

const Applist = async ({ posts, title, type }) => {
  return (
    <section>
      {title && (
        <div className="my-3 pl-2 pt-5 flex justify-between items-center md:text-[1.2rem]">
          <p className="not-p">{title}</p>
          <Link href={`/${type}/?page=1`} className="flex gap-1 items-center">
            View All <HiMiniChevronRight />
          </Link>
        </div>
      )}
      <div className="flex flex-col gap-3 my-3 bg-white px-2 py-3 rounded-3xl shadow border md:grid md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Link
            href={`/${type}/${post.slug}`}
            className="flex gap-3 p-1 transition-all  hover:bg-gray-100 rounded-2xl"
            key={index}
          >
            <div>
              <Image
                priority
                src={post.acf.icon}
                alt={post.acf.name}
                title={post.acf.name}
                height={100}
                width={100}
                className="h-[4.5rem] w-[4.5rem] aspect-square rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-[0.15rem]">
              <p className="not-p">{post.acf.name}</p>
              <span className="flex gap-2 items-center text-gray-600 text-xs">
                <p className="not-p">{post.acf.version}</p>
                {post.acf.mod_features && (
                  <>
                    <p className="not-p">•</p>
                    <p className="not-p text-gray-600 text-sm">
                      {`${post.acf.mod_features.substring(0, 20)}...`}
                    </p>
                  </>
                )}
              </span>
              <span className="flex gap-2 items-center text-gray-600 text-xs pt-1">
                <p className="not-p bg-green-500 px-2 text-white rounded-2xl">
                  Apk
                </p>
                {post.acf.mod && (
                  <p className="not-p bg-orange-500 px-2 text-white rounded-2xl">
                    MOD
                  </p>
                )}
              </span>
            </div>
          </Link>
        ))}

        {title && (
          <Link
            href={`/${type}/?page=1`}
            className="not-a flex justify-between items-center py-2 px-3 not-a rounded-2xl hover:bg-gray-100 md:col-span-2 lg:col-span-3"
          >
            <span className="capitalize">All {type}</span>
            <span>
              <HiOutlineArrowSmallRight />
            </span>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Applist;

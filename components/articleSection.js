import Image from "next/image";
import Link from "next/link";
import { HiMiniChevronRight, HiOutlineArrowSmallRight } from "react-icons/hi2";

const ArticleSection = async ({ posts, images, title }) => {
  return (
    <section>
      {title && (
        <div className="my-3 pl-2 pt-5 flex justify-between items-center md:text-[1.2rem]">
          <p className="not-p">{title}</p>
          <Link href={`/articles/?page=1`} className="flex gap-1 items-center">
            View All <HiMiniChevronRight />
          </Link>
        </div>
      )}

      <div className="flex flex-col gap-2 max-w-6xl my-3 px-2 pb-3 pt-2 mx-auto bg-white rounded-3xl shadow md:grid md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Link
            href={`/articles/${post.slug}`}
            className={`not-a flex flex-col gap-3 px-2 py-3 border-b`}
            key={index}
          >
            <div>
              <Image
                priority
                src={images[index].media_details.sizes.full.source_url}
                alt={post.acf.name}
                title={post.acf.name}
                height={200}
                width={600}
                className="rounded-2xl aspect-video"
              />
            </div>

            <div className="flex flex-col gap-[0.15rem]">
              <h2 className="text-xl not-h2">{post.title.rendered}</h2>
            </div>
          </Link>
        ))}

        {title && (
          <Link
            href={`/articles?page=1`}
            className="not-a flex justify-between items-center py-2 px-3 not-a rounded-2xl hover:bg-gray-100 md:col-span-2 lg:col-span-3"
          >
            <span className="capitalize">All Article</span>
            <span>
              <HiOutlineArrowSmallRight />
            </span>
          </Link>
        )}
      </div>
    </section>
  );
};
export default ArticleSection;

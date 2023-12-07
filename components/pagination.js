import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Applist from "@/components/applist";
import ArticleSection from "./articleSection";
import Breadcrumbs from "./breadcrumbs";

const Pagination = async ({ page, type, data, totalpost, posts, images }) => {
  let paginationPages = [];
  let totalpagination = Math.ceil(totalpost / 20);

  for (let i = +page - 2; i <= +page + 2; i++) {
    if (i < 1) continue;
    if (i > totalpagination) break;
    paginationPages.push(i);
  }

  return (
    <div className="mx-3 lg:max-w-6xl lg:mx-auto">
      {type !== "posts" ? (
        <Applist posts={data} type={type} />
      ) : (
        <ArticleSection posts={posts} images={images} />
      )}
      <section className="flex justify-center items-center">
        <div className="flex gap-2 items-center">
          {+page - 1 >= 1 && (
            <Link
              className="not-a text-2xl text-mainlight bg-white
                } inline-block gap-1 p-1 rounded-lg border"
              href={`?page=${+page - 1}`}
            >
              <MdKeyboardArrowLeft />
            </Link>
          )}
          {paginationPages.map((current) => (
            <Link
              className={`${
                page == current
                  ? "bg-mainlight text-white"
                  : "text-mainlight bg-white"
              } not-a inline-block py-1 px-3 rounded-lg border hover:border-blue-600`}
              href={`?page=${+current}`}
              key={current}
            >
              {current}
            </Link>
          ))}
          {+page + 1 <= totalpagination && (
            <Link
              className="not-a text-2xl text-mainlight bg-white
                } inline-block gap-1 p-1 rounded-lg border"
              href={`?page=${+page + 1}`}
            >
              <MdKeyboardArrowRight />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};
export default Pagination;

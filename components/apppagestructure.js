import Image from "next/image";
import Link from "next/link";
import { MdCloudDownload } from "react-icons/md";
import Share from "./share";
import Breadcrumbs from "./breadcrumbs";
import Aside from "./aside";
import { notFound } from "next/navigation";

const Apppagestructure = ({ post, formattedTitle, type }) => {
  const gameGenres = [
    "action",
    "adventure",
    "arcade",
    "board",
    "card",
    "casual",
    "educational",
    "horror",
    "multiplayer",
    "music",
    "openworld",
    "puzzle",
    "rpg",
    "racing",
    "shooter",
    "simulation",
    "sports",
    "strategy",
    "survival",
    "visual-novel",
  ];

  if (!post) {
    notFound();
  }
  const crumbs = [
    { title: "Home", permalink: "/" },
    {
      title: post.type,
      permalink: `/category/${post.type === "top" ? "games" : "games"}`,
    },
    {
      title: `${post.acf.name.substring(0, 24)}...`,
      permalink: `/${post.type}/${post.slug}`,
    },
  ];

  return (
    <main className="px-2 mt-2 mb-4 md:grid md:grid-cols-[70%,30%] md:gap-6 lg:max-w-6xl lg:m-auto">
      <div>
        <Breadcrumbs crumbs={crumbs} />
        <section className="bg-white px-2 py-2 shadow rounded-3xl lg:py-6">
          <div className="grid grid-cols-[38%,62%] gap-2 lg:grid-cols-[25%75%]">
            <div className="">
              <Image
                priority
                src={post.acf.icon}
                alt={post.acf.name}
                title={post.acf.name}
                height={100}
                width={100}
                className="h-32 w-32 mx-auto !aspect-square rounded-3xl shadow-lg lg:h-40 lg:w-40"
              />
            </div>
            <div className="justify-start">
              {/* <h1 className="text-2xl">{formattedTitle}</h1> */}
              {formattedTitle}
              <p className="not-p mt-3 text-gray-700">
                {post.acf.mod_features}
              </p>
              <span className="flex gap-2 items-center text-gray-600 text-sm my-3">
                <Link
                  href={`/category/${
                    gameGenres.includes(post.acf.category) ? "games" : "apps"
                  }/${post.acf.category}?page=1`}
                  className="capitalize"
                >
                  {post.acf.category}
                </Link>

                {post.acf.mod && (
                  <>
                    <p className="not-p">•</p>
                    <p className="bg-orange-500 px-2 text-white rounded-2xl inline-block not-p">
                      MOD
                    </p>
                  </>
                )}
              </span>
            </div>
          </div>
          <Link
            className="bg-mainlight text-white py-2 rounded-3xl text-[1.1rem] flex items-center justify-center gap-2 mt-5 not-a transition-all hover:bg-main"
            href={`/${type}/${post.slug}/download`}
          >
            <MdCloudDownload />
            Download
          </Link>
        </section>
        <section className="bg-white px-3 py-5 shadow rounded-3xl my-5">
          <h2 className="uppercase">{type} Info</h2>
          <table className="table-fixed w-full">
            <tbody>
              <tr>
                <th className="text-left font-normal truncate py-2">Name</th>
                <td className="truncate">{post.acf.name}</td>
              </tr>
              <tr>
                <th className="text-left font-normal truncate py-2">
                  MOD Features
                </th>
                <td className="truncate">{post.acf.mod_features}</td>
              </tr>
              <tr>
                <th className="font-normal text-left truncate py-2">
                  Publisher
                </th>
                <td className="truncate">
                  <Link className="text-main" href={post.acf.publisher.url}>
                    {post.acf.publisher.title}
                  </Link>
                </td>
              </tr>
              <tr>
                <th className="font-normal text-left truncate py-2">
                  Package Name
                </th>
                <td className="truncate">
                  <Link className="text-main" href={post.acf.package_name.url}>
                    {post.acf.package_name.title}
                  </Link>
                </td>
              </tr>
              <tr>
                <th className="font-normal text-left truncate py-2">Version</th>
                <td className="truncate">{post.acf.version}</td>
              </tr>
              <tr>
                <th className="font-normal text-left truncate py-2">Size</th>
                <td className="truncate">{post.acf.size}</td>
              </tr>
              <tr>
                <th className="font-normal text-left truncate py-2">Price</th>
                <td className="truncate text-green-500">Free</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="bg-white px-3 py-5 shadow rounded-3xl my-5">
          <article
            className="post"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></article>
          <Link
            className="bg-mainlight text-white py-2 rounded-3xl text-[1.1rem] flex items-center justify-center gap-2 mt-5 not-a transition-all hover:bg-blue-600"
            href={`/${
              gameGenres.includes(post.acf.category) ? "games" : "apps"
            }/${post.slug}/download`}
          >
            <MdCloudDownload />
            Download
          </Link>
        </section>
        <Share url={`${post.type}/${post.slug}`} title={post.title.rendered} />
      </div>
      <div className="hidden md:block md:mt-16">
        <Aside />
      </div>
    </main>
  );
};
export default Apppagestructure;

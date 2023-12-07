import { format } from "date-fns";
import Share from "./share";
import Breadcrumbs from "./breadcrumbs";
import Aside from "./aside";

const Articlepagestructure = ({ post }) => {
  const crumbs = [
    { title: "Home", permalink: "/" },
    {
      title: post.type === "post" ? "Article" : "Post",
      permalink: `/articles`,
    },
    {
      title: `${post.title.rendered.substring(0, 24)}...`,
      permalink: `${post.slug}`,
    },
  ];

  return (
    <main className="pt-3 bg-white md:grid md:grid-cols-[70%,30%] md:gap-6 lg:max-w-6xl lg:m-auto lg:bg-transparent">
      <div>
        <Breadcrumbs crumbs={crumbs} />
        <article className="post py-5 px-5 lg:rounded-3xl lg:shadow">
          <h1 className="not-h1 text-2xl font-semibold mb-2">
            {post.title.rendered}
          </h1>
          <p className="not-p text-sm text-gray-500 mb-4">
            Last Updated {format(new Date(post.date), "MMM d, yyyy")}
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>
        </article>
        <Share url={`articles/${post.slug}`} title={post.title.rendered} />
      </div>
      <div className="hidden md:block md:mt-16">
        <Aside />
      </div>
    </main>
  );
};
export default Articlepagestructure;

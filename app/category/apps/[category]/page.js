import Breadcrumbs from "@/components/breadcrumbs";
import Itemcategory from "@/components/itemcategory";
import axios from "axios";
import { notFound } from "next/navigation";
let { NEXT_API_USER, NEXT_API_PASS } = process.env;
let credentials = { username: NEXT_API_USER, password: NEXT_API_PASS };
const getCategory = async (category) => {
  const res = await axios.get(
    `${process.env.NEXT_API_DOMAIN}/wp-json/wp/v2/categories?per_page=100`,
    {
      auth: credentials,
    }
  );

  let data = await res.data;

  const filteredPosts = data.filter((post) => post.slug === category);

  return filteredPosts[0];
};

const getGames = async (id) => {
  const res = await axios.get(
    `${process.env.NEXT_API_DOMAIN}/wp-json/wp/v2/apps/?categories=${id}`,
    {
      auth: credentials,
    }
  );

  let data = await res.data;
  let totalpost = res.headers["x-wp-total"];

  return { data, totalpost };
};

const Page = async ({ params: { category }, searchParams: { page } }) => {
  let postsCategory = await getCategory(category);

  if (!postsCategory) {
    notFound();
  }

  let { data, totalpost } = await getGames(postsCategory.id);

  const crumbs = [
    { title: "Home", permalink: "/" },
    {
      title: `Apps`,
      permalink: `/category/apps`,
    },
    {
      title: `${category}`,
      permalink: `/category/apps/${category}`,
    },
  ];

  return (
    <main className="mx-3">
      <Breadcrumbs crumbs={crumbs} />
      <Itemcategory
        totalpost={totalpost}
        page={page}
        Games={data}
        category={category}
        type={"apps"}
      />
    </main>
  );
};
export default Page;

import Breadcrumbs from "@/components/breadcrumbs";
import Pagination from "@/components/pagination";
import axios from "axios";
let { NEXT_API_USER, NEXT_API_PASS } = process.env;
let credentials = { username: NEXT_API_USER, password: NEXT_API_PASS };

const getPosts = async (page) => {
  let res = await axios(
    `${process.env.NEXT_API_DOMAIN}/wp-json/wp/v2/posts?per_page=20&page=${
      page ? page : 1
    }`,
    {
      params: {
        page: page,
        per_page: 20,
      },
      auth: credentials,
    }
  );

  const data = await res.data;
  let totalpost = res.headers["x-wp-total"];

  const imagePromises = data.map(async (post) => {
    const imageRes = await axios(
      `${process.env.NEXT_API_DOMAIN}/wp-json/wp/v2/media/${post.featured_media}`,
      {
        auth: credentials,
      }
    );
    const image = await imageRes.data;
    return image;
  });

  const images = await Promise.all(imagePromises);

  return { data, images, totalpost };
};
const crumbs = [
  { title: "Home", permalink: "/" },
  {
    title: `Articles`,
    permalink: `/articles`,
  },
];

export async function generateMetadata() {
  return {
    title: "BIGMOD - Articles",
    description:
      "Discover a large collection of downloadable MOD games and premium APKs to elevate your mobile gaming experience to the next level",
  };
}

const Page = async ({ searchParams: { page } }) => {
  let { data, images, totalpost } = await getPosts(page);

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <Pagination
        posts={data}
        totalpost={totalpost}
        images={images}
        type={"posts"}
        page={page}
      />
    </>
  );
};
export default Page;

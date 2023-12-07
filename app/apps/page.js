import Breadcrumbs from "@/components/breadcrumbs";
import Pagination from "@/components/pagination";
import axios from "axios";
let { NEXT_API_USER, NEXT_API_PASS } = process.env;
let credentials = { username: NEXT_API_USER, password: NEXT_API_PASS };
const getApps = async (page, type) => {
  let res = await axios(
    `${process.env.NEXT_API_DOMAIN}/wp-json/wp/v2/${type}?per_page=20&page=${
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

  let data = await res.data;
  let totalpost = res.headers["x-wp-total"];
  return { data, totalpost };
};

const crumbs = [
  { title: "Home", permalink: "/" },
  {
    title: `Apps`,
    permalink: `/apps`,
  },
];

export async function generateMetadata() {
  return {
    title: "BIGMOD - Apps",
    description:
      "Discover a large collection of downloadable MOD games and premium APKs to elevate your mobile gaming experience to the next level",
  };
}

const Page = async ({ searchParams: { page } }) => {
  let { data, totalpost } = await getApps(page, "apps");

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <Pagination data={data} totalpost={totalpost} type={"apps"} page={page} />
    </>
  );
};
export default Page;

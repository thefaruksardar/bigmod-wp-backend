import Download from "@/components/download";
import axios from "axios";
import { notFound } from "next/navigation";
let { NEXT_API_USER, NEXT_API_PASS } = process.env;
let credentials = { username: NEXT_API_USER, password: NEXT_API_PASS };

const getAllPost = async (type) => {
  let res = await axios(
    `${process.env.NEXT_API_DOMAIN}/wp-json/wp/v2/${type}/?per_page?=100`,
    {
      auth: credentials,
    }
  );

  return res.data;
};

export async function generateStaticParams() {
  const posts = await getAllPost("top");

  return posts.map((post) => ({
    url: post.slug,
  }));
}

const getPost = async (slug) => {
  let res = await axios(
    `${process.env.NEXT_API_DOMAIN}/wp-json/wp/v2/top/?slug=${slug}`,
    {
      auth: credentials,
    }
  );
  let data = await res.data;

  if (!data) {
    notFound();
  }

  return data[0];
};

export async function generateMetadata({ params }) {
  let post = await getPost(params.url);

  if (!post) {
    notFound();
  }
  return {
    title:
      "Download" + post.acf.name
        ? `Download ${post.acf.name}`
        : "BIGMOD - Download MOD Games, Premium APK for Android",
    description: post.acf.description
      ? post.acf.description
      : "Discover a large collection of downloadable MOD games and premium APKs to elevate your mobile gaming experience to the next level",
  };
}

const Page = async ({ params }) => {
  let post = await getTops("top", params.url);

  return <Download post={post} />;
};
export default Page;

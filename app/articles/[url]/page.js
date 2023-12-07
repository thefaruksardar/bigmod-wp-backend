import Articlepagestructure from "@/components/articlepagestructure";
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

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPost("posts");

  return posts.map((post) => ({
    url: post.slug,
  }));
}

const getPost = async (slug) => {
  let res = await axios(
    `${process.env.NEXT_API_DOMAIN}/wp-json/wp/v2/posts/?slug=${slug}`,
    {
      auth: credentials,
    }
  );
  let data = await res.data;
  return data[0];
};

export async function generateMetadata({ params }) {
  let post = await getPost(params.url);
  if (!post) {
    notFound();
  }
  return {
    title: post.title.rendered
      ? post.title.rendered
      : "BIGMOD - Download MOD Games, Premium APK for Android",
    description: post.acf.description
      ? post.acf.description
      : "Discover a large collection of downloadable MOD games and premium APKs to elevate your mobile gaming experience to the next level",
    alternates: {
      canonical: `/articles/${post.slug}`,
      languages: {
        "en-us": `/articles/${post.slug}`,
      },
    },
  };
}

const Page = async ({ params }) => {
  let post = await getPost(params.url);
  if (!post) {
    notFound();
  }
  return <Articlepagestructure post={post} />;
};
export default Page;

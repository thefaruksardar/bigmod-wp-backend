import Apppagestructure from "@/components/apppagestructure";
import Loadingui from "@/components/loadingui";
import axios from "axios";
import { notFound } from "next/navigation";
import { Suspense } from "react";
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
  const posts = await getAllPost("apps");

  return posts.map((post) => ({
    url: post.slug,
  }));
}

const getPost = async (slug) => {
  let res = await axios(
    `${process.env.NEXT_API_DOMAIN}/wp-json/wp/v2/apps/?slug=${slug}`,
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

function formatTitleWithStrong(title, keyword) {
  const parts = title.split(keyword);

  if (parts.length === 1) {
    return <h1 className="text-xl not-h1">{title}</h1>;
  } else {
    return (
      <h1 className="text-xl not-h1">
        <strong className="font-medium">{keyword}</strong>
        {parts[1]}
      </h1>
    );
  }
}
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
      canonical: `/apps/${post.slug}`,
      languages: {
        "en-us": `/apps/${post.slug}`,
      },
    },
  };
}

const Page = async ({ params }) => {
  let post = await getPost(params.url);
  const formattedTitle = formatTitleWithStrong(
    post.title.rendered,
    post.acf.name
  );

  return (
    <Suspense fallback={<Loadingui />}>
      <Apppagestructure
        post={post}
        formattedTitle={formattedTitle}
        type={"apps"}
      />
    </Suspense>
  );
};
export default Page;

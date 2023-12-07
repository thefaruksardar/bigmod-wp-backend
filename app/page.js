import Applist from "@/components/applist";
import ArticleSection from "@/components/articleSection";
import Share from "@/components/share";
import Slider from "@/components/slider";
import axios from "axios";

let { NEXT_API_USER, NEXT_API_PASS } = process.env;
let credentials = { username: NEXT_API_USER, password: NEXT_API_PASS };

const getGames = async () => {
  let res = await axios(`${process.env.NEXT_API_DOMAIN}/wp-json/wp/v2/games`, {
    auth: credentials,
  });

  let data = await res.data;
  return data;
};

const getApps = async () => {
  let res = await axios(`${process.env.NEXT_API_DOMAIN}/wp-json/wp/v2/apps`, {
    auth: credentials,
  });
  let data = await res.data;
  return data;
};

const getPosts = async () => {
  const res = await axios(
    `${process.env.NEXT_API_DOMAIN}/wp-json/wp/v2/posts`,
    {
      auth: credentials,
    }
  );
  const data = res.data;
  const imagePromises = data.map(async (post) => {
    const imageRes = await axios(
      `${process.env.NEXT_API_DOMAIN}/wp-json/wp/v2/media/${post.featured_media}`,
      {
        auth: credentials,
      }
    );
    const image = imageRes.data;
    return image;
  });

  const images = await Promise.all(imagePromises);

  return [data, images];
};

export const revalidate = 60;

export async function generateMetadata() {
  return {
    title: "BIGMOD - Download MOD Games, Premium APK for Android",
    description:
      "Discover a large collection of downloadable MOD games and premium APKs to elevate your mobile gaming experience to the next level",
  };
}

const Page = async () => {
  let Games = await getGames();
  let apps = await getApps();
  let [posts, images] = await getPosts();

  return (
    <main className="px-1 mx-1 relative lg:max-w-6xl lg:m-auto">
      {/* <Slider /> */}
      <Applist posts={Games} title="Top-rated Games" type={"games"} />
      <Applist posts={apps} title="Top-rated Apps" type={"apps"} />
      <ArticleSection
        posts={posts}
        images={images}
        title="Latest Articles for you"
      />
      <Share />
    </main>
  );
};
export default Page;

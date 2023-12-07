import axios from "axios";
import Image from "next/image";
import Link from "next/link";
let { NEXT_API_USER, NEXT_API_PASS } = process.env;
let credentials = { username: NEXT_API_USER, password: NEXT_API_PASS };
// Perform search on each endpoint and combine results
const fetchSearchResults = async (query) => {
  const postsResponse = await axios(
    `${process.env.NEXT_API_DOMAIN}/wp-json/wp/v2/posts/?search=${query}&per_page=100`,
    {
      auth: credentials,
    }
  );
  const gamesResponse = await axios(
    `${process.env.NEXT_API_DOMAIN}/wp-json/wp/v2/top/?search=${query}&per_page=100`,
    {
      auth: credentials,
    }
  );
  const appsResponse = await axios(
    `${process.env.NEXT_API_DOMAIN}/wp-json/wp/v2/games/?search=${query}&per_page=100`,
    {
      auth: credentials,
    }
  );
  const articleResponse = await axios(
    `${process.env.NEXT_API_DOMAIN}/wp-json/wp/v2/apps/?search=${query}&per_page=100`,
    {
      auth: credentials,
    }
  );

  const posts = await postsResponse.data;
  const games = await gamesResponse.data;
  const apps = await appsResponse.data;
  const articles = await articleResponse.data;

  const imagePromises = articles.map(async (post) => {
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

  const combinedResults = [...posts, ...games, ...apps, ...articles];
  return { combinedResults, images };
};

export async function generateMetadata({ searchParams: { q } }) {
  return {
    title: `Search results for "${q}"`,
    description:
      "Discover a large collection of downloadable MOD games and premium APKs to elevate your mobile gaming experience to the next level",
    alternates: {
      canonical: `/search?q=${q}`,
      languages: {
        "en-us": `/search?q=${q}`,
      },
    },
  };
}

const Page = async ({ searchParams: { q } }) => {
  let { combinedResults: posts, images } = await fetchSearchResults(q);

  return (
    <main className="px-3">
      <div className="lg:max-w-6xl lg:m-auto">
        <p className="not-p my-4 ml-1">
          Found {posts.length} for "
          <strong className="font-semibold">{q}</strong>"
        </p>
        <div className="bg-white rounded-3xl border shadow p-2 lg:grid lg:grid-cols-2 md:gap-5">
          {posts.length ? (
            <>
              {posts.map((post, index) =>
                post.type !== "post" ? (
                  <Link
                    href={`/${post.type}/${post.slug}`}
                    className="flex gap-3 p-1 transition-all  hover:bg-gray-100 rounded-2xl"
                    key={index}
                  >
                    <div>
                      <Image
                        priority
                        src={post.acf.icon}
                        alt={post.acf.name}
                        title={post.acf.name}
                        height={100}
                        width={100}
                        className="h-[4.5rem] w-[4.5rem] aspect-square rounded-2xl shadow-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-[0.15rem]">
                      <p className="not-p">{post.acf.name}</p>
                      <span className="flex gap-2 items-center text-gray-600 text-xs">
                        <p className="not-p">{post.acf.version}</p>
                        <p className="not-p">•</p>
                        <p className="not-p text-gray-600 text-sm">
                          {post.acf.mod_features}
                        </p>
                      </span>
                      <span className="flex gap-2 items-center text-gray-600 text-xs pt-1">
                        <p className="not-p bg-green-500 px-2 text-white rounded-2xl">
                          Apk
                        </p>
                        {post.acf.mod && (
                          <p className="not-p bg-orange-500 px-2 text-white rounded-2xl">
                            MOD
                          </p>
                        )}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <Link
                    href={`/articles/${post.slug}`}
                    className={`not-a flex flex-col gap-3 px-2 py-3 hover:bg-gray-100 rounded-2xl`}
                    key={index}
                  >
                    <div className="flex flex-col gap-[0.15rem]">
                      <h2 className="text-xl not-h2">{post.title.rendered}</h2>
                    </div>
                  </Link>
                )
              )}
            </>
          ) : (
            <div className="flex mx-3 flex-col justify-center items-center my-5 bg-white px-1 py-6 lg:col-span-2">
              <Image
                src="/pikachu.svg"
                alt="Game not Found"
                title="Game not Found"
                height={200}
                width={200}
                className="!m-0 h-40 w-40"
              />
              <h1 className="not-h1 capitalize text-xl my-3 font-semibold">
                {q} Not Found
              </h1>
              <span className="flex justify-center items-center gap-2 my-4">
                <Link
                  href={`/category/games`}
                  className="flex justify-center items-center gap-1"
                >
                  Games
                </Link>
                <p className="not-p text-gray-600 text-xs">•</p>
                <Link
                  href="/category/apps"
                  className="flex justify-center items-center gap-1"
                >
                  Appps
                </Link>
              </span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
export default Page;

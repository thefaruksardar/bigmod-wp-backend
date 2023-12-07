import axios from "axios";
import Image from "next/image";
import Link from "next/link";
let { NEXT_API_USER, NEXT_API_PASS, NEXT_API_DOMAIN } = process.env;
let credentials = { username: NEXT_API_USER, password: NEXT_API_PASS };

const getPosts = async () => {
  try {
    const { data } = await axios.get(`${NEXT_API_DOMAIN}/wp-json/wp/v2/top`, {
      auth: credentials,
    });

    const images = [];
    for (const post of data) {
      const { data: image } = await axios.get(
        `${NEXT_API_DOMAIN}/wp-json/wp/v2/media/${post.featured_media}`,
        {
          auth: credentials,
        }
      );
      images.push(image);
    }

    return [data, images];
  } catch (error) {
    console.error("Error in getPosts:", error);
    return null; // Handle the error gracefully
  }
};

const Slider = async () => {
  let [posts, images] = await getPosts();

  return (
    <section>
      <p className="my-3 pl-2 not-p md:text-[1.3rem]">Recommended for you</p>
      <div className="flex gap-2  max-w-6xl mx-auto no-scrollbar overflow-x-scroll ">
        {posts.map((post, index) => (
          <Link
            href={`/top/${post.slug}`}
            className="flex flex-col gap-3 min-w-[94%] bg-white px-2 py-2 rounded-3xl border md:min-w-[60%] lg:min-w-[45%]"
            key={index}
          >
            <div>
              <Image
                priority
                src={images[index].media_details.sizes.full.source_url}
                alt={post.acf.name}
                title={post.acf.name}
                height={200}
                width={600}
                className="rounded-2xl aspect-video object-cover"
              />
            </div>

            <div className="flex items-center gap-3">
              <div>
                <Image
                  priority
                  src={post.acf.icon}
                  alt={post.acf.name}
                  title={post.acf.name}
                  height={100}
                  width={100}
                  className="h-16 w-16 aspect-square rounded-2xl shadow-lg"
                />
              </div>
              <div className="flex flex-col gap-[0.15rem]">
                <p className="not-p">{post.acf.name}</p>
                <p className="text-gray-600 text-sm not-p">
                  {post.acf.mod_features}
                </p>
                <span className="flex gap-2 items-center text-gray-600 text-xs">
                  <p className="not-p">{post.acf.version}</p>
                  <p className="not-p">•</p>
                  <p className="bg-green-500 px-2 text-white rounded-2xl not-p">
                    Apk
                  </p>
                  {post.acf.mod && (
                    <p className="not-p bg-orange-500 px-2 text-white rounded-2xl">
                      MOD
                    </p>
                  )}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      //{" "}
    </section>
  );
};
export default Slider;

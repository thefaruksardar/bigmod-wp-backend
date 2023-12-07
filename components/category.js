import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "./breadcrumbs";

const Category = ({ categories }) => {
  const crumbs = [
    { title: "Home", permalink: "/" },
    {
      title: `${categories[0].app}`,
      permalink: `/category/${categories[0].app}`,
    },
  ];
  return (
    <div className="lg:max-w-6xl lg:m-auto">
      <Breadcrumbs crumbs={crumbs} />
      <main className="grid grid-cols-2 gap-3 mx-3 mt-3 mb-5 p-3 bg-white rounded-3xl shadow border">
        {categories.map((category, index) => (
          <Link
            className={`not-a flex justify-between rounded-xl items-end px-2 py-3 text-white bg-gradient-to-r md:py-6 ${category.color} ${category.color2}`}
            href={`/category/${category.app}/${category.type}/?page=1`}
            key={index}
          >
            <span className="capitalize">{category.type}</span>
            <Image
              className="h-12 w-12"
              src={category.icon}
              alt={category.type}
              title={category.type}
              height={100}
              width={100}
            />
          </Link>
        ))}
      </main>
    </div>
  );
};
export default Category;

import Category from "@/components/category";

const Page = () => {
  const categories = [
    {
      icon: "/apps/business.svg",
      type: "business",
      color: "from-green-400",
      color2: "to-green-500",
      app: "apps",
    },
    {
      icon: "/apps/communication.svg",
      type: "communication",
      color: "from-blue-400",
      color2: "to-blue-500",
      app: "apps",
    },
    {
      icon: "/apps/education.svg",
      type: "education",
      color: "from-orange-400",
      color2: "to-orange-500",
      app: "apps",
    },
    {
      icon: "/apps/entertainment.svg",
      type: "entertainment",
      color: "from-red-400",
      color2: "to-red-500",
      app: "apps",
    },
    {
      icon: "/apps/life.svg",
      type: "life",
      color: "from-blue-400",
      color2: "to-blue-500",
      app: "apps",
    },
    {
      icon: "/apps/news.svg",
      type: "news",
      color: "from-amber-400",
      color2: "to-amber-500",
      app: "apps",
    },
    {
      icon: "/apps/photography.svg",
      type: "photography",
      color: "from-lime-400",
      color2: "to-lime-500",
      app: "apps",
    },
    {
      icon: "/apps/social.svg",
      type: "social",
      color: "from-red-400",
      color2: "to-red-500",
      app: "apps",
    },
    {
      icon: "/apps/sports.svg",
      type: "sports",
      color: "from-red-400",
      color2: "to-red-500",
      app: "apps",
    },
    {
      icon: "/apps/tools.svg",
      type: "tools",
      color: "from-teal-400",
      color2: "to-teal-500",
      app: "apps",
    },
    {
      icon: "/apps/video&Music.svg",
      type: "videomusic",
      color: "from-indigo-400",
      color2: "to-indigo-500",
      app: "apps",
    },
    {
      icon: "/apps/weather.svg",
      type: "weather",
      color: "from-cyan-400",
      color2: "to-cyan-500",
      app: "apps",
    },
  ];

  return <Category categories={categories} />;
};
export default Page;

import Category from "@/components/category";

const Page = () => {
  const categories = [
    {
      icon: "/games/action.svg",
      type: "action",
      color: "from-green-400",
      color2: "to-green-500",
      app: "games",
    },
    {
      icon: "/games/adventure.svg",
      type: "adventure",
      color: "from-blue-400",
      color2: "to-blue-500",
      app: "games",
    },
    {
      icon: "/games/arcade.svg",
      type: "arcade",
      color: "from-orange-400",
      color2: "to-orange-500",
      app: "games",
    },
    {
      icon: "/games/board.svg",
      type: "board",
      color: "from-red-400",
      color2: "to-red-500",
      app: "games",
    },
    {
      icon: "/games/card.svg",
      type: "card",
      color: "from-blue-400",
      color2: "to-blue-500",
      app: "games",
    },
    {
      icon: "/games/casual.svg",
      type: "casual",
      color: "from-amber-400",
      color2: "to-amber-500",
      app: "games",
    },
    {
      icon: "/games/educational.svg",
      type: "educational",
      color: "from-lime-400",
      color2: "to-lime-500",
      app: "games",
    },
    {
      icon: "/games/horror.svg",
      type: "horror",
      color: "from-red-400",
      color2: "to-red-500",
      app: "games",
    },
    {
      icon: "/games/multiplayer.svg",
      type: "multiplayer",
      color: "from-red-400",
      color2: "to-red-500",
      app: "games",
    },
    {
      icon: "/games/music.svg",
      type: "music",
      color: "from-teal-400",
      color2: "to-teal-500",
      app: "games",
    },
    {
      icon: "/games/openworld.svg",
      type: "openworld",
      color: "from-indigo-400",
      color2: "to-indigo-500",
      app: "games",
    },
    {
      icon: "/games/puzzle.svg",
      type: "puzzle",
      color: "from-cyan-400",
      color2: "to-cyan-500",
      app: "games",
    },
    {
      icon: "/games/rpg.svg",
      type: "rpg",
      color: "from-red-400",
      color2: "to-red-500",
      app: "games",
    },
    {
      icon: "/games/racing.svg",
      type: "racing",
      color: "from-orange-400",
      color2: "to-orange-500",
      app: "games",
    },
    {
      icon: "/games/shooter.svg",
      type: "shooter",
      color: "from-purple-400",
      color2: "to-purple-500",
      app: "games",
    },
    {
      icon: "/games/simulation.svg",
      type: "simulation",
      color: "from-violet-400",
      color2: "to-violet-500",
      app: "games",
    },
    {
      icon: "/games/sports.svg",
      type: "sports",
      color: "from-fuchsia-400",
      color2: "to-fuchsia-500",
      app: "games",
    },
    {
      icon: "/games/strategy.svg",
      type: "strategy",
      color: "from-green-400",
      color2: "to-green-500",
      app: "games",
    },
    {
      icon: "/games/survival.svg",
      type: "survival",
      color: "from-amber-400",
      color2: "to-amber-500",
      app: "games",
    },
    {
      icon: "/games/visual-novel.svg",
      type: "visual-novel",
      color: "from-rose-400",
      color2: "to-rose-500",
      app: "games",
    },
  ];

  return <Category categories={categories} />;
};
export default Page;

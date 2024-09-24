import Titles from "@/components/Titles";
import WorksCard from "@/components/WorksCard";

export default function page() {
  const works = [
    {
      id: 1,
      title: "simple panel",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores quaerat iste saepe incidunt culpa!",
      link: "https://github.com/halmasi/almasi",
      picture: "/icons/javascript.png",
    },
    {
      id: 2,
      title: "website panel",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores quaerat iste saepe incidunt culpa!",
      link: "https://github.com/halmasi/almasi",
      picture: "/icons/javascript.png",
    },
    {
      id: 3,
      title: "app",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores quaerat iste saepe incidunt culpa!",
      link: "https://github.com/halmasi/almasi",
      picture: "/icons/javascript.png",
    },
    {
      id: 4,
      title: "website",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores quaerat iste saepe incidunt culpa!",
      link: "https://github.com/halmasi/almasi",
      picture: "/icons/javascript.png",
    },
    {
      id: 5,
      title: "design",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores quaerat iste saepe incidunt culpa!",
      link: "https://github.com/halmasi/almasi",
      picture: "/icons/javascript.png",
    },
  ];
  return (
    <>
      <header>
        <Titles>My recent works</Titles>
      </header>
      <main className="self-center container pb-5 place-items-center space-y-5">
        {works.map((item) => (
          <WorksCard
            key={item.id}
            title={item.title}
            describtion={item.describtion}
            picture={item.picture}
            link={item.link}
          />
        ))}
      </main>
    </>
  );
}

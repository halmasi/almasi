import Titles from "../components/Titles";
import WorksCard from "../components/WorksCard";

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
      <Titles>My recent works</Titles>
      <div className="self-center container grid md:grid-cols-3 lg:grid-cols-4 gap-5 pb-5 place-items-center">
        {works.map((item) => (
          <WorksCard
            key={item.id}
            title={item.title}
            describtion={item.describtion}
            picture={item.picture}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
}

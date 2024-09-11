import AboutCard from "./components/homePage/AboutCard";
import Experiences from "./components/homePage/Experiences";
import Titles from "./components/Titles";

export default function Home() {
  return (
    <>
      <header>
        <Titles>{"<Hossein Almasi/>"}</Titles>
      </header>
      <main className="flex flex-col justify-between mb-10">
        <AboutCard />
        <Experiences />
      </main>
    </>
  );
}

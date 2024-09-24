import AboutCard from "../components/homePage/AboutCard";
import Experiences from "../components/homePage/Experiences";
import Skills from "../components/homePage/Skills";
import Titles from "../components/Titles";

export default function Home() {
  return (
    <>
      <header>
        <Titles>{"<Hossein Almasi/>"}</Titles>
      </header>
      <main className="flex flex-col justify-between items-center space-y-5">
        <article className="flex flex-col items-center">
          <AboutCard />
          <Experiences />
          <Skills />
        </article>
      </main>
    </>
  );
}

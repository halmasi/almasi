import AboutCard from "./components/homePage/AboutCard";
import Experiences from "./components/homePage/Experiences";
import Skills from "./components/homePage/Skills";
import Titles from "./components/Titles";

export default function Home() {
  return (
    <>
      <header>
        <Titles>{"<Hossein Almasi/>"}</Titles>
      </header>
      <main className="flex flex-col justify-between space-y-5">
        <AboutCard />
        <Experiences />
        <h2 className="text-2xl md:text-center text-red-900 border-b-2">
          <strong>.</strong>
          <br />
          <strong>.</strong>
          <br />
          <strong>.</strong>
          <br />
          <strong>The journey goes on</strong>
        </h2>
        <Skills />
      </main>
    </>
  );
}

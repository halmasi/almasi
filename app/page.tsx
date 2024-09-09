import Titles from "./components/Titles";
import BlogCart from "./components/BlogCart";
import GradientButton from "./components/buttons/GradientButton";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <Titles>hello world</Titles>
      </header>
      <main className="flex flex-col justify-between mb-10">
        {/* <BlogCart>
          <p>hello this is Hossein</p>
        </BlogCart> */}
        <div className="flex flex-col rounded-2xl border-[.5px] border-gray-300 md:flex-row">
          <Image
            width={500}
            height={0}
            quality={75}
            alt={""}
            src={"/personalImage.jpg"}
            className=" mb-5 h-auto w-auto object-cover rounded-t-2xl md:w-6/12 md:rounded-r-none md:rounded-l-2xl md:m-0"
          />
          <div className="flex flex-col justify-center items-center w-[100%]">
            <span className="text-center m-3">
              <p>
                Hi, my name is <strong>Hossein Almasi</strong>,I graduated with
                a bachelor's degree in Software Engineering from the Technical
                and Vocational Training Organization of Iran.
              </p>
              <p>
                I'm in love with programming and web development and do code on
                my free time
              </p>
            </span>
            <div className="flex flex-col mb-3 space-y-5 md:flex-row md:space-x-5 md:space-y-0  ">
              <GradientButton
                size={"h-[30px] w-[100px]"}
                color={"from-green-600 to-green-800"}
              >
                <h2>contact me</h2>
              </GradientButton>
              <GradientButton
                size={"h-[30px] w-[100px]"}
                color={"from-red-600 to-red-800"}
              >
                <h2>my works</h2>
              </GradientButton>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

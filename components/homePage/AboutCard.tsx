import GradientButton from "../buttons/GradientButton";
import Image from "next/image";
import IdentityDetails from "./IdentityDetails";

export default function AboutCard() {
  return (
    <section className="container flex flex-col w-full rounded-2xl border-[.5px] border-gray-300 self-center md:flex-row">
      <div className="relative w-full mx-auto h-auto rounded-t-2xl md:w-4/12 overflow-hidden md:rounded-r-none md:rounded-l-2xl md:m-0 ">
        <Image
          src="/personalImageWeb.jpg"
          alt=""
          width={500}
          height={0}
          className="mb-5 h-full w-full object-cover transition-all duration-300 hover:scale-110"
        />
      </div>

      <div className="flex flex-col justify-center items-center w-full md:w-8/12">
        <span className="text-center m-3">
          <p>
            Hi, my name is <strong>Hossein Almasi</strong>
          </p>
          <p>
            I&apos;m in love with programming and web development and I love
            coding on my free time.
          </p>
        </span>
        <IdentityDetails />
        <div className="flex flex-col mb-3 space-y-5 md:flex-row md:space-x-5 md:space-y-0  ">
          <GradientButton
            link={"/contact"}
            size={"h-[30px] w-[100px]"}
            color={"from-green-600 to-green-800"}
            shadowColor={"hover:shadow-green-800/30"}
          >
            <h2>Contact Me</h2>
          </GradientButton>
          <GradientButton
            link={"/works"}
            size={"h-[30px] w-[100px]"}
            color={"from-red-600 to-red-800"}
            shadowColor={"hover:shadow-red-800/30"}
          >
            <h2>My Resume</h2>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}

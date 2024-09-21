import Image from "next/image";
import { levelCalc, iconNameGenerator } from "../utils";

interface Props {
  title: string;
  level: number;
}

export default function Skill({ title, level }: Props) {
  const { levels, progressBarPercent } = levelCalc(level);

  return (
    <div className="relative max-w-xl flex flex-row flex-grow border-2 rounded-lg w-full min-h-36 md:aspect-square justify-center bg-white  items-center">
      <Image
        className=" w-full object-cover rounded-md"
        width={100}
        height={0}
        src={`/icons/${iconNameGenerator(title)}`}
        alt={title + "Logo"}
      />
      <div className="absolute inset-0 flex flex-col items-center before:absolute before:inset-0 before:bg-slate-400 before:transition-opacity before:duration-300 before:hover:opacity-0 before:opacity-20 before:rounded-md">
        <h2 className="text-black bg-white/85 border border-white/80 px-2 py-1 rounded-lg text-2xl font-bold">
          {title}
        </h2>
        <div className=" flex flex-col justify-end w-full h-full">
          <div className="w-full flex flex-col justify-end">
            <p className="text-gray-900 text-center leading-tight pb-5 bg-white bg-opacity-75">
              <strong>{levels}</strong>
            </p>
            <div className="w-full bg-gray-400 h-2.5 rounded-b-md">
              <div
                className={`${progressBarPercent} bg-red-700 h-2.5 ${
                  level == 100 ? "rounded-b-md" : "rounded-bl-md"
                } `}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

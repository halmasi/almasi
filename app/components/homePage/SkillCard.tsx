import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  level: number;
}

export default function Skill({ title, level }: Props) {
  let levels;
  let progressBarPercent;
  switch (true) {
    case level <= 20:
      levels = "Beginner";
      progressBarPercent = "w-[20%]";
      break;
    case level <= 40:
      levels = "Advanced Beginner";
      progressBarPercent = "w-[40%]";
      break;
    case level <= 60:
      levels = "Competent";
      progressBarPercent = "w-[60%]";
      break;
    case level <= 80:
      levels = "Proficient";
      progressBarPercent = "w-[80%]";
      break;
    default:
      levels = "Expert";
      progressBarPercent = "w-[100%]";
  }

  const bgUrl =
    title.replace(/\s/g, "").split(".").join("").toLowerCase() + ".png";

  return (
    <div className="relative max-w-xl flex flex-row flex-grow border-2 rounded-lg w-full min-h-36 md:aspect-square justify-between bg-neutral-800">
      <Image
        className=" w-full object-cover rounded-md"
        width={500}
        height={0}
        quality={100}
        src={`/icons/${bgUrl}`}
        alt={title + "Logo"}
      />
      <div className="absolute inset-0 flex flex-col items-center before:absolute before:inset-0 before:bg-slate-400 before:transition-opacity before:duration-300 before:hover:opacity-20 before:opacity-40 before:rounded-md">
        <h2 className="text-white text-3xl font-bold">{title}</h2>
        <div className=" flex flex-col justify-end w-full h-full">
          <div className="w-full flex flex-col justify-end">
            <p className="text-gray-800 text-center leading-tight pb-5 bg-white bg-opacity-50">
              <strong>{levels}</strong>
            </p>
            <div className="w-full bg-gray-400 h-2.5 rounded-b-lg">
              <div
                className={`${progressBarPercent} bg-red-700 h-2.5 ${
                  level == 100 ? "rounded-b-lg" : "rounded-bl-lg"
                } `}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

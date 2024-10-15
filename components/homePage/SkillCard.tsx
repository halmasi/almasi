import Image from "next/image";
import { levelCalc, iconNameGenerator } from "@/lib/skills";

interface Props {
  title: string;
  level: number;
}

export default function Skill({ title, level }: Props) {
  const { levels } = levelCalc(level);

  let progressClass =
    "absolute w-[105%] aspect-square -z-10 rounded-full bg-gradient-conic from-red-800 via-red-600 to-gray-300 from-[1%] ";

  switch (true) {
    case level <= 20:
      progressClass += "via-[20%] to-[20%]";
      break;
    case level <= 40:
      progressClass += "via-[40%] to-[40%]";
      break;
    case level <= 60:
      progressClass += "via-[60%] to-[60%]";
      break;
    case level <= 80:
      progressClass += "via-[80%] to-[80%]";
      break;
    default:
      progressClass += "via-[100%] to-[100%]";
  }
  return (
    <div className="flex flex-col w-full space-y-3 max-w-64">
      <h2 className="text-black text-center pt-3 pb-1 rounded-lg lg:text-xl font-bold">
        {title}
      </h2>
      <div className="relative w-full">
        <div className="overflow-hidden flex flex-row flex-grow rounded-full w-full aspect-square justify-center bg-white  items-center">
          <Image
            className=" w-full object-cover rounded-full"
            width={100}
            height={100}
            quality={10}
            src={`/icons/${iconNameGenerator(title)}`}
            alt={title + "Logo"}
          />

          <div className="absolute rounded-full overflow-hidden inset-0 flex flex-col items-center before:absolute before:inset-0 before:bg-slate-400 before:transition-opacity before:duration-300 before:hover:opacity-0 before:opacity-20 before:rounded-full">
            <div className="flex flex-col w-full bg-white/85 items-center justify-center" />
            <div className=" flex flex-col justify-end w-full h-full">
              <div className="w-full flex flex-col justify-end">
                <p className="text-gray-900 text-xs text-center leading-tight pb-5 bg-white bg-opacity-75">
                  <strong>{levels}</strong>
                </p>
              </div>
            </div>
          </div>
          <div className={progressClass} />
        </div>
      </div>
    </div>
  );
}

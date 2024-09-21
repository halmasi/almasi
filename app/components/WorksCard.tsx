import Image from "next/image";

interface Props {
  title: string;
  describtion: string;
  picture: string;
  link: string;
}

export default function WorksCard({
  title,
  describtion,
  picture,
  link,
}: Props) {
  return (
    <div className=" flex flex-col w-full shadow-sm border items-center py-5 px-4 rounded-xl">
      <div className="relative flex flex-row flex-grow border-2 rounded-lg w-[calc(100%-10px)] aspect-square justify-center bg-neutral-800 transition-transform duration-300 hover:scale-[102%]">
        <Image
          src={picture}
          alt={title}
          width={100}
          height={0}
          className="w-full object-cover rounded-md"
        />
        <div className="absolute inset-0 flex flex-col items-center before:absolute before:inset-0 before:bg-slate-400 before:transition-opacity before:duration-300 before:hover:opacity-0 before:opacity-20 before:rounded-md">
          <h2 className="text-white text-2xl font-bold drop-shadow-sm">
            {title}
          </h2>
        </div>
      </div>
      <p className="text-center py-5">{describtion}</p>
      <a
        href={link}
        className="px-4 py-1 rounded-full border mb-3 hover:bg-slate-100 transition-colors duration-150"
        target="_blank"
      >
        Link to project {"->"}
      </a>
    </div>
  );
}

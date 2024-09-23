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
      <Image
        src={picture}
        alt={title}
        width={100}
        height={0}
        className="w-full object-cover shadow-md rounded-full transition-all duration-1000 hover:rounded-none"
      />
      <h2 className="text-gray-700 text-2xl font-bold drop-shadow-sm">
        {title}
      </h2>
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

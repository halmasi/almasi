import Image from "next/image";
import Link from "next/link";
import { BiDetail } from "react-icons/bi";

interface Props {
  id: number;
  title: string;
  publishDate: string;
  describtion: string;
  picture: string;
}

export default function BlogCard({
  id,
  title,
  describtion,
  picture,
  publishDate,
}: Props) {
  return (
    <div className="flex flex-col space-y-3 p-4 rounded-xl border-2 w-full">
      <div className="flex flex-row justify-between text-xs text-gray-500">
        <p>
          category:{" "}
          <Link className="text-red-900" href={"#"}>
            {"category"}
          </Link>
        </p>
        <p>publish date: {publishDate}</p>
      </div>
      <Image
        src={picture}
        alt={title}
        width={200}
        height={100}
        className="w-full object-cover rounded-md max-h-52"
      />
      <h2 className="text-2xl font-bold drop-shadow-sm">{title}</h2>
      <p>{describtion}</p>
      <Link
        href={`blog/${id}`}
        className="flex flex-row px-4 py-1 rounded-full border mb-3 hover:bg-red-50/50 transition-colors duration-300 w-36 items-center border-red-900"
      >
        <BiDetail className="mr-2 text-lg" />
        <p className="text-sm">read more...</p>
      </Link>
    </div>
  );
}

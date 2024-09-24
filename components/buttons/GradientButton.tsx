import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  size: String;
  color: String;
  link: Url;
  shadowColor: string;
}

export default function GradientButton({
  children,
  size,
  color,
  link,
  shadowColor,
}: Props) {
  return (
    <div className="relative inline-flex group">
      <div
        className={`card-wrapper ${size} self-center text-black bg-gradient-to-bl ${color}  hover:shadow-md ${shadowColor} duration-300`}
      >
        <Link
          href={link}
          className="card-content flex items-center justify-center text-xs"
        >
          <div className=" text-center">{children}</div>
        </Link>
      </div>
    </div>
  );
}

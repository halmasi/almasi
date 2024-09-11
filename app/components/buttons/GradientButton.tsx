import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  size: String;
  color: String;
  link: Url;
}

export default function GradientButton({ children, size, color, link }: Props) {
  return (
    <div
      className={`card-wrapper ${size} self-center text-black bg-gradient-to-bl ${color}`}
    >
      <Link
        href={link}
        className="card-content flex items-center justify-center text-xs"
      >
        <div className=" text-center">{children}</div>
      </Link>
    </div>
  );
}

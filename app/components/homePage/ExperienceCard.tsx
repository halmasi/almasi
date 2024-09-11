import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: number;
  title: String;
}

export default function ExperienceCard({ children, id, title }: Props) {
  return (
    <div
      className={`my-10 flex justify-between items-center ${
        id % 2 == 0 ? "md:flex-row-reverse" : undefined
      }`}
    >
      <div className="hidden md:flex md:w-5/12"></div>
      <div className=" flex items-center bg-red-900 w-12 h-12 rounded-full">
        <h2 className="mx-auto font-semibold text-lg text-white">{id}</h2>
      </div>
      <div className=" border-2 rounded-lg shadow-xl w-3/4 md:w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-black text-xl">{title}</h3>
        <p className="text-gray-800 leading-tight">{children}</p>
      </div>
    </div>
  );
}

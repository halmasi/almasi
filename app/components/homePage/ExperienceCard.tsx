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
        id % 2 == 0 ? "md:flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="hidden md:block md:w-5/12"></div>

      <div className="flex items-center ml-[10px] md:ml-[1px] w-[40px] aspect-square rounded-full bg-slate-50 justify-center">
        <div className=" bg-gradient-to-bl to-red-300 from-red-900 animate-pulse rounded-full w-[calc(100%-20px)] aspect-square"></div>
        <h3 className="font-semibold text-lg text-white"></h3>
      </div>
      <div className=" border-2 rounded-lg shadow-xl w-3/4 md:w-5/12 px-6 py-4">
        <h2 className="mb-3 font-bold text-black text-xl">{title}</h2>
        <p className="text-gray-800 leading-tight">{children}</p>
      </div>
    </div>
  );
}

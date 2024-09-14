import Image from "next/image";
import React from "react";

export default function Test() {
  return (
    <>
      <div className="relative max-w-xl mx-auto mt-20">
        <Image
          className="h-64 w-full object-cover rounded-md"
          width={100}
          height={100}
          src={"/icons/javascript.png"}
          alt="Random image"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">javascript</h2>
        </div>
      </div>
    </>
  );
}

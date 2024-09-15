import React from "react";

export default function IdentityDetails() {
  //

  const age = Math.floor(
    (new Date().getTime() - new Date(1998, 6, 14).getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)
  );

  return (
    <div className="justify-start mx-5">
      <div className="group relative flex flex-row text-left">
        <span>
          <strong>Age:</strong> {age}
        </span>
        <span className="absolute z-20 scale-0 transition-all rounded bg-gray-800 p-2 ml-24 text-xs text-white group-hover:scale-100">
          1998 June 14
        </span>
      </div>

      <h3 className="text-lg">
        <strong>Languages:</strong>
      </h3>
      <div className="flex flex-col md:flex-row justify-between md:mx-10">
        <div className="group relative flex flex-row text-left">
          <span>
            <strong>Persian</strong>
          </span>
          <span className="absolute z-20 ml-24 scale-0 transition-all rounded bg-gray-800 p-2  text-xs text-white group-hover:scale-100">
            Native or bilingual proficiency
          </span>
        </div>
        <div className="group relative flex flex-row text-left">
          <span>
            <strong>English</strong>
          </span>
          <span className="absolute z-20 scale-0 transition-all rounded bg-gray-800 p-2 ml-24 text-xs text-white group-hover:scale-100">
            Professional working proficiency
          </span>
        </div>
      </div>

      <div className="group relative flex flex-col justify-center mb-5">
        <span>
          <strong>Education:</strong> bachelor&apos;s of Software Engineering
        </span>
        <span className="absolute scale-0 z-20 transition-all rounded bg-gray-800 p-2 mt-24 md:mt-10 text-xs text-white group-hover:scale-100">
          from Technicaland Vocational Training Organization of Iran
        </span>
      </div>
    </div>
  );
}

import React from "react";

export default function IdentityDetails() {
  //

  const age = Math.floor(
    (new Date().getTime() - new Date(1998, 6, 14).getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)
  );

  return (
    <div className="justify-start mx-5">
      <table className="min-w-full">
        <tbody>
          <tr className="border-gray-300 border-b-2">
            <td className="group relative flex flex-row text-left">
              <span>
                <strong>Age:</strong> {age}
              </span>
              <span className="absolute z-20 scale-0 transition-all rounded bg-gray-800 p-2 ml-24 text-xs text-white group-hover:scale-100">
                1998 June 14
              </span>
            </td>
          </tr>
          <tr className="border-gray-200 border-b">
            <h3 className="text-lg">
              <strong>Languages:</strong>
            </h3>
          </tr>
          <tr className="flex flex-col md:flex-row justify-between md:px-10 border-gray-300 border-b-2">
            <td className="group relative flex flex-row text-left border-b border-gray-200 md:border-0">
              <span>
                <strong>Persian</strong>
              </span>
              <span className="absolute z-20 ml-24 scale-0 transition-all rounded bg-gray-800 p-2  text-xs text-white group-hover:scale-100">
                Native
              </span>
            </td>
            <td className="hidden md:block text-gray-300">|</td>
            <td className="group relative flex flex-row text-left">
              <span>
                <strong>English</strong>
              </span>
              <span className="absolute z-20 scale-0 transition-all rounded bg-gray-800 p-2 ml-24 text-xs text-white group-hover:scale-100">
                Professional working proficiency
              </span>
            </td>
          </tr>
          <tr>
            <td className="group relative flex flex-col justify-center mb-5">
              <span>
                <strong>Education:</strong> bachelor&apos;s of Software
                Engineering
              </span>
              <span className="absolute scale-0 z-20 transition-all rounded bg-gray-800 p-2 mt-24 md:mt-14 text-xs text-white group-hover:scale-100">
                from Technicaland Vocational Training Organization of Iran
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

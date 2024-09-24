import { FaPerson, FaLanguage, FaBook } from "react-icons/fa6";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function IdentityDetails() {
  const age = Math.floor(
    (new Date().getTime() - new Date(1998, 6, 14).getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)
  );

  return (
    <ul className="justify-start mx-5">
      <li className="group relative text-left border-gray-300 border-b-2">
        <div className="flex flex-row items-center space-x-2">
          <FaPerson />
          <strong>Age:</strong> {age}
          <BsFillInfoCircleFill className="text-sm text-gray-500" />
        </div>
        <span className="absolute z-20 scale-0 transition-all rounded bg-gray-800 p-2 ml-24 text-xs text-white group-hover:scale-100">
          1998 June 14
        </span>
      </li>
      <li className="border-gray-200 border-b">
        <div className="flex flex-row items-center space-x-5">
          <FaLanguage />
          <h3 className="text-lg">
            <strong>Languages:</strong>
          </h3>
        </div>
      </li>
      <li className="flex flex-col md:flex-row justify-between md:px-10 border-gray-300 border-b-2">
        <div className="group relative text-left border-b border-gray-200 md:border-0">
          <div className="flex flex-row items-center space-x-2">
            <p>
              <strong>Persian</strong>
            </p>
            <BsFillInfoCircleFill className="text-sm text-gray-500" />
          </div>
          <span className="absolute z-20 scale-0 transition-all rounded bg-gray-800 p-2  text-xs text-white group-hover:scale-100">
            Native
          </span>
        </div>
        <a className="hidden md:block text-gray-300">|</a>
        <div className="group relative text-left">
          <div className="flex flex-row items-center space-x-2">
            <p>
              <strong>English</strong>
            </p>
            <BsFillInfoCircleFill className="text-sm text-gray-500" />
          </div>
          <span className="absolute z-20 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
            Professional working proficiency
          </span>
        </div>
      </li>
      <li>
        <div className="group relative flex flex-col justify-center mb-5">
          <div className="flex flex-col items-start">
            <p>
              <span className="flex flex-row items-center space-x-5">
                <FaBook />
                <strong>Education:</strong>
              </span>
            </p>
            <p className="flex flex-row items-center space-x-2">
              <span>bachelor&apos;s of Software Engineering</span>
              <BsFillInfoCircleFill className="text-gray-500 text-xl md:text-sm" />
            </p>
          </div>
          <span className="absolute scale-0 z-20 transition-all rounded bg-gray-800 p-2 mt-24 md:mt-14 text-xs text-white group-hover:scale-100">
            from Technicaland Vocational Training Organization of Iran
          </span>
        </div>
      </li>
    </ul>
  );
}

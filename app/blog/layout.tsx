import { FaMagnifyingGlass } from "react-icons/fa6";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <form
          className="flex flex-row self-center w-full justify-center mb-5"
          action="search"
        >
          <input
            className="px-4 bg-white rounded-l-full border border-r-0 border-red-900 shadow-md focus:shadow-lg focus:border-red-500"
            type="search"
            name="searchbox"
            id="searchbox"
            placeholder={`Search ...`}
          />
          <button
            className="px-4 py-2 rounded-r-full bg-green-800 text-white border border-l-0 border-red-900"
            type="submit"
          >
            <FaMagnifyingGlass />
          </button>
        </form>
      </header>
      {children}
    </>
  );
}

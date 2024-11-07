import { FaMagnifyingGlass } from "react-icons/fa6";

export default function blogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <form
          className="flex flex-row self-center w-full justify-center mb-5"
          action="/blog/search"
        >
          <input
            className="px-4 h-auto w-3/4 md:w-auto bg-white rounded-l-full border border-r-0 transition-all duration-200 hover:border-red-700 shadow-md focus:shadow-lg focus:outline-none focus:border-red-900"
            type="search"
            name="q"
            id="searchbox"
            placeholder={`Search ...`}
          />
          <button
            className="w-1/4 md:w-14 h-10 flex flex-col items-center justify-center rounded-r-full transition-all duration-200 bg-green-700 text-white shadow-md hover:bg-green-500 hover:text-lg focus:bg-green-900 focus:shadow-sm focus:text-sm"
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

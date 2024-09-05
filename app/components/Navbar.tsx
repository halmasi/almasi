"use client";
import MenuButton from "./MenuButton";
import Link from "next/link";
import { Tangerine } from "next/font/google";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["700"],
});

const navbarLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Blog", link: "/blog" },
  { id: 3, name: "Skills", link: "/skills" },
  { id: 4, name: "About me", link: "/about" },
];

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const navSeter = () => {
    setShowNav(false);
  };

  return (
    <div className="shadow-lg bg-white">
      <nav className=" pt-5 flex md:flex-row md:mx-16 md:justify-between flex-col items-center">
        <ul
          className={
            "hidden md:flex flex-row space-x-5 pb-4 items-center self-center"
          }
        >
          {navbarLinks.map((item) => (
            <li className="my-5" key={item.id}>
              <MenuButton link={item.link}>{item.name}</MenuButton>
            </li>
          ))}
        </ul>
        <div className="flex flex-row space-x-20 justify-center">
          <span
            className={`${tangerine.className} text-red-800 left-0 text-5xl`}
          >
            <Link className="drop-shadow-md" href={"/"}>
              Hossein Almasi
            </Link>
          </span>
          <div onClick={() => setShowNav(!showNav)} className="md:hidden">
            {showNav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
        {showNav && (
          <ul className={"md:hidden flex flex-col pb-4 items-center"}>
            {navbarLinks.map((item) => (
              <li className="my-5" key={item.id}>
                <MenuButton func={navSeter} link={item.link}>
                  {item.name}
                </MenuButton>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
}
export default Navbar;

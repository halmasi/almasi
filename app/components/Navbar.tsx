"use client";
import MenuButton from "./MenuButton";
import Link from "next/link";
import { Tangerine } from "next/font/google";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
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
    <div className="shadow-lg bg-white sticky top-0 z-40 ">
      <nav className=" pt-5 md:flex md:flex-row md:mx-16 md:justify-between flex-col items-center ">
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
        <div className="flex flex-row space-x-10 justify-between py-3 px-5">
          <span
            className={`${tangerine.className} text-red-800 left-0 text-4xl md:text-5xl`}
          >
            <Link className="drop-shadow-md" href={"/"}>
              Hossein Almasi
            </Link>
          </span>
          <div onClick={() => setShowNav(!showNav)} className="md:hidden">
            {showNav ? (
              <LiaTimesSolid size={30} />
            ) : (
              <FaBarsStaggered size={30} />
            )}
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

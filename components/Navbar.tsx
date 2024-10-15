"use client";
import MenuButton from "./buttons/MenuButton";
import Link from "next/link";
import { Tangerine } from "next/font/google";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["700"],
});

export const navbarLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Blog", link: "/blog" },
  { id: 4, name: "Works", link: "/works" },
  { id: 5, name: "Contact", link: "/contact" },
];

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const navSeter = () => {
    setShowNav(false);
  };

  return (
    <div className="shadow-lg bg-white">
      <nav className=" pt-5 md:flex md:flex-row md:mx-16 md:justify-between flex-col items-center ">
        <ul
          className={
            "hidden md:flex flex-row space-x-5 pb-4 items-center self-center"
          }
        >
          {navbarLinks.map((item) => (
            <MenuButton key={item.id} link={item.link}>
              {item.name}
            </MenuButton>
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
          <ul className={"md:hidden flex flex-col pb-4 items-start"}>
            {navbarLinks.map((item) => (
              <MenuButton
                key={item.id}
                func={navSeter}
                link={item.link}
                style="my-0.5 bg-gray-50"
              >
                {item.name}
              </MenuButton>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
}
export default Navbar;

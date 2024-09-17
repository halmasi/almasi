"use client";
import { navbarLinks } from "../Navbar";
import MenuButton from "../buttons/MenuButton";

export default function FooterMenu() {
  return (
    <ul
      className={
        "px-10 w-full duration-300 transition-transform flex flex-col pb-4 border-gray-300/20"
      }
    >
      <li className="text-gray-200 text-center p-5">
        <strong>Quick Links</strong>
      </li>
      {navbarLinks.map((item) => (
        <MenuButton key={item.id} link={item.link} style="text-gray-300 my-2">
          {item.name}
        </MenuButton>
      ))}
    </ul>
  );
}

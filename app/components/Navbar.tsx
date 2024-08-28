import MenuButton from "./MenuButton";
import Image from "next/image";
import logo from "@/public/favicon.png";
import Link from "next/link";
import { Tangerine } from "next/font/google";

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
  return (
    <div className="shadow-lg bg-white">
      <nav className=" pt-5 flex flex-row-reverse mx-24 justify-between h-32 ">
        <ul className=" flex flex-row space-x-5">
          {navbarLinks.map((item) => (
            <li className="p-2 my-5" key={item.id}>
              <MenuButton link={item.link}>{item.name}</MenuButton>
            </li>
          ))}
        </ul>
        <Image src={logo} alt="logo" className="h-20 w-auto drop-shadow-md" />
        <span className={`${tangerine.className} text-6xl content-center`}>
          <Link href={"/"}>Hossein Almasi</Link>
        </span>
      </nav>
    </div>
  );
}
export default Navbar;

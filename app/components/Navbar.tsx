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
      <nav className=" pt-5 flex flex-row mx-24 justify-between h-32 ">
        <ul className=" flex flex-row space-x-4">
          {navbarLinks.map((item) => (
            <li className="my-5" key={item.id}>
              <MenuButton link={item.link}>{item.name}</MenuButton>
            </li>
          ))}
        </ul>
        <Link className="h-20 w-20" href={"/"}>
          <Image
            src={logo}
            alt="logo"
            className="object-cover h-20 w-20 drop-shadow-md"
          />
        </Link>
        <span className={`${tangerine.className} text-6xl content-center`}>
          <Link className="drop-shadow-md" href={"/"}>
            Hossein Almasi
          </Link>
        </span>
      </nav>
    </div>
  );
}
export default Navbar;

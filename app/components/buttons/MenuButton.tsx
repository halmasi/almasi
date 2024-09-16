"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  link: string;
  style?: string;
  func?: () => void;
}

function MenuButton({ children, link, style, func }: Props) {
  const path = usePathname();

  return (
    <Link onClick={func} href={link} className="w-full">
      <li
        className={`${
          (path.startsWith(link) && link !== "/") || path === link
            ? "text-red-800 border-red-700"
            : "border-gray-300"
        } p-3 border-l-[20px] md:border-l-0 md:border-b-4 md:my-5 text-center ${style}`}
      >
        {children}
      </li>
    </Link>
  );
}

export default MenuButton;

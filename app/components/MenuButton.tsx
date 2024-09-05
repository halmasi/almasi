"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  link: string;
  func?: () => void;
}

function MenuButton({ children, link, func }: Props) {
  const path = usePathname();

  return (
    <Link
      onClick={func}
      className={`${
        (path.startsWith(link) && link !== "/") || path === link
          ? "text-red-800 border-red-700"
          : "border-gray-300"
      } p-3 border-b-4`}
      href={link}
    >
      {children}
    </Link>
  );
}

export default MenuButton;

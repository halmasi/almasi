"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  link: string;
}

function MenuButton({ children, link }: Props) {
  const path = usePathname();

  return (
    <Link
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

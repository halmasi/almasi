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
    <Link className={path === link ? "text-red-800" : undefined} href={link}>
      {children}
    </Link>
  );
}

export default MenuButton;

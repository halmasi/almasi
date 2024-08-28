import { Russo_One } from "next/font/google";

const font = Russo_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Titles({
  children,
  status,
}: {
  children: React.ReactNode;
  status?: string;
}) {
  return (
    <h1 className={`text-4xl text-center ${font.className}`}>{children}</h1>
  );
}

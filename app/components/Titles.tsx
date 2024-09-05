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
    <h1 className={`${font.className} text-4xl text-center pb-10`}>
      {children}
    </h1>
  );
}

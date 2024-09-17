import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterMenu from "./components/footer/FooterMenu";
import SocialLinks from "./components/SocialLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hossein Almasi",
  description: "My Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>
        <p className="text-center text-gray-200 text-lg bg-green-900 bg-[url('/pcb.svg')]">
          Hi, I&apos;m <strong>Hossein Almasi</strong>, a web developer and
          programming lover
        </p>
        <Navbar />
        <div className=" flex justify-center">
          <div className="w-3/4 pt-5 min-h-screen md:w-8/12">{children}</div>
        </div>
        <footer className="flex flex-col md:flex-row justify-center w-full bg-zinc-800 shadow-inner shadow-slate-600 min-h-52  px-5 md:px-32">
          <FooterMenu />
          <SocialLinks />
          <FooterMenu />
        </footer>
      </body>
    </html>
  );
}

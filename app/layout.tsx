import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Copyright from "./components/Copyright";

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
          <div className="flex flex-col w-3/4 pt-5 min-h-screen md:w-8/12">
            {children}
          </div>
        </div>
        <footer className="flex flex-col-reverse md:flex-row justify-between  w-full bg-green-900 bg-[url('/pcb.svg')] shadow-inner shadow-slate-600  px-5 md:px-32">
          <Copyright />
          <SocialLinks />
        </footer>
      </body>
    </html>
  );
}

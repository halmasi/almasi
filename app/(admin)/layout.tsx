import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocialLinks from "@/components/SocialLinks";
import Copyright from "@/components/Copyright";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Admin",
	description: "My Personal Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-slate-50`}>
				<header></header>
				<div className=' flex justify-center'>
					<div className='flex flex-col w-3/4 pt-5 min-h-screen md:w-8/12'>
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}

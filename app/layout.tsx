import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import coverImg from "@/public/images/cover_low.png";
import clsx from "clsx";
import FooterSection from "@/components/footer";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name + ' ' + siteConfig.serial + " | " + siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-4 px-6 flex-grow">
							<Image className="mb-5" src={coverImg} alt="Construct Carnival Cover Photo" />
							{children}
						</main>
						<footer className="w-full flex items-center justify-center">
							<FooterSection />
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}

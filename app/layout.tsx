import type { Metadata } from "next";
import { interFont, geistMono, roboto, poppins } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "Sotask | All in One Productivity",
	description: "Forget your ADHD, say hi to ultimate solo-leveling",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${interFont.variable} ${geistMono.variable} ${roboto.variable} ${poppins.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}

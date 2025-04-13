import { Inter, Geist_Mono, Roboto, Poppins } from "next/font/google";

export const interFont = Inter({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const roboto = Roboto({
	weight: ["400", "700"],
	variable: "--font-roboto",
	subsets: ["latin"],
});

export const poppins = Poppins({
	weight: ["300", "400", "600"],
	variable: "--font-poppins",
	subsets: ["latin"],
});

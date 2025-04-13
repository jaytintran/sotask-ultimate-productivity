import Navbar from "@/components/Navbar";
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import Pricing from "@/components/landing/Pricing";
import Testimonial from "@/components/landing/Testimonial";

export default function LandingPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-zinc-950 to-black text-white font-sans">
			<Navbar />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<Hero />
				<Pricing />
				<Testimonial />
				<Features />
			</div>

			{/* Footer */}
			<footer className="text-center text-zinc-500 py-10 border-t border-zinc-800 text-sm">
				© {new Date().getFullYear()} Sotask. All rights reserved.
			</footer>
		</div>
	);
}

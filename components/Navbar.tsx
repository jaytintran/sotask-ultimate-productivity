import React from "react";
import LButton from "@/components/ui/legacy-button";

const Navbar = () => {
	return (
		<header className="flex justify-between items-center px-10 py-6 border-b border-zinc-800">
			<div className="text-2xl font-bold text-white">Sotask</div>
			<nav className="space-x-6">
				<LButton href="/sign-in" variant="secondary">
					Sign In
				</LButton>
				<LButton href="/sign-up" variant="primary">
					Sign Up
				</LButton>
			</nav>
		</header>
	);
};

export default Navbar;

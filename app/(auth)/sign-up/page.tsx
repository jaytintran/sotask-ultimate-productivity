"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";
import { Facebook, Mail, Lock, User, Chrome } from "lucide-react";

export default function SignUpPage() {
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		// Simulate API call
		setTimeout(() => setIsLoading(false), 1500);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-950 to-black text-white p-4">
			<div className="w-full max-w-md">
				{/* Logo */}
				<div className="mb-8 text-center">
					<h1 className="text-3xl font-bold text-white">Sotask</h1>
					<p className="text-zinc-400 mt-1">Create your account</p>
				</div>

				{/* Card */}
				<div className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-xl border border-zinc-700/50 shadow-xl">
					<h2 className="text-2xl font-bold mb-6">Sign Up</h2>

					<form onSubmit={handleSubmit} className="space-y-5">
						<div className="space-y-2">
							<label
								htmlFor="name"
								className="text-sm font-medium text-zinc-300 block"
							>
								Full Name
							</label>
							<div className="relative">
								<User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
								<input
									id="name"
									type="text"
									placeholder="John Doe"
									className="w-full p-3 pl-10 rounded-lg bg-zinc-700/50 border border-zinc-600 text-white focus:ring-2 focus:ring-[#fca311] focus:border-transparent transition-all outline-none"
									required
								/>
							</div>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="email"
								className="text-sm font-medium text-zinc-300 block"
							>
								Email
							</label>
							<div className="relative">
								<Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
								<input
									id="email"
									type="email"
									placeholder="name@example.com"
									className="w-full p-3 pl-10 rounded-lg bg-zinc-700/50 border border-zinc-600 text-white focus:ring-2 focus:ring-[#fca311] focus:border-transparent transition-all outline-none"
									required
								/>
							</div>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="password"
								className="text-sm font-medium text-zinc-300 block"
							>
								Password
							</label>
							<div className="relative">
								<Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
								<input
									id="password"
									type="password"
									placeholder="••••••••"
									className="w-full p-3 pl-10 rounded-lg bg-zinc-700/50 border border-zinc-600 text-white focus:ring-2 focus:ring-[#fca311] focus:border-transparent transition-all outline-none"
									required
								/>
							</div>
						</div>

						<div className="flex items-center">
							<input
								id="terms"
								type="checkbox"
								className="h-4 w-4 rounded border-zinc-600 text-[#fca311] focus:ring-[#fca311]"
								required
							/>
							<label
								htmlFor="terms"
								className="ml-2 block text-sm text-zinc-300"
							>
								I agree to the{" "}
								<Link href="/terms" className="text-[#fca311] hover:underline">
									Terms of Service
								</Link>{" "}
								and{" "}
								<Link
									href="/privacy"
									className="text-[#fca311] hover:underline"
								>
									Privacy Policy
								</Link>
							</label>
						</div>

						<Button
							type="submit"
							className="w-full py-3 bg-[#fca311] hover:bg-[#fca311]/90 text-black font-medium rounded-lg transition-all"
							disabled={isLoading}
						>
							{isLoading ? "Creating account..." : "Create Account"}
						</Button>
					</form>

					<div className="mt-6">
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<Separator className="w-full" />
							</div>
							<div className="relative flex justify-center text-xs uppercase">
								<span className="bg-zinc-800 px-2 text-zinc-400">
									Or continue with
								</span>
							</div>
						</div>

						<div className="mt-6 grid grid-cols-2 gap-3">
							<button className="flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-sm font-medium hover:bg-zinc-700 transition-all">
								<Chrome className="h-5 w-5 text-[#4285F4]" />
								Google
							</button>
							<button className="flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-sm font-medium hover:bg-zinc-700 transition-all">
								<Facebook className="h-5 w-5 text-[#1877F2]" />
								Facebook
							</button>
						</div>
					</div>
				</div>

				<p className="mt-6 text-center text-sm text-zinc-400">
					Already have an account?{" "}
					<Link
						href="/sign-in"
						className="text-[#fca311] hover:underline font-medium"
					>
						Sign in
					</Link>
				</p>
			</div>
		</div>
	);
}

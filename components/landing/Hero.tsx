import React from "react";
import Image from "next/image";

const Hero = () => {
	return (
		<section className="relative overflow-hidden bg-dark container mx-auto from-background to-background/80 py-20 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="flex flex-col text-left space-y-8">
						<div className="space-y-6">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
								Supercharge Your Productivity
							</h1>
							<p className="text-zinc-400 text-lg md:text-xl max-w-[600px]">
								Manage your tasks, habits, and goals all in one place. The
								all-in-one solution designed to help you achieve more with less
								stress.
							</p>
						</div>
						<div className="flex flex-col sm:flex-row gap-4">
							<a
								href="/signup"
								className="button-primary inline-flex items-center justify-center px-6 py-3 rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors"
							>
								Get Started Free
							</a>
							<a
								href="#features"
								className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 hover:text-primary dark:hover:bg-zinc-800 transition-colors"
							>
								See How It Works
							</a>
						</div>
						<div className="flex items-center gap-4 text-sm text-zinc-500">
							<div className="flex -space-x-2">
								{[1, 2, 3, 4].map((i) => (
									<div
										key={i}
										className="w-8 h-8 rounded-full border-2 border-background bg-zinc-500 dark:bg-zinc-800"
									/>
								))}
							</div>
							<p>Join 10,000+ users already boosting their productivity</p>
						</div>
					</div>
					<div className="relative">
						<div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-2xl opacity-70"></div>
						<div className="relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
							<div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
							<Image
								src="/app-demo.png"
								alt="Sotask App Interface"
								width={800}
								height={500}
								className="w-full h-auto"
								priority
							/>
						</div>
						<div className="absolute -z-10 top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

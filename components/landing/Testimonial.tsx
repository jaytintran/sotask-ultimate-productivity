import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { ComponentProps } from "react";

const testimonials = [
	{
		id: 1,
		name: "Alex Rivera",
		designation: "Software Engineer",
		company: "TechNova",
		testimonial:
			"Sotask transformed my workflow completely. The intuitive interface and powerful features have boosted my productivity by at least 40%.",
		avatar: "https://randomuser.me/api/portraits/men/32.jpg",
		twitterHandle: "@alexdev",
	},
	{
		id: 2,
		name: "Sophia Chen",
		designation: "Product Manager",
		company: "InnovateX",
		testimonial:
			"As someone who juggles multiple projects, Sotask has been a game-changer. The timeline view and habit tracking integration are simply brilliant.",
		avatar: "https://randomuser.me/api/portraits/women/44.jpg",
		twitterHandle: "@sophiapm",
	},
	{
		id: 3,
		name: "Marcus Johnson",
		designation: "UX Designer",
		company: "DesignForward",
		testimonial:
			"The clean, distraction-free interface helps me focus on what matters. Sotask is the perfect blend of simplicity and powerful features.",
		avatar: "https://randomuser.me/api/portraits/men/22.jpg",
		twitterHandle: "@marcusux",
	},
	{
		id: 4,
		name: "Priya Sharma",
		designation: "Freelance Developer",
		company: "Self-employed",
		testimonial:
			"Sotask helps me manage client projects, personal tasks, and habits all in one place. The dark mode is easy on the eyes during late-night coding sessions.",
		avatar: "https://randomuser.me/api/portraits/women/28.jpg",
		twitterHandle: "@priyacodes",
	},
	{
		id: 5,
		name: "David Wilson",
		designation: "Startup Founder",
		company: "LaunchPad",
		testimonial:
			"After trying dozens of productivity tools, Sotask is the only one that stuck. It's become an essential part of my daily routine and team workflow.",
		avatar: "https://randomuser.me/api/portraits/men/41.jpg",
		twitterHandle: "@davidfounds",
	},
	{
		id: 6,
		name: "Emma Rodriguez",
		designation: "Content Creator",
		company: "CreativeMinds",
		testimonial:
			"The habit tracking feature has helped me build consistency in my content creation. I've published more in the last 3 months than the entire previous year!",
		avatar: "https://randomuser.me/api/portraits/women/63.jpg",
		twitterHandle: "@emmacreates",
	},
];

const TestimonialCard = ({ testimonial }) => (
	<div className="bg-accent text-black rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
		<div className="flex items-center justify-between mb-4">
			<div className="flex items-center gap-4">
				<Avatar>
					<AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
						{testimonial.name.charAt(0)}
					</AvatarFallback>
				</Avatar>
				<div>
					<p className="text-lg font-semibold">{testimonial.name}</p>
					<p className="text-sm text-gray-500">
						{testimonial.designation} at {testimonial.company}
					</p>
				</div>
			</div>
			<Button variant="ghost" size="icon" asChild>
				<Link
					href={`https://twitter.com/${testimonial.twitterHandle.substring(1)}`}
					target="_blank"
				>
					<TwitterLogo className="w-4 h-4" />
				</Link>
			</Button>
		</div>
		<p className="mt-2 text-[17px] leading-relaxed">
			{testimonial.testimonial}
		</p>
	</div>
);

const Testimonial = () => (
	<section className="py-20 my-12 px-6">
		<div className="max-w-7xl mx-auto">
			<h2 className="mb-12 text-4xl md:text-5xl font-bold text-center">
				What Our Users Say
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{testimonials.map((testimonial) => (
					<TestimonialCard key={testimonial.id} testimonial={testimonial} />
				))}
			</div>
		</div>
	</section>
);

const TwitterLogo = (props: ComponentProps<"svg">) => (
	<svg
		role="img"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<title>X</title>
		<path
			fill="currentColor"
			d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
		/>
	</svg>
);

export default Testimonial;

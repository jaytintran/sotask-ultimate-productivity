import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

// Define plan data structure
type PlanFeature = string;

interface PricingPlan {
	name: string;
	description: string;
	features: PlanFeature[];
	price: string;
	ctaText: string;
	ctaLink: string;
	highlighted?: boolean;
	isPopular?: boolean;
	buttonText?: string;
}

// Plan data
const pricingPlans: PricingPlan[] = [
	{
		name: "Free",
		description: "Perfect for individuals getting started.",
		features: ["3 Projects", "Task + Habit Tracking", "Basic Analytics"],
		price: "$0/mo",
		buttonText: "Choose Plan",
		ctaText: "Get Started Free",
		ctaLink: "/auth/signup",
	},
	{
		name: "Pro",
		description: "For power users and productivity junkies.",
		features: [
			"Unlimited Projects",
			"Timeline & Autofocus",
			"Priority Support",
		],
		price: "$9/mo",
		buttonText: "Choose Plan",
		ctaText: "Get Started Free",
		ctaLink: "/auth/signup",
		highlighted: true,
		isPopular: true,
	},
	{
		name: "Enterprise",
		description: "Custom solution for teams and businesses.",
		features: ["Team Access", "Custom Integrations", "Onboarding & Support"],
		price: "Contact Us",
		buttonText: "Get in Touch",
		ctaText: "Get Started Free",
		ctaLink: "mailto:sales@sotask.app",
	},
];

// Plan card component
const PlanCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
	const cardClasses = `
    ${
			plan.highlighted
				? "border-2 border-indigo-600 scale-105"
				: "border border-zinc-700"
		} 
    rounded-xl p-8 bg-[var(--primary-dark)]
  `;

	return (
		<div className={cardClasses}>
			<h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
			<p className="text-zinc-400 mb-6">{plan.description}</p>
			<ul className="space-y-2 text-sm text-zinc-300 mb-6">
				{plan.features.map((feature, index) => (
					<li key={index}>✓ {feature}</li>
				))}
			</ul>
			<div className="text-2xl font-bold mb-4 text-left">{plan.price}</div>
			<div className="w-full">
				<Button href={plan.ctaLink} className="w-full block text-center">
					{plan.ctaText}
				</Button>
			</div>
		</div>
	);
};

// const Pricing = () => {
// 	return (
// 		<section className="py-20 bg-black px-6">
// 			<h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
// 			<div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
// 				{pricingPlans.map((plan, index) => (
// 					<PlanCard key={index} plan={plan} />
// 				))}
// 			</div>
// 		</section>
// 	);
// };

const Pricing = () => {
	return (
		<div className="flex flex-col items-center justify-center py-12 px-6">
			<h1 className="text-5xl font-bold text-center tracking-tight">Pricing</h1>
			<div className="mt-12 max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
				{pricingPlans.map((plan) => (
					<div
						key={plan.name}
						className={cn("relative border rounded-lg p-6", {
							"border-[2px] border-[#fca311] py-10": plan.isPopular,
						})}
					>
						{plan.isPopular && (
							<Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
								Most Popular
							</Badge>
						)}
						<h3 className="text-lg font-medium">{plan.name}</h3>
						<p className="mt-2 text-4xl font-bold">{plan.price}</p>
						<p className="mt-4 font-medium text-muted-foreground">
							{plan.description}
						</p>
						<Separator className="my-4" />
						<ul className="space-y-2">
							{plan.features.map((feature) => (
								<li key={feature} className="flex items-start gap-2">
									<CircleCheck className="h-4 w-4 mt-1 text-green-600" />
									{feature}
								</li>
							))}
						</ul>
						<Link href={plan.ctaLink} className="block">
							<Button
								variant={plan.isPopular ? "primary" : "secondary"}
								size="lg"
								className="w-full mt-6 cursor-pointer"
							>
								{plan.buttonText}
							</Button>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Pricing;

import Link from "next/link";
import React from "react";

const LButton = ({
	children,
	href,
	variant,
	className,
}: {
	children: React.ReactNode;
	href?: string;
	variant?: "primary" | "secondary";
	className?: string;
}) => {
	if (href) {
		return (
			<Link
				href={href}
				className={`button-${variant || "primary"} ${className || ""}`}
			>
				{children}
			</Link>
		);
	}

	return <button className="button-primary">{children}</button>;
};

export default LButton;

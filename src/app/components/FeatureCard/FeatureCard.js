"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

// Set hoverEffect to true for spotlight effect on card
const FeatureCard = ({ children, className, hoverEffect = false }) => {
	const mouseX = useMotionValue(50);
	const mouseY = useMotionValue(50);

	const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
		if (!hoverEffect) return;
		const { left, top, width, height } = currentTarget.getBoundingClientRect();

		mouseX.set(((clientX - left) / width) * 100);
		mouseY.set(((clientY - top) / height) * 100);
	};

	const spotlightBackground = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(var(--foreground-rgb), 0.03), transparent 75%)`;

	return (
		<div
			onMouseMove={handleMouseMove}
			className={`p-5 xl:p-10 border-y md:border group border-foreground/10 md:rounded-3xl md:shadow-lg relative overflow-hidden ${className}`}
		>
			{hoverEffect && (
				<motion.div
					className="absolute top-0 left-0 pointer-events-none w-full h-full opacity-0 group-hover:opacity-100 transition-opacity"
					style={{ backgroundImage: spotlightBackground }}
				/>
			)}
			{children}
		</div>
	);
};

export default FeatureCard;

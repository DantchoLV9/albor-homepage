"use client";

import React from "react";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";

const GradientBackgroundParagraph = ({ text }) => {
	const mouseX = useMotionValue(50);
	const mouseY = useMotionValue(50);
	const mouseXSpring = useSpring(mouseX);
	const mouseYSpring = useSpring(mouseY);

	const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
		const { left, top, width, height } = currentTarget.getBoundingClientRect();

		mouseX.set(((clientX - left) / width) * 100);
		mouseY.set(((clientY - top) / height) * 100);
	};

	const handleMouseLeave = () => {
		mouseX.set(50);
		mouseY.set(50);
	};

	const spotlightBackground = useMotionTemplate`radial-gradient(circle at ${mouseXSpring}% ${mouseYSpring}%, rgb(var(--foreground-rgb)), transparent 150%)`;

	return (
		<motion.p
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				backgroundImage: spotlightBackground,
				backgroundClip: "text",
			}}
			className="text-2xl bg-clip-text text-transparent cursor-default"
		>
			{text}
		</motion.p>
	);
};

export default GradientBackgroundParagraph;

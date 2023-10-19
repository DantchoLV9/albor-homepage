"use client";

import React, { useEffect } from "react";
import { useSpring, useAnimate } from "framer-motion";

const AnyTopic = () => {
	const [scope, animate] = useAnimate();
	useEffect(() => {
		if (scope.current) {
			animate(
				"#any-topic-animated-wrapper",
				{
					y: [
						"0rem",
						"-3.5rem",
						"-3.5rem", // 0.25
						"-7rem",
						"-7rem", // 0.5
						"-10.5rem",
						"-10.5rem", // 0.75
						"-14rem",
					],
				}, // -14rem
				{
					ease: "linear",
					duration: 10,
					repeat: Infinity,
					times: [0, 0.05, 0.25, 0.3, 0.5, 0.55, 0.75, 0.8],
				}
			);
		}
	}, []);
	return (
		<div
			className="w-full bg-foreground/10 rounded-2xl overflow-hidden px-5 text-xl lg:text-3xl leading-9"
			ref={scope}
		>
			<div
				id="any-topic-animated-wrapper"
				className="h-14 py-3 flex flex-col gap-5"
			>
				<p className="text-center">Resolution</p>
				<p className="text-center">Aspect Ratio</p>
				<p className="text-center">File Type</p>
				<p className="text-center">Topic</p>
				<p className="text-center">Resolution</p>
			</div>
		</div>
	);
};

export default AnyTopic;

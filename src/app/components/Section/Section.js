import React from "react";
import SectionPill from "./SectionPill";

const Section = ({
	children,
	pillText,
	fromColor,
	toColor,
	midColor,
	title,
	description,
}) => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="flex flex-col justify-center items-center w-1/2 gap-10">
				<SectionPill
					text={pillText}
					fromColor={fromColor}
					toColor={toColor}
					midColor={midColor}
				/>
				<h2 className="text-4xl font-bold">{title}</h2>
				<p className="text-3xl text-center mb-10">{description}</p>
			</div>
			{children}
		</div>
	);
};

export default Section;

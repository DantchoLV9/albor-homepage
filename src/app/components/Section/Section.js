import React from "react";
import SectionPill from "./SectionPill";

const Section = ({
	children,
	pillText,
	fromColor,
	toColor,
	title,
	description,
}) => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="flex flex-col justify-center items-center w-1/2 gap-10">
				<SectionPill text={pillText} fromColor={fromColor} toColor={toColor} />
				<h2 className="text-4xl font-bold">{title}</h2>
				<p className="text-3xl text-center">{description}</p>
			</div>
			{children}
		</div>
	);
};

export default Section;

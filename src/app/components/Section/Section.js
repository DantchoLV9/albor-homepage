import React from "react";
import SectionPill from "./SectionPill";

const Section = ({
	id,
	children,
	pillText,
	fromColor,
	toColor,
	midColor,
	title,
	description,
}) => {
	return (
		<div id={id} className="flex flex-col justify-center items-center">
			<div className="flex flex-col justify-center items-center w-4/5 xl:w-3/5 2xl:w-1/2 gap-5 lg:gap-10">
				<SectionPill
					text={pillText}
					fromColor={fromColor}
					toColor={toColor}
					midColor={midColor}
				/>
				<h2 className="text-3xl 2xl:text-4xl font-bold">{title}</h2>
				<p className="text-xl lg:text-2xl 2xl:text-3xl text-center mb-10">
					{description}
				</p>
			</div>
			{children}
		</div>
	);
};

export default Section;

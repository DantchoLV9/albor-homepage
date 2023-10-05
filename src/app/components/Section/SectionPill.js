import React from "react";

const SectionPill = ({ text, fromColor, toColor, midColor }) => {
	return (
		<div
			className={`bg-gradient-to-r py-2 px-8 rounded-full relative mt-60 from-${fromColor} to-${toColor} before:content-[""] before:absolute before:h-40 before:w-0.5 before:bg-gradient-to-b before:from-transparent before:to-${midColor} before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-full`}
		>
			<p className="font-bold text-background text-2xl">{text}</p>
		</div>
	);
};

export default SectionPill;

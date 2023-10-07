import React from "react";

const EarnStep = ({ title, description }) => {
	return (
		<div className="flex flex-col gap-4">
			<h4 className="font-semibold text-4xl">{title}</h4>
			<p className="text-2xl">{description}</p>
		</div>
	);
};

export default EarnStep;

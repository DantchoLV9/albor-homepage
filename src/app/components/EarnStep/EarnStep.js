import React from "react";

const EarnStep = ({ title, description }) => {
	return (
		<div className="flex flex-col gap-4">
			<h4 className="font-semibold text-3xl 2xl:text-4xl text-center md:text-left">
				{title}
			</h4>
			<p className="text-xl 2xl:text-2xl text-center md:text-left">
				{description}
			</p>
		</div>
	);
};

export default EarnStep;

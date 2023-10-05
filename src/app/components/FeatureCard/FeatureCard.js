import React from "react";

const FeatureCard = ({ children, className }) => {
	return (
		<div
			className={`p-10 border border-foreground/10 rounded-3xl shadow-lg relative overflow-hidden ${className}`}
		>
			{children}
		</div>
	);
};

export default FeatureCard;

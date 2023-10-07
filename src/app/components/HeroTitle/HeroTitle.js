import React from "react";

const HeroTitle = () => {
	return (
		<h1 className="text-9xl font-black flex gap-6 justify-center text-center">
			<a
				href="#exploreSection"
				className="bg-gradient-to-r hover:scale-105 transition-transform from-gradient1-from to-gradient1-to bg-clip-text text-transparent"
			>
				Explore
			</a>
			<a
				href="#expressSection"
				className="bg-gradient-to-r hover:scale-105 transition-transform from-gradient2-from to-gradient2-to bg-clip-text text-transparent"
			>
				Express
			</a>
			<a
				href="#earnSection"
				className="bg-gradient-to-r hover:scale-105 transition-transform from-gradient3-from to-gradient3-to bg-clip-text text-transparent"
			>
				Earn
			</a>
		</h1>
	);
};

export default HeroTitle;

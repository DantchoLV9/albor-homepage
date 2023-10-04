import React from "react";
import Logo from "./Logo/Logo";
import ThemeSelector from "./ThemeSelector/ThemeSelector";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="w-full flex justify-center items-center mt-20 border-t border-foreground/10 py-6 bg-background">
			<div className="w-3/4 flex justify-between items-center">
				<div className="flex justify-center items-center gap-2 text-2xl font-semibold">
					<Logo className="h-10" variant="full" />
					<span>&copy; {currentYear}</span>
				</div>
				<ThemeSelector />
			</div>
		</footer>
	);
};

export default Footer;

import React from "react";
import Logo from "./Logo/Logo";
import Link from "next/link";

// effect - used to set the background effect of the navbar
// blur - blurs out the background
// grain - blurs out the background and adds a grain effect on top
const Navbar = ({ effect = "blur" }) => {
	let style = {};
	if (effect === "grain") {
		style = {
			backgroundImage:
				"radial-gradient(rgba(0,0,0,0) 1px, rgb(var(--background-rgb)) 1px)",
			backgroundSize: "4px 4px",
		};
	}
	return (
		<navbar
			style={style}
			className={`w-full flex justify-center items-center border-b border-foreground/10 py-3 sticky top-0 z-30 bg-background/80 backdrop-filter backdrop-saturate-200 ${
				effect === "blur" && "backdrop-blur-md"
			} ${effect === "grain" && "backdrop-blur"}`}
		>
			<div className="w-3/4">
				<Link href="/">
					<Logo className="h-10" variant="full" />
				</Link>
			</div>
		</navbar>
	);
};

export default Navbar;

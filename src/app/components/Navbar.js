import React from "react";
import Logo from "./Logo/Logo";
import Link from "next/link";

const Navbar = () => {
	return (
		<navbar className="w-full flex justify-center items-center border-b py-3 sticky top-0 bg-background/80 backdrop-filter backdrop-saturate-200 backdrop-blur-md z-30">
			<div className="w-3/4">
				<Link href="/">
					<Logo className="h-10" variant="full" />
				</Link>
			</div>
		</navbar>
	);
};

export default Navbar;

import React from "react";
import LogoSVG from "./logoSvg";
import IconSvg from "./iconSvg";

// Use variant to choose between full and icon only logo
// full = full logo with icon and letters
// icon = icon only logo
const Logo = ({ className, variant = "full" }) => {
	return (
		<div className="flex justify-start items-end">
			{variant === "full" && <LogoSVG className={className} />}
			{variant === "icon" && <IconSvg className={className} />}
		</div>
	);
};

export default Logo;

"use client";

import React, { useState, useEffect } from "react";
import SystemIcon from "./SystemIcon";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import { useTheme } from "next-themes";

const ThemeSelector = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return (
			<div className="flex justify-center items-center gap-2">
				<div className="p-2">
					<SystemIcon className="h-6" />
				</div>
				<div className="p-2">
					<SunIcon className="h-6" />
				</div>
				<div className="p-2">
					<MoonIcon className="h-6" />
				</div>
			</div>
		);
	}
	return (
		<div className="flex justify-center items-center gap-2">
			<button
				className={`
				p-2 rounded-full
				${theme === "system" ? "bg-foreground/10" : ""}
				`}
				onClick={() => setTheme("system")}
			>
				<SystemIcon className="h-6" />
			</button>
			<button
				className={`
				p-2 rounded-full
				${theme === "light" ? "bg-foreground/10" : ""}
				`}
				onClick={() => setTheme("light")}
			>
				<SunIcon className="h-6" />
			</button>
			<button
				className={`
				p-2 rounded-full
				${theme === "dark" ? "bg-foreground/10" : ""}
				`}
				onClick={() => setTheme("dark")}
			>
				<MoonIcon className="h-6" />
			</button>
		</div>
	);
};

export default ThemeSelector;

"use client";

import React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

const ThemeProvider = ({ children }) => {
	return <NextThemeProvider>{children}</NextThemeProvider>;
};

export default ThemeProvider;

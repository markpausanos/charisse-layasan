"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeButton() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<button
			aria-label="Toggle Dark Mode"
			type="button"
			className="flex items-center justify-center rounded-lg p-2 transition-d"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			{theme === "dark" ? (
				<SunIcon className="w-6 h-6" />
			) : (
				<MoonIcon className="w-6 h-6" />
			)}
		</button>
	);
}

import NavBar from "@/components/NavBar";
import AboutMe from "@/sections/AboutMe";
import Title from "@/sections/Title";
import React from "react";

export default function Main() {
	return (
		<div>
			<NavBar />
			<Title />
			<AboutMe />
		</div>
	);
}
